package com.msp1.lol_champions.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msp1.lol_champions.model.Ability;
import com.msp1.lol_champions.repository.AbilityRepository;

@Service
public class AbilityService {

    @Autowired
    private AbilityRepository abilityRepository;

    public List<Ability> getAllAbilities() {
        return abilityRepository.findAll();
    }

    public Ability createAbility(Ability ability) {
        return abilityRepository.save(ability);
    }

    /*
     * public List<Ability> createAbilities(List<Ability> abilities) {
     * return abilityRepository.saveAll(abilities);
     * }
     */

    public void deleteAbilityById(Long id) {
        abilityRepository.deleteById(id);
    }

}
