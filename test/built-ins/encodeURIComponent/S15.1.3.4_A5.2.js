// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The length property of encodeURIComponent does not have the attribute
    DontDelete
esid: sec-encodeuricomponent-uricomponent
description: Checking use hasOwnProperty, delete
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(encodeURIComponent, "length", {
  configurable: true
});
