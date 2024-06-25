function check(){
    inp = document.getElementById("nick").value;
    popup = document.querySelector('.popup');
    cont = document.querySelector('.container');
    if(inp == "chhotu" || inp == "Chhotu"){
        popup.style.display = "none";
        cont.style.overflowY = "scroll";
    }
}
