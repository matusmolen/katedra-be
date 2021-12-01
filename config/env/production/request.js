module.exports = ({ env }) => {
  return {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 50 * 1024 * 1024,
      },
    },
  }
}
