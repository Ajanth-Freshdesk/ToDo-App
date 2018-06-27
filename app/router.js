import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('login');
  this.route('home', function () {
    this.route('completed');
    this.route('archived');
    this.route('open');
    this.route('create');
  });
});

export default Router;
