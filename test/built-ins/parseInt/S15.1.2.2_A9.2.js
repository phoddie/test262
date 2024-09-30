// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of parseInt does not have the attribute DontDelete
esid: sec-parseint-string-radix
description: Checking use hasOwnProperty, delete
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(parseInt, "length", {
  configurable: true
});
