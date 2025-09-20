package com.Cra.ChildRescueAlert.services;

import java.util.Optional;


import com.Cra.ChildRescueAlert.exceptions.CredenciaisInvalidasException;
import com.Cra.ChildRescueAlert.models.Usuario;
import com.Cra.ChildRescueAlert.repositories.UsuarioRepository;
import com.Cra.ChildRescueAlert.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;


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
    public Usuario editar(Usuario request) {
        String senhaCriptografada = passwordEncoder.encode(request.getPassword());
        Usuario usuario = Usuario.builder()
                .id(request.getId())
                .username(request.getUsername())
                .password(senhaCriptografada)
                .CPF(request.getCPF())
                .email(request.getEmail())
                .telefone(request.getTelefone())
                .fotoPerfil(request.getFotoPerfil())
                .roles(request.getRoles())
                .build();
        return usuarioRepository.save(usuario);
    }
    public Usuario findUserByToken(String token) {
        String email = jwtUtil.getUsernameFromToken(token);
        Usuario usuario  = usuarioRepository.findByEmail(email).orElseThrow(() -> new CredenciaisInvalidasException("Usuario nao encontrado"));

        return usuario;
    }

    public Optional<Usuario> buscarPorUsername(String username) {
        return usuarioRepository.findByUsername(username);
    }
    public Optional<Usuario> buscarPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }
    
}
