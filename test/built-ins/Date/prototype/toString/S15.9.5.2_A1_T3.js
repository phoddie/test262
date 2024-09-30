// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "toString" has { DontEnum } attributes
esid: sec-date.prototype.tostring
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Date.prototype, "toString", {
  enumerable: false,
});
