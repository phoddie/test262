// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Error.prototype property has the attributes {ReadOnly}
es5id: 15.11.3.1_A3_T1
description: Checking if varying the Error.prototype property fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Error, "prototype", {
  writable: false,
});
