<script>
    export let imageUrl;
    export let content;
    export let isSelected;
    export let margin;
    export let action;
    export let width;
    export let justifyContent;
    $: optionSelected = isSelected ? "ctrl-option-selected " : "";
    $: contentMargin = imageUrl == "" ? "" : "option-content";
</script>

<div
    class="ctrl-option {optionSelected}"
    style:width
    style:justify-content={justifyContent}
    style:margin
    on:click={action}
    on:keydown={null}
>
    {#if imageUrl != ""}
        <img src={imageUrl} alt={content} />
    {/if}
    {#if content != ""}
        <span class={contentMargin}>{content}</span>
    {/if}
</div>

<style>
    .ctrl-option {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: var(--spacing);
        border-radius: var(--radius);
        flex-grow: 1;
        color: var(--font-dark);
        background-color: var(--foreground-color);
    }
    .ctrl-option-selected {
        color: var(--font-light);
        background-color: var(--emphasize-color);
    }
    .option-content {
        margin-left: var(--spacing);
    }
</style>
