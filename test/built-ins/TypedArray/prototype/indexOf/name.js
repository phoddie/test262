// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.indexof
description: >
  %TypedArray%.prototype.indexOf.name is "indexOf".
info: |
  %TypedArray%.prototype.indexOf (searchElement [ , fromIndex ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js, testTypedArray.js]
features: [TypedArray]
---*/

verifyBuiltinProperty(TypedArray.prototype.indexOf, "name", {
  value: "indexOf",
  writable: false,
  enumerable: false,
  configurable: true
});
