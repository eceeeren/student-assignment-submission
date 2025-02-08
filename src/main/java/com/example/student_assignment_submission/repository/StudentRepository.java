package com.example.student_assignment_submission.repository;

import com.example.student_assignment_submission.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for Student entity.
 * Provides CRUD operations and data access functionality for students.
 * - Comment created by Claude (Anthropic), edited by the author
 */
public interface StudentRepository extends JpaRepository<Student, Long> {

    /**
     * Checks if a student with the given email exists.
     *
     * @param email the email to check
     * @return true if a student with the email exists, false otherwise
     */
    boolean existsByEmail(String email);

}
