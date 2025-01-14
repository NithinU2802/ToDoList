package com.learn.ToDoList.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class TaskDto {
	
	@NotNull(message = "ID cannot be null")
	private int id;
	
	@NotNull(message = "Title cannot be null")
    @Pattern(regexp = "^[a-zA-Z0-9\\s]{1,255}$", message = "Title must be alphanumeric and between 1 and 255 characters")
    private String title;
	
	@Pattern(regexp = "^.{0,1000}$", message = "Description must be between 0 and 1000 characters")
    private String description;
	
	@NotNull(message = "Status cannot be null")
    @Pattern(regexp = "^(PENDING|COMPLETED)$", message = "Status must be either 'PENDING' or 'COMPLETED'")
    private String status;
	
    private LocalDate dueDate;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
