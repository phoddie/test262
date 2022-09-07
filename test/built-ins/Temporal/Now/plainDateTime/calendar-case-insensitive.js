// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.now.prototype.plaindatetime
description: Calendar names are case-insensitive
features: [Temporal]
---*/

const arg = "jApAnEsE";

const result = Temporal.Now.plainDateTime(arg);
assert.sameValue(result.calendar.id, "japanese", "Calendar is case-insensitive");
