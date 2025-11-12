package com.casamento.adapters.out.persistence;

import com.casamento.domain.model.Guest;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
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

    @Query(nativeQuery = true,
            value = " SELECT * FROM guest g " +
                    " WHERE g.confirmed IS FALSE " +
                    " AND LOWER(g.name) LIKE LOWER(CONCAT('%', :namePart, '%'))")
    List<Guest> searchAllNonConfirmedGuestsByName(@Param("namePart") String namePart);

    @Modifying
    @Query("UPDATE Guest g SET g.confirmed = true WHERE g.id IN :ids")
    void updateGuestConfirmedById(@Param("ids") List<Long> ids);

    @Query("SELECT g.name FROM Guest g WHERE g.id IN :ids")
    List<String> getGuestNameById(@Param("ids") List<Long> ids);
}
