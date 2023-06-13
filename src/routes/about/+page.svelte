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
	<!-- <div>
		<p>
			Greetings! I'm Orgil-Erdene, an experienced game developer with a passion for creating
			immersive and captivating gaming experiences. With a diverse background in game development, I
			have worked on various platforms and genres, honing my skills and expanding my expertise along
			the way.
		</p>
	</div> -->
	<div>
		<p>
			I am a passionate game developer with extensive experience in Unity 3D, specializing in mobile
			gaming. I have worked at Black Candy, a hypercasual mobile game company, where I contributed
			to the creation of captivating gaming experiences. From designing gameplay mechanics to
			optimizing performance, I bring creativity and expertise to every project. With a strong
			attention to detail and a collaborative mindset, I am eager to take on new challenges and
			deliver exceptional games that engage players worldwide.
		</p>
	</div>
</div>

<style>
	.p {
		text-align: center;
	}
	.parent {
		/* display: grid; */
		/* grid-template-columns: 40rem 40rem; */
		gap: 1rem;
		font-size: 20px;
		width: 50vw;
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
