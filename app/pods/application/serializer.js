import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  serializeIntoHash(hash, type, record, options) {
    Object.assign(hash, this.serialize(record, options));
  }

  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      issues: payload,
    };
    return super.normalizeFindAllResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
