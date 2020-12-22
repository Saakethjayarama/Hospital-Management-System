<?php
  
  include_once 'User.php';
  include_once 'UserDao.php';
  include_once 'JdbcUtil.php';

  class UserDaoImpl implements UserDao {
    function addUser($user) {

      $name = $user->getName();
      $email = $user->getEmail();
      $phoneNumber = $user->getPhoneNumber();
      $password = $user->getPassword();
      $userType = $user->getUserType();

      $connection = JdbcUtil::getConnection();

      $sql = 'insert into users(name, email, phone_number, password, user_type) values (?,?,?,?, ?)';
      $statement = $connection->prepare($sql);

      $statement->bind_param('ssssi', $name, $email, $phoneNumber, $password, $userType);

      $n = null;
      if($statement->execute()) {
        $n = $connection->insert_id;
      }

      $connection->close();
      return $n;
    }
    
    function getUserByType($userType) {
      $connection = JdbcUtil::getConnection();

      $sql = 'select * from users where user_type = ?';
      $statement = $connection->prepare($sql);
      $statement->bind_param('i', $userType);

      $users = [];
      if($statement->execute()) {
        $statement->bind_result($id, $name, $email, $phoneNumber, $password, $userType);
        while($statement->fetch()) {
          $users[] = new User($id, $name, $email, $phoneNumber, $password, $userType);
        }
      }
      

      return $users;

    }
    
    function deleteUser($id) {
      $connection = JdbcUtil::getConnection();

      $sql = 'delete from users where id = ?';
      $statement = $connection->prepare($sql);
      $statement->bind_param('i', $id);
      $statement->execute();
    }
    
  }

?>