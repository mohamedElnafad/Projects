const FormInput = ({ lable_title, type, name, value, onChange }) => {
  return (
    <label>
      {lable_title}
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default FormInput;
