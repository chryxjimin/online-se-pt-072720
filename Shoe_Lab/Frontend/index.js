// Code your solution here
const shoeList = document.querySelector("#shoe-list")
const shoeImage = document.querySelector("#shoe-image")
const shoeName = document.querySelector("#shoe-name")
const shoeDescription = document.querySelector("#shoe-description")
const shoePrice = document.querySelector("#shoe-price")
const shoeReviews = document.querySelector("#reviews-list")

fetch('http://localhost:3000/shoes') 
    .then(resp => resp.json())
    .then( data => {
       data.forEach(createShoe) 
    })

function createShoe(shoe) {
    const shoeLi = document.createElement("li")
    shoeLi.className = "list-group-item"
    shoeLi.innerText = shoe.name
    shoeList.appendChild(shoeLi)
    shoeLi.addEventListener("click", () => {
    shoeImage.src = shoe.image 
    shoeName.innerText = shoe.name
    shoeDescription.innerText = shoe.description 
    shoePrice.innerText = shoe.price 
    for(review of shoe.reviews) {
        console.log(review.content)
        const shoeReviewLi = document.createElement("li")
        shoeReviewLi.innerText = review.content
        shoeReviews.appendChild(shoeReviewLi)
    }
    })
}