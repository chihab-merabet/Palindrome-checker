document.getElementById("check-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const input = document.getElementById("text-input").value.trim();
    const result = document.getElementById("result");
    if (input === "") {
        alert("Please input a value");
        return;
    }
    const normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    const isPalindrome = normalizedInput === normalizedInput.split("").reverse().join("");
    if (isPalindrome) {
        result.textContent = `${input} is a palindrome`;
    } else {
        result.textContent = `${input} is not a palindrome`;
    }
});