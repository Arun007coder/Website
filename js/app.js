$(".wrapper").on("click", ".color-ball", function () {
  var color = $(this).css("background-color");
  localStorage.setItem("accentColor", color);
  setAccentColor();
});

setAccentColor = function () {
  var color = localStorage.getItem("accentColor") || "#282725";
  $(":root").css("--accent", color);
};
setReadMe = function () {
  var user = Config.username;
  var filename = Config.filename ?? "README.md";
  var url, title, image;

  console.log(user);
  if (user) {
    var repo = Config.repo ?? user;
    var branch = Config.branch ?? "main";
    var url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filename}`;

    $("#favicon").attr("href", "https://github.com/" + user + ".png");
    title = user.toUpperCase();
    document.title = user;
  } else {
    url = filename;
  }
  CreateWindow(url, title, "https://github.com/" + user + ".png");
};

function CreateWindow(
  url,
  title = "README.md",
  image = "assets/images/hi.png"
) {
  $(".wrapper").append(
    `
  <div class="window-wrapper">
        <div class="window-wrap overlay center">
          <div class="window-layer">
            <div class="window-menu-bar v-center us">
              <div class="thin-strip-box">
                <div class="thin-strip"></div>
                <div class="thin-strip"></div>
                <div class="thin-strip"></div>
                <div class="thin-strip"></div>
                <div class="thin-strip"></div>
              </div>
              <div class="window-close center action">
                <div class="color-themes center">
                  <div class="color-ball"></div>
                  <div class="color-ball"></div>
                  <div class="color-ball"></div>
                </div>
              </div>
              <div class="window-title center">
              <img src="${image}" class="hi-img">
                <h1>${title}</h1>
              </div>
            </div>
            <div class="window-content"><mark-down src="${url}"></div>
          </div>
        </div>
      </div>
       
  `
  );
  $(".window-layer").draggable({
    handle: ".window-menu-bar",
  });
}

setAccentColor();
setReadMe();
