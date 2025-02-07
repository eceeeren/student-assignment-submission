package com.example.student_assignment_submission.repository;

import com.example.student_assignment_submission.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

    boolean existsByEmail(String email);

}
