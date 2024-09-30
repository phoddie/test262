// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.5.2.2
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Set Iterator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features:
  - Symbol.toStringTag
  - Symbol.iterator
---*/

var SetIteratorProto = Object.getPrototypeOf(new Set()[Symbol.iterator]());

verifyPrimordialProperty(SetIteratorProto, Symbol.toStringTag, {
  value: "Set Iterator",
  writable: false,
  enumerable: false,
  configurable: true
});
