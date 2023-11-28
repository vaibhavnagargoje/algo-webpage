

function clr() {
    document.getElementById("info").textContent = " ";
    document.getElementById("box").style.display = 'none';
}

function fibonacci() {
    document.getElementById("box").style.display = 'block';
    document.getElementById("info").textContent = ` The Fibonacci series is the sequence of numbers (also called 
    Fibonacci numbers), where every number is the sum of the 
    preceding two numbers, such that the first two terms are 
    '0' and '1'. The formula to find the (n+1)th term in the 
    sequence is defined using the recursive formula, such that
    F0 = 0, F1 = 1 to give Fn.`;
}

function plaindrome() {
    document.getElementById("box").style.display = 'block';
    document.getElementById("info").textContent = ` A string is said to be palindrome if it remains the same on reading
    from both ends. It means that when you reverse a given string,
    it should be the same as the original string. For instance,
    the string 'level' is a palindrome because it remains the same
    when you read it from the beginning to the end and vice versa.`;
}

function multi() {
    document.getElementById("box").style.display = 'block';
    document.getElementById("info").textContent = `Matrix multiplication is the mathematical operation that is performed
    on two matrices which when multiplied gives a singular matrix. 
    It is possible only if the number of columns in the 1st matrix is 
    equal to the number of rows in the 2nd matrix. If “A = [aij]m×n” 
    and “B = [bij]n×p” are two matrices, then the product of A and B 
    is denoted as AB, whose order is “m × p.”`;
}

function strassen() {
    document.getElementById("box").style.display = 'block';
    document.getElementById("info").textContent = `In linear algebra, the Strassen algorithm, named after Volker Strassen,
    is an algorithm for matrix multiplication. It is faster than 
    the standard matrix multiplication algorithm for large matrices, 
    with a better asymptotic complexity, although the naive algorithm 
    is often better for smaller matrices. `;
}

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("button");
    btn.addEventListener("click", function () {
        const frm = document.getElementById("program");
        const frame = document.getElementById("display");
        const slt = document.getElementById("opt");
        const value = slt.value;
        if (value=="factorial") {
            console.log(value);
            frame.setAttribute("src","Fibonacci/fibonacci.html");
            frm.style.display = "block";
        }
        else if (value=="palindrome"){
            frame.setAttribute("src","palindrome/index.html")
            frm.style.display='block'
            
        }
        else if (value=="matrix"){
            console.log(value);
            frame.setAttribute("src","Matrix/matrix.html");
            frm.style.display = "block";
        }
        else if (value=="strassen"){
            console.log(value);
            frame.setAttribute("src","Strassens/strassen.html");
            frm.style.display = "block";
        }
        else{
            alert("Please Select an Algorithm");
            frm.style.display = "none";
        }
        // frm.style.display = "block";
    });
});