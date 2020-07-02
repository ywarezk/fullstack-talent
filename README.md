# FullStack training

This repo contain fullstack training given in July 2020

## Lecture

Yariv Katz

## Video lectures

https://www.youtube.com/user/ywarezk

### Questions that interviewers like to "dig" on

#### JS

- const / let / var ? 
  - Scope
  - Number of assignments 

  if var is outside of function, in browser it will be attached to window / available in the file that is depends on use strict usage

  var in node will never be global they will available inside the file.

- lambda function === arrow function / this

- prototype

prototype is an object that contain properties and methods

```
{
    toString: () => ...
    length: 5,
    __proto__
}
```

```
class Person1 {
    sayHello() {
        console.log(this);
    }

    sayHello2 = () => {
        console.log(this);
    }
}

class Student extends Person1 {
    sayHello2 = () => {
        super.sayHello2();            
    }
}
```

- Promise

### React

- VirtualDOM
- render
- hooks
  - useState - set the component state
  - useEffect - assign a callback after render
  - useContext - a shortcut for using context +
  - useCallback - they are used to not recreate variables and function
  - useMemo - 
  - useRef - ref, save a variable that will not be recreated
  - custom hooks
    - interviewer can give you 2 function components +
- context
- HOC - function that wraps our component to create a stronger component + 
- render props - create composition similar to HOC +
- Forms - how to deal with forms: 
  - controlled - save the form in the state
  - uncontrolled - grab the values when the form is submitted ref
  - Formik
- redux
  - action
  - reducer
  - for async stuff: redux-thunk, redux-saga, redux-promise, redux-promise, redux-epics

### H.W

- render props + HOC + custom hooks = https://www.youtube.com/watch?v=CAobBdYor6U
- redux = https://www.youtube.com/watch?v=7pZmBah66zE
- Express introduction = https://www.youtube.com/watch?v=I0REjv7kapY

### Node + MongoDb

- Express
  - middleware pattern app.get('/hello', (req, res, next) => ...)
  - 
- Authentication - JWT
- REST
- DB
  - Mongo
- ORM
- mongoose + 
- relations / association
  - one2one
  - one2many
  - many2many
- index


  

