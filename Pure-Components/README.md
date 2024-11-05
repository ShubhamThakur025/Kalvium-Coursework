![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

### Learning Goals:

This lab aims to target the concept of `Pure Components`.

### Introduction:

The task is simple, you have to create a counter functionality using `class component`.
The only condition is that -> you can only increament the counter -> if the value of `toggle` is true, where
`toggle` is a boolean type variable - which changes it's value between true/false, everytime you click on the `Set toggle` button.
Initially the value of `toggle` should be false; and you can set the value of `toggle` to be true by clicking on a button called `Set toggle`. Once the value of `toggle` is true, you can increament the counter by one -> by clicking on the `increament` button, as shown below.

Your task is to implement, the above problem statement using class component which extends - 
1. Component
2. PureComponent


![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/pure-component-react.gif)


#### Steps to follow:

1. create a new react app.
2. inside `src` folder, create a new folder `components`.
3. inside `components` folder, create two components -

     1. `SimpleCounterComponent.jsx`
     2. `PureCounterComponent.jsx`

4. inside `SimpleCounterComponent.jsx`, you create a counter functionality as described above using `class component`. In this component, the class should extend `Component`.
5. inside `PureCounterComponent.jsx` you create a counter functionality as described above using `class component`. But in this case, extend the class with `Pure Component`.
6. Render both the components inside `App.jsx`.

#### Question:

As mentioned before, this lab is all about targeting the idea of `Pure Components`, so after completeing the above task answer the question given below-> 

1. Inside `SimpleCounterComponent.jsx` -> after you render and before you return the jsx --> print out the following --> console.log(`This is Simple Component`) ie:

   ```jsx

   class SimpleCounterComponent extends Component {

    <!-- your logic for the above problem -->

    render(){
      console.log("This is Simple Component")
      return(

        <!-- your jsx for the above problem -->

      )
    }
   }

   ```

2. Similarly, console.log(`This is Pure Component`), inside `PureCounterComponent.jsx` file.

You will see your console, in the similar manner as shown below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/pure-component-react-console.gif)

**Question:** Which out of the two components (which are performing the same functionality) is performing better and how?

You can write your answer by creating a new markdown file, named as -> `Answer.md`, inside the `src` folder.

Happy Coding ❤️!
