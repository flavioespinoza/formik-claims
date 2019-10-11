import * as React from 'react';
import _ from 'lodash';
import { Formik } from 'formik';
import { _MoreResources, _DisplayFormikState } from '_helpers/_DisplayFormikState';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@flavs/yup-yup';
import * as Yup from 'yup';
import FormConfig from 'views/Forms/FormConfig/FormConfig';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
    maxWidth: '500px !important',
    backgroundColor: 'red',
    padding: 12,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const InputComponent = ({ ...props }) => {
  const { classes, ...prop } = props;
  const placeholder = (input_type) => {
    if (input_type === 'tel') {
      return '999-999-9999';
    } else if (input_type === 'email') {
      return 'you@youremail.com';
    } else if (input_type === 'date') {
      return 'MM/DD/YYYY';
    } else {
      return '';
    }
  };
  return (
    <div className={'p12'}>
      <label htmlFor={prop.value} style={{ display: 'block' }}>
        {_.capitalize(prop.label)}
      </label>
      <input
        id={prop.name}
        className={classes.textField}
        placeholder={placeholder(prop.input_type)}
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
  const classes = useStyles();

  return (
    <div className="app">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mobilePhone: '',
          middleName: '',
          birthDate: '',
          workEmail: '',
          homePhone: '',
          workPhone: '',
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
          mobilePhone: Yup.string()
            .phone()
            .required('Required'),
          middleName: Yup.string(),
          birthDate: Yup.string(),
          workEmail: Yup.string().email(),
          homePhone: Yup.string().phone(),
          workPhone: Yup.string().phone(),
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
          const _inputs = FormConfig.inputs.map((obj) => {
            return (
              <div className={'mt12 mb12'}>
                <InputComponent
                  {...{
                    classes: classes,
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
            <form className={classes.container} onSubmit={handleSubmit}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={6}>
                  <div>
                    {_inputs}
                    <Button variant="contained" onClick={handleReset} disabled={!dirty || isSubmitting}>
                      Reset
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={handleSubmit}
                      disabled={isSubmitting}>
                      Submit
                    </Button>
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
    </div>
  );
};

export default SignupForm;
