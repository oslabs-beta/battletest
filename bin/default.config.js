module.exports = {
  // Category 1: absolutely needed
  server_location: './server/server.js',
  PORT: 8000,
  model_location: '/server/models/model.js', // access to the database
  // Category 2: providing options to the developer
  report_setting: {
    // what user wants to see on the terminal once all tests are run
    showAllResponses: false,
  },
  // Category 3:
  functionsForTesting: [
    // vector-parser will parse below into arrays, on which we'll run cached recursion (or is a different algorithm better?)
    {
      route: '/stockdata',
      request_type: 'GET',
      vectors: [
        {
          section: 'body',
          rule: 'choose_one', // if "unique", will pick random one from each payload
          key: 'ticker',
          payload: ['GOOG', 'FB', 'MSFT'],
          payload_default: ['GOOG'],
        },
        {
          section: 'body',
          rule: 'choose_many', // if "set", will pick a set of one, median, zero
          key: 'columns',
          payload: ['close', 'open', 'max', 'min', 'volume'],
          payload_default: [['close', 'volume']], // those listed here will always be included
          payload_default_only: true, // if true, only "default" will be tested
        },
        {
          section: 'body',
          rule: 'choose_range', // if "range", will create ranges with smallest possible, median, and biggest possible
          key: ['start', 'end'],
          payload: [
            ['1970-01-01', Date.parse(new Date())],
            ['1970-01-02', Date.parse(new Date())],
          ],
          payload_default: [['2020-01-01', '2020-03-03']],
        },
        {
          section: 'query',
          rule: 'choose_each',
          key: 'file_type', // if "choice", will perform on each
          payload: ['json', 'csv'],
          payload_default: ['json'],
          payload_default_only: true,
        },
      ],
    },
  ],
};
