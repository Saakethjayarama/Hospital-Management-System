import React, { useState } from "react";
import "./Patients.css";
import { Table, Alert } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useEffect } from "react";
import AppointmentModal from "./AppointmentModal";
import { useHistory } from "react-router-dom";
import { useStore } from "react-redux";

function Patients() {
  const store = useStore();
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usr = store.getState()?.user;
    setUser(usr);

    const subscription = store.subscribe(() => {
      const usr = store.getState()?.user;
      setUser(usr);
    });

    return () => {
      subscription();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const type = user.userType;
      if (type == 1) {
        history.push("/admin");
      } else if (type == 2) {
        history.push("/doctor");
      } else if (type == 3) {
        history.push("/patient");
      }
    }
  }, [user]);

  const [appointments, setAppointements] = useState([]);
  const [trigger, setTrigger] = useState();

  useEffect(() => {
    if (user?.id) {
      fetch(`http://localhost/appointments/byUser.php?id=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          const apps = [];
          data.forEach((val, index) => {
            let { id, appointmentDate, name, status } = val;
            appointmentDate = appointmentDate.split("-").reverse().join("-");
            apps.push({
              id,
              date: appointmentDate,
              doctorName: name,
              status,
            });
          });
          setAppointements(apps);
        });
    }
  }, [trigger, user?.id]);

  const [show, setShow] = useState(false);
  const bookAnAppointment = (data) => {
    const { doctorId, date } = data;

    if (date && doctorId) {
      fetch("http://localhost/appointments/add.php", {
        method: "POST",
        body: JSON.stringify({
          doctorId,
          appointmentDate: date,
          patientId: user.id,
        }),
      }).then(() => {
        setTrigger(Math.random());
      });
    }

    setShow(false);
  };

  return (
    <div className="Patients">
      <AppointmentModal
        show={show}
        onHide={() => setShow(false)}
        onSubmit={bookAnAppointment}
      />
      <h3>Appointments</h3>
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
                <td>{value.doctorName}</td>
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
    case 2:
      return <Alert variant={"success"}>Got Checked.</Alert>;
    case 1:
      return <Alert variant={"warning"}>Upcoming.</Alert>;
    case 3:
      return <Alert variant={"danger"}>Missed Appointment.</Alert>;
    default:
      return <Alert>Unknown Status</Alert>;
  }
};

export default Patients;
