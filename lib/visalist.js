const axios = require('axios');

class Visalist {
  constructor({ apiKey }) {
    this.request = axios.create({
      baseURL: 'https://visalist.io/api/public',
      headers: {
        Authorization: apiKey
      }
    });
  }

  async getRequirements(country) {
    try {
      const requirements = await this.request({
        method: 'GET',
        url: `/visa_requirements/country/${country}`
      });
      return requirements.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getRequirementsForACountry(originCountry, destinationCountry) {
    try {
      const requirements = await this.getRequirements(originCountry);
      return requirements.visaRequirements.find(
        visa => visa.destinationCountry.slug === destinationCountry
      );
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Visalist;
