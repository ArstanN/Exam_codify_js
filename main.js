//! EXAM

//? Задание 1
//? Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение всех элементов массива.

// const fn = (numsArr) => {
//     let sum = 0
//     for (let i = 0; i < numsArr.length; i++) {
//         sum += numsArr[i]
//     }
//     return sum / numsArr.length
// }

// console.log(fn([1,2,3,4,5,6,7,8,9]))

//? Задание 2
//? Напишите функцию, которая принимает два массива чисел и возвращает массив, состоящий из элементов, которые есть в обоих массивах.
// const arr = [1,2,3,4,5,6]
// const arr2 = [4,5,6,7,8,9]
// const result = arr.concat(arr2)
// const fn = (result) => {
//     const uniqueArr = new Set (result)
//     return Array.from(uniqueArr)
// }

// console.log(fn(result))


//? Задание 3
//? Напишите функцию, которая принимает массив чисел и возвращает массив, состоящий из уникальных элементов.

// const fn = (numsArr) => {
//     return Array.from(new Set(numsArr))
// }

// console.log(fn([1,2,3,4,1,2,3,4]))

//? Задание 4
//? Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент умножен на 2.

// const fn = (newArr) => {
//     return newArr.map(elem => elem * 2)
// }

// console.log(fn([1,2,3,4,5,6]))

//? Задание 5
//? Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент возведен в квадрат.

// const fn = (newArr) => {
//     return newArr.map(elem => elem * elem)
// }

// console.log(fn([1,2,3,4,5]))

//? Задание 6
//? Напишите функцию, которая принимает массив строк и возвращает массив, состоящий из строк, длина которых больше заданного числа.

// const fn = (newArr) => {
//     return newArr.filter(elem => elem.length > 3)
// }

// console.log(fn(['arstan', 'be', 'gom', 'domoi']))

//? Задание 7
//? Напишите функцию, которая принимает массив чисел и возвращает новый массив,
//? в котором все элементы уникальны и отсортированы по возрастанию.

// const fn = (newArr) => {
//     let uniqueArr = Array.from(new Set(newArr));
//     return uniqueArr.sort((a, b) => {
//         return a - b
//     })

// }


// console.log(fn([3,4,6,2,5,6,7,2,1,2,4,6,6,4,2]))

//? Задание 8 
//? Напишите функцию, которая принимает массив объектов и возвращает новый массив,
//? в котором объекты отсортированы по возрастанию заданного свойства.

// const fn = (newArr) => {
//     return newArr.sort((a, b) => {
//         return a.age - b.age
//     })
// }
// const newArr = [
//     {
//         age: 17
//     },
//     {
//         age: 12
//     },
//     {
//         age: 50
//     }
// ]

// console.log(fn(newArr))

//? Задание 9 
//? Напишите функцию, которая принимает два массива объектов и возвращает новый массив, 
//? в котором объединены объекты обоих массивов, и если у двух объектов одинаковые свойства, 
//? то они объединяются в один объект
// function mergeArrays(arr1, arr2) {
//     const merged = [...arr1, ...arr2].reduce((acc, obj) => {
//       const existingObj = acc.find(item => item.id === obj.id)
//       if (existingObj) {
//         Object.assign(existingObj, obj)
//       } else {
//         acc.push(obj)
//       }
//       return acc
//     }, []);
//     return merged
// }
// const arr1 = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Jane', age: 25 },
// ]
  
//   const arr2 = [
//     { id: 2, name: 'Jane Doe', occupation: 'Designer' },
//     { id: 3, name: 'Bob', age: 40 },
// ]
  
// const mergedArray = mergeArrays(arr1, arr2)
// console.log(mergedArray)





//? Задание 10
//? Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
//? в котором элементы сгруппированы по заданному условию, например, все четные числа в
//? одном массиве, а нечетные в другом.

// function newArr(arr) {
//     let even = []
//     let odd = []
  
//     arr.forEach((num) => {
//       if (num % 2 === 0) {
//         even.push(num)
//       } else {
//         odd.push(num)
//       }
//     });
  
//     return [even, odd]
// }
// const arr1 = [1, 2, 3, 4, 5, 6]
// const arr2 = [10, 20, 30, 40, 50, 60]

// const [arr1Even, arr1Odd] = newArr(arr1)
// const [arr2Even, arr2Odd] = newArr(arr2)

// console.log(arr1Even)
// console.log(arr1Odd)
// console.log(arr2Even)
// console.log(arr2Odd)



//! Extra Tasks

//? ====11111
//? Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором строки отсортированы по длине.

// const fn = (newArr) => {
//     return newArr.sort((a, b) => {
//         return a.length - b.length
//     })
// }

// console.log(fn(['arstan', 'beka', 'danil', 'danchik','dim']))




