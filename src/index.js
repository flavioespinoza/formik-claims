// Helper styles for demo
import { Formik } from "formik";
import React from "react";
import { render } from "react-dom";
import * as Yup from "yup";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import { DisplayFormikState, MoreResources } from "./_helpers/helper";
import "./_helpers/helper.css";


const App = () => (
  <div className="app">
    <h2>
      New User{" "}
      <a
        href="https://github.com/jaredpalmer/formik"
        target="_blank"
        rel="noopener"
      >
        Signup
      </a>{" "}
      Example
    </h2>

    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required")
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" style={{ display: "block" }}>
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                <button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>

                <DisplayFormikState {...props} />
              </form>
            );
          }}
        </Formik>
      </GridItem>
    </GridContainer>

    <MoreResources />
  </div>
);

render(<App />, document.getElementById("root"));
