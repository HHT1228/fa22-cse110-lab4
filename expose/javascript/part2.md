# Expose Part 2

1.  What will happen at line 12 and why? If the code causes an error, explain why. 

    ```3``` will be printed without error. ```i``` is declared as a ```var```, which gives it the function scope. It can be accessed anywhere in the function ```discountPrices()``` once it is defined. Since ```i``` is initialzied at declaration, line 12 will not cause error. Inside the loop, ```i``` is updated each iteration. The input has a length of 3 and loop terminates when ```i >= 3```. So the printed value will be 3.

2.  What will happen at line 13 and why? If the code causes an error, explain why.

    ```150``` will be printed without error. ```discountedPrice``` is declared within the function as a ```var```, which allows access from anywhere inside the function. There will be no error. Inside the for loop, ```discountedPrice``` is updated constantly by ```prices[i] * (1 - discount)```. In this particular case, the last input is 300 and the discount is 0.5, so the value after the last iteration will be 150.

3.  What will happen at line 14 and why? If the code causes an error, explain why.
   
    ```150``` will be printed without error. ```finalPrice``` is declared in the function as a ```var``` with value initialized, thus there will be no error. It is updated in the for loop once each iteration. In this particular case, the value will be 150 after the loop termiantes.

4.  What will this function return? Give a brief explanation why. If the code causes an error, explain why.

    It will return an array ```[50, 100, 150]```. The discounted values are calculated using the math expressions inside the for loop, which converts 100 to 50, 200 to 100, and 300 to 150. They were pushed into the ``discounted[]`` in that order. It will not cause error becasue every variables are properly defined, updated, and accessed within scope and without contamination.

5.  What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5))
   
    An error will occur, nothing valid will be printed. ```i``` was declared inside the for-loop block as ```let```, which prohibits the access from outside. The print statement will try to access it and thus cause error. There is no such variable ```i``` outside of the for-loop block.

6.  What will happen at line 13 and why? If the code causes an error, explain why.

    An error will occur, nothing valid will be printed. ```discountedPrice``` was declared inside the for-loop block as a ```let```, which prohibits the attempt to access it from outside of that block. The print will attempt to access it, and there is no such variable outside of the scope. This causes an error.

7.  What will happen at line 14 and why? If the code causes an error, explain why.
   
    ```150``` will be printed without error. Although decalred as ```let```, ```finalPrice``` is declared within the same scope (function scope) as when it is later accessed at line 13. Thus, there will be no error. The value is updated in the for loop and become 150 at the loop's termiantion (same as Q3).

8.  What will this function return? Give a brief explanation. If the code causes an error, explain why.

    ```[50, 100, 150]``` The only difference between this function and the previous one is the ```var``` variables become ```let```. As long as they are accessed and modified within the correct scope, which is exactly the case, the output will be the same without error.

9.  What will happen at line 11 and why? If the code causes an error, explain why.
    
    An error will occur, nothing valid will be printed. Same as Q5, ```i``` is a let in the for-loop block. The access attempt made by line 11 will be invalid. There is no such variable.

10. What will happen at line 12 and why? If the code causes an error, explain why.
    
    ```3``` will be printed without error. ```length``` is declared in the same scope as line 12 and is initialzied as the lenght of input array (which is 3 in this case). The constant variable is not modified later, so no error will occur.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    
    ```[50, 100, 150]``` without error. Althoug there is some difference in code, the mathematical result for this particular set of input will not change. In terms of syntax, all variables are declared, modified, and accessed in the correct scope. ```const``` values are used but not reassigned. There will be no error.

## Data Types

12. Given the above Object, write the notation for:  (These should be in your part2.md)
    
    A.  Accessing the value of the name property in the student object  
        ```student.name;```
    
    B.  Accessing the value of the Grad Year property in the student object   
        ```student['Grad Year']```

    C.  Calling the function for the greeting property in the student object   
        ```student.greeting();```
    
    D.  Accessing the name property of the object in the Favorite Teacher property in student   
        ```student['Favorite Teacher'].name```
    
    E. Access index zero in the array of the courseLoad property of the student object   
        ```student.courseLoad[0]```

## Basic Operators & Type Conversion

13. Arithmetic
    
    A.  '3' + 2 = **32**   
    string '3' is read as-is, '2' appended to it. ```+``` operation can also mean append to string. Whne string'3' comes first, it becomes append instead of add.   
    
    B.  '3' - 2 = **1**   
    '3' is converted to number 3. Unlike ```+```, ```-``` is arithmetic

    C.  3 + null = **3**   
    null is mapped to 0   

    D.  '3' + null = **3null**   
    '3' read as-is, and string 'null' appended to it  

    E.  true + 3 = **4**   
    true is mapped to 1  

    F.  false + null = **0**   
    Both false and null map to 0   

    G.  '3' + undefined = **3undefined**   
    '3' read as-is, and string'undefined' appended to it

    H.  '3' - undefined = **NaN**
    ```-``` is arithmetic, and you cannot subtract undefined from a string. The result is undefined.

14. Comparison
    
    A.  '2' > 1 **true**   
    string '2' becomes a number 2

    B.  '2' < '12' **false**   
    First char '2' is greater than first char of '12' (which is '1')

    C.  2 == '2' **true**   
    string '2' becomes a number 2

    D.  2 === '2' **false**   
    Strict equality operator ```===``` checks without type conversion. 2 and '2' are of different types, so false

    E.  true == 2 **false**   
    When one of the values is number, javascript will convert both to number if possible then execute strict comparison. In this case, true is converted to 1, and then compared with 2. Thus giving false.

    F.  true === Boolean(2) **true**  
    The explicit ```Boolean()``` conversion converts 2 to true. Then the strict comparisoin gives true.

15. Explain the difference between the == and === operators.

    == compares the value with type conversion while === (strict comparison) compares without type conversion. ```2 == '2'``` will be true while ```2==='2'``` will not.

## Loops

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)
    
    Answer code given in ```part2-question16.js```
    
## Functions

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    
    ```[2, 4, 6]``` will be the result. The function ```modifyArray()``` iterates through the input array and modifies each value using the ```callback()``` function. In this case, ```callback()``` doubles the value of each array element. Inputing ```[1, 2, 3]``` gives ```[2, 4, 6]```

## setInterval(), setTimeout(), clearTimeout()

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)
    
    Anser code in ```part2-question18.js```

19. What is the output of the above code? (This should be in your part2.md)

    Output:   
    1  
    4  
    3  
    2  




      