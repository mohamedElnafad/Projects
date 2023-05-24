import TextField from "@mui/material/TextField";

const FormInput = ({
  lable_title,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <TextField
        autoComplete="given-name"
        name={name}
        placeholder={placeholder}
        required={true}
        fullWidth
        id={name}
        label={lable_title}
        autoFocus
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FormInput;
