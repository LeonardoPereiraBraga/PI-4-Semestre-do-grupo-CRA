package com.Cra.ChildRescueAlert.models;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Document(collection = "postagens")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Postagem {
    @Id
    private String id;
    @NotBlank(message = "Nome Obrigatorio")
    @Size(min = 4)
    @NotEmpty
    private String nome;
    private Integer idade;
    @NotBlank(message = "Localidade Obrigatoria")
    private String ultimaLocalidade;
    private String fotoPerfil;
    private String informacoesAdicionais;
    private LocalDate data;
    private String status;
    private Usuario usuarioPostagem;
    
}
