# request-kom

[![License][license-img]][license-url]
[![NPM Version][npm-img]][npm-url]
[![Node Version][node-image]][node-url]
[![Build Status][travis-img]][travis-url]
[![Test Coverage][coveralls-img]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-img]][david-url]

[![NPM](https://nodei.co/npm/request-kom.png?downloads=true&stars=true)](https://nodei.co/npm/request-kom/)

[travis-img]: https://travis-ci.org/BiteBit/request-kom.svg?branch=master
[travis-url]: https://travis-ci.org/BiteBit/request-kom
[coveralls-img]: https://coveralls.io/repos/github/BiteBit/request-kom/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/BiteBit/request-kom?branch=master
[npm-img]: https://img.shields.io/npm/v/request-kom.svg
[npm-url]: https://npmjs.org/package/request-kom
[david-img]: https://img.shields.io/david/BiteBit/request-kom.svg
[david-url]: https://david-dm.org/BiteBit/request-kom
[downloads-image]: https://img.shields.io/npm/dm/request-kom.svg
[downloads-url]: https://npmjs.org/package/request-kom
[license-img]: http://img.shields.io/badge/license-MIT-green.svg
[license-url]: http://opensource.org/licenses/MIT
[node-image]: https://img.shields.io/badge/node.js-v4.0.0-blue.svg
[node-url]: http://nodejs.org/download/

# Api docs

## constructor(option)
Reassign the default [request](!https://github.com/request/request#requestoptions-callback) option. the default option is **timeout 3000** and **json true**.

## go(option)
Use the option to request.

## create([array[object]|object])
[model_Model.insertMany](!http://mongoosejs.com/docs/api.html#model_Model.insertMany)
Shortcut for saving one or more documents to the database.

## find({where, fields, skip, limit, sort, populate})
[model_Model.find](!http://mongoosejs.com/docs/api.html#model_Model.find)
* where, A query, applies the passed conditions, and returns the Query.
* fields, Specifies which document fields to include or exclude (also known as the query "projection").
* skip, Specifies the number of documents to skip.
* limit, Specifies the maximum number of documents the query will return.
* sort, Sets the sort order.
* populate, Specifies paths which should be populated with other documents.

## remove(where)
[model_Model.remove](!http://mongoosejs.com/docs/api.html#model_Model.remove)
* where, A query, applies the passed conditions, and returns the Query.

## update(where, options, update)
[model_Model.update](!http://mongoosejs.com/docs/api.html#model_Model.update)
* where, A query, applies the passed conditions, and returns the Query.
* options, model_Model.update options.
* update, The doc to update.

## page({where, fields, page, size, sort, populate})
* where, A query, applies the passed conditions, and returns the Query.
* fields, Specifies which document fields to include or exclude (also known as the query "projection").
* page, Specifies the number of documents to skip.
* size, Specifies the maximum number of documents the query will return.
* sort, Sets the sort order.
* populate, Specifies paths which should be populated with other documents.

## count(where)
[model_Model.count](!http://mongoosejs.com/docs/api.html#model_Model.count)
* where, A query, applies the passed conditions, and returns the Query.

## findOne({where, fields, populate})
[model_Model.findOne](!http://mongoosejs.com/docs/api.html#model_Model.findOne)
* where, A query, applies the passed conditions, and returns the Query.
* fields, Specifies which document fields to include or exclude (also known as the query "projection").
* populate, Specifies paths which should be populated with other documents.

## findOneAndUpdate(where, options, update)
[model_Model.findOneAndUpdate](!http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)
* where, A query, applies the passed conditions, and returns the Query.
* options, model_Model.findOneAndUpdate options.
* update, The doc to update.

## findById(id, {fields, populate})
[model_Model.findById](!http://mongoosejs.com/docs/api.html#model_Model.findById)
* id, value of _id to query by
* fields, Specifies which document fields to include or exclude (also known as the query "projection").
* populate, Specifies paths which should be populated with other documents.

## removeById(id)
[model_Model.remove](!http://mongoosejs.com/docs/api.html#model_Model.remove)
* id, value of _id to query by

## updateById(id, options, update)
[model_Model.findOneAndUpdate](!http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)
* id, value of _id to query by
* options, model_Model.findOneAndUpdate options.
* update, The doc to update.

## drop()
drop this collection, dangerous