package com.Cra.ChildRescueAlert.controller;

import com.Cra.ChildRescueAlert.Dtos.EditarUsuarioRequest;
import com.Cra.ChildRescueAlert.Dtos.EditarUsuarioResponse;
import com.Cra.ChildRescueAlert.models.Postagem;
import com.Cra.ChildRescueAlert.models.Usuario;
import com.Cra.ChildRescueAlert.models.UsuarioPostagem;
import com.Cra.ChildRescueAlert.security.JwtUtil;
import com.Cra.ChildRescueAlert.services.PostagemService;
import com.Cra.ChildRescueAlert.services.UsuarioService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/postagem")

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class PostagemController {
    private final PostagemService service;
    private final UsuarioService usuarioService;
    private final JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public ResponseEntity<List<Postagem>> findAllPostagem() {
        System.out.println(LocalDateTime.now());
        List<Postagem> postagems = service.findAll();
        return  ResponseEntity.ok(postagems);
    }
    @PostMapping
    public ResponseEntity<Postagem> savePostagem(@RequestHeader("Authorization") String token, @RequestBody @Valid Postagem postagem, HttpServletRequest request) {
        Usuario usuario = usuarioService.findUserByToken(token);
        System.out.println("Usuario pra colocar na postagem: " + usuario);
        postagem.setUsuarioPostagem(UsuarioPostagem.builder().nome(usuario.getUsername()).id(usuario.getId()).email(usuario.getEmail()).build());
        Postagem saved = service.save(postagem);
        return ResponseEntity.status(201).body(saved);
    }
    @PutMapping
    public EditarUsuarioResponse testar(@RequestHeader("Authorization")String token , @Valid @RequestBody EditarUsuarioRequest editarUsuarioRequest){
        System.out.println(editarUsuarioRequest);
        String cleanedToken = jwtUtil.cleanBearerFromJwt(token);
        Usuario userByToken = usuarioService.findUserByToken(cleanedToken);
        Usuario userReceived = Usuario.builder().id(userByToken.getId()).roles(userByToken.getRoles()).username(editarUsuarioRequest.getUsername()).telefone(editarUsuarioRequest.getTelefone()).password(editarUsuarioRequest.getPassword()).CPF(editarUsuarioRequest.getCpf()).email(editarUsuarioRequest.getEmail()).fotoPerfil(userByToken.getFotoPerfil()).build();
        if (userByToken.getId() != userReceived.getId()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Voce nao tem permissao para editar esse usuario");
        }
        Usuario userSaved = usuarioService.editar(userReceived);
        EditarUsuarioResponse usuarioResponse = EditarUsuarioResponse.builder().id(userSaved.getId()).email(userReceived.getEmail()).username(userReceived.getUsername()).build();
        return usuarioResponse;
    }


}
