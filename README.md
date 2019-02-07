# Spms Apps Typescript Custom Error

[![Build Status](https://travis-ci.org/NMA-SPMS/ts-error.svg?branch=master)](https://travis-ci.org/NMA-SPMS/ts-error)
<a href='https://coveralls.io/github/NMA-SPMS/ts-error?branch=master'><img src='https://coveralls.io/repos/github/NMA-SPMS/ts-error/badge.svg?branch=master' alt='Coverage Status' /></a>

A typescript error module, based on the Node.js Error object, which extends more properties and prints the error in Json object string.

## Instalation

This is a Node.js module available through the npm registry.

Before installing, download and install Node.js.

Installation is done using the npm install command:

`npm install @spms-apps/ts-error`

## Description

There are two types of error:

1. **Application**Error - Bugs in the application.
2. **Operational**Error - Run-time problems experienced by correctly-written programs;

All errors have a common set of properties:

| Property     |   Type    |                      Description                   |
| :----------: | :-------: | :------------------------------------------------: |
| uid          |  string   | The unique error identification                    |
| timestamp    |  Date     | Timestamp value                                    |
| name         |  string   | The name of the generator error                    |
| message      |  string   | Error message                                      |
| stack        |  string   | Description at which the Error was instantiated    |
| stackMsg     |  string[] | Reduced stack informnation.                        |

The error type Application adds one more property to the common set:

| Property |  Type  |                          Description                      |
| -------- | :----: | :-------------------------------------------------------: |
| code     | number | The identification of the error nature                    |

The error type Operational adds two more property to the common set:

|  Property  |  Type  |                    Description                          |
| :--------: | :----: | :-----------------------------------------------------: |
| code       | number | The identification of the error nature                  |
| statusCode | number | The identification of the error nature                  |


## Usage

To use this package you just need to import it and call the error class that produces the error that you want to throw:

```
import ApplicationError, OperationalError from '@spms-apps/ts-error';

throw new ApplicationError('The message..');
// Output in catch:
{ ApplicationError: The message..
          at method a
          (path a)
          at method b
          (path b)
          at method c
          (path c)
            ...
        name: 'ApplicationError',
        uid: '0A',
        timestamp: 2019-01-31T16:05:23.700Z,
        stackMsg:
         [ 'ApplicationError: Error 1',
           at method a
          (path a)
          at method b
          (path b) ],
        code: 600 }

throw new OperationalError('Http Bad request error message..', 400);
// Output in catch:
{ OperationalError: Http Bad request error message..
          at method a
          (path a)
          at method b
          (path b)
          at method c
          (path c)
            ...
        name: 'OperationalError',
        uid: '0B',
        timestamp: 2019-01-31T16:05:23.700Z,
        stackMsg:
         [ 'OperationalError: Http Bad request error message..',
           at method a
          (path a)
          at method b
          (path b) ],
        statusCode: 400, 
        code: 700 }

```

## Running the tests

All of the ts-error tests are written with jest. They can be run with npm.

`npm run test`

## Built With

Typescript - A superset of javascript

## Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details