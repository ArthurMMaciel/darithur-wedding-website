package com.casamento.domain.model;

import jakarta.persistence.*;

@Entity
@Table(name = "image_storage")
public class ImageStorage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image_url", nullable = false)
    private String imageUrl;
}
