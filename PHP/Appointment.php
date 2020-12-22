<?php

  class Appointment {
    private $id;
    private $doctorId;
    private $patientId;
    private $appointmentDate;
    private $status;

    function __construct(
      $id,
      $doctorId,
      $patientId,
      $appointmentDate,
      $status
    ) {

      $this->id = $id;
      $this->doctorId = $doctorId;
      $this->patientId = $patientId;
      $this->appointmentDate = $appointmentDate;
      $this->status = $status;
    }

    function getId() {
      return $this->id;
    }
    function getDoctorId() {
      return $this->doctorId;
    }
    function getPatientId() {
      return $this->patientId;
    }
    function getAppointmentDate() {
      return $this->appointmentDate;
    }
    function getStatus() {
      return $this->status;
    }

    function setId($id) {
      $this->id = $id;
    }
    function setDoctorId($doctorId) {
      $this->doctorId = $doctorId;
    }
    function setPatientId($patientId) {
      $this->patientId = $patientId;
    }
    function setAppointmentDate($appointmentDate) {
      $this->appointmentDate = $appointmentDate;
    }
    function setStatus($status) {
      $this->status = $status;
    }

    function toArray() {
      return array(
        "id" => $this->id,
        "doctorId" => $this->doctorId,
        "patientId" => $this->patientId,
        "appointmentDate" => $this->appointmentDate,
        "status" => $this->status
      );
    }

  }

?>