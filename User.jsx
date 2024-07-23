import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/Context";

const User = (props) => {
  const { data, setData } = useContext(UserContext);

  return (
    <div className="flex flex-col bg-red-200 m-5 p-5 gap-5">
      {data.map((u) => (
        <Link to={`/user/${u.id}`} key={u.id}>
          {u.name}
        </Link>
      ))}
    </div>
  );
};

export default User;
