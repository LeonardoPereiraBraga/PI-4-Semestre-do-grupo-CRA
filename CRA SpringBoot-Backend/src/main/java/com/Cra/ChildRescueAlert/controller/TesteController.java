package com.Cra.ChildRescueAlert.controller;


import com.Cra.ChildRescueAlert.models.Usuario;
import com.Cra.ChildRescueAlert.repositories.UsuarioRepository;
import com.Cra.ChildRescueAlert.security.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/teste")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class TesteController {
    private final JwtUtil jwtUtil;
    private final UsuarioRepository usuarioRepository;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public ResponseEntity<Usuario> pegarUsuarioLogado(HttpServletRequest httpServletRequest){
        String token = JwtUtil.extractToken(httpServletRequest);
        String email = JwtUtil.extractEmail(token);
        Usuario Usuario = usuarioRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return ResponseEntity.ok(Usuario);
    }

}
