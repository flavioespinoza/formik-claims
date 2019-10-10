import * as React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { _MoreResources, _DisplayFormikState } from '_helpers/_DisplayFormikState';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import _ from 'lodash';
import uuid from 'uuid/v4';

const Input = ({ ...props }) => {
  const { ...prop } = props;
  return (
    <div>
      <label htmlFor={prop.value} style={{ display: 'block' }}>
        {_.capitalize(prop.label)}
      </label>
      <input
        id={prop.name}
        placeholder={prop.name}
        type={prop.input_type}
        value={prop.values}
        onChange={prop._onChange}
        onBlur={prop._onBlur}
        className={prop.classes}
      />
      {prop.errors && prop.touched && <div className="input-feedback">{prop.errors}</div>}
    </div>
  );
};

const SignupForm = () => {
  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    mobilePhone: '',
  });

  const inputs = [
    {
      name: 'firstName',
      label: 'First Name',
      input_type: 'text',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      input_type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      input_type: 'text',
    },
    {
      name: 'mobilePhone',
      label: 'Mobile Phone',
      input_type: 'number',
    },
  ];

  return (
    <div className="app">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mobilePhone: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string()
            .email()
            .required('Required'),
          mobilePhone: Yup.number()
            .min(10)
            .max(10)
            .required('Required'),
        })}>
        {(form_props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = form_props;

          const _inputs = inputs.map((obj) => {
            return (
              <div key={uuid()} className={'mt12 mb12'}>
                <Input
                  {...{
                    name: obj.name,
                    label: obj.label,
                    input_type: obj.input_type,
                    values: values[obj.name],
                    errors: errors[obj.name],
                    touched: touched[obj.name],
                    _onChange: handleChange,
                    _onBlur: handleBlur,
                  }}
                />
              </div>
            );
          });

          return (
            <form onSubmit={handleSubmit}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={6}>
                  <div>
                    {_inputs}
                    <button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>
                      Reset
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <_DisplayFormikState {...form_props} />
                </GridItem>
              </GridContainer>
            </form>
          );
        }}
      </Formik>
      <_MoreResources />
    </div>
  );
};

export default SignupForm;
