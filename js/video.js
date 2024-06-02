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

function insert_content() {
    const songtitle = document.getElementById("Songtitle");
    songtitle.innerHTML = videos[index].title;

    console.log(videos[index].start);
    const iframe = document.getElementById("youtube-video");
    iframe.src = `https://www.youtube.com/embed/${videos[index].id}?start=${videos[index].start}&autoplay=1`;

    //Playlist:
    let playlist = document.getElementById("playlist");
    while (playlist.rows.length > 0) {
        playlist.deleteRow(0);
    }

    for (let i = 0; i < videos.length; ++i) {
        let r = playlist.insertRow();

        let c = r.insertCell(0);

        let cover = document.createElement("img");

        cover.src = "../images/covers/" + videos[i].cover;
        cover.className = "cover";

        let title = document.createTextNode(i + 1 + ". " + videos[i].title);

        
        c.appendChild(cover);
        c.appendChild(title);

        if (index == i) {
            c.className = "playlist_button currentSong";
        } else {
            c.className = "playlist_button";
        }
        c.onclick = function () {
            jumpToVideo(i);
        };
    }
    let subtitles = document.getElementById("subtitles");

    subtitles.innerHTML = videos[index].subtitle.replace(/\n/g, "<br>");
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
        insert_content();
    })
    .catch((error) => console.error("Error fetching video data:", error));

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
    console.log(index);

    console.log(videos[index].url);

    insert_content();
}

