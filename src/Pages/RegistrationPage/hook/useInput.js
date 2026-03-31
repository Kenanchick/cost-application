import { useState } from "react";
export const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    setError("");
  };

  const reset = () => {
    setError("");
    setValue("");
  };

  return {
    value,
    error,
    onChange,
    setError,
    reset,
  };
};
