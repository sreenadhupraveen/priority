Advantages of using arrays: 
------------------------------------------


Arrays allow random access to elements. This makes accessing elements by position faster.
Arrays have better cache locality that makes a pretty big difference in performance.
Arrays represent multiple data items of the same type using a single name.


isadvantages of using arrays: 
------------------------------------------
You can’t change the size i.e. once you have declared the array you can’t change its size because of static memory allocation. Here Insertion(s) and deletion(s) are difficult as the elements are stored in consecutive memory locations and the shifting operation is costly too.
Now if take an example of implementation of data structure Stack using array there are some obvious flaw. 
Let’s take the POP operation of the stack. The algorithm would go something like this. 

Check for the stack underflow
Decrement the top by 1
So there what we are doing is that, the pointer to the topmost element is decremented means we are just bounding our view actually that element stays there taking up of the memory space. If you have any primitive datatype then it might be ok but the object of an array would take a lot of memory.