package com.Cra.ChildRescueAlert.repositories;

import com.Cra.ChildRescueAlert.models.Postagem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostagemRepository extends MongoRepository<Postagem, String> {
}
