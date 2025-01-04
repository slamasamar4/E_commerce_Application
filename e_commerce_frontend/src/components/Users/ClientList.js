import React, { useEffect, useState } from "react";
import { getAllClients } from "../../services/ClientService";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getAllClients().then((data) => setClients(data));
  }, []);

  return (
    <div>
      <h1>Client List</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.firstName} {client.lastName} ({client.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
