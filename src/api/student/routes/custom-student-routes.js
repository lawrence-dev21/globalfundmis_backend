module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/v1-post-student',
            handler: 'custom-student-controller.createStudent',
            config: {
                policies: []
            }
        }
    ]
}