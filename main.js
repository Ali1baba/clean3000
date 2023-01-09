let inputElement = document.createElement("input");

inputElement.type = "submit";

inputElement.id = "newInput";

divElement.appendChild(inputElement);

inputElement.addEventListener("click" , () => {
    alert(inputElement.value);
})

