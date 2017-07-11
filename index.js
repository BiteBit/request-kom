const _ = require('lodash');
const assert = require('assert');
const request = require('request-promise');
const debug = require('debug')('request-kom');

class RequestKom {
  constructor(opts = {}) {
    assert.equal(!!opts.baseUrl, true);

    this.options = _.merge({
      timeout: 3000,
      json: true,
    }, opts);
  }

  go(opts) {
    const realOpts = _.merge({}, this.options, opts);

    realOpts.qs = _.mapValues(realOpts.qs, (value, key) => {
      if (typeof value === 'object' && ['where', 'fields', 'sort', 'populate', 'options'].indexOf(key) !== -1) {
        return JSON.stringify(value);
      }

      return value;
    });

    debug('request: ', realOpts);
    return request(realOpts);
  }

  /**
   * Create items
   * @param {array} items
   */
  create(items) {
    let data = null;

    if (!_.isArray(items)) {
      data = [items];
    } else {
      data = items;
    }

    return this.go({
      method: 'POST',
      url: '/',
      body: data,
    });
  }

  /**
   * Mongo find
   * @param {object} query
   *  query.where    string
   *  query.fields   string
   *  query.skip     double
   *  query.limit    double
   *  query.sort     string
   *  query.populate string
   */
  find(query) {
    return this.go({
      method: 'GET',
      url: '/',
      qs: query,
    });
  }

  /**
   * Mongo remove
   * @param {object} where
   */
  remove(where) {
    return this.go({
      method: 'GET',
      url: '/',
      qs: {
        where,
      },
    });
  }

  /**
   * Mongo update
   * @param {object} where
   * @param {object} options
   * @param {object} data to update
   */
  update(where, options, update) {
    return this.go({
      method: 'GET',
      url: '/',
      qs: {
        where,
        options,
      },
      body: update,
    });
  }

  /**
   * page find
   * @param {object} query
   *  query.where	   string
   *  query.fields   string
   *  query.page     double
   *  query.size     double
   *  query.sort     string
   *  query.populate string
   */
  page(query) {
    return this.go({
      method: 'GET',
      url: '/page',
      qs: query,
    });
  }

  /**
   * counter
   * @param {object} where
   */
  count(where) {
    return this.go({
      method: 'GET',
      url: '/count',
      qs: {
        where,
      },
    });
  }

  /**
   * drop all data
   */
  drop() {
    return this.go({
      method: 'DELETE',
      url: '/drop',
    });
  }

  /**
   * Mongo findOne
   * @param {object} query
   *  query.where    string
   *  query.fields   string
   *  query.populate string
   */
  findOne(query) {
    return this.go({
      method: 'GET',
      url: '/findOne',
      qs: query,
    });
  }

  /**
   * Mongo findOneAndUpdate
   * @param {object} where
   * @param {object} options
   * @param {object} update
   */
  findOneAndUpdate(where, options, update) {
    return this.go({
      method: 'PUT',
      url: '/findOneAndUpdate',
      qs: {
        where,
        options,
      },
      body: update,
    });
  }

  /**
   * Mongo findById
   * @param {string} id
   * @param {object} query
   *  query.fields   string
   *  query.populate string
   */
  findById(id, query) {
    return this.go({
      method: 'GET',
      url: `/${encodeURIComponent(id)}`,
      qs: query,
    });
  }

  /**
   * Mongo removeById
   * @param {string} id
   */
  removeById(id) {
    return this.go({
      method: 'DELETE',
      url: `/${encodeURIComponent(id)}`,
    });
  }

  /**
   * Mongo updateById
   * @param {string} id
   * @param {options} object
   * @param {update} object
   */
  updateById(id, options, update) {
    return this.go({
      method: 'PUT',
      url: `/${encodeURIComponent(id)}`,
      qs: {
        options,
      },
      body: update,
    });
  }
}

function quick(opts) {
  return new RequestKom(opts);
}

RequestKom.quick = quick;

module.exports = RequestKom;
