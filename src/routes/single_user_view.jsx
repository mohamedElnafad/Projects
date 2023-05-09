import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context-management/user.context";
const SingleUserView = () => {
  const { id } = useParams();
  const [person, setPerson] = useState();

  useEffect(() => {
    //IIFE(Immediatly Invoked Function Expression)
    (async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setPerson(response.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id]);

  return (
    <div>
      {person ? (
        <>
          <h1>
            {person.first_name} {person.second_name}
          </h1>

          <img src={person.avatar} alt={person.first_name} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleUserView;
