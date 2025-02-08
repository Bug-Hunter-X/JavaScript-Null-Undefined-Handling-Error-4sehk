# JavaScript Null/Undefined Handling Bug

This repository demonstrates a common error in JavaScript related to handling `null` or `undefined` values and provides a solution.

## Bug
The original code lacks proper error handling for when either `a` or `b` is `null` or `undefined`, which can lead to unexpected behavior or errors.

## Solution
The improved code explicitly checks for `null` values before proceeding with the calculation, ensuring that the function doesn't throw errors and returns an appropriate value when unexpected input is given.

## How to run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run both javascript files in your preferred environment to observe the effect of the bug fix.