package com.casamento.adapters.out.persistence.projection;

import java.math.BigDecimal;

public interface GiftWithImageView {
    Long getId();
    String getTitle();
    String getDescription();
    BigDecimal getSaleValue();
    String getImageUrl();
}
