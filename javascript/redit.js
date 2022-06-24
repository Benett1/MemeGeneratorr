on_loead(8);

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
      let meme_img = document.querySelector(".meme_" + i);
      let meme_paragraph = document.querySelector(".paragraph_" + i);
      let meme_likes = document.querySelector(".likes_" + i);
      meme_img.setAttribute("src", data.memes[i - 1].url);
      meme_paragraph.textContent = data.memes[i - 1].title;
      meme_likes.textContent = "likes: " + data.memes[i - 1].ups;
    }
  };
  request.send();
}
