<script>
	export let data;

	function handleClick() {
		alert('no more alerts');
	}
</script>

<div class="container">
	<h1>{data.title}</h1>

	<div class="text-column">{data.description}</div>
	<div class="project">
		<video autoplay muted loop>
			<source src={data.videoUrl} type="video/mp4" />
		</video>
		<img src={data.imageUrl} />
	</div>
</div>

<style>
	img {
		background-color: white;
		width: 10rem;
		height: 10rem;
		/* style */
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background-color: wheat; */
		width: 100vw;
		height: 100vh;
	}
	.project {
		border-color: var(--color-theme-1);
		border-radius: 1rem;
		width: 10rem;
		height: 10rem;
		background-color: wheat;
		position: relative;
	}
	.project video {
		position: absolute;
		object-fit: cover;
		z-index: 1;
	}
</style>
