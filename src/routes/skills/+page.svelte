<script>
</script>

<div class="container">
	<h1>TECHNICAL SKILLS</h1>
	<ul>
		<li>
			<div class="img-container">
				<img src="$lib/assets/unity.png" alt="unity logo" />
			</div>
			<p>Unity 3D</p>
		</li>
		<li>
			<div class="img-container">
				<img src="$lib/assets/csharp.png" alt="unity logo" />
			</div>
			<p>C sharp</p>
		</li>
		<li>
			<div class="img-container">
				<img src="$lib/assets/shader_triangle.png" alt="unity logo" />
			</div>
			<p>Shaders</p>
		</li>
		<li>
			<div class="img-container">
				<img src="$lib/assets/blender.png" alt="unity logo" />
			</div>
			<p>Blender</p>
		</li>
	</ul>
	<div class="gap" />
	<span>Gameplay Programming</span>
	<span>Procedural Generation</span>
	<span>Optimization</span>
	<div class="gap" />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* background-color: wheat; */
		background-image: url();
		width: 100vw;
	}

	.gap {
		height: 5rem;
	}
	span {
		font-size: 3rem;
		line-height: 5rem;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-weight: 500;
	}
	ul {
		gap: 5rem;
		display: flex;
	}
	li {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		/* justify-content: flex-end; */
		width: 10rem;
		height: auto;
	}
	li p {
		/* font-size: large; */
		font-size: 2rem;
		text-align: center;
	}
	.img-container {
		/* width: 100%; */
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		background-color: white;
		overflow: hidden;
		display: flex;
		/* margin: 2rem; */
		justify-content: center;
		align-items: center;
		border: 0.2rem solid var(--color-theme-1);
	}
	li img {
		height: 80%;
	}
</style>
