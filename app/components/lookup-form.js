import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    dispLookup() {
      var params = {
        name: this.get('name'),
      };
      this.sendAction('dispLookup', params);
    }
  }

});
