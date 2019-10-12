import * as React from 'react';
import { Field } from 'formik';

const AddressForm = ({ ...props }) => {
  const { classes, ...prop } = props;
  const _street_address = `${prop.name}.streetAddress`;
  const _city = `${prop.name}.addressLocality`;
  const _state = `${prop.name}.addressRegion`;
  const _zipcode = `${prop.name}.postalCode`;
  const _country_code = `${prop.name}.addressCountry`;

  return (
    <section>
        <h4>{prop.title}</h4>
        <Field
          name={_street_address}
          className={'mb24 mt12'}
          onChange={(e) => prop._handleChange(e)}
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
        <Field
          name={_country_code}
          className={'mb24 mt12'}
          onChange={prop._handleChange}
          placeholder={'country code'}
        />
    </section>
  
  );
};

export default AddressForm;
