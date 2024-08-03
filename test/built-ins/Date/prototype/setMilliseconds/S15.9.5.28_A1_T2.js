// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setMilliseconds" has { DontEnum } attributes
esid: sec-date.prototype.setmilliseconds
description: Checking absence of DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "setMilliseconds", {
  configurable: true,
});
