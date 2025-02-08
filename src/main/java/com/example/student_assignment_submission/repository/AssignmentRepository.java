package com.example.student_assignment_submission.repository;

import com.example.student_assignment_submission.model.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for Assignment entity.
 * Provides CRUD operations and data access functionality for assignments.
 * - Comment created by Claude (Anthropic), edited by the author
 */
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
