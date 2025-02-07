package com.example.student_assignment_submission.service;

import com.example.student_assignment_submission.model.Assignment;
import com.example.student_assignment_submission.model.Student;
import com.example.student_assignment_submission.repository.AssignmentRepository;
import com.example.student_assignment_submission.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentService {
    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private StudentRepository studentRepository;

    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }

    public Assignment getAssignmentById(Long id) {
        return assignmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Assignment not found with id: " + id));
    }

    public Assignment submitAssignment(Assignment assignment, Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + studentId));
        assignment.setSubmittedBy(student);
        return assignmentRepository.save(assignment);
    }
}