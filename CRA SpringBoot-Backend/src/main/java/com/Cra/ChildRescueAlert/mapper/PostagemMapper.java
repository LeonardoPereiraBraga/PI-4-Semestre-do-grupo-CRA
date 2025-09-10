package com.Cra.ChildRescueAlert.mapper;

import com.Cra.ChildRescueAlert.models.Postagem;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PostagemMapper {
    Postagem toPostagem(Postagem postagem);
}
