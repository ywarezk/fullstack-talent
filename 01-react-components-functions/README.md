## React components as functions

### About JSX

jsx is extension for js that allows us to write html like syntax
that syntax will be translated to

```
React.createElement(...)
```

The translation is done with a compiler called babel.

https://www.youtube.com/watch?v=s_ctvfeA58c

### Component class render function

the function is like the render in a class component

### Explain props in react components

props is read only data that is transferred from parent component, child component
class component: this.props
function component: as argument to the function

### JS - explain about this

in other languages this is used in class, this represents the instance of the class

in js this is dynamic represents the caller

### Explain state in React component

- usually we decide how the component will be rendered (paint itself) based on the state
- state is changed the component will rerendered (refresh the paint)
- class component state is a property in the class
- you call this.setState to change the state.
- function you use state with the hook **useState**
- useState will return something from the state
- useState gets the initial value of that state
- to set the state you call the function you get from useState

### Lifecycle of a component

### What is Closure?

where js is looking for variables
inner function
outer functions
window

when js is creating the function
it will save the outer function environment




