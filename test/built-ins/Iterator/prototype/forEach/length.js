// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.forEach
description: >
  Iterator.prototype.forEach has a "length" property whose value is 1.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Iterator.prototype.forEach, 'length', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true,
});
