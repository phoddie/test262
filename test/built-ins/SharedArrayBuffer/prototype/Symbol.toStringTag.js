// Copyright (C) 2015 the V8 project authors. All rights reserved.
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "SharedArrayBuffer".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [SharedArrayBuffer, Symbol.toStringTag]
---*/

verifyBuiltinProperty(SharedArrayBuffer.prototype, Symbol.toStringTag, {
    value: 'SharedArrayBuffer',
    writable: false,
    enumerable: false,
    configurable: true
  });
  