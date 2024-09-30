// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-properties-of-typedarray-prototype-objects
description: >
  The initial value of Uint8ClampedArray.prototype.BYTES_PER_ELEMENT is 1.
info: |
  The value of TypedArray.prototype.BYTES_PER_ELEMENT is the Number value
  of the Element Size value specified in Table 49 for TypedArray.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

verifyPrimordialProperty(Uint8ClampedArray.prototype, "BYTES_PER_ELEMENT", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: false
});
