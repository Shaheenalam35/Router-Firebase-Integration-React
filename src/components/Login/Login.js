import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button>Google Sign In</button>
      </div>

      <form>
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Your secret password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
