import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";

function Classes() {
  const [classroom, setClassroom] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [update, setUpdate] = useState(false);
  const [availableClasses, setAvailableClasses] = useState([]);
  const token = localStorage.getItem("teacherToken");
  const teacher_id = localStorage.getItem("teacher");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // Fetch assigned classroom
  useEffect(() => {
    axios
      .get(`/teachers/${parseInt(teacher_id)}`, config)
      .then((data) => setClassroom(data.data.classroom));
  }, [update]);

  // Assign class to teacher
  function assignClass(id) {
    const data = { teacher_id: parseInt(teacher_id) };
    fetch(`/classrooms/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => setUpdate(!update))
      .catch((e) => console.error(e.message));
  }

  // Fetch available classes
  useEffect(() => {
    axios
      .get("/classrooms", config)
      .then((res) => setAvailableClasses(res.data))
      .catch((e) => console.error(e.message));
  }, []);

  // Fetch students of a class
  function handleClick(id) {
    fetch(`/classrooms/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setModalData(res.students))
      .catch((e) => console.error(e.message));
  }

  const list = availableClasses.map((c) => (
    <div
      key={c.id}
      className="flex flex-col justify-between rounded-lg border border-gray-300 p-4 shadow-md transition hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-gray-800">{c.name}</h3>
      <p className="text-sm text-gray-500">
        Current Teacher: {c.teacher.career_name}
      </p>
      <button
        onClick={() => assignClass(c.id)}
        className="mt-3 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Assign to Me
      </button>
    </div>
  ));

  if (!classroom) {
    return (
      <div className="px-6 py-8">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Select a Class You Will Be Teaching
        </h1>
        <h2 className="mt-6 text-center text-xl text-gray-600">
          Available Classes
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list}
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Classes</h1>
        <div className="flex flex-col items-center">
          <div className="w-80 rounded-lg border border-gray-300 p-6 shadow-md">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
              <span className="text-2xl font-bold">KD</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {classroom.name}
            </h2>
            <button
              className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              onClick={() => {
                setModal(true);
                handleClick(classroom.id);
              }}
            >
              See Students
            </button>
          </div>
        </div>
        {modal && <Modal setModal={setModal} modalData={modalData} />}
      </div>
    );
  }
}

export default Classes;
