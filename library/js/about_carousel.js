let left_offset = 0;
let current_photo = 0;
let photo_train = document.querySelector(".carousel_photo-train");
let left_is_enabled = false;
let right_is_enabled = true;
let right_limit = 2350 - photo_train.offsetWidth;
let buttons = document.querySelectorAll(".about_pagination-button_clickable");

/* Arrow buttons are disabled at the edges */
function checkLeftArrow(offset) {
    if (offset >= 0) {
        left_is_enabled = false;
        document.querySelector(".carousel_carret_left").classList.add("arrow_disabled"); 
    } else {
        left_is_enabled = true;
        document.querySelector(".carousel_carret_left").classList.remove("arrow_disabled"); 
    }
}
    
function checkRightArrow(offset) {    
    if (Math.abs(offset) >= right_limit) {
        right_is_enabled = false;
        document.querySelector(".carousel_carret_right").classList.add("arrow_disabled"); 
    } else {
        right_is_enabled = true;
        document.querySelector(".carousel_carret_right").classList.remove("arrow_disabled"); 
    }
}

document.querySelector(".carousel_carret_left").addEventListener("click", function() {
    checkLeftArrow(left_offset);
    if(left_is_enabled) {
        left_offset = left_offset + 475;
        photo_train.style.left = left_offset + "px";
        current_photo = current_photo - 1;
        changeActiveButton(current_photo);
    }
    checkLeftArrow(left_offset);
    checkRightArrow(left_offset);      
});

document.querySelector(".carousel_carret_right").addEventListener("click", function() {
    checkRightArrow(left_offset);
    if(right_is_enabled) {
        left_offset = left_offset - 475;
        photo_train.style.left = left_offset + "px";
        current_photo = current_photo + 1;
        changeActiveButton(current_photo); 
    }
    checkLeftArrow(left_offset);
    checkRightArrow(left_offset);      
});

function changeActiveButton(n) {
    for (let button of buttons) {
        button.classList.remove("pagination-button_active");
    }
    buttons[n].classList.add("pagination-button_active");        
}

function clickButton(n) {
    changeActiveButton(n);
    left_offset = -n * 475;
    photo_train.style.left = left_offset + "px";
    current_photo = n;
    checkLeftArrow(left_offset);
    checkRightArrow(left_offset); 
}