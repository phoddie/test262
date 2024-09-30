// Copyright (C) 2015 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype-@@unscopables
description: >
    Initial value of `Symbol.unscopables` property
info: |
    22.1.3.32 Array.prototype [ @@unscopables ]

    1. Let unscopableList be ObjectCreate(null).
    2. Perform CreateDataProperty(unscopableList, "copyWithin", true).
    3. Perform CreateDataProperty(unscopableList, "entries", true).
    4. Perform CreateDataProperty(unscopableList, "fill", true).
    5. Perform CreateDataProperty(unscopableList, "find", true).
    6. Perform CreateDataProperty(unscopableList, "findIndex", true).
    7. Perform CreateDataProperty(unscopableList, "flat", true).
    8. Perform CreateDataProperty(unscopableList, "flatMap", true).
    9. Perform CreateDataProperty(unscopableList, "includes", true).
    10. Perform CreateDataProperty(unscopableList, "keys", true).
    11. Perform CreateDataProperty(unscopableList, "values", true).
    12. Assert: Each of the above calls returns true.
    13. Return unscopableList.

includes: [propertyHelper.js]
features: [Symbol.unscopables]
---*/

var unscopables = Array.prototype[Symbol.unscopables];

assert.sameValue(Object.getPrototypeOf(unscopables), null);

verifyPrimordialProperty(unscopables, "copyWithin", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "entries", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "fill", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "find", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "findIndex", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "flat", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "flatMap", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "includes", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "keys", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});

verifyPrimordialProperty(unscopables, "values", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});
