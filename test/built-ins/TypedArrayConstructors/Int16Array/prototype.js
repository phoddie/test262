// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-typedarray.prototype
description: >
  The initial value of Int16Array.prototype is the Int16Array prototype object.
info: |
  The initial value of TypedArray.prototype is the corresponding TypedArray prototype intrinsic object (22.2.6).

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

verifyBuiltinProperty(Int16Array, "prototype", {
  value: Object.getPrototypeOf(new Int16Array(0)),
  writable: false,
  enumerable: false,
  configurable: false
});
