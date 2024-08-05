// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-%typedarray%.prototype.byteoffset
description: >
  "byteOffset" property of TypedArrayPrototype
info: |
  %TypedArray%.prototype.byteOffset is an accessor property whose set accessor
  function is undefined.

  Section 17: Every accessor property described in clauses 18 through 26 and in
  Annex B.2 has the attributes {[[Enumerable]]: false, [[Configurable]]: true }
includes: [propertyHelper.js, testTypedArray.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var desc = Object.getOwnPropertyDescriptor(TypedArrayPrototype, "byteOffset");

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, "function");

verifyBuiltinProperty(TypedArray.prototype, "byteOffset", {
  enumerable: false,
  configurable: true
});
