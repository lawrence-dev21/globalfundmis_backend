module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
    },
    upload: {
      config: {
        providerOptions: {
          localServer: {
            maxage: 300000
          },
        },
      },
    },
  });