// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.entries
description: >
  Array.prototype.entries.length value and descriptor.
info: |
  22.1.3.4 Array.prototype.entries ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Array.prototype.entries, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
