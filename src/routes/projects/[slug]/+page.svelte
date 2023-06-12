<script>
	export let data;
</script>

<h1>{data.title}</h1>
<div>{data.description}</div>
<div class="project">
	<!-- <video autoplay muted loop>
        <source src={data.videoUrl} type="video/mp4" />
    </video> -->
</div>

<style>
	.project {
		border-color: var(--color-theme-1);
		border-radius: 1rem;
		width: 20rem;
		height: 20rem;
		position: relative;
	}
	.project video {
		width: 100%;
		height: 100%;
		position: absolute;
		object-fit: cover;
		z-index: 0;
	}
</style>
