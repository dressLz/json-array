# JsonArray
这个 lib 的功能是为了能够处理比较复杂的json数组对象操作。

js 提供了数组以及对象的很多方法。但是在项目实际的业务需求中，当我们要操作后端返回的json数组实现功能代码时，往往需要做很多的运算，才能得到自己想要的结果。
比如：根据json数组中元素(对象)的某个属性值，进行json数组排序.....

## 安装与使用

通过 npm 安装

```
npm i @meteorite/json-array
```

引用

```
import jsonArray from '@meteorite/json-array'
```

## 使用方法

这个 lib 包含的内容中：

JsonArray 是一个类。

所包含的方法：
detection，sortByKey

其余的函数则是增强的快捷方法。

### JsonArray.sortByKey(target, key)

根据json数组中元素(对象)的某个属性值，进行json数组排序

```javascript
jsonArray.sortByKey(target, key)
// 参数
@target // 需要操作的json数组(必传), json数组类型
@key // 需要根据哪个属性值进行排序(必传), 字符串类型
let array = [{ 'id': 1, 'name': '张三' }, { 'id': 5, 'name': '李四' }, { 'id': 3, 'name': '王麻子' }]
console.log(jsonArray.sortByKey(array, 'id'))
// expected output: [{ 'id': 1, 'name': '张三' }, { 'id': 3, 'name': '王麻子' }, { 'id': 5, 'name': '李四' },]
```
### JsonArray.detection(target, key)

判断所给的json数组中，每个(对象)元素中，某一个属性值是否都是同一数据类型

```javascript
jsonArray.detection(target, key)
// 参数
@target // 需要操作的json数组(必传), json数组类型
@key // 需要判断哪个属性值类型是否统一(必传), 字符串类型
let array = [{ 'id': 1, 'name': '张三', 'age': 25 }, { 'id': 5, 'name': '李四', 'age': null }, { 'id': 3, 'name': '王麻子', 'age': 26 }]
console.log(jsonArray.detection(array, 'id'))
// expected output: true
console.log(jsonArray.detection(array, 'age'))
// expected output: false
```


***


> 我从未见过一个不孤独的人，能发出如此耀眼的光芒 ----张小龙。 
