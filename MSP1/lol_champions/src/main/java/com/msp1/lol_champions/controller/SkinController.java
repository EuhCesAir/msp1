package com.msp1.lol_champions.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msp1.lol_champions.model.Skin;
import com.msp1.lol_champions.services.SkinService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/skins")
@CrossOrigin(origins = "http://localhost:3000")
public class SkinController {

    @Autowired
    SkinService skinService = new SkinService();

    @GetMapping("")
    public List<Skin> getAllSkins() {
        return skinService.getAllSkins();
    }

    @GetMapping("/{name}")
    public List<Skin> getChampionSkins(@PathVariable String name) {
        return skinService.getChampioSkins(name);
    }

    @PostMapping("/create")
    public Skin createSkin(@RequestBody Skin skin) {
        return skinService.createSkin(skin);
    }

    /*
     * @PostMapping("/creates")
     * public List<Skin> createSkin(@RequestBody List<Skin> skins) {
     * return skinService.createSkins(skins);
     * }
     */

    @PostMapping("/delete/{name}")
    public void deleteSkinById(@PathVariable String name) {
        skinService.deleteSkinById(name);
    }

}
