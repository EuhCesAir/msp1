package com.msp1.lol_champions.repository;

import org.springframework.data.repository.ListCrudRepository;

import com.msp1.lol_champions.model.Champion;

public interface ChampionRepository extends ListCrudRepository<Champion, Long> {
    Champion findChampionByName(String name);
}
