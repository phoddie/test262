// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype property "getUTCMilliseconds" has { DontEnum }
    attributes
esid: sec-date.prototype.getutcmilliseconds
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyPrimordialProperty(Date.prototype, "getUTCMilliseconds", {
  enumerable: false,
});
