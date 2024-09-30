// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype property "getTimezoneOffset" has { DontEnum }
    attributes
esid: sec-date.prototype.gettimezoneoffset
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyPrimordialProperty(Date.prototype, "getTimezoneOffset", {
  enumerable: false,
});
