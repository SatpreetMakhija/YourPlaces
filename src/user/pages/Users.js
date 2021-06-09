import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
      { id: "u1", name: "Max Schwarz", image: "https://i.insider.com/5e32f2a324306a19834af322?width=1136&format=jpeg", places: 3 }
    ];

  return <UsersList items={USERS} />;
};

export default Users;
