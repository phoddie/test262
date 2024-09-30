// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: the prototype property has the attributes { DontDelete }
es5id: 15.3.5.2_A1_T2
description: >
    Checking if deleting the prototype property of Function(void 0,
    "") fails
includes: [propertyHelper.js]
---*/

var f = Function(void 0, "");

verifyPrimordialProperty(f, "prototype", {
  configurable: false,
});
