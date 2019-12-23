import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import AuthActions from "../../../store/modules/auth/reducer";

import Button from "../../../utils/button";

import {
  Container,
  Form,
  Input,
  ErrorWrapper,
  Error,
  Title,
  SubTitle,
  Link
} from "../styles";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The email is required"),
  password: Yup.string().required("The password is required")
});

function Login ( ) {
  const loading = useSelector(({ auth }) => auth.loading)
  const error = useSelector(({ auth }) => auth.error)
  const dispatch = useDispatch()

  function handleSignIn (data) {
    dispatch(AuthActions.signInRequest(data))
  }

    return (
      <Container>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSignIn}
        >
          {({ isValid }) => (
            <Form>
              <Title>Login into your account</Title>
              <SubTitle>
                Fill in your credentials to login into your account
              </SubTitle>

              <Input type="email" name="email" placeholder="Your email" />
              <ErrorWrapper>
                <ErrorMessage name="email" component={Error} />
              </ErrorWrapper>

              <Input
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorWrapper>
                <ErrorMessage name="password" component={Error} />
              </ErrorWrapper>

              <Button disabled={!isValid || loading} type="submit">
                {loading ? "Loading..." : "Login"}
              </Button>

              <Link to="/recovery">Forgot my password</Link>

              <ErrorWrapper>
                {error && <Error center>{error}</Error>}
              </ErrorWrapper>
            </Form>
          )}
        </Formik>
      </Container>
    );
}

export default Login