
before(async () => {
    const { server, app } = await require('../server.js');
    testServer = server;
    serverURL = 'http://localhost:8000';
});
    
after((done) => {
    testServer.close();
    done();
});
    