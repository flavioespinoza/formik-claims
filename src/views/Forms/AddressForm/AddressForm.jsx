import * as React from 'react';
import _ from 'lodash';
import { Formik } from 'formik';
import { _MoreResources, _DisplayFormikState } from '_helpers/_DisplayFormikState';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@flavs/yup-yup';
import * as Yup from 'yup';

const AddressForm = () => {
  return (
    <Formik>
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Formik>
            {(subformik) => (
              <form>
                <input name="username" onChange={subformik.handleChange} value={subformik.values.username} />
                {/** i also have access to formik here too */}
                <button onClick={() => subformik.submitForm()}>Submit Inner</button>
                <button onClick={() => formik.submitForm()}>Submit Outer</button>
              </form>
            )}
          </Formik>
        </form>
      )}
    </Formik>
  );
};

export default AddressForm;