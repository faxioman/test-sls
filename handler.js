'use strict';

const _ = require('lodash');

module.exports = {
  capitalize(event, context) {
    console.log("capitalize!");
    return _.capitalize(event.data);
  },
  dummy(event, context) {
    console.log("dummy!");
    return event.data;
  },
  erroraccio(event, context) {
    console.log("erroraccio");
    return {
      statusCode: 401,
      body: "provazza"
    }
  },
  realSum(event, context) {
    console.log("real sum!");
    return event.data.x + event.data.y;
  }
};
