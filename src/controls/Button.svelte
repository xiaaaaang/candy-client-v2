<script>
    export let text = "";
    export let action = () => {};
    export let iconUrl;
    export let direction = "row";
    export let backgroundColor;
    export let margin = "0rem 0rem 0rem .5rem";

    $: buttonDirection =
        direction == "row" ? "ctrl-button-row" : "ctrl-button-column";

    $: contentMargin = text == "" ? "" : "button-content";
</script>

<button
    style:margin
    style:background-color={backgroundColor}
    class="ctrl-button {buttonDirection}"
    on:click={action}
>
    <img src={iconUrl} alt={text} />
    {#if text != ""}
        <span class={contentMargin}>{text}</span>
    {/if}
</button>

<style>
    .ctrl-button {
        display: flex;
        padding: var(--spacing);
        border: none;
        border-radius: var(--radius);
        color: var(--font-light);
        font-size: 1rem;
    }
    .ctrl-button-row {
        flex-direction: row;
        align-items: center;
    }
    .ctrl-button-column {
        flex-direction: column;
    }
    .button-content {
        margin-left: var(--spacing);
    }
</style>
