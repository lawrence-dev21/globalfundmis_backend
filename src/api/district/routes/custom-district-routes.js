module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/v1-get-district-count',
            handler: 'custom-district-controller.getDistrictCount',
            config: {
                policies: []
            }
        }
    ]
}