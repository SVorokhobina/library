function toggleMenu() {
    document.getElementsByClassName("header_dropdown-menu_content")[0].classList.toggle("showMenu");
    
    let x = document.getElementsByClassName("header_dropdown-menu_content")[0];
    if (x.classList.contains("showMenu") == true) {
        document.getElementById("header_dropdown-menu_icon").src = "./images/svg-icons/header_dropdown_menu_open.svg";
        document.getElementById("header_dropdown-menu_icon").style.margin = "0px auto 0px 4px";
    } else {
        document.getElementById("header_dropdown-menu_icon").src = "./images/svg-icons/header_dropdown_menu_closed.svg";
        document.getElementById("header_dropdown-menu_icon").style.margin = "5px 0px auto 0px";
    }
}
  
/* To close the menu, if we click outside of the button (class="header_dropdown-menu_button") */
/* window.onclick = function(event) {
    if (event.target.matches(".header_dropdown-menu_button") != true) {
        let x = document.getElementsByClassName("header_dropdown-menu_content")[0];
        if (x.classList.contains("showMenu") == true) {
            x.classList.remove("showMenu");
             document.getElementById("header_dropdown-menu_icon").src = "./images/svg-icons/header_dropdown_menu_closed.svg";
            document.getElementById("header_dropdown-menu_icon").style.margin = "5px 0px auto 0px";
        }
    }
}*/