package com.msp1.lol_champions.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msp1.lol_champions.model.Skin;
import com.msp1.lol_champions.repository.SkinRepository;

@Service
public class SkinService {

    @Autowired
    private SkinRepository skinRepository;

    public List<Skin> getAllSkins() {
        return skinRepository.findAll();
    }

    public List<Skin> getChampioSkins(String name) {
        return skinRepository.findChampionSkin(name);
    }

    public Skin createSkin(Skin skin) {
        return skinRepository.save(skin);
    }

    /*
     * public List<Skin> createSkins(List<Skin> skins) {
     * return skinRepository.saveAll(skins);
     * }
     */

    public void deleteSkinById(Long id) {
        skinRepository.deleteById(id);
    }

}
