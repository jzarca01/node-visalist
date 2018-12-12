# Node-Visalist

A Wrapper for Visalist.io API

## Usage

```javascript
const Visalist = require('node-visalist');
const visa = new Visalist({
  apiKey: ''
});
```

### Get Visa requirements by country

```javascript
const requirements = await visa.getRequirements(country);

/* Specify the origin country slug and it will output the requirements for every country in the world (or at least in the database) */
```

### Get Visa requirements for a specific destination

```javascript
const requirements = await visa.getRequirementsForACountry(
  originCountry,
  destinationCountry
);
/* originCountry and destinationCountry are slugs */
```
