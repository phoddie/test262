// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "toLocaleString" has { DontEnum } attributes
esid: sec-date.prototype.tolocalestring
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Date.prototype, "toLocaleString", {
  enumerable: false,
});
