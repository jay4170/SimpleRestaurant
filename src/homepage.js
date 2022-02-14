import banner from "./assets/images/SkavenBanner.jpg";
 
export var homePageLoad = () => {
  var content = document.getElementById("content");
  content.replaceChildren();
  var bannerDiv = document.createElement("div");
  bannerDiv.className = "bannerSpace";
  var bannerImg = document.createElement("img");
  bannerImg.src = banner;
  bannerImg.id = "bannerImg";
  var title = document.createElement("h1");
  title.textContent = "Skaven's RatBurgers";
  title.className = "title";
  var blerb = document.createElement("h2");
  blerb.textContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. ";
  blerb.className = "blerb";
  bannerDiv.appendChild(title);
  content.appendChild(bannerDiv);
  bannerDiv.appendChild(bannerImg);

  bannerDiv.appendChild(blerb);

  var isActive = document.getElementsByClassName("active");
  for (var i = 0; i < isActive.length; i++) {
    isActive[i].classList.remove("active");
  }

  var makeActive = document.getElementById("homeBtn");
  makeActive.classList.add("active");
};
