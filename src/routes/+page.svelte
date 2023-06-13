<script>
	import { onMount } from 'svelte';
	import Skills from './skills/+page.svelte';
	import Projects from './projects/+page.svelte';
	import About from './about/+page.svelte';
	import Contact from './contact/+page.svelte';
	let activeSection = '';

	function handleButtonClick() {
		window.open('https://www.docdroid.net/t4u3eC0/resume-pdf', '_blank').focus();
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<div class="App">
	<div>
		<button on:click={handleButtonClick} class="myResume">My Resume</button>
	</div>
	<div class="home">
		<span>Orgil Erdene</span>
		<span class="job_title">Game Programmer</span>
	</div>
	<div class="colorstrip" />
	<Projects />
	<div class="colorstrip" />
	<About />
	<div class="colorstrip" />
	<Skills />
	<div class="colorstrip" />
	<Contact />
	<div>
		<button on:click={handleButtonClick} class="myResume">My Resume</button>
	</div>
	<footer>2023 Orgil-Erdene</footer>
</div>

<style>
	.colorstrip {
		width: 10vw;
		height: 2px;

		background-color: var(--color-theme-1);
	}
	.App {
		padding: 1rem;
		display: grid;
		flex-direction: column;
		justify-items: center;
		gap: 2rem;
	}
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.myResume {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: large;
		color: var(--color-text);
		border-color: var(--color-theme-1);
		width: 10rem;
		height: 2.5rem;
	}
	.myResume:hover {
		color: var(--color-bg-0);
		background-color: var(--color-text);
		transition: 0.3s;
	}
	ul {
		display: flex;
		gap: 1rem;
		justify-content: flex-end;
	}
	li {
		list-style: none;
		width: 2rem;
		height: 2rem;
		background-color: white;
		border-radius: 50%;
		overflow: hidden;
	}
	a {
		list-style: none;
	}
	span {
		font-size: 9rem;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: var(--color-theme-1);
	}
	.job_title {
		text-align: center;
		font-size: 2rem;
		color: var(--color-text);
		font-family: 'Courier New', Courier, monospace;
	}
</style>
