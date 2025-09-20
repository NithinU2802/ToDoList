# Use OpenJDK 21 as base image
FROM eclipse-temurin:21-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the built JAR file
COPY target/*.jar app.jar

# Expose port 8080 (Spring Boot default)
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java","-jar","app.jar"]