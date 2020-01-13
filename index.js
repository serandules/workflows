var log = require('logger')('utils');
var nconf = require('nconf');
var bcrypt = require('bcrypt');
var async = require('async');
var AWS = require('aws-sdk');
var Redis = require('ioredis');
var errors = require('errors');
var diff = require('deep-object-diff').diff;
var mongoose = require('mongoose');
var uuidv4 = require('uuid/v4');
var stringify = require('json-stringify-safe');
var _ = require('lodash');
var format = require('string-template');

var Workflows = require('model-workflows');

var env = nconf.get('ENV');

exports.hooks = {
  verified: function () {

  }
};
