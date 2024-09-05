const template = document.getElementById("template")
const wrapper = document.createDocumentFragment()




async function cardsArea() {
    const cardPromise = await fetch("https://blostma.netlify.JJapp/.netlify/functions/cards")
    const cardsData = await cardPromise.json()
    cardsData.forEach(card => {
        const clone = template.content.cloneNode(true)

        clone.querySelector(".one-card").dataset.price = card.price
        clone.querySelector("h3").textContent = card.name


        if (!card.photo) {
            card.photo = "/images/fallback.jpg"
        }
        else {
            card.photo = `https://res.cloudinary.com/dgon7d8qp/image/upload/w_330,h_392,c_fill/${card.photo}.jpg`
        }
        clone.querySelector(".card-image img").src = card.photo
        clone.querySelector(".card-image img").alt = ` A ${card.color} flower.`
        wrapper.appendChild(clone)
    })
    document.querySelector(".flower-cards").appendChild(wrapper)
}


cardsArea()
