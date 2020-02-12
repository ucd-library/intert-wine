let env = process.env.APP_ENV || 'dev';
let clientPackage = require('./client/public/package.json');

module.exports = {
  server : {
    assets : (env === 'prod') ? 'dist' : 'public',
    endpoint : 'https://sandbox.dams.library.ucdavis.edu/fcrepo/rest/collection/moments',
    appRoutes : ['about', 'map', 'moment', 'moments'],
    moments : ['chardonnay', 'jop'],
    port : process.env.APP_PORT || process.env.PORT || 3000
  },

  client : {
    gaCode : process.env.GOOGLE_ANALYTICS || '',
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    }
  }
}
