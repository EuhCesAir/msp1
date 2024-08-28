package com.msp1.lol_champions.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;

import com.msp1.lol_champions.model.Skin;

public interface SkinRepository extends ListCrudRepository<Skin, Long> {
    @Query("select s from Skin s join s.champion c where c.name = :name")
    List<Skin> findChampionSkin(String name);
}
