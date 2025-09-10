package com.Cra.ChildRescueAlert.services;

import java.util.Optional;


import com.Cra.ChildRescueAlert.models.Usuario;
import com.Cra.ChildRescueAlert.repositories.UsuarioRepository;
import com.Cra.ChildRescueAlert.security.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public Usuario registrarUsuario(Usuario request) {
        String senhaCriptografada = passwordEncoder.encode(request.getPassword());
        Usuario usuario = Usuario.builder()
                .username(request.getUsername())
                .password(senhaCriptografada)
                .CPF(request.getCPF())
                .email(request.getEmail())
                .telefone(request.getTelefone())
                .fotoPerfil(request.getFotoPerfil())
                .build();
        return usuarioRepository.save(usuario);
    }
    public Usuario findUserByToken(HttpServletRequest request) {
        String token = JwtUtil.extractToken(request);
        String email = JwtUtil.extractEmail(token);
        Usuario usuario = this.buscarPorEmail(email).get();
        return usuario;
    }

    public Optional<Usuario> buscarPorUsername(String username) {
        return usuarioRepository.findByUsername(username);
    }
    public Optional<Usuario> buscarPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }
    
}
