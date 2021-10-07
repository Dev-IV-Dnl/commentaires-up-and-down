let cards = document.querySelectorAll(".card");
let btnNext = document.querySelector(".btnNext");
let btnPrev = document.querySelector(".btnPrev");
tabColors = ["darkseagreen", "purple", "rgb(0, 195, 255)", "rgb(255, 151, 151)", "lightblue", "lightseagreen", "lightgreen", "black", "darkgreen", "darkblue", "darkred"];
let identite = document.querySelectorAll(".identite");
let description = document.querySelectorAll(".description");


btnNext.addEventListener("click", () => {
    for (i = 0; i < cards.length; i++) {
        console.log((i + 1) * 350)
        if (cards[i].style.transform == "" || cards[i].style.transform == "translate(0px, 0px)") {
            console.log("Je transforme une 1ère fois");
            cards[i].style.transform = "translate(0px, -350px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -350px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -700px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -700px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -1050px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -1050px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -1400px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -1400px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -1750px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -1750px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -2100px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        }
    }
})

btnPrev.addEventListener("click", () => {
    for (i = 0; i < cards.length; i++) {
        if (cards[i].style.transform == "translate(0px, -350px)") {
            console.log("Je transforme une 1ère fois");
            cards[i].style.transform = "translate(0px, 0px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -700px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -350px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -1050px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -700px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -1400px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -1050px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -1750px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -1400px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        } else if (cards[i].style.transform == "translate(0px, -2100px)") {
            console.log("Je transforme une 2ème fois");
            cards[i].style.transform = "translate(0px, -1750px)";
            cards[i].style.backgroundColor = tabColors[Math.floor(Math.random() * tabColors.length)];
            if (cards[i].style.backgroundColor == "black" || cards[i].style.backgroundColor == "purple" || cards[i].style.backgroundColor == "darkgreen" || cards[i].style.backgroundColor == "darkblue" || cards[i].style.backgroundColor == "darkred") {
                identite[i].style.color = "#F1F1F1";
                description[i].style.color = "#F1F1F1";
            } else {
                identite[i].style.color = "black";
                description[i].style.color = "black";
            }
        }
    }
})

// for(let i in allcardss) {
//     allcardss[i].addEventListener("click", () => {
//         if(allcardss[i]==cards1) {
//             cards1.style.display = "none";
//             cards2.style.display = "flex";
//         } else if(allcardss[i] == cards2) {
//             cards2.style.display = "none";
//             cards3.style.display = "flex";
//         } else if(allcardss[i] == cards3) {
//             cards3.style.display = "none";
//             cards1.style.display = "flex";
//         }
//     })
// }


// btn.addEventListener("click", () => {
//     console.log("Je clique sur mon btn");
//     if(cards1.style.display == "flex") {
//             cards1.style.display = "none";
//             cards2.style.display = "flex";
//     } else if (cards2.style.display == "flex") {
//         cards2.style.display = "none";
//         cards3.style.display = "flex";
//     } else if (cards3.style.display == "flex") {
//         cards3.style.display = "none";
//         cards1.style.display = "flex";
//     }
// })