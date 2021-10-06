let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let allCards = [card1, card2, card3];
let btn = document.querySelector(".btn");
tabNum = [1, 2, 3];

// for(let i in allCards) {
//     allCards[i].addEventListener("click", () => {
//         if(allCards[i]==card1) {
//             card1.style.display = "none";
//             card2.style.display = "flex";
//         } else if(allCards[i] == card2) {
//             card2.style.display = "none";
//             card3.style.display = "flex";
//         } else if(allCards[i] == card3) {
//             card3.style.display = "none";
//             card1.style.display = "flex";
//         }
//     })
// }

// btn.addEventListener("click", () => {
//     console.log("Je clique sur mon btn");
//     if(card1.style.display == "flex") {
//             card1.style.display = "none";
//             card2.style.display = "flex";
//     } else if (card2.style.display == "flex") {
//         card2.style.display = "none";
//         card3.style.display = "flex";
//     } else if (card3.style.display == "flex") {
//         card3.style.display = "none";
//         card1.style.display = "flex";
//     }
// })

btn.addEventListener("click", () => {
    if (card1.style.transform == "") {
        console.log("Je transforme une première fois");
        card1.style.transform = "translate(0px, -350px)";
        card2.style.transform = "translate(0px, -350px)";
        card3.style.transform = "translate(0px, -350px)";
    } else if (card1.style.transform == "translate(0px, -350px)") {
        console.log("Je retransforme une deuxième fois");
        card1.style.transform = "translate(0px, -700px)";
        card2.style.transform = "translate(0px, -700px)";
        card3.style.transform = "translate(0px, -700px)";
    }
})