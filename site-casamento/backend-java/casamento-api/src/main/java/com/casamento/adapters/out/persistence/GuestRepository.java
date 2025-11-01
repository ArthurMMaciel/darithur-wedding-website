package com.casamento.adapters.out.persistence;

import com.casamento.domain.model.Guest;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;
import java.util.ArrayList;
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
    @Transactional
    @Query(nativeQuery = true,
            value = " UPDATE guest g " +
                    " SET confirmed = true " +
                    " WHERE g.id IN (:guestsToConfirmIds) ")
    void updateGuestConfirmedById(@Param("guestsToConfirmIds") ArrayList<BigInteger> guestsToConfirmIds);

    @Query(nativeQuery = true,
            value = " SELECT g.name " +
                    " FROM guest g " +
                    " WHERE g.id IN (:guestsToConfirmIds) ")
    List<String> getGuestNameById(@Param("guestsToConfirmIds") ArrayList<BigInteger> guestsToConfirmIds);
}
