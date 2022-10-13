<script lang="ts">
	import { page } from '$app/stores';
	import TodoItem from '$lib/todo-item.svelte';

	// export let todos: Todo[];
	const title = 'Todo';

	// gets data from props. This comes from the server
	/** @type {import('./$types').PageData} */
	export let data;

	//represents formData
	/** @type {import('./$types').ActionData} */
	export let form;

	console.log(form);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="todos">
	<h1>{title}</h1>

	{#if form?.success}
		<p>You have successfully added a new Todo item</p>
	{/if}

	{#if form?.error}
		<p class="error">
			{form.error}
		</p>
	{/if}

	<form method="POST" class="new">
		<input
			type="text"
			value={form?.name ?? ''}
			name="name"
			aria-label="Add a todo"
			placeholder="+ type to add a todo"
		/>
	</form>
	{#each data.props.todos.todos as todo}
		<TodoItem {todo} />
	{/each}
</div>

<style>
	.todos {
		width: 100%;
		max-width: 42rem;
		margin: 4rem auto 0 auto;
	}

	.new {
		margin: 0 0 0.5rem 0;
	}

	.new input {
		font-size: 28px;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
	}

	.todos :global(input) {
		border: 1px solid transparent;
	}

	.todos :global(input:focus-visible) {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}
</style>
