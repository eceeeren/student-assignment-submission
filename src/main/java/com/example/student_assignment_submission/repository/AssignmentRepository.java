package com.example.student_assignment_submission.repository;

import com.example.student_assignment_submission.model.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
}
