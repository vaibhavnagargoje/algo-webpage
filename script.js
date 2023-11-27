

function clr(){
    document.getElementById("info").textContent=" ";
    document.getElementById("box").style.display = 'none';
}

function fact(){
    document.getElementById("box").style.display = 'block';
    document.getElementById("info").textContent=` The Factorial of a whole number 'n' is defined as the product of
    that number with every whole number less than or equal to 'n'
    till 1, denoted by exclamation mark (!). So if given 3!, 
    for example, it compute 3 x 2 x 1 (which = 6). 
    Formula : n!= n × (n-1) × (n-2) × (n-3) × ..... × 3 × 2 × 1.`;
}

function plaindrome(){
    document.getElementById("box").style.display = 'block';
    document.getElementById("info").textContent=` A string is said to be palindrome if it remains the same on reading
    from both ends. It means that when you reverse a given string,
    it should be the same as the original string. For instance,
    the string 'level' is a palindrome because it remains the same
    when you read it from the beginning to the end and vice versa.`;
}

function multi(){
    document.getElementById("box").style.display = 'block';
    document.getElementById("info").textContent=`Matrix multiplication is the mathematical operation that is performed
    on two matrices which when multiplied gives a singular matrix. 
    It is possible only if the number of columns in the 1st matrix is 
    equal to the number of rows in the 2nd matrix. If “A = [aij]m×n” 
    and “B = [bij]n×p” are two matrices, then the product of A and B 
    is denoted as AB, whose order is “m × p.”`;
}

function strassen(){
    document.getElementById("box").style.display = 'block';
    document.getElementById("info").textContent=`In linear algebra, the Strassen algorithm, named after Volker Strassen,
    is an algorithm for matrix multiplication. It is faster than 
    the standard matrix multiplication algorithm for large matrices, 
    with a better asymptotic complexity, although the naive algorithm 
    is often better for smaller matrices. `;
}