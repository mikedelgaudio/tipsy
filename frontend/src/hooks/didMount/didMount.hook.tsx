import { useEffect, useRef } from "react";

const didMount = () => {
  const didMount = useRef(true);
  useEffect(() => {
    didMount.current = false;
  }, []);
  return didMount.current;
};

export { didMount };
