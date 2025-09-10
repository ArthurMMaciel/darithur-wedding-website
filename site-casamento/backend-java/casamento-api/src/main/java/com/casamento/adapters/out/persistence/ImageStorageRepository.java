package com.casamento.adapters.out.persistence;

import com.casamento.domain.model.ImageStorage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageStorageRepository extends JpaRepository<ImageStorage, Long> {
}
