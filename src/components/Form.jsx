import React from "react";
import Input from "./Input.js"
import Login from "./Login.js"






function Form(props) {
  return (
   <form>
      {!props.isRegistered ? <Input /> : <Login />}
      </form>
  );
}

export default Form;
