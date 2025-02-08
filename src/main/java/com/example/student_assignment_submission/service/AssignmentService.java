package com.example.student_assignment_submission.service;

import com.example.student_assignment_submission.model.Assignment;
import com.example.student_assignment_submission.model.Student;
import com.example.student_assignment_submission.repository.AssignmentRepository;
import com.example.student_assignment_submission.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service class handling business logic for assignment operations.
 * Provides functionality for managing and retrieving assignments.
 * - Comment created by Claude (Anthropic), edited by the author
 */
@Service
public class AssignmentService {
    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private StudentRepository studentRepository;

    /**
     * Retrieves all assignments from the system.
     *
     * @return list of all assignments
     */
    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }

    /**
     * Retrieves a specific assignment by its ID.
     *
     * @param id the ID of the assignment to retrieve
     * @return the found assignment
     * @throws RuntimeException if no assignment is found with the given ID
     */
    public Assignment getAssignmentById(Long id) {
        return assignmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Assignment not found with id: " + id));
    }

    /**
     * Submits a new assignment for a specific student.
     *
     * @param assignment the assignment to be submitted
     * @param studentId the ID of the student submitting the assignment
     * @return the saved assignment
     * @throws RuntimeException if no student is found with the given ID
     */
    public Assignment submitAssignment(Assignment assignment, Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + studentId));
        assignment.setSubmittedBy(student);
        return assignmentRepository.save(assignment);
    }
}