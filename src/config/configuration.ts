export default () => ({
  urls: {
    download: process.env.DOWNLOAD_API_URL || 'http://localhost:3100',
    storage: process.env.STORAGE_API_URL || 'http://localhost:3200',
  },
});
