package com.example.student_assignment_submission.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * Represents an assignment submission in the system.
 * Each assignment is associated with a student and includes submission timestamp.
 * - Comment created by Claude (Anthropic), edited by the author
 */
@Entity
@Table(name = "assignments")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "description", length = 1000)
    private String description;

    /** Reference to the student who submitted this assignment */
    @ManyToOne()
    @JoinColumn(name = "student_id", nullable = false)
    private Student submittedBy;

    @Column(name = "submitted_at", nullable = false)
    private LocalDateTime submittedAt;

    /**
     * Default constructor that initializes submission timestamp to current time.
     */
    public Assignment() {
        this.submittedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Student getSubmittedBy() {
        return submittedBy;
    }

    public void setSubmittedBy(Student submittedBy) {
        this.submittedBy = submittedBy;
    }

    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(LocalDateTime submittedAt) {
        this.submittedAt = submittedAt;
    }
}