<script>
    export let margin;
    export let rows;
    export let placeholder;
    export let readonly = false;
    export let text;
</script>

<textarea {readonly} {placeholder} style:margin class="ctrl-text" {rows} bind:value={text}></textarea>

<style>
    .ctrl-text {
        padding: var(--spacing);
        overflow: auto;
        font-size: 0.9rem;
        resize: none;
        border: 1px solid transparent;
        background-color: var(--foreground-color);
        border-radius: var(--radius);
    }
    .ctrl-text:focus {
        border: 1px solid var(--emphasize-color);
        outline: 1px solid var(--emphasize-color);
    }
</style>
