// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-typedarray.prototype.constructor
description: >
  The initial value of Uint8ClampedArray.prototype.constructor is the Uint8ClampedArray object.
info: |
  The initial value of Uint8ClampedArray.prototype.constructor is the intrinsic
  object %Uint8ClampedArray%.

  17 ECMAScript Standard Built-in Objects:
    Every other data property described in clauses 18 through 26 and in Annex B.2 has
    the attributes { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true }
    unless otherwise specified.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

verifyBuiltinProperty(Uint8ClampedArray.prototype, "constructor", {
  value: Uint8ClampedArray,
  writable: true,
  enumerable: false,
  configurable: true
});
