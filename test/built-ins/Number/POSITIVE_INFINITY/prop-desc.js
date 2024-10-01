// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.positive_infinity
description: >
  "POSITIVE_INFINITY" property of Number
info: |
  Number.POSITIVE_INFINITY

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Number, "POSITIVE_INFINITY", {
	enumerable: false,
	writable: false,
	configurable: false,
});
