import { useState } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isInvalidForm, setIsInvalidForm] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    const newValues = {
      ...values,
      [name]: value,
    };
    const newErrors = validate(newValues, name);

    setValues(newValues);
    setErrors(newErrors);
    setIsInvalidForm(!!Object.keys(newErrors).length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setErrors(validate(values));
  };

  return {
    handleChange, handleSubmit, values, errors, isInvalidForm,
  };
};

export default useForm;
