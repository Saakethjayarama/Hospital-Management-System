<?php

class Doctor {

  private $name = null;
  private $email = null;
  private $phoneNumber = null;
  private $password = null;

  function __construct($name, $email, $phoneNumber, $password) {
    $this->name = $name;
    $this->email = $email;
    $this->phoneNumber = $phoneNumber;
    $this->password = $password;
  }

  function getName() {
    return $this->name;
  }

  function setName($name) {
    $this->name = $name;
  }

  function getEmail() {
    return $this->email;
  }

  function setEmail($email) {
    $this->email = $email;
  }

  function getPhoneNumber() {
    return $this->phoneNumber;
  }

  function setPhoneNumber($phoneNumber) {
    $this->phoneNumber = $phoneNumber;
  }

  function getPassword() {
    return $this->password;
  }

  function setPassword($password) {
    $this->password = $password;
  }
}


?>