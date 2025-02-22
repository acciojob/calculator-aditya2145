//your code here
const inputField = document.getElementById("input");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.id;

        if (id.startsWith("block")) {
            inputField.value += button.innerText;
        } else if (id === "dot") {
            inputField.value += ".";
        } else if (id === "plus") {
            inputField.value += "+";
        } else if (id === "minus") {
            inputField.value += "-";
        } else if (id === "multiply") {
            inputField.value += "*";
        } else if (id === "divide") {
            inputField.value += "/";
        } else if (id === "ans") {
            try {
                inputField.value = eval(inputField.value);
            } catch (error) {
                inputField.value = "Error";
            }
        } else if (id === "clr") {
            inputField.value = "";
        }
    });
});
