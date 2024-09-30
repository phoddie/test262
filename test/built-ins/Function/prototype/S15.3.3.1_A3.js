// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype property has the attribute DontDelete
es5id: 15.3.3.1_A3
description: Checking if deleting the Function.prototype property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Function, "prototype", {
  configurable: false,
});
