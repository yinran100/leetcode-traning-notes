(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("罗马数字包含以下七种字符："),a("code",[t._v("I")]),t._v(", "),a("code",[t._v("V")]),t._v(", "),a("code",[t._v("X")]),t._v(", "),a("code",[t._v("L")]),t._v(", "),a("code",[t._v("C")]),t._v(", "),a("code",[t._v("D")]),t._v("和"),a("code",[t._v("M")]),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字符")]),t._v(" "),a("th",[t._v("数值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("I")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("V")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("X")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("L")]),t._v(" "),a("td",[t._v("50")])]),t._v(" "),a("tr",[a("td",[t._v("C")]),t._v(" "),a("td",[t._v("100")])]),t._v(" "),a("tr",[a("td",[t._v("D")]),t._v(" "),a("td",[t._v("500")])]),t._v(" "),a("tr",[a("td",[t._v("M")]),t._v(" "),a("td",[t._v("1000")])])])]),t._v(" "),a("p",[t._v("例如：罗马数字"),a("code",[t._v("2")]),t._v("写做"),a("code",[t._v("II")]),t._v("，即为两个并列的"),a("code",[t._v("1")]),t._v("；"),a("code",[t._v("12")]),t._v("写做"),a("code",[t._v("XII")]),t._v("，即为"),a("code",[t._v("X")]),t._v("+"),a("code",[t._v("II")]),t._v("；"),a("code",[t._v("27")]),t._v("写做"),a("code",[t._v("XXVII")]),t._v("，即为"),a("code",[t._v("XX")]),t._v("+"),a("code",[t._v("V")]),t._v("+"),a("code",[t._v("II")]),t._v("。")]),t._v(" "),a("p",[t._v("通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如"),a("code",[t._v("4")]),t._v("不写做"),a("code",[t._v("IIII")]),t._v("，而是"),a("code",[t._v("IV")]),t._v("。数字"),a("code",[t._v("1")]),t._v("在数字"),a("code",[t._v("5")]),t._v("的左边，所表示的数等于大数"),a("code",[t._v("5")]),t._v("减小数"),a("code",[t._v("1")]),t._v("得到的数值"),a("code",[t._v("4")]),t._v("。同样地，数字"),a("code",[t._v("9")]),t._v("表示为"),a("code",[t._v("IX")]),t._v("。这个特殊的规则只适用于以下六种情况：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("I")]),t._v("可以放在"),a("code",[t._v("V")]),t._v("(5)和"),a("code",[t._v("X")]),t._v("(10)的左边，来表示"),a("code",[t._v("4")]),t._v("和"),a("code",[t._v("9")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("X")]),t._v("可以放在"),a("code",[t._v("L")]),t._v("(50)和"),a("code",[t._v("C")]),t._v("(100)的左边，来表示"),a("code",[t._v("40")]),t._v("和"),a("code",[t._v("90")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("C")]),t._v("可以放在"),a("code",[t._v("D")]),t._v("(500)和"),a("code",[t._v("M")]),t._v("(1000)的左边，来表示"),a("code",[t._v("400")]),t._v("和"),a("code",[t._v("900")]),t._v("。")])]),t._v(" "),a("p",[t._v("给定一个整数，将其转为罗马数字。输入确保在"),a("code",[t._v("1")]),t._v("到"),a("code",[t._v("3999")]),t._v("的范围内。")]),t._v(" "),a("h2",{attrs:{id:"示例1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例1","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例1")]),t._v(" "),a("p",[a("strong",[t._v("输入：")]),t._v(" 3")]),t._v(" "),a("p",[a("strong",[t._v("输出：")]),t._v(' "III"')]),t._v(" "),a("h2",{attrs:{id:"示例2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例2","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例2")]),t._v(" "),a("p",[a("strong",[t._v("输入：")]),t._v(" 4")]),t._v(" "),a("p",[a("strong",[t._v("输出：")]),t._v(' "IV"')]),t._v(" "),a("h2",{attrs:{id:"示例3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例3","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例3")]),t._v(" "),a("p",[a("strong",[t._v("输入：")]),t._v(" 9")]),t._v(" "),a("p",[a("strong",[t._v("输出：")]),t._v(' "IX"')]),t._v(" "),a("h2",{attrs:{id:"示例4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例4","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例4")]),t._v(" "),a("p",[a("strong",[t._v("输入：")]),t._v(" 58")]),t._v(" "),a("p",[a("strong",[t._v("输出：")]),t._v(' "LVIII"')]),t._v(" "),a("p",[a("strong",[t._v("原因：")]),t._v(" L = 50, V = 5, III = 3.")]),t._v(" "),a("h2",{attrs:{id:"示例5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例5","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例5")]),t._v(" "),a("p",[a("strong",[t._v("输入：")]),t._v(" 1994")]),t._v(" "),a("p",[a("strong",[t._v("输出：")]),t._v(' "MCMXCIV"')]),t._v(" "),a("p",[a("strong",[t._v("原因：")]),t._v(" M = 1000, CM = 900, XC = 90, IV = 4.")]),t._v(" "),a("h2",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),a("p",[t._v("这是一道较为简单地模拟题，和将一定的金钱数量拆成指定的一元、二元、五元、十元、二十元、五十元和一百元的套路是一模一样的。")]),t._v(" "),a("p",[t._v("关键就在于先收集所有可能的因子（这里是罗马数字），按照从小到大排序好之后，就可以将指定的数字从大到小开始瓜分。期间，每消耗一个因子，就相当于一次转换，直到最后完全瓜分，也就是最后的答案了。")]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} num\n * @return {string}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("intToRoman")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" values "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" symbols "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IV'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'V'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IX'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'L'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CM'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'M'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" symbols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// III")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IV")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IX")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("58")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// LVIII")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1994")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MCMXCIV")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("intToRoman")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);