package com.Cra.ChildRescueAlert.models;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usuarios")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {
    @Valid

    @Id
    private String id;
    @NotBlank(message = "Username Obrigatorio")
    private String username;
    @NotBlank(message = "Senha obrigatoria")
    private String password;
    @NotBlank(message = "CPF OBRIGATORIO")
    @Size(min = 11, max = 11, message = "O Cpf deve ter 11 digitos")
    private String CPF;
    @NotBlank(message = "Telefone obrigatorio")
    @Size(min = 11, max = 11, message = "Digite um telefone válido")
    private String telefone;
    @NotBlank(message = "Email obrigatorio")
    @Email
    private String email;
    private String fotoPerfil;

    public Usuario(String username, String password, String CPF, String telefone, String email, String fotoPerfil) {
        this.username = username;
        this.password = password;
        this.CPF = CPF;
        this.telefone = telefone;
        this.email = email;
        this.fotoPerfil = fotoPerfil;
    }
}
