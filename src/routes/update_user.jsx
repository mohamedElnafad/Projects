import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/button/button.component";
import FormInput from "../components/form-input/form-input.component";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  // get specific user from APi by his ID
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const userDataResponse = await axios.get(
          `https://reqres.in/api/users/${id}`
        );
        setUser(userDataResponse.data);
        console.log(userDataResponse);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [id]);

  const [responseData, setResponseData] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      responseData &&
      formData.first_name &&
      formData.last_name &&
      formData.email &&
      formData.password
    ) {
      try {
        axios
          .put(`https://reqres.in/api/users/${id}`, user)
          .then((response) => {
            setResponseData(response);
          });
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const handleAlert = () => {
    if (
      responseData &&
      formData.first_name &&
      formData.last_name &&
      formData.email &&
      formData.password
    ) {
      alert("User is updated now");
    }
  };
  return (
    <div>
      <h1>Update user {id}</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          lable_title="First Name: "
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
        />
        <br />
        <FormInput
          lable_title="Last Name: "
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
        />
        <br />
        <FormInput
          lable_title="Email: "
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <FormInput
          lable_title="Password: "
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <Button type="submit" onClick={handleAlert} title={"Update User"} />
      </form>
    </div>
  );
};

export default UpdateUser;
