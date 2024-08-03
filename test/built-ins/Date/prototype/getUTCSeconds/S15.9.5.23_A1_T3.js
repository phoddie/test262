// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getUTCSeconds" has { DontEnum } attributes
esid: sec-date.prototype.getutcseconds
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "getUTCSeconds", {
  enumerable: false,
});
