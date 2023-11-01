import { useState } from "react";

const useSample = () => {
  const [isError, setIsError] = useState(null);
  const checking = () => {
    try {
      if (!isError) {
        throw new Error("첫번째 유효검사 에러 발생");
      }
    } catch (error) {
      alert(error);
    }
  };
  return { isError, setIsError, checking };
};

export default useSample;
