let choose_buttons = document.querySelectorAll(".choose_season_button");
let isEnabled = true;
let book_sets = document.querySelectorAll(".book_set");


function swapBookSets(next_season) {
    isEnabled = false;
    document.querySelector(".book_set.shown").classList.add("to-fade-out");
    document.querySelector(".book_set.shown").addEventListener("animationend", function() {
        this.classList.remove("to-fade-out", "shown");
        
        next_season.classList.add("next", "to-fade-in");
        next_season.addEventListener("animationend", function() {
            this.classList.remove("to-fade-in", "next");
            this.classList.add("shown");
            isEnabled = true;
        });
    });
}

function chooseSeason_winter() {
    if (isEnabled) {
        if ( (document.querySelector(".choose_season_button.winter input").checked == true) &&
            (document.querySelector(".book_set.shown").classList.contains("winter") !== true) ) {            
                let season = document.querySelector(".book_set.winter");
                swapBookSets(document.querySelector(".book_set.winter"));
        }
    }        
}

function chooseSeason_spring() {
    if (isEnabled) {
        if ( (document.querySelector(".choose_season_button.spring input").checked == true) &&
            (document.querySelector(".book_set.shown").classList.contains("spring") !== true) ) {
                let season = document.querySelector(".book_set.spring");
                swapBookSets(document.querySelector(".book_set.spring"));
        } 
    }   
}

function chooseSeason_summer() {
    if (isEnabled) {
        if ( (document.querySelector(".choose_season_button.summer input").checked == true) &&
            (document.querySelector(".book_set.shown").classList.contains("summer") !== true) ) {
                let season = document.querySelector(".book_set.summer");
                swapBookSets(document.querySelector(".book_set.summer"));
        } 
    }   
}

function chooseSeason_autumn() {
    if (isEnabled) {
        if ( (document.querySelector(".choose_season_button.autumn input").checked == true) &&
            (document.querySelector(".book_set.shown").classList.contains("autumn") !== true) ) {
                let season = document.querySelector(".book_set.autumn");
                swapBookSets(document.querySelector(".book_set.autumn"));
        }
    }    
}


/*function swapBookSets(season) {
    isEnabled = false;
    document.querySelector(".book_set.shown").classList.add("to-fade-out");
    document.querySelector(".book_set.shown").addEventListener("animationend", function() {
        this.classList.remove("to-fade-out", "shown");
        
        for (let i = 0; i < book_sets.length; i++) {
            if (book_sets[i].classList.contains(season)) {
                book_sets[i].classList.add("next", "to-fade-in");
                book_sets[i].addEventListener("animationend", function() {
                    this.classList.remove("to-fade-in", "next");
                    this.classList.add("shown");
                    isEnabled = true;
                });
            }
        }
    });
}

choose_buttons.forEach(radio => {
    radio.addEventListener("click", function() {
        if (isEnabled) {
            if ( (radio.classList.contains("spring")) &&
                (document.querySelector(".book_set.shown").classList.contains("spring") !== true) ) {            
                    swapBookSets("spring");
                    console.log(document.querySelector(".choose_season_button.winter input").checked,
                    document.querySelector(".choose_season_button.spring input").checked,
                    document.querySelector(".choose_season_button.summer input").checked,
                    document.querySelector(".choose_season_button.autumn input").checked);
            } else if ( (radio.classList.contains("summer")) &&
                (document.querySelector(".book_set.shown").classList.contains("summer") !== true) ) {            
                    swapBookSets("summer");
                    console.log(document.querySelector(".choose_season_button.winter input").checked,
                    document.querySelector(".choose_season_button.spring input").checked,
                    document.querySelector(".choose_season_button.summer input").checked,
                    document.querySelector(".choose_season_button.autumn input").checked);
            } else if ( (radio.classList.contains("autumn")) &&
                (document.querySelector(".book_set.shown").classList.contains("autumn") !== true) ) {            
                    swapBookSets("autumn");
                    console.log(document.querySelector(".choose_season_button.winter input").checked,
                    document.querySelector(".choose_season_button.spring input").checked,
                    document.querySelector(".choose_season_button.summer input").checked,
                    document.querySelector(".choose_season_button.autumn input").checked);
            } else if ( (radio.classList.contains("winter")) &&
                (document.querySelector(".book_set.shown").classList.contains("winter") !== true) ) {            
                    swapBookSets("winter");
                    console.log(document.querySelector(".choose_button.winter input").checked,
                        document.querySelector(".choose_button.spring input").checked,
                        document.querySelector(".choose_button.summer input").checked,
                        document.querySelector(".choose_button.autumn input").checked);
            }
        }  
    });
});*/





/*
function chooseSeason(season) {
    for (let i = 0; i < choose_buttons.length; i++) {
        if ((isEnabled) && (choose_buttons[i].classList.contains(season)) && 
        (choose_buttons[i].getElementsByTagName("input[name='season_favorites']").checked == true) &&
        (document.querySelector(".book_set.shown").classList.contains(season) !== true)) {

            swapBookSets(season); 
        }
    }
}



function swapBookSets(next_season) {
    isEnabled = false;
    document.querySelector(".book_set.shown").classList.add("to-fade-out");
    document.querySelector(".book_set.shown").addEventListener("animationend", function() {
        this.classList.remove("to-fade-out", "shown");
        
        next_season.classList.add("next", "to-fade-in");
        next_season.addEventListener("animationend", function() {
            this.classList.remove("to-fade-in", "next");
            this.classList.add("shown");
            isEnabled = true;
        });
    });
}*/

/*function chooseSeason_winter() {
    if (isEnabled) {
        if ( (document.querySelector(".choose_season_button.winter input").checked == true) &&
            (document.querySelector(".book_set.shown").classList.contains("winter") !== true) ) {            
                let season = document.querySelector(".book_set.winter");
                swapBookSets(document.querySelector(".book_set.winter"));
        }
    }        
}

function chooseSeason_spring() {
    if (isEnabled) {
        if ( (document.querySelector(".choose_season_button.spring input").checked == true) &&
            (document.querySelector(".book_set.shown").classList.contains("spring") !== true) ) {
                let season = document.querySelector(".book_set.spring");
                swapBookSets(document.querySelector(".book_set.spring"));
        } 
    }   
}

function chooseSeason_summer() {
    if (isEnabled) {
        if ( (document.querySelector(".choose_season_button.summer input").checked == true) &&
            (document.querySelector(".book_set.shown").classList.contains("summer") !== true) ) {
                let season = document.querySelector(".book_set.summer");
                swapBookSets(document.querySelector(".book_set.summer"));
        } 
    }   
}

function chooseSeason_autumn() {
    if (isEnabled) {
        if ( (document.querySelector(".choose_season_button.autumn input").checked == true) &&
            (document.querySelector(".book_set.shown").classList.contains("autumn") !== true) ) {
                let season = document.querySelector(".book_set.autumn");
                swapBookSets(document.querySelector(".book_set.autumn"));
        }
    }    
}*/