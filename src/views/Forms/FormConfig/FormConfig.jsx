import * as React from 'react';

export default {
  required: [
    {
      name: 'firstName',
      label: 'First Name',
      input_type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      input_type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      input_type: 'email',
      required: true,
    },
    {
      name: 'mobilePhone',
      label: 'Mobile Phone',
      input_type: 'tel',
      required: true,
    },
  ],
  optional:  [
    {
      name: 'middleName',
      label: 'Middle Name',
      input_type: 'text',
      required: false,
    },
    {
      name: 'birthDate',
      label: 'Birth Date',
      input_type: 'date',
      required: false,
    },
    {
      name: 'gender',
      label: 'Gender',
      input_type: 'select',
      required: false,
    },
    {
      name: 'workEmail',
      label: 'Work Email',
      input_type: 'email',
      required: false,
    },
    {
      name: 'homePhone',
      label: 'Home Phone',
      input_type: 'tel',
      required: false,
    },
    {
      name: 'workPhone',
      label: 'Work Phone',
      input_type: 'tel',
      required: false,
    },
  ]
}
