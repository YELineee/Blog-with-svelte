<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	export let title;
	export let content;

</script>

<div class="h-auto p-8 bg-black pb-12">
	<div class="font-Michroma h-10 mb-2 md:mb-8 mt-0 md:mt-4 text-xl md:text-[3vw] text-[#753eeb;]">
		{title}
	</div>
	<div class="px-4 md:px-12 text-slate-300">
		{content}
	</div>
</div>

<style>
	.font-Michroma {
		font-family: 'Michroma', serif;
	}
</style>
