/*

                        JAVASCRIPT EXECUTION CONTEXT

            Whenever -> Code -> Global Execution context is created 
            -which is then refered to a thread

            Type of Execution Context -
                                1) Global Execution Context
                                2) Function/Functional Execution Context
                                3) Eval Exeecution Context(in mongoose)
            
            while executing code we have :
                                        1) Memory Phase
                                        2) Execution Phase


    Lets take an example,

    let val1 = 20
    let val2 = 5
    function addNum(num1, num2){
        let total = num1 + num2
        return total
    }
    let result1 = addNum(val1, val2)
    let result2 = addNum(5, 7)


 STEPS:

 1) Global execution


 2) Memory Phase - space is created for all the declared variables
            -val1 -> Undefined
            -val2 -> Undefined
            -addNum -> definition
            -result1 -> Undefined
            -result2-> Undefined

3) Execution Phase (assigns value)
            -val1 ->20
            -val2 ->5
            -addNum -> when we come to an fucntion in the execution phase 
                       its creates its own Execution phase/context
            -result1 =25
            -result2 = same steps again
   __________________
   | new variable   | ------------->Memory Phase
   | environtment   |           -val1 ->undefined
   |        +       |           -val2 ->undefined
   |  Execution     |           -total ->undefined
   |    thread      | -------------->Execution Phase            
   |                |            -num1-20
   __________________            -num2-5
                                 -total-25---> then this total is returned to global execution context or 1st step

After execution of the function the above box is deleted

Similarly for each function this sandbox is created and stuffs are executed


Now because of this the MEMORY PHASE and EXCUTION PHASE is executed for the number of times the function will be executed


CALL STACK

Bacially ek stack hai jisme global execution hota hai, usme function aata hai execute hone ke baad nikal jaata hai

but in cases when we function inside a function then we follow the concept of LIFO
jo function last aaya hota hai vo sabse pehle bahar jaata hai
*/