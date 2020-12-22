<?php
  interface AppointmentDao {
    function addAppointment($appointment);
    function changeStatus($id, $status);
    function getAppointmentsByUserId($userId);
    function getAppointmentsByDoctorIdOfCurrentDay($doctorId);
  }
?>