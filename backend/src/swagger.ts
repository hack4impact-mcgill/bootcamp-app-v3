const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'API Reference',
    },
    host: 'localhost:3001/api',
    servers: [
        {
            url: 'http://localhost:3001',
            description: ''
        },
    ]
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/index.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.ts');
});