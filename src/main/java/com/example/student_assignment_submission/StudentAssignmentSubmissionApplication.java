package com.example.student_assignment_submission;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * ==========================================
 * Spring Boot Backend Service
 * ==========================================
 *
 * A Spring-based backend service for adding students and submission.
 *
 * Technical Stack:
 * - Spring Boot
 * - Hibernate & JPA
 * - H2 Database
 * - Maven
 *
 * - Comment created by Claude (Anthropic), edited by the author
 */

@SpringBootApplication
@EnableJpaRepositories("com.example.student_assignment_submission.repository")
public class StudentAssignmentSubmissionApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentAssignmentSubmissionApplication.class, args);
	}

}
