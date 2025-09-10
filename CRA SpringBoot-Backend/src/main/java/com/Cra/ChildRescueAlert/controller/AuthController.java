package com.Cra.ChildRescueAlert.controller;


import com.Cra.ChildRescueAlert.exceptions.CredenciaisInvalidasException;
import com.Cra.ChildRescueAlert.exceptions.UsernameJáExisteException;
import com.Cra.ChildRescueAlert.models.Usuario;
import com.Cra.ChildRescueAlert.security.JwtUtil;
import com.Cra.ChildRescueAlert.services.UsuarioService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {

    private final UsuarioService usuarioService;
    private final BCryptPasswordEncoder passwordEncoder;

    //CrossOrigin pra funcionar o front end
    @CrossOrigin(origins = "http://localhost:5173") // Permite CORS apenas para esta rota
    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody Usuario request) {
        if (!usuarioService.buscarPorEmail(request.getEmail()).isEmpty()){
            throw new UsernameJáExisteException("Email já existente");
        }
        Usuario usuario = usuarioService.registrarUsuario(request);
        return ResponseEntity.ok(usuario);
    }

    @CrossOrigin(origins = "http://localhost:5173") // Permite CORS apenas para esta rota
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        Optional<Usuario> usuario = usuarioService.buscarPorEmail(request.get("email"));
        if (usuario.isPresent() && passwordEncoder.matches(request.get("password"), usuario.get().getPassword())) {
            String token = JwtUtil.generateToken(usuario.get().getEmail());
            return ResponseEntity.ok(Map.of("token", token));
        }
        throw new CredenciaisInvalidasException("Credenciais Incorretas");
    }
    @CrossOrigin(origins = "http://localhost:5173") // Permite CORS apenas para esta rota
    @GetMapping("/dados")
    public ResponseEntity<Usuario> pegarUsuarioPeloToken(@RequestHeader("Authorization") String authorizationHeader) {
        // O token vem no formato "Bearer <TOKEN>"
        String token = authorizationHeader.replace("Bearer ", "");
        return ResponseEntity.ok(usuarioService.buscarPorEmail(JwtUtil.extractEmail(token)).orElseThrow(() -> new UsernameNotFoundException("Usertoken nao encontrado")));
    }


}
