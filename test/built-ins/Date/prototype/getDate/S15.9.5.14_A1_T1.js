// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getDate" has { DontEnum } attributes
esid: sec-date.prototype.getdate
description: Checking absence of ReadOnly attribute
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Date.prototype, "getDate", {
  writable: true
});
