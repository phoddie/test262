// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of eval has the attribute DontEnum
esid: sec-eval-x
description: Checking use propertyIsEnumerable, for-in
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(eval, "length", {
  enumerable: false
});
