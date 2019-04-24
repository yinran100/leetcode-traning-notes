---
title: 12. 整数转罗马数字
difficulty: 中等
related: 数学|字符串
---

## 题目

罗马数字包含以下七种字符：`I`, `V`, `X`, `L`, `C`, `D`和`M`。

|字符|数值|
|---|----|
|I|1|
|V|5|
|X|10|
|L|50|
|C|100|
|D|500|
|M|1000|

例如：罗马数字`2`写做`II`，即为两个并列的`1`；`12`写做`XII`，即为`X`+`II`；`27`写做`XXVII`，即为`XX`+`V`+`II`。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如`4`不写做`IIII`，而是`IV`。数字`1`在数字`5`的左边，所表示的数等于大数`5`减小数`1`得到的数值`4`。同样地，数字`9`表示为`IX`。这个特殊的规则只适用于以下六种情况：

- `I`可以放在`V`(5)和`X`(10)的左边，来表示`4`和`9`。
- `X`可以放在`L`(50)和`C`(100)的左边，来表示`40`和`90`。 
- `C`可以放在`D`(500)和`M`(1000)的左边，来表示`400`和`900`。

给定一个整数，将其转为罗马数字。输入确保在`1`到`3999`的范围内。

## 示例1

**输入：** 3

**输出：** "III"

## 示例2

**输入：** 4

**输出：** "IV"

## 示例3

**输入：** 9

**输出：** "IX"

## 示例4

**输入：** 58

**输出：** "LVIII"

**原因：** L = 50, V = 5, III = 3.

## 示例5

**输入：** 1994

**输出：** "MCMXCIV"

**原因：** M = 1000, CM = 900, XC = 90, IV = 4.

## 解析

这是一道较为简单地模拟题，和将一定的金钱数量拆成指定的一元、二元、五元、十元、二十元、五十元和一百元的套路是一模一样的。

关键就在于先收集所有可能的因子（这里是罗马数字），按照从小到大排序好之后，就可以将指定的数字从大到小开始瓜分。期间，每消耗一个因子，就相当于一次转换，直到最后完全瓜分，也就是最后的答案了。

## 代码

```javascript
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let ret = '';
  const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const symbols = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  for(let i = 12; i >= 0; i--) {
    while(num >= values[i]) {
      ret += symbols[i];
      num -= values[i];
    }
  }
  return ret;
};

[
  3,    // III
  4,    // IV
  9,    // IX
  58,   // LVIII
  1994, // MCMXCIV
].forEach(num => {
  console.log(intToRoman(num));
});
```