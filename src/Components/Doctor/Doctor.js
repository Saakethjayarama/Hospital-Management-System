import React, { useEffect, useState } from "react";
import "./Doctor.css";
import { Table } from "react-bootstrap";
import CheckIcon from "@material-ui/icons/Check";
import CallIcon from "@material-ui/icons/Call";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import ConfirmModal from "./ConfirmModal";

function Doctor() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients([
      {
        id: 1,
        name: "Saaketh",
        phoneNumber: "9663971485",
      },
      {
        id: 2,
        name: "Manohar",
        phoneNumber: "8547859856",
      },
    ]);
  }, []);

  const call = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const [showConfirm, setShowConfirm] = useState(false);
  const [current, setCurrent] = useState(null);
  const deleteAppointment = () => {
    console.log(current);
    setShowConfirm(false);
  };

  const done = (id) => {
    console.log(id);
  };

  return (
    <div className="Doctor">
      <ConfirmModal
        show={showConfirm}
        handleClose={() => setShowConfirm(false)}
        confirm={deleteAppointment}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.phoneNumber}</td>
                <td align="center">
                  <CheckIcon
                    className="icons"
                    onClick={() => {
                      done(value.id);
                    }}
                  />
                  <CallIcon
                    className="icons"
                    onClick={() => call(value.phoneNumber)}
                  />
                  <HourglassFullIcon
                    className="icons"
                    onClick={() => {
                      setCurrent(value.id);
                      setShowConfirm(true);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Doctor;
