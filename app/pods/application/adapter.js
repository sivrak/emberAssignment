import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
  namespace = 'data';
  urlForFindAll() {
    return `${this.host}/${this.namespace}/`;
  }
}
