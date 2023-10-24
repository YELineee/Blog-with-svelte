import { writable, get } from 'svelte/store'

export const audioPlayer = writable();
export const status = writable('default');
export const isPlaying = writable(false);
export const index = writable(0);

export const trackList = writable([
	{
		title: 'Requiem in D minor, K. 626',
		artist: 'Wolfgang Amadeus Mozart',
		file: 'https://m701.music.126.net/20231017203558/c43010fda06ad3b48ba691505b43d378/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/29311480838/f76d/62fc/0223/1c88d7f572ff9bf87ad286370f5833c1.m4a',
	},
	{
		title: 'Symphony no. 5 in Cm, Op. 67',
		artist: 'Ludwig van Beethoven',
		file: 'https://m801.music.126.net/20231024160054/00096913d5c24d88134d83c2366b7d59/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19288857508/f1b0/f42f/2b26/490684c2d9d9aadf32cd0046cfbc97b1.m4a'
	}
]);

export const addTrack = track => {
	trackList.update(v => [...v, track])
};