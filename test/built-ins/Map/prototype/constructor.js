// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-map-constructor
description: Map.prototype.constructor value and descriptor
info: |
  The initial value of Map.prototype.constructor is the intrinsic object %Map%.
includes: [propertyHelper.js]
---*/

assert.sameValue((new Map()).constructor, Map);

verifyPrimordialProperty(Map.prototype, 'constructor', {
  value: Map,
  writable: true,
  enumerable: false,
  configurable: true
});
