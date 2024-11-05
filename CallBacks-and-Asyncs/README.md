![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

## How to approach this lab:
This lab targets the idea of callback functions along with async and promises. This lab should be completed step by step - following all the instruction given below. 
You need to solve this lab in the order given below:

1. withoutCallback.js
2. callback.js


**NOTE:** There is only one ***html*** file, in this lab. So, you need to change the ***src***, in ***index.html*** file, in order to run a particular js file.
For eg: 
If I want to run callback.js file, then change the ***src="withoutCallback.js"*** to ***src="callback.js"*** .

If you are stuck, go to ***help.md*** file and seek out the hints given.

## Starter Code:
Each javascript file, consists of two variables:
1. cookies - it is a list of objects, consisting of name of couple of cookies.
2. newCookie - it stores the name of a new cookie.

## Instruction to withoutCallback.js :
1. create a function to get all the cookies from **cookies** list. 
   **Note:** Make sure your naming pattern is describing what you are doing from the above function.
2. inside the above function - use in built js function ***setTimeout()*** function, and inside this function -> print all the cookies on your browser. --> keep the time to be = 1000.
3. create another function to create a cookie. In this function too -> use ***setTimeout()*** function and inside this function -> push **newcookie**, to your **cookies** list. keeping the time to be 2000.
4. then call both functions.
5. check whether the third cookie, you added is being printed or not.

## Instruction to callback.js :
1. copy the entire code from **withoutCallback.js**, and add a callback function just after you push the new cookie to your cookies list. 
2. just call the function which creates the cookie for you.
3. check whether - now the third cookie is being printed on your browser or not.


Happy Coding Kalvium❤️