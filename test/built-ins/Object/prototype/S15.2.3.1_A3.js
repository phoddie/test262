// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.1_A3
description: Checking if deleting "Object.prototype" property fails;
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Object, "prototype", {
  configurable: false,
});
