import { writable, get } from 'svelte/store'

export const audioPlayer = writable();
export const status = writable('default');
export const isPlaying = writable(false);
export const index = writable(0);

export const trackList = writable([
	{
		title: 'Requiem in D minor, K. 626',
		artist: 'Wolfgang Amadeus Mozart',
		file: 'http://music.163.com/song/media/outer/url?id=1399054580.mp3',
	},
	{
		title: 'Cloud',
		artist: 'Ludwig van Beethoven',
		file: 'http://music.163.com/song/media/outer/url?id=1399054580.mp3',
	}
]);

export const addTrack = track => {
	trackList.update(v => [...v, track])
};