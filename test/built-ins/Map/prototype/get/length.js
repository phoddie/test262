// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-map.prototype.get
description: >
  Map.prototype.get.length value and descriptor.
info: |
  Map.prototype.get ( key )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Map.prototype.get, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
