<script>
	let scroll = 0;
	let SCREEN = 0;
	$: screen = SCREEN * 2;
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={SCREEN} />

<div class="flex flex-col h-screen bg-[#01847F] overflow-clip border-dashed  border-2 md:border-4 border-stone-50">
	<div class="relative h-screen">
		<div
			class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center"
		>
			<p
				class="text-l md:text-3xl absolute left-1 md:left-10 text-[#F9D2E4] z-10 rotate-180"
				style="writing-mode :vertical-rl ;"
				style:transform={` translate3d(${scroll < screen  ? -(screen - scroll) * 0.07 : (screen*1 - scroll) * 0.02 }px,${scroll < screen ? 0 : -(screen - scroll) * 0.5}px, 0) rotate(180deg)`}
                style:opacity={`${scroll < screen*1.2 ? (scroll * 2 - screen)* 0.003: (screen*2.2 - scroll)* 0.001}`}
			>
				| - "The Lord is my shepherd." - Psalm 23:1 - |
			</p>
			<img
				src="./images/IMG_4999.webp"
				alt=""
				class="w-5/6 md:w-1/2 h-auto object-center p-2 md:p-10 border-solid border-2 md:border-4 "
				style:transform={` translate3d(${scroll < screen ? -(screen - scroll) * 0.5 : 0}px,${
					scroll < screen ? (screen - scroll) * 0.8 : 0
				}px, 0)`}
			/>
			<p
				class="text-l md:text-3xl absolute right-1 md:right-10 text-[#F9D2E4] z-10"
				style="writing-mode :vertical-rl"
                style:transform={` translate3d(${scroll < screen ? (screen - scroll) * 0.07 : -(screen*1 - scroll) * 0.02 }px,${scroll < screen ? 0 : -(screen - scroll) * 0.5}px, 0)`}
                style:opacity={`${scroll < screen*1.2 ? (scroll * 2 - screen)* 0.003: (screen*2.2 - scroll)* 0.001}`}
			>
				| - "The Lord is my shepherd." - Psalm 23:1 - |
			</p>
		</div>

		<div
			class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center overflow-clip"
		>
			<a
				href="/gallery"
				class=" mix-blend-difference text-[#F9D2E4] font-bold text-[22vw]"
				style:transform={` translate3d(${scroll < screen ? (screen  - scroll) * 0.5 : 0}px,0, 0)`}
			>
				GALLery
			</a>
		</div>
	</div>
</div>

<style>

</style>
