import { useEffect, useRef } from "react";

export const didMount = () => {
  const didMount = useRef(true);
  useEffect(() => {
    didMount.current = false;
  }, []);
  return didMount.current;
};
