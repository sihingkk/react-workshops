var keyMirror = require('react/lib/keyMirror');

module.exports = {
  //API: 'http://localhost:3000',
    API: 'https://lit-ocean-49533.herokuapp.com',

  ActionTypes: keyMirror({
    CONTACTS_LOADED: null,
    LOAD_CONTACTS: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};

