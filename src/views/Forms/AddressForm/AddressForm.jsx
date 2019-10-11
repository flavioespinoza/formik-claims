import * as React from 'react';
import _ from 'lodash';
import { Formik, Field } from 'formik';
import { _MoreResources, _DisplayFormikState } from '_helpers/_DisplayFormikState';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactJson from 'react-json-view';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const AddressForm = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        mobilePhone: '',
        homeAddress: {
          type: 'home',
          street_address: '',
          city: '',
          state: '',
          zipcode: '',
        },
        workAddress: {
          type: 'work',
          street_address: '',
          city: '',
          state: '',
          zipcode: '',
        },
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}>
      {(formik) => {
        return (
          <GridContainer justify="center" className={'pl24 pr24'}>
            <GridItem xs={12} sm={6}>
              <h4>Required</h4>
              <Field
                name="firstName"
                className={'mb24 mt12'}
                onChange={formik.handleChange}
                placeholder={'First name'}
              />
              <Field
                name="lastName"
                className={'mb24 mt12'}
                onChange={formik.handleChange}
                placeholder={'Last name'}
              />
              <Field
                name="email"
                className={'mb24 mt12'}
                onChange={formik.handleChange}
                placeholder={'Email'}
              />
              <Field
                name="mobilePhone"
                className={'mb24 mt12'}
                onChange={formik.handleChange}
                placeholder={'Mobile phone'}
              />
              <br />
              <Formik className={classes.container} onSubmit={formik.handleSubmit}>
                {(subformik) => {
                  return (
                    <section>
                      <div>
                        <h4>Home address</h4>
                        <Field
                          name="homeAddress.street_address"
                          className={'mb24 mt12'}
                          onChange={formik.handleChange}
                          placeholder={'street address'}
                        />
                        <Field
                          name="homeAddress.city"
                          className={'mb24 mt12'}
                          onChange={formik.handleChange}
                          placeholder={'city'}
                        />
                        <Field
                          name="homeAddress.state"
                          className={'mb24 mt12'}
                          onChange={formik.handleChange}
                          placeholder={'state'}
                        />
                        <Field
                          name="homeAddress.zipcode"
                          className={'mb24 mt12'}
                          onChange={formik.handleChange}
                          placeholder={'zipcode'}
                        />
                      </div>
                      <div>
                        <h4>Work address</h4>
                        <Field
                          name="workAddress.street_address"
                          className={'mb24 mt12'}
                          onChange={formik.handleChange}
                          placeholder={'street address'}
                        />
                        <Field
                          name="workAddress.city"
                          className={'mb24 mt12'}
                          onChange={formik.handleChange}
                          placeholder={'city'}
                        />
                        <Field
                          name="workAddress.state"
                          className={'mb24 mt12'}
                          onChange={formik.handleChange}
                          placeholder={'state'}
                        />
                        <Field
                          name="workAddress.zipcode"
                          className={'mb24 mt12'}
                          onChange={formik.handleChange}
                          placeholder={'zipcode'}
                        />
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => formik.handleSubmit()}>
                        Submit
                      </Button>
                    </section>
                  );
                }}
              </Formik>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <div style={{ margin: '1rem 0' }}>
                <h3 style={{ fontFamily: 'monospace' }} />
                <pre
                  style={{
                    background: '#f6f8fa',
                    fontSize: '.65rem',
                    padding: '.5rem',
                  }}>
                  <ReactJson src={JSON.parse(JSON.stringify(formik.values))} />
                </pre>
              </div>
            </GridItem>
          </GridContainer>
        );
      }}
    </Formik>
  );
};

export default AddressForm;
