package com.Cra.ChildRescueAlert.services;

import com.Cra.ChildRescueAlert.models.Postagem;
import com.Cra.ChildRescueAlert.repositories.PostagemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostagemService {
    private final PostagemRepository postagemRepository;

    public List<Postagem> findAll() {
        return postagemRepository.findAll();
    }
    public Postagem findById(String id) {
        return postagemRepository.findById(id).orElse(null);
    }
    public Postagem save(Postagem postagem) {
        return postagemRepository.save(postagem);
    }
    public void delete(Postagem postagem) {
        postagemRepository.delete(postagem);
    }
}
