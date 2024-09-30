// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of eval has the attribute ReadOnly
esid: sec-eval-x
description: Checking if varying the length property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(eval, "length", {
  writable: false
});
