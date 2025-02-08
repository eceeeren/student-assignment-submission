package com.example.student_assignment_submission.controller;

import com.example.student_assignment_submission.model.Student;
import com.example.student_assignment_submission.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for managing student operations.
 * Provides endpoints for student registration and retrieval.
 * - Comment created by Claude (Anthropic), edited by the author
 */
@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    /**
     * Retrieves all students in the system.
     *
     * @return ResponseEntity containing list of all students
     */
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    /**
     * Retrieves a specific student by their ID.
     *
     * @param id the ID of the student to retrieve
     * @return ResponseEntity containing the requested student
     * @throws RuntimeException if student is not found
     */
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        return ResponseEntity.ok(studentService.getStudentById(id));
    }

    /**
     * Registers a new student in the system.
     *
     * @param student the student details for registration
     * @return ResponseEntity containing the registered student
     * @throws RuntimeException if email already exists
     */
    @PostMapping
    public ResponseEntity<Student> registerStudent(@RequestBody Student student) {
        return ResponseEntity.ok(studentService.registerStudent(student));
    }
}