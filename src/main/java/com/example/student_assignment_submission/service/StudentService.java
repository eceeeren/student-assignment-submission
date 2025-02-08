package com.example.student_assignment_submission.service;

import com.example.student_assignment_submission.model.Student;
import com.example.student_assignment_submission.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service class handling business logic for student operations.
 * Provides functionality for managing student registration and retrieval.
 * - Comment created by Claude (Anthropic), edited by the author
 */
@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    /**
     * Retrieves all students from the system.
     *
     * @return list of all students
     */
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    /**
     * Retrieves a specific student by their ID.
     *
     * @param id the ID of the student to retrieve
     * @return the found student
     * @throws RuntimeException if no student is found with the given ID
     */
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    /**
     * Registers a new student in the system.
     * Checks for email uniqueness before registration.
     *
     * @param student the student to be registered
     * @return the saved student
     * @throws RuntimeException if a student with the same email already exists
     */
    public Student registerStudent(Student student) {
        if (studentRepository.existsByEmail(student.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        return studentRepository.save(student);
    }
}