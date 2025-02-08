package com.example.student_assignment_submission.dto;

/**
 * Data Transfer Object (DTO) for assignment submission requests,
 * created in order to process Submission creation request correctly.
 *
 * - Comment created by Claude (Anthropic), edited by the author
 */
public class AssignmentSubmissionRequest {
    private String title;
    private String description;
    private Long studentId;

    public AssignmentSubmissionRequest() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }
}

