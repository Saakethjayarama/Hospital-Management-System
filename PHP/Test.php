<?php

  include_once 'User.php';
  include_once 'UserDao.php';
  include_once 'UserDaoImpl.php';


  $udi = new UserDaoImpl();
  // $udi->addUser(new User(null, 'Saaketh', 'saakethaj@gmail.com', '9663971485', 'Saaketh', 1));
  // echo 'Done';

  // $users = $udi->getUserByType(1);
  // print_r($users);

  $udi->deleteUser(4)
?>