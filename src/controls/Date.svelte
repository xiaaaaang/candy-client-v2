<script>
    export let margin = ".5rem 0rem";
    export let placeholder = "YYYY / MM / DD"
</script>

<input
    style:margin
    class="ctrl-date"
    type="text"
    placeholder={placeholder}
/>

<style>
    .ctrl-date {
        padding: var(--spacing);
        background-color: var(--foreground-color);
        border: 1px solid transparent;
        border-radius: var(--radius);
    }

    .ctrl-date:focus {
        border: 1px solid var(--emphasize-color);
        outline: 1px solid var(--emphasize-color);
    }
</style>
