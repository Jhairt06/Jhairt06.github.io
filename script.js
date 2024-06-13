const inputElement = document.getElementById("text-input");
const result = document.getElementById("result")
let reversedInput = ""
let inputValue = ""
const button = document.getElementById("check-btn")


button.onclick = function() {
    if (inputElement.value === "") {
        alert("Please enter an input")
    } else {
        inputValue = inputElement.value;
        console.log(inputValue); 
        reversedInput = inputValue.split("").reverse().join("");
        console.log(reversedInput)
        let isPalindrome = reversedInput === inputValue ? true : false; 

        if (isPalindrome) {
            result.textContent = `${inputElement.value} is a Palindrome`
        } else {
            result.textContent = `${inputElement.value} is not a Palindrome`
        }
        inputElement.value = ""
    }
}


