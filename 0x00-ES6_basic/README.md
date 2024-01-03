# 0x00. ES6 Basics

This project is about learning the basics of ES6.

## Files

- [`0-constants.js`](./0-constants.js) - Declaring variables with `const` and `let` instead of `var`.

- [`1-block-scoped.js`](./1-block-scoped.js) - Block Scope. Fix the code so that `var` is replaced with `let` and `const` as appropriate.

- [`2-arrow.js`](./2-arrow.js) - Arrow functions. Rewrite the following standard function to use ES6's arrow syntax of the function `add`.

- [`3-default-parameter.js`](./3-default-parameter.js) - Parameter defaults. Modify the following function's parameters default values to follow the new specification.

- [`4-rest-parameter.js`](./4-rest-parameter.js) - Rest parameter syntax for functions. Modify the following function to return the number of arguments passed to it using the rest parameter syntax.

- [`5-spread-operator.js`](./5-spread-operator.js) - The wonders of spread syntax. Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below.

- [`6-string-interpolation.js`](./6-string-interpolation.js) - ES6 string interpolation. Rewrite the return statement to use a template literal so you can the substitute the variables you've defined.

- [`7-getBudgetObject.js`](./7-getBudgetObject.js) - ES6 method properties. Rewrite the following standard `getBudgetObject` function to use ES6's property shorthand.

- [`8-getBudgetCurrentYear.js`](./8-getBudgetCurrentYear.js) - ES6 computed property names. Rewrite the following function to use ES2015's computed property names.

- [`9-getFullBudget.js`](./9-getFullBudget.js) - ES6 method properties. Rewrite the following standard `getFullBudgetObject` function to use ES6's property shorthand and method shorthand.

- [`10-loops.js`](./10-loops.js) - For...of Loops. Rewrite the function `appendToEachArrayValue` to use ES6's `for...of` operator.

- [`11-createEmployeesObject.js`](./11-createEmployeesObject.js) - Iterator. Write a function named `createEmployeesObject` that will receive two arguments:

  - `departmentName` (String)
  - `employees` (Array of Strings)

  Return an object containing the department. The object's key is the `departmentName` value and the value is a list of employees who work in the department.

- [`12-createReportObject.js`](./12-createReportObject.js) - Iterator. Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`. Return an object containing the following key/value pairs:

  - `allEmployees` - the value returned by invoking `getAllEmployees` on `employeesList`
  - `getNumberOfDepartments` - the number of departments in `employeesList`
  - `getNumberOfEmployeesByDepartment` - the number of employees per department in `employeesList`
