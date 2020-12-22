<?php
  include_once 'Appointment.php';
  include_once 'AppointmentDao.php';
  include_once 'AppointmentDaoImpl.php';
  include_once 'JdbcUtil.php';

  class AppointmentDaoImpl implements AppointmentDao {
    function addAppointment($appointment) {
      $connection = JdbcUtil::getConnection();

      $doctorId = $appointment->getDoctorId();
      $patientId = $appointment->getPatientId();
      $appointmentDate = $appointment->getAppointmentDate();
      $status = $appointment->getStatus();

      $sql = 'insert into appointments(doctor_id, patient_id, appointment_date, status) values (?, ?, ?, ?)';


      $statement = $connection->prepare($sql);
      $statement->bind_param('iisi', $doctorId, $patientId, $appointmentDate, $status);

      $n = null;
      if($statement->execute()) {
        $n = $connection->insert_id;
      }

      $connection->close();
      return $n;

    }
    function changeStatus($id, $status) {
      $connection = JdbcUtil::getConnection();
      $sql = 'update appointments set status = ? where id = ?';

      $statement = $connection->prepare($sql);
      $statement->bind_param(
        'ii', $status, $id
      );

      $statement->execute();
      $connection->close();

    }

    function getAppointmentsByUserId($userId) {
      $connection = JdbcUtil::getConnection();
      $sql = 'SELECT * from appointments WHERE patient_id = ?';

      $statement = $connection->prepare($sql);
      $statement->bind_param('i', $userId);

      $appointments = [];

      if($statement->execute()) {
        $statement->bind_result($id, $doctorId, $patientId, $appointmentDate, $status);
        while($statement->fetch()) {
          $appointments[] = new Appointment($id, $doctorId, $patientId, $appointmentDate, $status);
        }
      }

      $connection->close();
      return $appointments;

    }
    function getAppointmentsByDoctorIdOfCurrentDay($doctorId) {
      $connection = JdbcUtil::getConnection();

      $today = new DateTime();
      $start =  $today->format('Y-m-d').':00:00:00';
      $end =  $today->format('Y-m-d').':23:59:59';


      $sql = 'select * from appointments where doctor_id = ?';

      $statement = $connection->prepare($sql);
      $statement->bind_param('i', $doctorId);

      $appointments = [];

      if($statement->execute()) {
        $statement->bind_result($id, $doctorId, $patientId, $appointmentDate, $status);
        while($statement->fetch()) {
          $appointments[] = new Appointment($id, $doctorId, $patientId, $appointmentDate, $status);
        }
      }

      $connection->close();
      return $appointments;

    }
  }

?>