/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'balls-store',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: 'AIzaSyAj6TLXnsRezMDbyUupVyX1rac25nTBgpA',
      authDomain: 'ember-ecommerce-a3ede.firebaseapp.com',
      databaseURL: 'https://ember-ecommerce-a3ede.firebaseio.com',
      storageBucket: '',
    },
    torii: {
      sessionServiceName: 'session'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
  }

  return ENV;
};
