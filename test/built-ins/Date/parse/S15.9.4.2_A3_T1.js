// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.parse property "length" has { ReadOnly, DontDelete, DontEnum }
    attributes
esid: sec-date.parse
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Date.parse, "length", {
    value: 1,
    writable: false
});
