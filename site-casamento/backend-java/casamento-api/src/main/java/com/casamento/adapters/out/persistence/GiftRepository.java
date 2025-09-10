package com.casamento.adapters.out.persistence;

import com.casamento.adapters.out.persistence.projection.GiftWithImageView;
import com.casamento.domain.model.Gift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GiftRepository extends JpaRepository<Gift, Long> {
    @Query(nativeQuery = true,
           value = " SELECT " +
                   "            g.id," +
                   "            g.title," +
                   "            g.description," +
                   "            g.sale_value AS saleValue," +
                   "            i.image_url  AS imageUrl" +
                   " FROM gift g " +
                   " JOIN image_storage i ON i.id = g.image_id ")
    List<GiftWithImageView> getAllGifts();
}
