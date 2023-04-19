let addProduct = document.getElementById("addProduct");
addProduct.addEventListener("click", newProduct);
let edit = document.getElementById("editProduct");
edit.addEventListener("click", newEdit);
let arr = new Array;
let indexEditProduct;


function newProduct() {
    let valueProduct = document.getElementById("valueProduct").value;
    arr.push(valueProduct);
    showProduct(arr);
}

function editProduct(value) {
    let valueProduct = document.getElementById("valueProduct");
    valueProduct.value = arr[value];
    addProduct.style.display = "none";
    edit.style.display = "grid";
    indexEditProduct = value;
}

function newEdit() {
    let valueProduct = document.getElementById("valueProduct").value;
    arr[indexEditProduct] = valueProduct;
    showProduct(arr);
}

function deleteProduct(value) {
    arr.splice(value, 1);
    showProduct(arr);
}


function showProduct(arr) {
    let tableProduct = document.getElementById("tableProduct");
    let show = "";
    show = show + "<tr><th>index</th><th> Product Name</th><th id='full' colspan='2'>" + arr.length + "</th></tr>";
    for (let i = 0; i < arr.length; i++) {
        show = show + "<tr><td>" +
            (i + 1) + "</td><td>" +
            arr[i] + "</td><td> <input type='button' value='edit' id='editBtn' onclick='editProduct(" + i + ")'></td>"
            +
            "<td><input type='button' value='delete' id='deleteBtn' onclick='deleteProduct(" + i + ")'></td>"
            + "</tr > ";
    }
    tableProduct.innerHTML = show;
}