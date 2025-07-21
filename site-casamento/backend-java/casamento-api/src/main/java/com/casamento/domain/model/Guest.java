package com.casamento.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "guest")
public class Guest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "confirmed")
    private Boolean confirmed = false;

    @Column(name = "group_code")
    private String groupCode;

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }
}
