import React, { useState, createContext } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [data, setData] = useState([
    { id: 1, name: "ashish", country: "india" },
    { id: 2, name: "ak", country: "usa" },
  ]);
  return (
    <UserContext.Provider value={{ data, setData }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
