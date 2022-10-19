# Expose Part 1

1. What is printed by line 9? If the code returns an error, explain why.

    ```values added: 20``` Since result, within the if block, equals to num1 + num2, which is 10 + 10 = 20.

2. What is printed by line 13? If the code returns an error, explain why. 

    ```final result: 20``` Result is declares as ```var``` and is computed to be 20 inside the if block. Since var can be accessed regardless of the block, it is still 20 outside of the if block (inside of the function).

3. What is printed by line 9? If the code returns an error, explain why.
   
   ```values added: 20``` Since result, declared and modified within the if block, equals to num1 + num2, which is 10 + 10 = 20.

4. What is printed by line 13? If the code returns an error, explain why.
   
   Line 13 will not be able to print a valid result. ```result``` is declared as ```let``` in the if-block, which prohibits the attempt to access it outside of the block. There is no variable of the same name declared out side, so the ```result``` in line 13 is not referring to any valid value. Nothing can be printed.

5. What is printed by line 9? If the code returns an error, explain why.
   
   Nothing valid, an error. ```result``` is declared as ```const``` type, which cannot be reassigned once declared. The attempt to reassign ```result``` in line 7 will cause an error.

6. What is printed by line 13? If the code returns an error, explain why.
   
   Nothing valid, an error. Same as ```let result```, ```const result``` has its scope confined within the if-block. The attempt to access it outside of the block in line 13 will fail.
   
