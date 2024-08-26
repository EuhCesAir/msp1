package com.msp1.lol_champions.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msp1.lol_champions.model.Role;
import com.msp1.lol_champions.repository.RoleRepository;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    public Role createRole(Role role) {
        return roleRepository.save(role);
    }

    public List<Role> createRoles(List<Role> roles) {
        return roleRepository.saveAll(roles);
    }

    public void deleteRoleById(Long id) {
        roleRepository.deleteById(id);
    }

}
