1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- Array: map, filter, reduce
- Object: Object.assign({}, newElement)

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- actions: actions are essentially contracts that tell our reducers how to update our application state. Sometimes actions will also provide some data that can be used by the reducer to update the application state as well

- reducers: reducers are modelled after the JS native reduce method which will take some type of accumulator, create a new array and then take additional elements from an original array and merge (reduce) it into the accumulator. In the context of Redux, our reducers are functions that take a current state and an action. The action will tell the reducer how to turn the current state into our updated state. It's important to note that our reducers are actually writing to our current state but rather creating a new clone of the current state and then making necessary changes

- store: the store in Redux is an object where our application state lives. The reason why we call our store the 'single source of truth' is that is holds all the application state for our React application. Components in React can then choose to connect to the store to bring in whatever data is necessary to build the components as props. The store cannot be directly written to, but rather can only be updated by dispatched actions.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- The difference between Application and Component state is that application state is global and can be thought of as accessible to components on a needed basis. Component state is local to the component that holds the state - the component can then pass down its state to children using props. Application state is good when you want to avoid the problem of data being isolated in components. If all our state is in components - getting that state to parent and sibling components can be very tricky - especially as applications get large and complex. Component state can be a great quick solution for small applications or in cases where we don't need to pass around our state much outside of the component holding it.

4.  What is middleware?
- Middleware in Redux allows us to intercept actions before they reach reducers by passing and returning a function into an action creator vs an action. This gives us a lot of control within the action creator to queue up different types of activity before a reducer updates our state. A common use case that we looked at this week is making asynchronous calls using axios before dispatching actions to hydrate our store

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- redux-thunk allows us to implement middleware in our action creators by allowing us to return a function (a thunk) instead of a object from an action creator. Our thunk will have access to the dispatch function which will allow us to escape from the action creator, at the point where we are ready for our action to be sent to our reducer

6.  Which `react-redux` method links up our `components` with our `redux store`?
- the connect method links up our components with our redux store
