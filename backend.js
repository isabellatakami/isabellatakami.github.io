const video1 = document.getElementById("myImage");

const thumbnails = document.querySelectorAll(".gallery-container .all-videos thumbnail")

const selectedVideo = document.querySelector(".videocontainer .videos iframe")

const videoTitle = document.querySelector(".videocontainer .videoTitle")

let clickedImage;

thumbnails.forEach ( thumbnail => {
    thumbnail.addEventListener("click", () => {
        changeVideoPlayer(thumbnail.dataset.id, thumbnail.dataset.title)
    })

})


video1.addEventListener("click", function() {

    clickedImage = this;

    const clickedVideo = document.getElementById()
    changeVideoPlayer(myImage)


  // Change the image source
  myImage.src = "new_image.jpg";
});



function changeVideoPlayer(videoId, title) {
    const url = `https://www.youtube.com/embed/${videoId}!`

    selectedVideo.setAttribute("src", url);
    videoTitle.innerHTML = title;



}