module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'matus@bluelemons.sk',
      defaultReplyTo: 'matus@bluelemons.sk',
    },
  },
});
