package com.casamento.adapters.in.rest.dto;

import com.casamento.adapters.out.persistence.projection.GiftWithImageView;

import java.math.BigDecimal;

public class GiftDTO {
    Long id;
    String title;
    String description;
    BigDecimal saleValue;
    String imageUrl;

    public GiftDTO(GiftWithImageView giftWithImageView) {
        this.id = giftWithImageView.getId();
        this.description = giftWithImageView.getDescription();
        this.title = giftWithImageView.getTitle();
        this.saleValue = giftWithImageView.getSaleValue();
        this.imageUrl = giftWithImageView.getImageUrl();
    }
}
