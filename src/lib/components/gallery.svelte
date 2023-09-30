<script>
</script>

<div class="overflow-hidden gallery">
	<p class="font-dynamic-p-titl font-black">
		<a href="./ME" class="link link-hover line-through font-thin text-yellow-400" id="YE">Gallery</a
		>
	</p>
</div>

<div class="container">
	<div class="card" style="height: auto">
		<figure><img class="w-auto" src="./images/Art.jpeg" alt="Shoes" /></figure>
		<div class="card-body">
			<h2 class="card-title">Shoes!</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
		</div>
	</div>

	<div class="card" style="height: auto">
		<figure><img class="w-auto" src="./images/IMG_4989.PNG" alt="Shoes" /></figure>
	</div>
	<div class="card" style="height: 170px"></div>
	<div class="card" style="height: 120px"></div>
	<div class="card" style="height: 160px"></div>
	<div class="card" style="height: 180px"></div>
	<div class="card" style="height: 140px"></div>
	<div class="card" style="height: 150px"></div>
	<div class="card" style="height: 170px"></div>
	<div class="card" style="height: 170px"></div>
</div>

<style>
	.gallery {
		margin-left: 10vw;
	}

	.font-dynamic-p-titl {
		font-size: 10vw;
		font-family: 'Michroma', serif;
	}

	.container {
		display: flex;
		flex-flow: column wrap;
		align-content: space-between;
		height: 4000px;
		border-radius: 3px;
		padding: 20px;
		width: 90vw;
		margin-inline: 5vw;
		counter-reset: cards;
	}

	.card {
		width: 32%;
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
