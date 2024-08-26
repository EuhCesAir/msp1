package com.msp1.lol_champions.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msp1.lol_champions.model.Champion;
import com.msp1.lol_champions.repository.ChampionRepository;

@Service
public class ChampionService {

    @Autowired
    private ChampionRepository championRepository;

    public List<Champion> getAllChampions() {
        return championRepository.findAll();
    }

    public Optional<Champion> getChampionById(Long id) {
        return championRepository.findById(id);
    }

    public Champion createChampion(Champion champion) {
        return championRepository.save(champion);
    }

    public void deleteChampionById(Long id) {
        championRepository.deleteById(id);
    }

}
