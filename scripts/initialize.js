const APP_TYPE = process.env.APP_TYPE;
const PORT = process.env.PORT || 3000;

const APP_SERVICES = {
    PLAYGROUND: 'utam-playground',
};

function runService(serviceType) {
    const SERVER_TYPE = APP_SERVICES[serviceType];
    if (!SERVER_TYPE) {
        throw new Error('Invalid APP_TYPE');
    }

    const { createApp } = require(SERVER_TYPE);
    const server = require('http').createServer(createApp());

    const start = (serverInstance) => {
        serverInstance.listen(PORT, function () {
            console.log(`[${APP_TYPE}] Application is currently serving on port ${PORT}`);
        });
    };

    start(server);
}

if (APP_TYPE) {
    runService(APP_TYPE);
}
