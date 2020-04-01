import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
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
        {captchaUrl && <img src={captchaUrl} alt="captcha" />}
        {captchaUrl && (
          <Field
            component={Input}
            name={"captcha"}
            validate={[required]}
            type={"text"}
          />
        )}
        {error && <div className={style.formSummaryError}>{error}</div>}
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

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = formData => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth
  };
};

export default connect(mapStateToProps, { login })(Login);
