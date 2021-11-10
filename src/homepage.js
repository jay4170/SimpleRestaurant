export var homePageLoad = () => {
    var content = document.getElementById("content");
    content.replaceChildren()
    var bannerDiv = document.createElement("div")
    bannerDiv.className = "bannerSpace"
    var bannerImg = document.createElement("img")
    bannerImg.src = "/images/SkavenBanner.jpg"
    bannerImg.id = "bannerImg"
    var title = document.createElement("h1")
    title.textContent = "Skaven's RatBurgers"
    title.className = "title"
    var blerb = document.createElement("h2")
    blerb.textContent = "This is the greatest goddamn restaurant on earth. We use the freshest corpses for our burgers and warpstone condiments are include!"
    blerb.className = "blerb"
    bannerDiv.appendChild(title)
    content.appendChild(bannerDiv)
    bannerDiv.appendChild(bannerImg)
    
    bannerDiv.appendChild(blerb)

    var isActive = document.getElementsByClassName("active")
    for(var i = 0; i<isActive.length; i++){
        isActive[i].classList.remove("active")
    }

    var makeActive = document.getElementById("homeBtn");
    makeActive.classList.add("active");
    

}

