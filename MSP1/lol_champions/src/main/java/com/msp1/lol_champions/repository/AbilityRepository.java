package com.msp1.lol_champions.repository;

import org.springframework.data.repository.ListCrudRepository;

import com.msp1.lol_champions.model.Ability;

public interface AbilityRepository extends ListCrudRepository<Ability, Long> {

}
