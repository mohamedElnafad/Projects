import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import FormInput from "../components/form-input/form-input.component";
import axios from "axios";
import { UserContext } from "../context-management/user.context";

const UpdateUser = () => {
  const { id } = useParams();
  const { localUsers, setLoacalUsers } = useContext(UserContext);
  const currentUsers = [...localUsers];
  const navigate = useNavigate();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const userDataResponse = await axios.get(
  //         `https://reqres.in/api/users/${id}`
  //       );
  //       // setUser(userDataResponse.data);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   })();
  // }, [id]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  //const [responseData, setResponseData] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // const response = await axios.put(
    //   `https://reqres.in/api/users/${id}`,
    //   formData
    // );

    currentUsers[id - 1].first_name = formData.first_name;
    currentUsers[id - 1].last_name = formData.last_name;
    currentUsers[id - 1].email = formData.email;
    currentUsers[id - 1].password = formData.password;
    setLoacalUsers(currentUsers);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <h1 style={{ textAlign: "center" }}>Update User Info</h1>
      <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormInput
              lable_title="First Name: "
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInput
              lable_title="Last Name: "
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormInput
              lable_title="email"
              type="email"
              name="email"
              placeholder="user@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormInput
              lable_title="New Password: "
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update User{" "}
        </Button>
      </Box>
    </Container>
  );
};

export default UpdateUser;
