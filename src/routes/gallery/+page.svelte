<script>
</script>

<div class=" bg-slate-400">
	<div class="pl-6 pt-4 md:pl-16">
		<p class="font-dynamic-p-titl font-black">
			<a href="/" class=" font-thin text-yellow-400" id="YE">BAck</a>
		</p>
	</div>

	<div class="mockup-code mx-6 md:mx-24 my-4">
		<pre data-prefix="1"><code>npm i Gallery</code></pre>
		<pre data-prefix="2"><code>installing...</code></pre>
		<pre data-prefix="3" class="bg-warning text-warning-content"><code>Coming soon!</code></pre>
	</div>

	<div class="container h-auto md:h-[150rem] p-5 mx-auto md:px-24">
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_499.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4996.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4998.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4995.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_499.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4996.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4998.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4995.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_499.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4996.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4998.webp" alt="" style="border-radius: 10px;" />
		</div>
		<div class="card w-[100%] h-auto md:w-[31%]" style="">
			<img src="./images/IMG_4995.webp" alt="" style="border-radius: 10px;" />
		</div>
	</div>
</div>

<style>
	.font-dynamic-p-titl {
		font-size: 10vw;
		font-family: 'Michroma', serif;
	}

	.container {
		display: flex;
		flex-flow: column wrap;
		align-content: space-between;
	}

	.card {
		position: relative;
		margin-bottom: 2%;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.1);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		color: #fff;
		box-sizing: border-box;
	}

	.card:nth-child(3n + 1) {
		order: 1;
	}
	.card:nth-child(3n + 2) {
		order: 2;
	}
	.card:nth-child(3n) {
		order: 3;
	}

	.container::before,
	.container::after {
		content: '';
		flex-basis: 100%;
		width: 0;
		order: 2;
	}
</style>
