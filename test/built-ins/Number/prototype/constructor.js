// Copyright (C) 2009 the Sputnik authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.prototype.constructor
description: >
  Property descriptor and value for Number.prototype.constructor
info: |
  Number.prototype.constructor

  The initial value of Number.prototype.constructor is the intrinsic object
  %Number%.
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Number.prototype, "constructor", {
  value: Number,
  enumerable: false,
  writable: true,
  configurable: true,
});
