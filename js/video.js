class Video {
	constructor(id, title, subtitle) {
		this.id = id;
		this.title = title;
		this.subtitle = subtitle;
	}
}

const videos = []
index = 0

fetch('../js/videos.json')
	.then(response => response.json())
	.then(videoData => {
		for (const key in videoData) {
			const i = parseInt(key)
			videos.push(new Video(
				videoData[i]["id"], 
				videoData[i]["title"], 
				videoData[i]["subtitle"], 
			))
		}

		console.log(videos)
	})
	.catch(error => console.error('Error fetching video data:', error));

function switchVideo(dir) {
	index += parseInt(dir);
	if (index < 0) {
		index = videos.length - 1;
	}

	if (index >= videos.length) {
		index = 0;
	}
	console.log(index)

	console.log(videos[index].url)

	const iframe = document.getElementById('youtube-video');
	iframe.src = `https://www.youtube.com/embed/${videos[index].id}?autoplay=1`;
}
