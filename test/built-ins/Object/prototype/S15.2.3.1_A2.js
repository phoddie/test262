// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Object.prototype property has the attribute DontEnum
es5id: 15.2.3.1_A2
description: Checking if enumerating "Object.prototype" property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Object, "prototype", {
  enumerable: false,
});
