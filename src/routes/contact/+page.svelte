<script>
	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		name = '';
		email = '';
		message = '';
	}
</script>

<h1>Contact Me</h1>
<div class="contact">
	<div class="info">
		<p>Currently living in Sainshand, MN.</p>
		<p>orgilo148@gmail.com</p>
		<p>Tel: +976 99978694</p>
	</div>

	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<label for="name">Name</label>
			<input type="text" id="name" bind:value={name} required />
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} required />
		</div>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" bind:value={message} required />
		</div>

		<button type="submit">Send Message</button>
	</form>
</div>

<style>
	.contact {
		/* background-color: white; */
		padding: 2rem;
		display: flex;
		width: 40rem;
		justify-content: center;
	}
	.form-group {
		margin-bottom: 20px;
		width: 20rem;
	}

	.info {
		margin: 2rem;
		width: 20rem;
		/* justify-content: space-between; */
	}
	label {
		display: block;
		font-weight: bold;
		margin-bottom: 5px;
	}

	input,
	textarea {
		width: 100%;
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	textarea {
		resize: vertical;
		height: 150px;
	}

	button {
		padding: 10px 20px;
		font-size: 16px;
		background-color: var(--color-theme-1);
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
