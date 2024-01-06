<script>
	import Note from './note.svelte';
</script>

<div class="h-screen bg-gray-200 relative overflow-hidden">
	<div class=" w-full pt-6 flex flex-wrap absolute">
		<div class="z-30 relativ w-full">
			<p class="font-p-titl">
				<a
					href="/"
					class="link link-hover line-through font-thin text-black pl-8 text-s md:text-[24px]"
					>BAck</a
				>
			</p>
			<div class="w-full">
				<div id="title" class=" text-left ml-1 md:ml-16 pt-8 md:pt-16 pl-10">
					<p class="font-p-first text-3xl md:text-[4vw] font-thin text-black">YAKety-Yak</p>
				</div>

				<div class=" px-8 md:px-40 py-4 md:py-16 h-[80vh]">
					<Note />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.font-p-titl {
		font-family: 'Michroma', serif;
	}

	.font-p-first {
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
