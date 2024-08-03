// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.utc
info: |
    The Date.UTC property "length" has { ReadOnly, DontDelete, DontEnum }
    attributes
es5id: 15.9.4.3_A3_T3
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Date.UTC, "length", {
  enumerable: false,
});
