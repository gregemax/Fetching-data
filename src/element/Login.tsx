import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mantine/core";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const Login: React.FC = () => {

  const nak=useNavigate()
  
  // Define TypeScript interface for the form values
  interface LoginFormValues {
      email: string;
      password: string;
    }
    // Define validation schema using Yup
    const validationSchema = Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
      
      .required("Required"),
    });
    const check = async (values:LoginFormValues) => {
      try {
        let res = axios.get("http://localhost:8888/users");
        let data = (await res).data;
        // eslint-disable-next-line
            data.map((e:any)=>{if (e.email===values.email) {
            if (e.password===values.password) {
                alert('login sugeggfull')
                nak('/',{replace:true})
            }
          }})
        } catch (error) {}
      };
      // Mock login function (replace with your actual authentication logic)
    const mockLogin = (values: LoginFormValues, { setSubmitting }: any) => {
      check(values);
      // Simulate API request (replace with actual authentication logic)
      setTimeout(() => {
        console.log("Logging in with:", values);
        // After successful login, you may redirect the user or perform other actions
        setSubmitting(false);
      }, 1000);
    };
    return (
        <div>
      <GoogleLogin
        onSuccess={(credentialResponse:any) => {
          const greg=credentialResponse.credential.toString()
          const credit= jwtDecode(greg)
          console.log(credit);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={mockLogin}
      >
        {({ isSubmitting }) => (
          <Form>
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
              <Button  type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"} 
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <NavLink to="/signup">sign up</NavLink>
    </div>
  );
};

export default Login;
