# Student Assignment Submission System

A Spring Boot REST API that enables students to register and submit assignments, with support for access to view submissions.

## Tech Stack

- **Backend**: Java 21, Spring Boot 
- **Frontend**: React with Vite
- **Database**: H2 Database with JPA & Hibernate
- **Build Tool**: Maven

## Prerequisites

- Java 21 or higher
- Node and npm
- Postman (for API testing)

## Setup and Running

1. Clone the repository


2. Server Setup:
   ```bash
   # Start Spring Boot server
   mvn spring-boot:run
   ```
   
3. Client Setup:
   ```bash
   # Navigate to frontend directory
   cd src/main/frontend
   
   # Install frontend dependencies
   npm install
   
   # Start Vite dev server 
   npm run dev
   ```

The server will start on `http://localhost:8080` 

The user interface will start on `http://localhost:5173`

## Testing

Import Postman Collection:
1. Open Postman
2. Click Import -> File
3. Select `postman/student-assignment-submission-postman-collection.json`
4. Collection includes all API endpoints for testing


## Features

- Student registration with unique email validation
- Assignment submission with automatic timestamp
- View all submitted assignments
- Basic validation and error handling
- Database persistence using JPA/Hibernate

## API Endpoints

### Student APIs

#### Register Student
```
POST /students
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com"
}
```

#### Get Student by ID
```
GET /students/{id}
```

#### Get All Students
```
GET /students
```

### Assignment APIs

#### Submit Assignment
```
POST /assignments
Content-Type: application/json

{
    "title": "Java Basics",
    "description": "My first assignment",
    "studentId": 1
}
```

#### Get Assignment by ID
```
GET /assignments/{id}
```

#### Get All Assignments
```
GET /assignments
```

## Data Models

### Student
- id (Long, auto-generated)
- name (String, required)
- email (String, required, unique)

### Assignment
- id (Long, auto-generated)
- title (String, required)
- description (String)
- submittedBy (Student reference)
- submittedAt (LocalDateTime, auto-generated)

## Testing

Import the provided Postman collection for API testing. The collection includes all endpoints with example requests and responses.

## Error Handling

The API implements standard error handling for:
- Invalid input data
- Missing required fields
- Duplicate email registration
- Resource not found
- Server errors

## Development Notes

- Uses Spring Boot's built-in validation
- Implements proper separation of concerns (Controller, Service, Repository layers)
- Follows RESTful API best practices
- Database schema auto-generated through JPA
