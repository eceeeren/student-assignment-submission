package com.example.student_assignment_submission.controller;

import com.example.student_assignment_submission.dto.AssignmentSubmissionRequest;
import com.example.student_assignment_submission.model.Assignment;
import com.example.student_assignment_submission.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for managing assignment operations.
 * Provides endpoints for submitting and retrieving assignments.
 * - Comment created by Claude (Anthropic), edited by the author
 */
@RestController
@RequestMapping("/assignments")
public class AssignmentController {
    @Autowired
    private AssignmentService assignmentService;

    /**
     * Retrieves all assignments in the system.
     *
     * @return ResponseEntity containing list of all assignments
     */
    @GetMapping
    public ResponseEntity<List<Assignment>> getAllAssignments() {
        return ResponseEntity.ok(assignmentService.getAllAssignments());
    }

    /**
     * Retrieves a specific assignment by its ID.
     *
     * @param id the ID of the assignment to retrieve
     * @return ResponseEntity containing the requested assignment
     * @throws RuntimeException if assignment is not found
     */
    @GetMapping("/{id}")
    public ResponseEntity<Assignment> getAssignmentById(@PathVariable Long id) {
        return ResponseEntity.ok(assignmentService.getAssignmentById(id));
    }

    /**
     * Submits a new assignment for a student.
     *
     * @param request DTO containing assignment details and student ID
     * @return ResponseEntity containing the created assignment
     * @throws RuntimeException if student is not found
     */
    @PostMapping
    public ResponseEntity<Assignment> submitAssignment(@RequestBody AssignmentSubmissionRequest request) {
        Assignment assignment = new Assignment();
        assignment.setTitle(request.getTitle());
        assignment.setDescription(request.getDescription());
        return ResponseEntity.ok(assignmentService.submitAssignment(assignment, request.getStudentId()));
    }
}