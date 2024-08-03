// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "toTimeString" has { DontEnum } attributes
esid: sec-date.prototype.totimestring
description: Checking absence of DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "toTimeString", {
  configurable: true,
});
