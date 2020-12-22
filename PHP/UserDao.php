<?php

  interface UserDao {
    function addUser($user);
    function getUserById($id);
    function getUserByType($userType);
    function deleteUser($id);
  }
  
?>