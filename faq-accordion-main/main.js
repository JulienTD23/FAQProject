const questions = document.querySelectorAll(".clickableSubheader");

questions.forEach(question => {
    question.addEventListener("click", function() {
        const signImg = this.querySelector(".sign");
        const faqText = this.nextElementSibling;

        if(signImg.src.includes("icon-plus.svg")) {
            signImg.src = "./assets/images/icon-minus.svg";
            faqText.classList.remove("hidden");
        } else if(signImg.src.includes("icon-minus.svg")) {
            signImg.src = "./assets/images/icon-plus.svg";
            faqText.classList.add("hidden")
        }
    })
})

//if sign is positive, change to negative, unhide text
//if sign is negative, change to positive, hide text