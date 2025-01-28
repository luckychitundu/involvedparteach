import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Parents() {
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("teacherToken");
  const teacher_id = localStorage.getItem("teacher");
  const url2 = `/teachers/${parseInt(teacher_id)}`;
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(url2, config)
      .then((response) => {
        setParents(response.data.classroom.parents || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load parents. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-blue-600 font-semibold">Loading parents...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 font-semibold">{error}</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-blue-600">Parents</h1>
          <p className="mt-2 text-sm text-gray-800">
            A list of all the parents in your account, including their name and phone number.
          </p>
        </div>
      </div>

      {parents.length === 0 ? (
        <div className="mt-4 text-center text-gray-600">No parents found.</div>
      ) : (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-10 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Phone Number
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {parents.map((parent) => (
                      <tr key={parent.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {parent.first_name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {parent.last_name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {parent.phone_number}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
