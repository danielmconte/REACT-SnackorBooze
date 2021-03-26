### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    Client-side routing- change 'page' without making http request (browser handles URL changes)
- What is a single page application?
    Does not need to load separate pages
- What are some differences between client side and server side routing?
    Server side is making routing http requests, a client side is only using the browser (the client)
- What are two ways of handling redirects with React Router? When would you use each?
  a)Placing a <Redirect /> at the bottom of <Switch></Switch> routes 
  b) using useHistory, which allows for the use of the back button in browser

- What are two different ways to handle page-not-found user experiences using React Router? 
  a) Put a route at the bottom of your switch routes that serves as a catch-all for unknown routes.
  b) ...

- How do you grab URL parameters from within a component using React Router?
  You can use useParams()

- What is context in React? When would you use it?
  State that you can call from a mini-store, instead of prop drilling.  Used when there is not enough state to require Redux, but enough that passing it through multiple components is tedious. 

- Describe some differences between class-based components and function
  components in React.
  Functional components do not require constructor and 'this' keyword.  They use useEffect in place of the lifecycle methods.  Hooks are simpler to use with functional components.

- What are some of the problems that hooks were designed to solve?
  Simpler to handle state, allows for custom hooks to encapsulate logic that is used mulitiple times.