package com.Cra.ChildRescueAlert.services;

import com.Cra.ChildRescueAlert.models.Usuario;
import com.Cra.ChildRescueAlert.repositories.UsuarioRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UsuarioDetailsService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioDetailsService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    //Se chama loadByUsername pq é um metodo ja existe do UserDetails e nao pode mudar o nome do metodo
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println("Email encontrado: " + email);
       
        Usuario usuario = usuarioRepository.findByEmail(email)
                            .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));
       
        return User.builder()
                .username(usuario.getEmail())
                .password(usuario.getPassword())
                .roles("USER")
                .build();
    }
    
}
