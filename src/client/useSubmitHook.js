import { useState, useCallback } from 'react';
import { camelCase } from 'lodash';

const useSubmitHook = () => {
  const [input, handleInputChange] = useState("");
  const [error, handleSetError] = useState(null);
  const [blockData, handleBlockDataSet] = useState([]);

  const onChange = (e) => {
    handleSetError(null);
    handleInputChange(e.target.value);
  };

  const handleSubmit = useCallback(() => {
    try {
      const parsedObject = JSON.parse(input);

      if (!Array.isArray(parsedObject)) {
        throw new Error();
      }

      const humanizedArray = parsedObject.map(item => ({
        ...item,
        type: camelCase(item.type)
      }));

      handleBlockDataSet(humanizedArray);
    } catch (e) {
      handleSetError('Incorrect input, please check your JSON');
    }
  }, [input]);

  return {
    handleSubmit,
    onChange,
    error,
    blockData,
    input
  };
};

export default useSubmitHook;
