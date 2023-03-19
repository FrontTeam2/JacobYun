import { useState } from "react";

const useInputs = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const onChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return [values, onChange];
};

export default useInputs;
