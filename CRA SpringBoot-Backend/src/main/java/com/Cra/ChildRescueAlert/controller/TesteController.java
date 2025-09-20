package com.Cra.ChildRescueAlert.controller;


import com.Cra.ChildRescueAlert.repositories.UsuarioRepository;
import com.Cra.ChildRescueAlert.security.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class TesteController {
    private final JwtUtil jwtUtil;
    private final UsuarioRepository usuarioRepository;

    @PostMapping
    public ResponseEntity<?> pegarUsuarioLogado(HttpServletRequest httpServletRequest){
        return ResponseEntity.ok("Olá voce tem permissao de admin");
    }

}
