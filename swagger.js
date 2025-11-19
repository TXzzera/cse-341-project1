const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contact List API',
        description: 'API for accessing contacts informations',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
