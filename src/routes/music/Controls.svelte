<script>
	import Slider from './Slider.svelte';
	import { status, isPlaying, audioPlayer, index, trackList } from './stores.js';
	import { format } from './utilities.js';
	import PlayButton from './PlayButton.svelte';
	import { onMount } from 'svelte';

	let duration = 0;
	let currentTime = 0;
	let formattedTime = format(currentTime);
	let paused = true;
	let volume = 0.5;

	let slider;
	let rAF = null;

	let title = $trackList[$index].title;
	let artist = $trackList[$index].artist;
	let src = $trackList[$index].file;

	function whilePlaying() {
		slider.value = audio.currentTime;
		currentTime = slider.value;
		rAF = requestAnimationFrame(whilePlaying);
	}

	function loadTrack($index) {
		title = $trackList[$index].title;
		artist = $trackList[$index].artist;
		$audioPlayer.src = $trackList[$index].file;
		$audioPlayer.load();
	}

	function playTrack() {
		$isPlaying = true;
		requestAnimationFrame(whilePlaying);
		$audioPlayer.play();
	}

	function pauseTrack() {
		$isPlaying = false;
		cancelAnimationFrame(rAF);
		$audioPlayer.pause();
	}

	function movePosition() {
		time = slider.value;
		if (!audio.paused) {
			cancelAnimationFrame(rAF);
		}
	}

	function updatePosition() {
		audio.currentTime = slider.value;
		if (!audio.paused) {
			requestAnimationFrame(whilePlaying);
		}
	}

	function previousTrack() {
		$isPlaying = false;
		currentTime = 0;
		if ($index > 0) {
			$index -= 1;
		} else {
			$index = $trackList.length - 1;
		}
		loadTrack($index);
		playTrack();
	}

	function nextTrack() {
		$isPlaying = false;
		currentTime = 0;
		if ($index < $trackList.length - 1) {
			$index += 1;
		} else {
			$index = 0;
		}
		loadTrack($index);
		playTrack();
	}

	onMount(() => {
		$audioPlayer.load();
	});
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<audio
	bind:this={$audioPlayer}
	bind:duration
	bind:currentTime
	bind:paused
	bind:volume
	on:canplay={() => ($status = 'can play some')}
	on:canplaythrough={() => ($status = 'can play all')}
	on:waiting={() => ($status = 'waiting')}
	on:timeupdate={() => ($status = 'playing')}
	on:seeking={() => ($status = 'seeking')}
	on:ended={() => {
		$isPlaying = false;
		currentTime = 0;
	}}
	{src}
/>

<div class="box">
	<div class="info">
		<div class="title">
			<p>{title}</p>
		</div>
		<div class="artist">
			<p>{artist}</p>
		</div>
	</div>

	<div class="buttons">
		<button class="prev" on:click={previousTrack}>Prev</button>

		<PlayButton controls />

		<button class="next" on:click={nextTrack}>Next</button>

		<!-- <p><strong>Volume</strong></p>
		
		<div class='volume-slider'>
			<Slider
				min={0}
				max={1}
				step={0.01}
				precision={2}
				formatter='{v => Math.round(v * 100)}'
				bind:value={volume}
			/>
		</div> -->
	</div>

	<div class="progress">
		<div class="progress-slider" style="width: 50vw;">
			<Slider
				bind:this={slider}
				min={0}
				bind:value={currentTime}
				max={duration}
				step={0.01}
				precision={2}
				formatter={(v) => format(v)}
				on:input={movePosition}
				on:change={updatePosition}
			/>
		</div>
	</div>
</div>

<style>
	audio {
		display: none;
	}

	div {
		display: grid;
		grid-auto-flow: row;
	}

	button {
		margin: 0;
		padding: 0;
		width: 4rem;
		height: 2rem;
		border-radius: 4px;
		border: 1px solid #bbb;
		background: #fcfcfc;
	}

	p {
		margin: 0;
		padding: 0;
		line-height: 1;
		user-select: none;
	}

	.box {
		margin: 0;
		padding: 1rem;
		padding-top: 1.5rem;
		background: #eee;
		grid-auto-flow: row;
		row-gap: 1rem;
		align-items: center;
		border: 1px solid #bbb;
		border-radius: 10px;
	}

	.info {
		margin: 0;
		padding: 0;
		width: 100%;
		grid-template-columns: 1fr;
		grid-template-rows: 2;
		justify-items: center;
		row-gap: 0.75rem;
	}

	.title,
	.artist {
		margin: 0;
		padding: 0;
	}

	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.progress {
		place-items: center;
		justify-items: center;
	}

	.progress-slider {
		width: 50%;
	}

	.prev,
	.next {
		border-radius: 2rem;
	}
</style>
