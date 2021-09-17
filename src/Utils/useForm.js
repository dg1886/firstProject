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
    const isInvalidField = validate(value, name, newValues);

    const newErrors = {
      ...errors,
      [name]: isInvalidField,
    };

    setErrors(newErrors);
    setIsInvalidForm(!!Object.keys(newErrors).length);
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // setErrors(validate(values));
  };

  return {
    handleChange, handleSubmit, values, errors, isInvalidForm,
  };
};

export default useForm;
