const apiPort = process.env.PORT || 8080
const servicePort = process.env.SERVICE_PORT || 8081
const baseUrl = 'http://localhost'

module.exports = {
    apiPort,
    servicePort,
    apiUrl: `${baseUrl}:${apiPort}`,
    serviceUrl: `${baseUrl}:${servicePort}`,
}
