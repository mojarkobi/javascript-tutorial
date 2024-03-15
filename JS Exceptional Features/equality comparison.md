[Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality#examples)
---------------------------------------------------------------------------------------------------------

## [Comparison with no type conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality#comparison_with_no_type_conversion)

```javascript
1 == 1; // true
"hello" == "hello"; // true

```

### [Comparison with type conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality#comparison_with_type_conversion)

```javascript

"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false

```

### [Comparison of objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality#comparison_of_objects)

```javascript

const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true

```

### [Comparing strings and String objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality#comparing_strings_and_string_objects)

Note that strings constructed using `new String()` are objects. If you compare one of these with a string literal, the `String` object will be converted to a string literal and the contents will be compared. However, if both operands are `String` objects, then they are compared as objects and must reference the same object for comparison to succeed:

```javascript

const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true

```

### [Comparing Dates and strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality#comparing_dates_and_strings)

```javascript

const d = new Date("1995-12-17T03:24:00");
const s = d.toString(); // for example: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); //true

```

### [Comparing arrays and strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality#comparing_arrays_and_strings)

```javascript

const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true, `a` converts to string

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
c == d; // true
```

In JavaScript, when you use the `new String()` constructor, it creates a new object each time, even if the content is the same. Hence, when you compare two different objects created with `new String()`, even if their content is the same, they are not considered equal because they are separate objects in memory.

Here's what's happening in your code:

1. `string3` and `string4` are both new objects created using the `String` constructor.
2. When you use `==` for comparison, JavaScript compares the values. Since these are objects and not primitive values, they are not equal, so it returns `false`.
3. When you use `===` for comparison, JavaScript compares both the values and the types. Since both the values and types are different objects, it also returns `false`.

If you want to compare their values, you should compare their string representations, like this:

```javascript
console.log(string3.valueOf() === string4.valueOf()); // true

```

Or, you can simply use the equality operator `==` on their primitive values:

```javascript
console.log(string3.valueOf() == string4.valueOf()); // true

```

This will compare the primitive values of the strings instead of comparing the objects themselves.

| x | y | `==` | `===` | `Object.is` | `SameValueZero` |
| --- |  --- |  --- |  --- |  --- |  --- |
| `undefined` | `undefined` | `✅ true` | `✅ true` | `✅ true` | `✅ true` |
| --- |  --- |  --- |  --- |  --- |  --- |
| `null` | `null` | `✅ true` | `✅ true` | `✅ true` | `✅ true` |
| `true` | `true` | `✅ true` | `✅ true` | `✅ true` | `✅ true` |
| `false` | `false` | `✅ true` | `✅ true` | `✅ true` | `✅ true` |
| `'foo'` | `'foo'` | `✅ true` | `✅ true` | `✅ true` | `✅ true` |
| `0` | `0` | `✅ true` | `✅ true` | `✅ true` | `✅ true` |
| `+0` | `-0` | `✅ true` | `✅ true` | `❌ false` | `✅ true` |
| `+0` | `0` | `✅ true` | `✅ true` | `✅ true` | `✅ true` |
| `-0` | `0` | `✅ true` | `✅ true` | `❌ false` | `✅ true` |
| `0n` | `-0n` | `✅ true` | `✅ true` | `✅ true` | `✅ true` |
| `0` | `false` | `✅ true` | `❌ false` | `❌ false` | `❌ false` |
| `""` | `false` | `✅ true` | `❌ false` | `❌ false` | `❌ false` |
| `""` | `0` | `✅ true` | `❌ false` | `❌ false` | `❌ false` |
| `'0'` | `0` | `✅ true` | `❌ false` | `❌ false` | `❌ false` |
| `'17'` | `17` | `✅ true` | `❌ false` | `❌ false` | `❌ false` |
| `[1, 2]` | `'1,2'` | `✅ true` | `❌ false` | `❌ false` | `❌ false` |
| `new String('foo')` | `'foo'` | `✅ true` | `❌ false` | `❌ false` | `❌ false` |
| `null` | `undefined` | `✅ true` | `❌ false` | `❌ false` | `❌ false` |
| `null` | `false` | `❌ false` | `❌ false` | `❌ false` | `❌ false` |
| `undefined` | `false` | `❌ false` | `❌ false` | `❌ false` | `❌ false` |
| `{ foo: 'bar' }` | `{ foo: 'bar' }` | `❌ false` | `❌ false` | `❌ false` | `❌ false` |
| `new String('foo')` | `new String('foo')` | `❌ false` | `❌ false` | `❌ false` | `❌ false` |
| `0` | `null` | `❌ false` | `❌ false` | `❌ false` | `❌ false` |
| `0` | `NaN` | `❌ false` | `❌ false` | `❌ false` | `❌ false` |
| `'foo'` | `NaN` | `❌ false` | `❌ false` | `❌ false` | `❌ false` |
| `NaN` | `NaN` | `❌ false` | `❌ false` | `✅ true` | `✅ true` |