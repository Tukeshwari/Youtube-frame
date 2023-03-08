      // function openVideo(src) {
      //   let main = document.getElementById("main");
      //   let demo = document.getElementById('demo');
      //   let description = document.querySelector('description')
      //   // main.classList.add("hide");
      //   demo.innerHTML = "loading......."
      //   setTimeout( () =>{
      //     var videoContainer = document.getElementById('video-container');
      //   videoContainer.innerHTML = '<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  width="560" height="315" allowfullscreen src="' + src + '"></iframe>';
      //   },2000)
      // }
      const videoList = document.querySelector('.video-list');
      const videoTitle = document.querySelector('#main h3');
      const videoDescription = document.querySelector('.description p');
      const videoFrame = document.querySelector('#main iframe');
      const videoLinks = videoList.querySelectorAll('a');
  
      videoLinks.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
      
          // Remove active class from all links
          videoLinks.forEach(link => {
            link.classList.remove('active');
          });
      
          // Add active class to the clicked link
          // link.classList.add('active');
      
          // Set the video title and description in the main section
          videoTitle.textContent = link.dataset.title;
          videoDescription.textContent = link.dataset.description;
      
          // Set the video frame source to the clicked link's href
          videoFrame.src = link.href;
          
        });
      });
  