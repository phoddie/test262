// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%arrayiteratorprototype%.next
description: >
    The method should exist on the ArrayIterator prototype, and it should be
    writable and configurable, but not enumerable.
includes: [propertyHelper.js]
features: [Symbol.iterator]
---*/

var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());

verifyPrimordialProperty(ArrayIteratorProto, "next", {
    enumerable: false,
    writable: true,
    configurable: true,
});
