import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register Now </h3>
      <form>
        <input type="text" placeholder="Enter Your Name" />
        <br />
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Your secret password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
