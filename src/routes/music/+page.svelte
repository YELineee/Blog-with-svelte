<script>
	import Controls from './Controls.svelte';
	import Track from './Track.svelte';
</script>

<div class="app">
	<Controls />

	<!-- <Track
		title='Gymnop�die no. 1'
		artist='Erik Satie'
		file='https://sveltejs.github.io/assets/music/satie.mp3'
	/>
	
	<Track
		title='Mars, the Bringer of War'
		artist='Gustav Holst'
		file='https://sveltejs.github.io/assets/music/holst.mp3'
	/>
	
	<Track
		title='The Blue Danube Waltz'
		artist='Johann Strauss'
		file='https://sveltejs.github.io/assets/music/strauss.mp3'
	/> -->
</div>

<style>
	/* :global(p) {
		font-size: 12px;
	}

	:global(strong) {
		font-size: 14px;
	}

	:global(button) {
		font-size: 14px;
	} */

	.app {
		margin: 0;
		padding: 0;
		display: grid;
		row-gap: 1rem;
	}
</style>
