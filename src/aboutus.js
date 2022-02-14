export var aboutPageLoad = () => {
  var content = document.getElementById("content");
  content.replaceChildren();

  var aboutUsText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dapibus ante. Sed a arcu tincidunt, pretium nunc et, laoreet lectus. Duis vitae ex sapien. Aliquam erat volutpat. Nulla rutrum nunc quis tincidunt ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan diam et magna tempor, id eleifend felis efficitur.";
  var bannerDiv = document.createElement("div");
  bannerDiv.className = "bannerSpace";
  var title = document.createElement("h1");
  title.textContent = "Skaven's RatBurgers";
  title.className = "title";
  var blerb = document.createElement("h2");
  blerb.textContent = aboutUsText;
  blerb.className = "blerb";

  content.appendChild(bannerDiv);
  bannerDiv.appendChild(title);
  bannerDiv.appendChild(blerb);

  var isActive = document.getElementsByClassName("active");
  for (var i = 0; i < isActive.length; i++) {
    isActive[i].classList.remove("active");
  }

  var makeActive = document.getElementById("aboutBtn");
  makeActive.classList.add("active");
};
