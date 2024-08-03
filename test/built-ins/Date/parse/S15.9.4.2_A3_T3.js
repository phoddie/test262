// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.parse property "length" has { ReadOnly, DontDelete, DontEnum }
    attributes
esid: sec-date.parse
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.parse, "length", {
  enumerable: false
});

