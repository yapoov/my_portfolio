<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		/* min-height: 100vh; */
		/* min-height: 1000vh; */
	}

	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		justify-content: center;
		align-items: center;
		background: linear-gradient(0deg, var(--color-bg-1), var(--color-bg-0));
		/* height: 100%; */
		/* background-size: 400% 400%; */
		/* 
		-webkit-animation: GradientAnim 15s ease infinite;
		-moz-animation: GradientAnim 15s ease infinite;
		animation: GradientAnim 15s ease infinite; */
	}

	@-webkit-keyframes GradientAnim {
		0% {
			background-position: 50% 0%;
		}
		50% {
			background-position: 50% 100%;
		}
		100% {
			background-position: 50% 0%;
		}
	}
	@-moz-keyframes GradientAnim {
		0% {
			background-position: 50% 0%;
		}
		50% {
			background-position: 50% 100%;
		}
		100% {
			background-position: 50% 0%;
		}
	}
	@keyframes GradientAnim {
		0% {
			background-position: 50% 0%;
		}
		50% {
			background-position: 50% 100%;
		}
		100% {
			background-position: 50% 0%;
		}
	}
</style>
