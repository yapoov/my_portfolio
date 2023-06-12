<script>
	import { projects } from './db';
</script>

<div class="project-container">
	{#each projects as project}
		<div class="project">
			<a href="/projects/{project.id}">
				<video autoplay muted loop>
					<source src={project.videoUrl} type="video/mp4" />
				</video>
				<h1>{project.title}</h1>
			</a>
		</div>
	{/each}
</div>

<style>
	.project-container {
		display: grid;
		grid-template-columns: 50rem 50rem;
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
		justify-content: center;
		max-width: 80rem;
	}
	.project {
		overflow: hidden;
		border-color: var(--color-theme-1);
		border-radius: 0.2rem;
		width: 100%;
		height: 25rem;
		position: relative;
		background-color: black;
		outline: 0.2rem solid var(--color-theme-1);
	}
	.project video {
		width: 100%;
		height: 100%;
		position: absolute;
		object-fit: cover;
		z-index: 0;
	}
	.project a {
		text-decoration: none;
		display: flex;
		justify-content: center;
	}
	.project:hover video {
		filter: opacity(0.3);
		transition: 0.2s;
	}

	.project h1 {
		text-align: center;
		z-index: 1;
		position: absolute;
		color: white;
		text-shadow: 2px 2px rgb(31, 43, 41);
	}
</style>
