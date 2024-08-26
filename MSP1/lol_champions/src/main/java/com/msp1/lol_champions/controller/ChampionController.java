package com.msp1.lol_champions.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msp1.lol_champions.model.Champion;
import com.msp1.lol_champions.services.ChampionService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/champions")
@CrossOrigin(origins = "http://localhost:3000")
public class ChampionController {

    @Autowired
    ChampionService championService = new ChampionService();

    @GetMapping("")
    public List<Champion> getAllChampions() {
        return championService.getAllChampions();
    }

    @GetMapping("/{id}")
    public Optional<Champion> getChampionById(@PathVariable Long id) {
        return championService.getChampionById(id);
    }

    @PostMapping("/create")
    public Champion creatChampion(@RequestBody Champion champion) {
        return championService.createChampion(champion);
    }

    @PostMapping("/delete/{id}")
    public void deleteChampionById(@PathVariable Long id) {
        championService.deleteChampionById(id);
    }

    @PutMapping("/update/{id}")
    public Champion updateChampion(@PathVariable Long id, @RequestBody Champion champion) {
        // TODO: process PUT request

        return champion;
    }

}
