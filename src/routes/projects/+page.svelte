<script>
	import { projects } from './db';
	import { assets, base } from '$app/paths';
</script>

<div class="project-container">
	<div class="project">
		<a href="">
			<video autoplay muted loop>
				<source src="$lib/assets/spell_craft.mp4" type="video/mp4" />
			</video>

			<h1>{projects[0].title}</h1>
		</a>
	</div>
	<div class="project">
		<a href="">
			<video autoplay muted loop>
				<source src="$lib/assets/endless_runner.mp4" type="video/mp4" />
			</video>

			<h1>{projects[1].title}</h1>
		</a>
	</div>
	<div class="project">
		<a href="">
			<video autoplay muted loop>
				<source src="$lib/assets/maze_td.mp4" type="video/mp4" />
			</video>

			<h1>{projects[2].title}</h1>
		</a>
	</div>
	<div class="project">
		<a href="">
			<video autoplay muted loop>
				<source src="$lib/assets/ship_builder.mp4" type="video/mp4" />
			</video>

			<h1>{projects[3].title}</h1>
		</a>
	</div>
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
