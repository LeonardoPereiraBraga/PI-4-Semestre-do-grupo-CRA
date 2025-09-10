package com.Cra.ChildRescueAlert.controller;

import com.Cra.ChildRescueAlert.models.Postagem;
import com.Cra.ChildRescueAlert.models.Usuario;
import com.Cra.ChildRescueAlert.security.JwtUtil;
import com.Cra.ChildRescueAlert.services.PostagemService;
import com.Cra.ChildRescueAlert.services.UsuarioService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("postagem")

@RequiredArgsConstructor
public class PostagemController {
    private final PostagemService service;
    private final UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Postagem>> findAllPostagem() {
        System.out.println(LocalDateTime.now());
        List<Postagem> postagems = service.findAll();
        return  ResponseEntity.ok(postagems);
    }
    @PostMapping
    public ResponseEntity<Postagem> savePostagem(@RequestBody @Valid Postagem postagem, HttpServletRequest request) {
        Usuario usuario = usuarioService.findUserByToken(request);
        postagem.setUsuarioPostagem(usuario);
        Postagem saved = service.save(postagem);
        return ResponseEntity.status(201).body(saved);
    }

}
