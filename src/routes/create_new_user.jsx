import { useContext, useState } from "react";
import { UserContext } from "../context-management/user.context";
import axios from "axios";
import Button from "../components/button/button.component";
import FormInput from "../components/form-input/form-input.component";
const CreateNewUser = () => {
  const { localUsers, setLoacalUsers } = useContext(UserContext);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [responseData, setResponseData] = useState({});

  // handle the inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submition
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        responseData &&
        formData.first_name &&
        formData.last_name &&
        formData.email &&
        formData.password
      ) {
        const response = await axios.post(
          "https://reqres.in/api/users",
          formData
        );
        setResponseData(response);
        setLoacalUsers([...localUsers, response.data]);

        console.log(localUsers);
        // console.log(response);
        setFormData({
          email: "",
          first_name: "",
          last_name: "",
          password: "",
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
  // handle alert for successfull user creation
  const handleAlert = () => {
    if (
      responseData &&
      formData.first_name &&
      formData.last_name &&
      formData.email &&
      formData.password
    ) {
      alert("User created successfully!");
    }
  };

  return (
    <div>
      <h1>Create User</h1>
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
        <Button type="submit" onClick={handleAlert} title={"Create User"} />
      </form>
    </div>
  );
};

export default CreateNewUser;
