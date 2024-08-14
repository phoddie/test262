// Copyright (C) 2022 Microsoft. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype-@@unscopables
description: >
    Initial value of `Symbol.unscopables` property
info: |
    22.1.3.32 Array.prototype [ @@unscopables ]

    ...
    7. Perform CreateDataProperty(unscopableList, "findLast", true).
    8. Perform CreateDataProperty(unscopableList, "findLastIndex", true).
    ...

includes: [propertyHelper.js]
features: [Symbol.unscopables, array-find-from-last]
---*/

var unscopables = Array.prototype[Symbol.unscopables];

assert.sameValue(Object.getPrototypeOf(unscopables), null);

verifyBuiltinProperty(unscopables, "findLast", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});  

verifyBuiltinProperty(unscopables, "findLastIndex", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
});
