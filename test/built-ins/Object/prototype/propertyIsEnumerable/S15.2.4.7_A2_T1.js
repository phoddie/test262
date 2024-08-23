// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the propertyIsEnumerable method is called with argument V, the following steps are taken:
    i) Let O be this object
    ii) Call ToString(V)
    iii) If O doesn't have a property with the name given by Result(ii), return false
    iv) If the property has the DontEnum attribute, return false
    v) Return true
es5id: 15.2.4.7_A2_T1
description: >
    Checking the type of Object.prototype.propertyIsEnumerable and the
    returned result
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Object.prototype, "propertyIsEnumerable", {
  enumerable: false,
});
