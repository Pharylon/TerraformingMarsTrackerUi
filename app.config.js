module.exports = ({ config }) => {
  const finalObj = {
    ...config,
    extra: {
      ...config.extra,
      apiUrl: process.env.API_URL || "https://tfmtracker.azurewebsites.net",
    }
  }
  // console.log(JSON.stringify(finalObj)); 
  return finalObj
};