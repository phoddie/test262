// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setSeconds" has { DontEnum } attributes
esid: sec-date.prototype.setseconds
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "setSeconds", {
  enumerable: false,
});
