import * as React from 'react';
import _ from 'lodash';
import { Formik, Field } from 'formik';
import { _DisplayFormikState } from '_helpers/_DisplayFormikState';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddressForm from 'views/Forms/AddressForm/AddressForm';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const NestedForm = () => {
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
          type: 'home',
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
              <GridContainer justify="center">
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
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={() => formik.handleSubmit()}>
                Submit
              </Button>
            </GridItem>
          </GridContainer>
        );
      }}
    </Formik>
  );
};

export default NestedForm;
