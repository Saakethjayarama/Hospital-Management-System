<?php

class User {

  private $id = null;
  private $name = null;
  private $email = null;
  private $phoneNumber = null;
  private $password = null;
  private $userType = null;

  function __construct($id, $name, $email, $phoneNumber, $password, $userType) {
    $this->id = $id;
    $this->name = $name;
    $this->email = $email;
    $this->phoneNumber = $phoneNumber;
    $this->password = $password;
    $this->userType = $userType;
  }

  function getId() {
    return $this->id;
  }

  function setId($id) {
    $this->id = $id;
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

  function getUserType() {
    return $this->userType;
  }

  function setUserType($userType) {
    $this->userType = $userType;
  }

  function toArray() {
    return array(
      "id" => $this->id,
      "name" => $this->name,
      "email" => $this->email,
      "phoneNumber" => $this->phoneNumber,
      "password" => $this->password,
      "userType" => $this->userType
    );
  }
}


?>