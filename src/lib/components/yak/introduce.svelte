<script>
	import Note from "./note.svelte";
	let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<!-- <h1 id="sd" class="text-2xl" style="position: fixed;z-index: 10;">{scroll}</h1> -->

<div class="h-screen bg-gray-200 relative overflow-hidden">

	<div class=" w-full pt-6 flex flex-wrap absolute">
		<div class="z-30 relativ w-full">
			<p class="font-p-titl">
				<a
					href="/"
					class="link link-hover line-through font-thin text-black pl-8"
					id="YE">BAck</a
				>
			</p>
			<div class="w-full">
				<div style:transform={`translate3d(${scroll < 300 ? 0 : (scroll - 300) * 0.5}px, 0,0)`}>
					<div id="title" class=" text-left ml-16 pt-10 pl-10">
						<p class="font-p-first font-thin text-black">YAKety-Yak</p>
					</div>
				</div>
				<div style:transform={`translate3d(${scroll < 400 ? 0 : (scroll - 400) * 0.5}px, 0,0)`}>
					<div class=" px-8 md:px-40 py-10 h-[80vh] " >
						<Note/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.font-p-titl {
		font-size: 25px;
		font-family: 'Michroma', serif;
	}

	.font-p-first {
		font-size: 4vw;
		font-family: 'Michroma', serif;
	}

	@keyframes YE_slideIn {
		10% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	#YE {
		animation: YE_slideIn 5s;
	}

	@keyframes picture_1_slideIn {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}
		10% {
			transform: translateY(-20%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
