import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    dispLookup(params) {
      Ember.Logger.log(params);
      this.transitionTo('results', params.name);
    }
  }
});
