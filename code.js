let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let coun = document.querySelector(".count");
let count = 0;
coun.innerText = `( ${count} )`;
btn.addEventListener("click", function () {
    
    if (inp.value == "") {
        alert("please enter the task!!")
       this.addEventListener.remove();
    }
    let list = document.createElement("li");
    list.innerText = inp.value;

    let del = document.createElement("span");
    del.innerText = "delete";
    del.classList.add("material-symbols-outlined");

    ul.appendChild(list);
    list.appendChild(del);
    count+=1;
    inp.value = "";
    coun.innerText = `( ${count} )`;
    // prompt("Task add successfull");
});

ul.addEventListener("click",function (event) {
    if (event.target.nodeName == "SPAN") {
       
        let list = event.target.parentElement;
        list.remove();
        count-=1;
    }
    coun.innerText = `( ${count} )`;
});


