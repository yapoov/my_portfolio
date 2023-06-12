<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1>ABOUT ME</h1>
<div class="profile">
	<img
		src="http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080"
		alt="profile"
	/>
</div>
<div class="parent">
	<div>
		<p>
			Hello there! I'm [Your Name], a passionate game developer with a focus on mobile games. I have
			had the incredible opportunity to work with the renowned mobile game company, "Black Candy,"
			where I honed my skills and gained valuable experience in the gaming industry.
		</p>
	</div>
	<div>
		<p>
			One of my key strengths as a game developer is my proficiency with Unity 3D, a powerful game
			development engine. I have spent countless hours working with Unity, leveraging its robust
			features to create visually stunning and immersive games. Whether it's scripting intricate
			gameplay mechanics, designing intuitive user interfaces, or optimizing performance, I pride
			myself on my ability to leverage Unity to its fullest potential.
		</p>
	</div>
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: 40rem 40rem;
		gap: 1rem;
		font-size: 20px;
	}

	.profile {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		overflow: hidden;
	}
	.profile img {
		width: auto;
		height: 100%;
		display: inline;
	}
</style>
