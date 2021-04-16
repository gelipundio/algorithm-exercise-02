# algorithm-exercise-02
Flatten the array

Build a function that sumarize numbers (an array of numbers and array of arrays)

steps:
1. create a new branch
2. ask Felipe @gelipundio to give you access to the repository as collaborator
3. install node modules `npm install`
4. create a file called `solution.js`
5. export a function called `sumarize`
6. code solution inside `sumarize` function
7. test your solution with the command `npm run test`
8. once your solution is working fine, push your branch (do not create Pull Request)

Example:
you are going to get an input like:
````
[5, 2, [2, true, 5], 5, [100, 3, 4, "1", [1, false, 2, 3, [7, 12, 15, "12"], {}, []]]]
````

when you run your function
```
sumarize([5, 2, [2, true, 5], 5, [100, 3, 4, "1", [1, false, 2, 3, [7, 12, 15, "12"], {}, []]]])
```

your function should return:
````
166
````

Rules:
1. you should only sumarize numbers
2. you should sumarize numbers inside of arrays (or inside of arrays of arrays)

Hints:
- do you know the use of `typeof`?
- do you know what is a recursive function?
- how can you know if a number is a valid number?
- how can you know that a variable is an array?
