package com.Cra.ChildRescueAlert.exceptions;

public class UsernameJáExisteException extends RuntimeException {
  public UsernameJáExisteException() {
    super("Username já existe");
  }

  public UsernameJáExisteException(String message) {
        super(message);
    }
}
