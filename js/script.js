const videoList = document.querySelector('.video-list');
const videoTitle = document.querySelector('#main h3');
const video_reviews = document.querySelector('.description span');
const videoDescription = document.querySelector('.description p');
const videoFrame = document.querySelector('#main iframe');
const videoLinks = videoList.querySelectorAll('a');


videoLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    console.log(link)
    // Set the video title and description in the main section
    videoTitle.textContent = link.dataset.title;
    videoDescription.textContent = link.dataset.description;
    video_reviews.textContent = link.dataset.review;
    // Set the video frame source to the clicked link's href
    videoFrame.src = link.href; 
    
  });
});