// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype property "toLocaleTimeString" has { DontEnum }
    attributes
esid: sec-date.prototype.tolocaletimestring
description: Checking absence of DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "toLocaleTimeString", {
  configurable: true,
});
