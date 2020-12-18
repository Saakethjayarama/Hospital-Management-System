import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Table } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DoctorModal from "./DoctorModal";
import ConfirmModal from "./ConfirmModal";

function Admin() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors([
      {
        id: 1,
        name: "Saaketh",
        email: "saakethaj@gmail.com",
        phoneNumber: "9663971485",
      },
      {
        id: 2,
        name: "Manohar",
        email: "manoharkn@gmail.com",
        phoneNumber: "8575984875",
      },
    ]);
  }, []);

  // Handle Doctor Modal
  const [show, setShow] = useState(false);
  const addDoctorHandleSubmit = (data) => {
    console.log(data);
    setShow(false);
  };

  const [showConfirm, setShowConfirm] = useState(false);
  const [current, setCurrent] = useState(null);
  const deleteDoctor = () => {
    console.log(current);
    setShowConfirm(false);
  };

  return (
    <>
      <div className="addIcon">
        <Fab color="secondary" aria-label="add" onClick={() => setShow(true)}>
          <AddIcon />
        </Fab>
      </div>
      <DoctorModal
        show={show}
        onHide={() => setShow(false)}
        onSubmit={addDoctorHandleSubmit}
      />
      <ConfirmModal
        show={showConfirm}
        handleClose={() => setShowConfirm(false)}
        confirm={deleteDoctor}
      />

      <div className="Admin">
        <h3>Admin Dashboard</h3>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.phoneNumber}</td>
                  <td align="center">
                    <DeleteIcon
                      style={{ cursor: "pointer" }}
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
    </>
  );
}

export default Admin;
