import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = props => {
  return (
    <>
      <form action="" onSubmit={props.handleSubmit}>
        <div>
          <Field component={"input"} name={"login"} placeholder={"Login"} />
        </div>
        <div>
          <Field
            component={"input"}
            name={"password"}
            placeholder={"Password"}
          />
        </div>
        <div>
          <Field component={"input"} name={"rememberMe"} type="checkbox" />
          <span>remember me</span>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
