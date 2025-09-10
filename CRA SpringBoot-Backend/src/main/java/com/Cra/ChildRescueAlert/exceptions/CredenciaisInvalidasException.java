package com.Cra.ChildRescueAlert.exceptions;

public class CredenciaisInvalidasException extends RuntimeException {
  public CredenciaisInvalidasException() {
    super("Credenciais invalidas");
  }

  public CredenciaisInvalidasException(String message) {
        super(message);
    }
}
