import * as React from 'react';
import '@flavs/yup-yup';
import * as Yup from 'yup';

const okta_user_profile_schema = {
  properties: {
    login: {
      title: 'Username',
      type: 'string',
      required: true,
      mutability: 'READ_WRITE',
      scope: 'NONE',
      minLength: 5,
      maxLength: 100,
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
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
    email: {
      title: 'Primary email',
      type: 'string',
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
    secondEmail: {
      title: 'Secondary email',
      type: 'string',
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
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      maxLength: 100,
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_WRITE',
        },
      ],
    },
    primaryPhone: {
      title: 'Primary phone',
      type: 'string',
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
    streetAddress: {
      title: 'Street address',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'HIDE',
        },
      ],
    },
    city: {
      title: 'City',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'HIDE',
        },
      ],
    },
    state: {
      title: 'State',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'HIDE',
        },
      ],
    },
    zipCode: {
      title: 'Zip code',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'HIDE',
        },
      ],
    },
    countryCode: {
      title: 'Country code',
      type: 'string',
      format: 'country-code',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'HIDE',
        },
      ],
    },
    postalAddress: {
      title: 'Postal Address',
      type: 'string',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'HIDE',
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
    locale: {
      title: 'Locale',
      type: 'string',
      format: 'locale',
      mutability: 'READ_WRITE',
      scope: 'NONE',
      permissions: [
        {
          principal: 'SELF',
          action: 'READ_ONLY',
        },
      ],
    },
    timezone: {
      title: 'Time zone',
      type: 'string',
      format: 'timezone',
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
      type: 'string',
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
        addressCountry: '',
        addressLocality: '',
        addressRegion: '',
        streetAddress: '',
        postalCode: '94043',
      },
    },
    workAddress: {
      title: 'Work Address',
      type: 'string',
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
        addressCountry: '',
        addressLocality: '',
        addressRegion: '',
        streetAddress: '',
        postalCode: '94043',
      },
    },
    organizationAddress: {
      title: 'organizational Address',
      type: 'string',
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
        name: '',
        addressCountry: '',
        addressLocality: '',
        addressRegion: '',
        streetAddress: '',
        postalCode: '94043',
      },
    },
    postOfficeBoxAddress: {
      title: 'Post Office Box Address',
      type: 'string',
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
        name: '',
        addressCountry: '',
        addressLocality: '',
        addressRegion: '',
        postOfficeBoxNumber: '1234',
        postalCode: '94043',
      },
    },
  },
  required: ['login', 'firstName', 'lastName', 'email'],
};
