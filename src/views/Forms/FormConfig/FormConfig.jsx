import * as React from 'react';
import UserProfileSchema from 'views/Forms/FormConfig/UserProfileSchema.js';

const schema = UserProfileSchema();

console.log(schema.initialValues);

export default {
  required: schema.required,
  optional: schema.optional,
  addresses: schema.addresses,
  initialValues: schema.initialValues,
};


