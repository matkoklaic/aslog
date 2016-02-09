ASLog
=========

A small logging library providing methods for logging.

## Installation

  npm install aslog --save

## Usage

  var aslog = require('aslog');
  
  log.setLevel(log.ERROR);
  log.setLevel(log.WARN);
  log.setLevel(log.INFO);

  log.error( 'error message' );
  log.warn( 'warn message' );
  log.info( 'info message' );

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release

