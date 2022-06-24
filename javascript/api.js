let btn = document.querySelector(".right_btn");

//on load
on_loead(8);

btn.addEventListener("click", function () {
  on_loead(8);
});

function on_loead(memes) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://meme-api.herokuapp.com/gimme/wholesomememes/" + memes,
    true
  );
  request.onload = function () {
    let data = JSON.parse(this.response);
    for (let i = 1; i <= memes; i++) {
      let el = document.querySelector(".random_meme_" + i);
      el.setAttribute("src", data.memes[i - 1].url);
    }
  };
  request.send();
}
