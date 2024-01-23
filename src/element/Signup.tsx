import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { Button } from "@mantine/core";
import axios from "axios";
// Define TypeScript interface for the form values
interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
 
// Define validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});
const Setdata = async (values: SignUpFormValues) => {
  try {
    let res = await axios.post("http://localhost:8888/users", values);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
// Mock sign-up function (replace with your actual sign-up logic)
const mockSignUp = (values: SignUpFormValues, { setSubmitting }: any) => {
  // Simulate API request (replace with actual sign-up logic)
  Setdata(values);
  setTimeout(() => {
    console.log("Signing up with:", values);
    // After successful sign-up, you may redirect the user or perform other actions

    setSubmitting(false);
  }, 1000);
};

const SignUp: React.FC = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={mockSignUp}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>

            <div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <NavLink to="/login">login</NavLink>
    </div>
  );
};

export default SignUp;
