import {useState} from 'react';

function useForm(inputsArgs = {}) {
  const [inputs, setInput] = useState({...inputsArgs});
  const handleInputChange = (fieldName, value) => {
    setInput({...inputs, [fieldName]: value});
  };

  const resetForm = () => {
    setInput({});
  };

  return {inputs, handleInputChange, resetForm, setInput};
}

export default useForm;
