// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of parseFloat does not have the attribute DontDelete
esid: sec-parsefloat-string
description: Checking use hasOwnProperty, delete
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(parseFloat, "length", {
  configurable: true
});
