import { Field, Form, Formik } from "formik";
import css from "./RegisterPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <>
      <div className={css.div}>
        <h2>REGISTRATION</h2>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={(values) => {
            dispatch(register(values));
            if (isLogin) {
              navigate("/contacts");
            }
          }}
        >
          <Form className={css.form}>
            <label htmlFor="name" className={css.label}>
              Name
              <Field
                name="name"
                type="text"
                placeholder="Please enter your name"
                className={css.input}
              />
            </label>
            <label htmlFor="email" className={css.label}>
              Email
              <Field
                name="email"
                type="email"
                placeholder="Please enter your email"
                className={css.input}
              />
            </label>

            <label htmlFor="password" className={css.label}>
              Password
              <Field
                name="password"
                type="password"
                placeholder="Please enter your password"
                className={css.input}
              />
            </label>
            <button className={css.btn} type="submit">
              Register
            </button>
            <Link className={css.link} to="/login">
              {" "}
              Already have an account? Log in
            </Link>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegistrationPage;