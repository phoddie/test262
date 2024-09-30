// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date property "prototype" has { DontEnum, DontDelete, ReadOnly }
    attributes
esid: sec-date.prototype
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Date, "prototype", {
    writable: false
});
  