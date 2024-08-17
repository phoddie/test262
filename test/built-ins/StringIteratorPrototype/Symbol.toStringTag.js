// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.5.2.2
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the string value "String
    Iterator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
features: [Symbol.iterator, Symbol.toStringTag]
includes: [propertyHelper.js]
---*/

var StringIteratorProto = Object.getPrototypeOf(''[Symbol.iterator]());

verifyBuiltinProperty(StringIteratorProto, Symbol.toStringTag, {
    value: 'String Iterator',
    enumerable: false,
    writable: false,
    configurable: true,
  });
  
