<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<h3>Something is wrong!!</h3>

{#if $page.error}
	<h1>{$page.status}: {$page.error.message}</h1>
{/if}
