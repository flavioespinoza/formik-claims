import * as React from 'react';
import ReactJson from 'react-json-view';

export const _DisplayFormikState = (props) => {
  let _json = JSON.stringify({
    values: props.values,
  });
  const _ado_person = JSON.stringify({
    '@context': 'https://ado.utm.webshield.io/json.ld',
    id: 'https://ldap.pd.acme.com/person/<some_value>',
    type: 'https://ado.utm.webshield.io/Person',
    recordID: 'the record id from source system',
    sourceID: 'the privacy domain ID of source system',
    email: props.values.email,
    birthDate: props.values.birthDate,
    deathDate: '',
    gender: props.values.gender,
    identifiers: {
      type: 'https://ado.utm.webshield.io/Identifiers',
      phoneNumber: [
        {
          type: [
            'https://ado.utm.webshield.io/PhoneNumber',
            'https://ado.utm.webshield.io/PhoneNumber/MobilePhone',
          ],
          value: props.values.mobilePhone,
          startDate: '',
          endDate: '',
        },
        {
          type: [
            'https://ado.utm.webshield.io/PhoneNumber',
            'https://ado.utm.webshield.io/PhoneNumber/HomePhone',
          ],
          value: props.values.homePhone,
          startDate: '',
          endDate: '',
        },
      ],
      ssn: [
        {
          type: ['https://ado.utm.webshield.io/SSN'],
          value: props.values.SSN,
          startDate: '',
          endDate: '',
        },
        {
          type: ['https://ado.utm.webshield.io/TaxID'],
          value: props.values.taxID,
          startDate: '',
          endDate: '',
        },
      ],
    },
    names: [
      {
        type: ['https://ado.utm.webshield.io/Name'],
        givenName: props.values.firstName,
        familyName: props.values.lastName,
        middleName: props.values.middleName,
        fullName: `${props.values.firstName}  ${props.values.middleName} ${props.values.lastName}`,
      },
    ],
    addresses: [
      {
        type: [
          'https://ado.utm.webshield.io/PostalAddress',
          'https://ado.utm.webshield.io/PostalAddress/HomeAddress',
        ],
        value: props.values.homeAddress,
        startDate: '',
        endDate: '',
      },
      {
        type: [
          'https://ado.utm.webshield.io/PostalAddress',
          'https://ado.utm.webshield.io/PostalAddress/WorkAddress',
        ],
        value: props.values.workAddress,
        startDate: '',
        endDate: '',
      },
    ],
    citizenships: [],
  });
  let adoShow = false;
  return (
    <section>
      <div style={{ margin: '1rem 0' }}>
        <h3 style={{ fontFamily: 'monospace', marginBottom: 0 }}>
          Input Values
        </h3>
        <pre
          style={{
            background: '#f6f8fa',
            fontSize: '.65rem',
            padding: '.5rem',
            margin: 0,
          }}>
          <ReactJson
            theme={'monokai'}
            src={JSON.parse(_json)}
            displayDataTypes={false}
            style={{ padding: 12, borderRadius: 5, overflow: 'hidden' }}
          />
        </pre>
      </div>
      {adoShow ? (
        <div style={{ margin: '1rem 0' }}>
          <h3 style={{ fontFamily: 'monospace', marginBottom: 0 }}>
            ado Person
          </h3>
          <pre
            style={{
              background: '#f6f8fa',
              fontSize: '.65rem',
              padding: '.5rem',
              margin: 0,
            }}>
            <ReactJson
              theme={'monokai'}
              src={JSON.parse(_ado_person)}
              displayDataTypes={false}
              style={{ padding: 12, borderRadius: 5, overflow: 'hidden' }}
            />
          </pre>
        </div>
      ) : null}
    </section>
  );
};
