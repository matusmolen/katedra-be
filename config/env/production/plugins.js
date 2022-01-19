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
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'eu-central-1',
      params: {
        Bucket: 'katedra-dizajnu',
      },
    },
  }
  });
