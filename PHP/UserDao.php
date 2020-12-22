<?php

  interface UserDao {
    function addUser($user);
    function getUserByType($userType);
    function deleteUser($id);
  }
  
?>