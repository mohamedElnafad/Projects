import { useContext, useState } from "react";
import { UserContext } from "../context-management/user.context";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormInput from "../components/form-input/form-input.component";
import { useNavigate } from "react-router-dom";
const CreateNewUser = () => {
  const { localUsers, setLoacalUsers } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    avatar:
      "https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
  });

  // handle the inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submition
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://reqres.in/api/users",
        formData
      );
      console.log(response);
      if (response.status === 201) {
        // setResponseData(response);
        setLoacalUsers([...localUsers, formData]);
        console.log(localUsers);
        setFormData({
          email: "",
          first_name: "",
          last_name: "",
          password: "",
        });
        navigate("/");

        console.log(localUsers);
        // console.log(response);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <h1 style={{ textAlign: "center" }}>Create New User</h1>
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
                lable_title="Email: "
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormInput
                lable_title="Password: "
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
            Create new user{" "}
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateNewUser;
