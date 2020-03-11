import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginForm = props => {
  return (
    <>
      <form action="" onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Input}
            name={"email"}
            validate={[required]}
            placeholder={"Email"}
          />
        </div>
        <div>
          <Field
            component={Input}
            name={"password"}
            validate={[required]}
            placeholder={"Password"}
            type={"password"}
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};

export default connect(mapStateToProps, { login })(Login);
