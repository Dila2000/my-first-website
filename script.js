function showMessage(){
    alert("Email: dilshandissanayake769@gmail.com");
}

function toggleTheme(){
    document.body.classList.toggle("dark-mode");
}

let text = "Dilshan Dissanayake";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}

typing();

let count = localStorage.getItem("visits");

if(count == null){
    count = 1;
}else{
    count++;
}

localStorage.setItem("visits", count);

document.getElementById("visits").innerHTML =
"Visits: " + count;
