module.exports = ({ config }) => {
  console.log(config.name); 
  console.log(process.env.API_URL); 
  return {
    ...config,
    extra: {
      apiUrl: process.env.API_URL || "https://tfmtracker.azurewebsites.net",
    },
  };
};