<script>
	let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

{#if scroll > 100}
	<script>
		picture_1 = 'left: 15%;';
	</script>
{/if}

<!-- <h1 id="sd" class="text-2xl" style="position: fixed;z-index: 10;">{scroll}</h1> -->
<div class="h-screen bg-neutral-900 relative overflow-hidden">
	<div class="w-10/12 left-0 top-0 -z-10">
		<div class="relative" style="left: 15%;">
			<div
				style:transform={`translate3d(${
					scroll < 1000 && scroll > 100 ? (scroll - 100) * 0.5 : 0
				}px, ${scroll < 1000 && scroll > 100 ? (scroll - 100) * 1 : 0}px, 0)`}
			>
				<img
					src="./images/IMG_4995.webp"
					alt=""
					class="absolute top-0 z-10 w-80 md:w-[30rem]"
					style="left: 25%;"
					id="picture_1"
				/>
			</div>
			<div style:transform={`translate3d(${scroll < 50 ? 0 : (scroll - 50) * -0.5}px, 0,0)`}>
				<img
					src="./images/IMG_499.webp"
					alt=""
					class="absolute top-20 z-20 w-80 md:w-[30rem]"
					id="picture_2"
				/>
			</div>
		</div>
	</div>

	<div class=" w-full pt-6 flex flex-wrap absolute">
		<div class="z-30 relativ w-full">
			<p class="font-p-titl">
				<a
					href="https://github.com/YELineee"
					class="link link-hover line-through font-thin text-white pl-8"
					id="YE">YEL!ne</a
				>
			</p>
			<div class="w-full mt-72">
				<div style:transform={`translate3d(${scroll < 400 ? 0 : (scroll - 400) * 0.5}px, 0,0)`}>
					<div id="title" class=" text-right mr-16">
						<p class="font-p-first font-thin text-white">YELine</p>
					</div>
				</div>
				<div style:transform={`translate3d(${scroll < 600 ? 0 : (scroll - 600) * 0.5}px, 0,0)`}>
					<div class="mt-10" id="intor">
						<p
							class="font-p-text font-bold overflow-clip text-left text-white w-2/3 ml-auto mr-10 text-base md:mr-20 md:text-2xl"
						>
							&nbsp; &nbsp; Everyone thought I was a bit " Out To Lunch ". He has left some " Notes
							", I suppose I'm just your average pessimistic teenager who's not really adept at
							introducing myself. Most of the time, I get by with coding and playing games to
							‘proactive’ through each day.😇GL&HF😇
						</p>
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
		font-size: 14vw;
		font-family: 'Michroma', serif;
	}

	.font-p-text {
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

	#picture_1 {
		animation: picture_1_slideIn 3s forwards;
		transform: translateY(-100%);
	}

	@keyframes picture_2_slideIn {
		0% {
			transform: translateX(-40%);
			opacity: 0;
		}
		50% {
			transform: translateX(-20%);
			opacity: 1;
		}
		to {
			transform: translateX(0);
			opacity: 0.9;
		}
	}

	#picture_2 {
		animation: picture_2_slideIn 2s forwards;
		transform: translateX(-100%);
		opacity: 0;
		animation-delay: 3s;
	}

	@keyframes title_slideIn {
		0% {
			transform: translateX(-20%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	#title {
		animation: title_slideIn 5s forwards;
		transform: translateX(-100%);
	}

	@keyframes intor_slideIn {
		0% {
			transform: translateY(20%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	#intor {
		animation: intor_slideIn 3s forwards;
		transform: translateY(100%);
		animation-delay: 2s;
		opacity: 0;
	}
</style>
