package com.learn.ToDoList.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.ToDoList.dto.TaskDto;
import com.learn.ToDoList.entity.Status;
import com.learn.ToDoList.entity.Task;
import com.learn.ToDoList.exception.TaskNotFoundException;
import com.learn.ToDoList.repository.TaskRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    private TaskDto mapToDTO(Task task) {
        TaskDto taskDTO = new TaskDto();
        taskDTO.setId(task.getId());
        taskDTO.setTitle(task.getTitle());
        taskDTO.setDescription(task.getDescription());
        taskDTO.setStatus(task.getStatus().toString());
        taskDTO.setDueDate(task.getDueDate());
        taskDTO.setCreatedAt(task.getCreatedAt());
        taskDTO.setUpdatedAt(task.getUpdatedAt());
        return taskDTO;
    }

    private Task mapToEntity(TaskDto taskDTO) {
        Task task = new Task();
        task.setTitle(taskDTO.getTitle());
        task.setDescription(taskDTO.getDescription());
        task.setStatus(Status.valueOf(taskDTO.getStatus()));
        task.setDueDate(taskDTO.getDueDate());
        task.setCreatedAt(LocalDateTime.now());  
        task.setUpdatedAt(LocalDateTime.now());  
        return task;
    }

    public List<TaskDto> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public TaskDto getTaskById(int id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id " + id));
        return mapToDTO(task);
    }

    public TaskDto createTask(TaskDto taskDTO) {
        Task task = mapToEntity(taskDTO);
        Task createdTask = taskRepository.save(task);
        return mapToDTO(createdTask);
    }

    public TaskDto updateTask(int id, TaskDto updatedTaskDTO) {
        return taskRepository.findById(id).map(task -> {
            task.setTitle(updatedTaskDTO.getTitle());
            task.setDescription(updatedTaskDTO.getDescription());
            task.setStatus(Status.valueOf(updatedTaskDTO.getStatus()));
            task.setDueDate(updatedTaskDTO.getDueDate());
            task.setUpdatedAt(LocalDateTime.now());
            Task updatedTask = taskRepository.save(task);
            return mapToDTO(updatedTask);
        }).orElseThrow(() -> new TaskNotFoundException("Task not found with id " + id));
    }

    // Delete task
    public void deleteTask(int id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id " + id));
        taskRepository.delete(task);
    }
}

