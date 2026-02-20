"use strict";

const faqItemsEl=document.querySelectorAll(".faq-items")

faqItemsEl.forEach(item=>{
    const questionEl=item.querySelector(".faq-question")

    questionEl.addEventListener("click",()=>{
        faqItemsEl.forEach(i=>{
            if(i!==item){
                i.classList.remove("active")
            }
        })
        item.classList.toggle("active")
    })
})