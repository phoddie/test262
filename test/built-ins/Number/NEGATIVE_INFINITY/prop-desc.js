// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.negative_infinity
description: >
  "NEGATIVE_INFINITY" property of Number
info: |
  Number.NEGATIVE_INFINITY

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Number, "NEGATIVE_INFINITY", {
	enumerable: false,
	writable: false,
	configurable: false,
});
