console.log('Hey! Do you like my work? Feel free to contact me!')

let projectDiv = document.getElementsByClassName("projectdiv");

let divTextAndButton = document.getElementsByClassName('div-text-and-button');

let projectModal = document.getElementsByClassName('project-modal');

let closeModal = document.getElementsByClassName('close');

for (let i = 0; i < projectDiv.length; i++) {
    projectDiv[i].addEventListener("mouseover", () => {
        divTextAndButton[i].style.visibility = 'visible';
        });
    projectDiv[i].addEventListener("mouseout", () => {
        divTextAndButton[i].style.visibility = 'hidden';
        });

    projectDiv[i].addEventListener("click", () => {
        projectModal[i].style.display = "block";
        divTextAndButton[i].style.visibility = 'hidden';
            });
    }

for (let j = 0; j < closeModal.length; j++) {
        closeModal[j].addEventListener('click', () => {
            projectModal[j].style.display = 'none';
});
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		projectModal[j].style.display = 'none';
	}
});
}

// var player;
// function onYouTubePlayerAPIReady() {
//     player = new YT.Player(documnr, {
//         events: {
//             'onReady': onPlayerReady
//         }
//     });
// }

// function stopPlayer() {
//     player.stopVideo();
// }

// function onPlayerReady(event) {
//     for (let j = 0; j < closeModal.length; j++) {
//     closeModal[j].addEventListener('click', () => {
//         projectModal[j].style.display = 'none';
//             player.stopVideo();
//         });

// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);