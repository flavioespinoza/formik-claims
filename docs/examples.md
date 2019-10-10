# examples

```html
<div>
  <label htmlFor="email" style={{ display: 'block' }}>
    Email
  </label>
  <input
    id="email"
    placeholder="Enter your email"
    type="text"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    className={errors.email && touched.email ? 'text-input error' : 'text-input'}
  />
  {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
</div>
```

## Yup 

```ts
export const mixed: MixedSchemaConstructor;
export const string: StringSchemaConstructor;
export const number: NumberSchemaConstructor;
export const boolean: BooleanSchemaConstructor;
export const bool: BooleanSchemaConstructor;
export const date: DateSchemaConstructor;
export const array: ArraySchemaConstructor;
export const object: ObjectSchemaConstructor;
```

