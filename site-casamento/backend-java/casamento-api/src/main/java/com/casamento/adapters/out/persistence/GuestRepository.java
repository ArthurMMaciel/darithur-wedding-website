package com.casamento.adapters.out.persistence;

import com.casamento.domain.model.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GuestRepository extends JpaRepository<Guest, Long> {

    @Query(nativeQuery = true,
            value = " SELECT * FROM guest g " +
                    " WHERE g.confirmed IS FALSE " +
                    " AND g.group_code = :groupCode ")
    List<Guest> findAllNonConfirmedGuestsByGroupCode(@Param("groupCode") String groupCode);

    @Query(nativeQuery = true,
    value = " SELECT * FROM guest g " +
            " WHERE g.confirmed IS FALSE ")
    List<Guest> getAllNonConfirmedGuests();
}
