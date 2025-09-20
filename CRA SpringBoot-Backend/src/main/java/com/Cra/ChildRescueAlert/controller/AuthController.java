package com.Cra.ChildRescueAlert.controller;


import com.Cra.ChildRescueAlert.Dtos.JwtResponse;
import com.Cra.ChildRescueAlert.Dtos.LoginRequest;
import com.Cra.ChildRescueAlert.models.Usuario;
import com.Cra.ChildRescueAlert.security.JwtUtil;
import com.Cra.ChildRescueAlert.services.AuthService;
import com.Cra.ChildRescueAlert.services.UsuarioService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {

    private final UsuarioService usuarioService;
    private final AuthService authService;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            JwtResponse jwtResponse = authService.authenticate(loginRequest);
            return ResponseEntity.ok(jwtResponse);
        } catch (Exception e) {
            System.out.println(e.getClass());
            return ResponseEntity.badRequest().body(Map.of("status",404, "message", e.getMessage()));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody Usuario registerRequest) {
        try {
            String message = authService.registerUser(registerRequest);
            return ResponseEntity.ok(message);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/teste")
    public String retornarUser(@RequestHeader("Authorization") String token){
        String tokenValido = token.substring(7);
        System.out.println(tokenValido
        );
        return jwtUtil.getUsernameFromToken(tokenValido);
    }
    @CrossOrigin(origins = "http://localhost:5173") // Permite CORS apenas para esta rota
    @GetMapping("/dados")
    public ResponseEntity<Usuario> pegarUsuarioPeloToken(@RequestHeader("Authorization") String authorizationHeader) {
        // O token vem no formato "Bearer <TOKEN>"
        String token = authorizationHeader.replace("Bearer ", "");
        return ResponseEntity.ok(usuarioService.buscarPorEmail(jwtUtil.getUsernameFromToken(token)).orElseThrow(() -> new UsernameNotFoundException("Usertoken nao encontrado")));
    }


}
