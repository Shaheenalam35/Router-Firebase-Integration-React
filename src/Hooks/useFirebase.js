import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});
  useEffect(() => {}, []);

  const signInWithGoogle = () => {
    console.log("Sign In Soon");
  };
  return [user, setUser];
};
