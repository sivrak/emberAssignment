import EmberRouter from '@ember/routing/router';
import config from 'assignment/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about', function () {});
  this.route('issues', function () {
    this.route('issue-details', { path: 'issue/:issue_id' });
    this.route('add-issue', function () {});
  });
});
