const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json')

const app = express();
const PORT = 3004;

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Kalo mau melihat dokumentasi bisa kasih /api-docs ya di endpointnya terima kasih :v')
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
