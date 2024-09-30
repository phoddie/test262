// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.2.3.2
description: >
    The value of GeneratorFunction.prototype.prototype is the
    %GeneratorPrototype% intrinsic object.

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [generators]
---*/

var GeneratorFunctionPrototype = Object.getPrototypeOf(function*() {});

verifyPrimordialProperty(GeneratorFunctionPrototype, 'prototype', {
  value: Object.getPrototypeOf(function*() {}.prototype),
  enumerable: false,
  writable: false,
  configurable: true,
});
