// import * as React from 'react';
// import '@flavs/yup-yup';
// import * as Yup from 'yup';
const _ = require('lodash');

const schema = {
  properties: {
    firstName: {
      title: 'First name',
      type: 'string',
      required: true,
      mutability: 'READ_WRITE',
      scope: 'NONE',
      minLength: 1,
      maxLength: 50,
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    lastName: {
      title: 'Last name',
      type: 'string',
      required: true,
      mutability: 'READ_WRITE',
      scope: 'NONE',
      minLength: 1,
      maxLength: 50,
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    email: {
      title: 'Primary email',
      type: 'email',
      required: true,
      format: 'email',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    mobilePhone: {
      title: 'Mobile phone',
      type: 'tel',
      required: true,
      mutability: 'READ_WRITE',
      scope: 'NONE',
      maxLength: 10,
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    middleName: {
      title: 'Middle name',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    birthDate: {
      title: 'Birth date',
      type: 'date',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    gender: {
      title: 'Gender',
      type: 'select',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    secondEmail: {
      title: 'Secondary email',
      type: 'email',
      format: 'email',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    workEmail: {
      title: 'Work email',
      type: 'email',
      format: 'email',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    schoolEmail: {
      title: 'School email',
      type: 'email',
      format: 'email',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    organizationEmail: {
      title: 'Organization email',
      type: 'email',
      format: 'email',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    homePhone: {
      title: 'Home phone',
      type: 'tel',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      maxLength: 10,
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    workPhone: {
      title: 'Work phone',
      type: 'tel',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      maxLength: 10,
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    primaryPhone: {
      title: 'Primary phone',
      type: 'tel',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      maxLength: 100,
      permissions: [
        {
          principal: 'SELF',
          action: 'HIDE',
        },
      ],
    },
    title: {
      title: 'Title',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    displayName: {
      title: 'Display name',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    nickName: {
      title: 'Nickname',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    honorificPrefix: {
      title: 'Honorific prefix',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    honorificSuffix: {
      title: 'Honorific suffix',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    profileUrl: {
      title: 'Profile Url',
      type: 'string',
      format: 'uri',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    preferredLanguage: {
      title: 'Preferred language',
      type: 'string',
      format: 'language-code',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    userType: {
      title: 'User type',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    employeeNumber: {
      title: 'Employee number',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    costCenter: {
      title: 'Cost center',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    organization: {
      title: 'Organization',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    division: {
      title: 'Division',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    department: {
      title: 'Department',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    managerId: {
      title: 'ManagerId',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    manager: {
      title: 'Manager',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    homeAddress: {
      title: 'Home Address',
      type: 'address',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
      address: {
        type: 'PostalAddress/HomeAddress',
        streetAddress: '',
        addressLocality: '',
        addressRegion: '',
        postalCode: '',
        addressCountry: '',
      },
    },
    workAddress: {
      title: 'Work Address',
      type: 'address',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
      address: {
        type: 'PostalAddress/WorkAddress',
        streetAddress: '',
        addressLocality: '',
        addressRegion: '',
        postalCode: '',
        addressCountry: '',
      },
    },
    organizationAddress: {
      title: 'organizational Address',
      type: 'address',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
      address: {
        type: 'PostalAddress/OrganizationAddress',
        streetAddress: '',
        addressLocality: '',
        addressRegion: '',
        postalCode: '',
        addressCountry: '',
      },
    },
    schoolAddress: {
      title: 'School Address',
      type: 'address',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
      address: {
        type: 'PostalAddress/SchoolAddress',
        streetAddress: '',
        addressLocality: '',
        addressRegion: '',
        postalCode: '',
        addressCountry: '',
      },
    },
    postOfficeBoxAddress: {
      title: 'Post Office Box Address',
      type: 'address',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
      address: {
        type: 'PostalAddress/PostOfficeBoxNumber',
        nameOnBox: '',
        addressCountry: '',
        addressLocality: '',
        addressRegion: '',
        postOfficeBoxNumber: '',
        postalCode: '',
      },
    },
  },
  required: ['login', 'firstName', 'lastName', 'email'],
};

const UserProfileSchema = () => {
  const _exports = {
    required: [],
    optional: [],
    addresses: [],
    initialValues: {},
  };

  const _inputs = _.map(schema.properties, (obj, key) => {
    const input_type = () => {
      if (obj.type === 'string') {
        return 'text';
      } else {
        return obj.type;
      }
    };
    const fields = () => {
      if (obj.type === 'address') {
        return obj.address;
      } else {
        return {};
      }
    };
    const placeholder = () => {
      if (obj.type === 'email') {
        return 'you@youremail.com';
      } else if (obj.type === 'tel') {
        return '999-999-9999';
      } else if (obj.type === 'date') {
        return 'MM/DD/YYYY';
      } else {
        return '';
      }
    };
    return {
      id: key,
      input_type: input_type(),
      name: key,
      label: obj.title,
      title: obj.title,
      required: obj.required || false,
      placeholder: placeholder(),
      fields: fields(),
    };
  });

  _.each(schema.properties, (obj, key) => {
    if (obj.type === 'address') {
      _exports.initialValues[key] = obj.address;
    } else {
      _exports.initialValues[key] = '';
    }
  });

  _.each(_inputs, (obj) => {
    if (obj.input_type === 'address') {
      _exports.addresses.push(obj);
    } else {
      if (obj.required && obj.input_type !== 'address') {
        _exports.required.push(obj);
      } else if (obj.input_type !== 'address') {
        _exports.optional.push(obj);
      }
    }
  });
  return {
    ..._exports,
  };
};

// console.log(UserProfileSchema().initialValues);
export default UserProfileSchema;

