package com.example.student_assignment_submission;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.example.student_assignment_submission.repository")
public class StudentAssignmentSubmissionApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentAssignmentSubmissionApplication.class, args);
	}

}
