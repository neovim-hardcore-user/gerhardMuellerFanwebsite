class Video {
    constructor(id, start, title, subtitle, cover) {
        this.id = id;
        this.start = start;
        this.title = title;
        this.subtitle = subtitle;
        this.cover = cover;
    }
}

const videos = [];
index = 0;

function updatePlaylist() {
    const playlist = document.getElementById("playlist");
    
    while (playlist.rows.length > 0) {
        playlist.deleteRow(0);
    }

    for (let i = 0; i < videos.length; ++i) {
        const row = playlist.insertRow();

        const cell = row.insertCell(0);

        const cover = document.createElement("img");

        cover.src = `../images/covers/${videos[i].cover}`;
        cover.className = "cover";

        const title = document.createTextNode(`${i + 1}. ${videos[i].title}`);

        
        cell.appendChild(cover);
        cell.appendChild(title);

        cell.className = index === i ? "playlist_button currentSong" : "playlist_button";
        
        cell.onclick = () => jumpToVideo(i);
    }
}

function insert_content() {
    const songtitle = document.getElementById("Songtitle");
    const iframe = document.getElementById("youtube-video");
    const subtitles = document.getElementById("subtitles");

    
    songtitle.innerHTML = videos[index].title; 
    subtitles.innerHTML = videos[index].subtitle.replace(/\n/g, "<br>");
    updatePlaylist();

	player.loadVideoById({
		videoId: videos[index].id, 
		startSeconds: videos[index].start
	})
}


fetch("../js/videos.json")
    .then((response) => response.json())
    .then((videoData) => {
        for (const key in videoData) {
            const i = parseInt(key);
            videos.push(
                new Video(
                    videoData[i]["id"],
                    videoData[i]["start"],
                    videoData[i]["title"],
                    videoData[i]["subtitle"],
                    videoData[i]["cover"],
                ),
            );
        }

        
    })
    .catch((error) => console.error("Error fetching video data:", error));

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('youtube-video', {
		events: {
			'onReady': onPlayerReady, 
    	}
  	});
}

function onPlayerReady(event) {
	insert_content();
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	var playPauseButton = document.getElementById('play-pause-button');

	switch(event.data) {
		case YT.PlayerState.PLAYING:
		  	playPauseButton.innerHTML = "&#9208;";
		  	break;
		case YT.PlayerState.PAUSED:
		case YT.PlayerState.ENDED:
			playPauseButton.innerHTML = "&#9658;";
		  	break;
  	}
}


function jumpToVideo(i) {
    index = i;
    insert_content();
}

function switchVideo(dir) {
    index += parseInt(dir);
    if (index < 0) {
        index = videos.length - 1;
    }

    if (index >= videos.length) {
        index = 0;
    }

    insert_content();
}

function pausePlay() {
	if (player.getPlayerState() === YT.PlayerState.PLAYING) {
		player.pauseVideo();
	} else {
		player.playVideo();
	}
}


