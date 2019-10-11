import * as React from 'react';
import { Field } from 'formik';

const AddressForm = ({ ...props }) => {
  const { classes, ...prop } = props;
  const _street_address = `${prop.name}.street_address`;
  const _city = `${prop.name}.city`;
  const _state = `${prop.name}.state`;
  const _zipcode = `${prop.name}.zipcode`;
  return (
    <section>
        <h4>{prop.title}</h4>
        <Field
          name={_street_address}
          className={'mb24 mt12'}
          onChange={prop._handleChange}
          placeholder={'street address'}
        />
        <Field
          name={_city}
          className={'mb24 mt12'}
          onChange={prop._handleChange}
          placeholder={'city'}
        />
        <Field
          name={_state}
          className={'mb24 mt12'}
          onChange={prop._handleChange}
          placeholder={'state'}
        />
        <Field
          name={_zipcode}
          className={'mb24 mt12'}
          onChange={prop._handleChange}
          placeholder={'zipcode'}
        />
    </section>
  );
};

export default AddressForm;
