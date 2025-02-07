package com.example.student_assignment_submission.controller;

import com.example.student_assignment_submission.dto.AssignmentSubmissionRequest;
import com.example.student_assignment_submission.model.Assignment;
import com.example.student_assignment_submission.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignments")
public class AssignmentController {
    @Autowired
    private AssignmentService assignmentService;

    @GetMapping
    public ResponseEntity<List<Assignment>> getAllAssignments() {
        return ResponseEntity.ok(assignmentService.getAllAssignments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Assignment> getAssignmentById(@PathVariable Long id) {
        return ResponseEntity.ok(assignmentService.getAssignmentById(id));
    }

    @PostMapping
    public ResponseEntity<Assignment> submitAssignment(@RequestBody AssignmentSubmissionRequest request) {
        Assignment assignment = new Assignment();
        assignment.setTitle(request.getTitle());
        assignment.setDescription(request.getDescription());
        return ResponseEntity.ok(assignmentService.submitAssignment(assignment, request.getStudentId()));
    }
}