import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";

const LoginForm = props => {
  return (
    <>
      <form action="" onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Input}
            name={"login"}
            validate={[required]}
            placeholder={"Login"}
          />
        </div>
        <div>
          <Field
            component={Input}
            name={"password"}
            validate={[required]}
            placeholder={"Password"}
          />
        </div>
        <div>
          <Field component={Input} name={"rememberMe"} type="checkbox" />
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
