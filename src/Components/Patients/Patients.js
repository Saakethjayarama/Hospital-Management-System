import React, { useState } from "react";
import "./Patients.css";
import { Table, Alert } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useEffect } from "react";
import AppointmentModal from "./AppointmentModal";

function Patients() {
  const [appointments, setAppointements] = useState([]);

  useEffect(() => {
    setAppointements([
      {
        id: 1,
        date: "12/08/2000",
        doctorId: 2,
        status: 1,
      },
      {
        id: 2,
        date: "28/08/2020",
        doctorId: 4,
        status: 2,
      },
      {
        id: 2,
        date: "28/08/2020",
        doctorId: 4,
        status: 3,
      },
    ]);
  }, []);

  const [show, setShow] = useState(false);
  const bookAnAppointment = (data) => {
    console.log(data);
  };

  return (
    <div className="Patients">
      <AppointmentModal
        show={show}
        onHide={() => setShow(false)}
        onSubmit={bookAnAppointment}
      />
      <h3>Patients</h3>
      <div className="addIcon">
        <Fab color="secondary" aria-label="add" onClick={() => setShow(true)}>
          <AddIcon />
        </Fab>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Appointment ID</th>
            <th>Appointment Date</th>
            <th>Appointment Doctor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.id}</td>
                <td>{value.date}</td>
                <td>{value.doctorId}</td>
                <td>{getStatus(value.status)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

const getStatus = (status) => {
  switch (status) {
    case 1:
      return <Alert variant={"success"}>Got Checked.</Alert>;
    case 2:
      return <Alert variant={"warning"}>Upcoming.</Alert>;
    case 3:
      return <Alert variant={"danger"}>Missed Appointment.</Alert>;
    default:
      return <Alert>Unknown Status</Alert>;
  }
};

export default Patients;
