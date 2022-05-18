

export function Copy(){
    navigator.clipboard.writeText("Test");
    var popup = document.getElementById("Copy");
    popup.classList.toggle("show");
}