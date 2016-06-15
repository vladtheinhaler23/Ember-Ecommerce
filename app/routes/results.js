import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'https://itunes.apple.com/search?term=' + params.name;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     Ember.Logger.log(responseJSON.results);
     return responseJSON.results;
   });
  }

});
