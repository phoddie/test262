// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-map.prototype.keys
description: >
  Map.prototype.keys.name value and descriptor.
info: |
  Map.prototype.keys ()

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Map.prototype.keys, "name", {
  value: "keys",
  writable: false,
  enumerable: false,
  configurable: true
});
