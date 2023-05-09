import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
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
        <Card style={{ width: "18rem ", margin: "20px auto" }}>
          <Card.Img variant="top" src={person.avatar} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>
              {person.first_name} {person.last_name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {person.email}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleUserView;
