<svelte:options customElement={{
    tag: 'cesys-test',
    shadow: 'none',
}} />

<script lang="ts">
    async function getData() {
        const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
        return (await response).json();
    }
</script>

<template>
    {#await getData()}
        nacitam
    {:then data}
        {data.title}
    {/await}
</template>
