import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('products');
  this.route('results', {path:'/results/:name'});
  this.route('cart');
});

export default Router;
