import * as React from 'react';
import _ from 'lodash';
import { Formik } from 'formik';
import { _DisplayFormikState } from '_helpers/_DisplayFormikState';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@flavs/yup-yup';
import * as Yup from 'yup';
import FormConfig from 'views/Forms/FormConfig/FormConfig';
import AddressForm from 'views/Forms/AddressForm/AddressForm';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const initialValues = FormConfig.initialValues;

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
      {prop.errors && prop.touched && (
        <div className="input-feedback">{prop.errors}</div>
      )}
    </div>
  );
};

const SignupForm = () => {
  const classes = useStyles();
  return (
    <div className="app">
      <Formik
        initialValues={initialValues}
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
        {(formik) => {
          const _required = FormConfig.required.map((obj) => {
            return (
              <div>
                <InputComponent
                  {...{
                    classes: classes,
                    name: obj.name,
                    label: obj.label,
                    input_type: obj.input_type,
                    values: formik.values[obj.name],
                    errors: formik.errors[obj.name],
                    touched: formik.touched[obj.name],
                    _onChange: formik.handleChange,
                    _onBlur: formik.handleBlur,
                  }}
                />
              </div>
            );
          });
          const _optional = FormConfig.optional.map((obj) => {
            return (
              <div className={'mt12 mb12'}>
                <InputComponent
                  {...{
                    classes: classes,
                    name: obj.name,
                    label: obj.label,
                    input_type: obj.input_type,
                    values: formik.values[obj.name],
                    errors: formik.errors[obj.name],
                    touched: formik.touched[obj.name],
                    _onChange: formik.handleChange,
                    _onBlur: formik.handleBlur,
                  }}
                />
              </div>
            );
          });
          return (
            <Formik
              className={classes.container}
              onSubmit={formik.handleSubmit}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={6}>
                  <div className={'not-form'}>
                    <div className={'mb48'}>
                      <h1>Required Identity Attributes</h1>
                      {_required}
                    </div>
                    <div className={'mb48'}>
                      <h1>Optional Identity Attributes</h1>
                      {_optional}
                    </div>
                    <div className={'mb48'}>
                      <h1>Optional Addresses</h1>
                      <GridContainer className={'pl12 pr12'}>
                        <GridItem xs={12} sm={6}>
                          <AddressForm
                            {...{
                              classes: classes,
                              name: 'homeAddress',
                              title: 'Home address',
                              _handleChange: formik.handleChange,
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                          <AddressForm
                            {...{
                              classes: classes,
                              name: 'workAddress',
                              title: 'Work address',
                              _handleChange: formik.handleChange,
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                    </div>
                    <div className={'mb48'}>
                      <GridContainer className={'pl12 pr12'}>
                        <GridItem xs={12} sm={6}>
                          <AddressForm
                            {...{
                              classes: classes,
                              name: 'schoolAddress',
                              title: 'School address',
                              _handleChange: formik.handleChange,
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6}>
                          <AddressForm
                            {...{
                              classes: classes,
                              name: 'organizationAddress',
                              title: 'Oranization address',
                              _handleChange: formik.handleChange,
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        onClick={formik.handleReset}
                        disabled={!formik.dirty || formik.isSubmitting}>
                        Reset
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={formik.handleSubmit}
                        disabled={formik.isSubmitting}>
                        Submit
                      </Button>
                    </div>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <_DisplayFormikState {...formik} />
                </GridItem>
              </GridContainer>
            </Formik>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignupForm;
