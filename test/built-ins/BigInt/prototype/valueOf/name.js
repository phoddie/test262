// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.valueof
description: BigInt.prototype.valueOf.name property descriptor
info: |
  BigInt.prototype.valueOf ( )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [BigInt]
---*/

verifyPrimordialProperty(BigInt.prototype.valueOf, "name", {
  value: "valueOf",
  writable: false,
  enumerable: false,
  configurable: true
});
