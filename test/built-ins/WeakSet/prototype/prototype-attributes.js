// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakset.prototype
description: >
  WeakSet.prototype is not writable, not enumerable and not configurable.
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(WeakSet, 'prototype', {
  enumerable: false,
  writable: false,
  configurable: false,
});
