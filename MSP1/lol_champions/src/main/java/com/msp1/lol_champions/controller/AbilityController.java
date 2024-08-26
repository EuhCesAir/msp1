package com.msp1.lol_champions.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msp1.lol_champions.model.Ability;
import com.msp1.lol_champions.services.AbilityService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/abilities")
@CrossOrigin(origins = "http://localhost:3000")
public class AbilityController {

    @Autowired
    AbilityService abilityService = new AbilityService();

    @GetMapping("")
    public List<Ability> getAllAbilities() {
        return abilityService.getAllAbilities();
    }

    @PostMapping("/create")
    public Ability createAbility(@RequestBody Ability ability) {
        return abilityService.createAbility(ability);
    }

    /*
     * @PostMapping("/creates")
     * public List<Ability> createAbilities(@RequestBody List<Ability> abilities) {
     * return abilityService.createAbilities(abilities);
     * }
     */

    @PostMapping("/delete/{id}")
    public void deleteAbilityById(@PathVariable Long id) {
        abilityService.deleteAbilityById(id);
    }

}
