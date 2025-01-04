import React, { useState } from "react";
import { createClient } from "../../services/ClientService";

const ClientForm = () => {
  const [client, setClient] = useState({ firstName: "", lastName: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createClient(client);
    alert("Client added successfully!");
    setClient({ firstName: "", lastName: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Client</h1>
      <input
        type="text"
        placeholder="First Name"
        value={client.firstName}
        onChange={(e) => setClient({ ...client, firstName: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={client.lastName}
        onChange={(e) => setClient({ ...client, lastName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={client.email}
        onChange={(e) => setClient({ ...client, email: e.target.value })}
        required
      />
      <button type="submit">Add Client</button>
    </form>
  );
};

export default ClientForm;
