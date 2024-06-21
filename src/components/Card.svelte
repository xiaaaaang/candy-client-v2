<script>
    import Button from "../controls/Button.svelte";
    export let name;
    export let description;
    export let content;
</script>

<div class="cmp-card">
    <div class="card-title">
        <span class="card-title-text">{name}</span>
        <span class="card-title-description">{description}</span>
    </div>
    <span class="card-content">{content}</span>
    <div class="card-operations">
        <Button backgroundColor="#39a5db" iconUrl="/images/completed.svg" />
        <Button backgroundColor="#39a5db" iconUrl="/images/settings.svg" />
        <Button backgroundColor="#F05654" iconUrl="/images/delete.svg" />
    </div>
</div>

<style>
    .cmp-card {
        display: flex;
        flex-direction: column;
        background-color: var(--foreground-color);
        padding: var(--spacing);
        border-radius: var(--radius);
    }
    .card-title {
        display: flex;
        flex-direction: column;
    }
    .card-content {
        margin: var(--spacing) 0rem;
        color: var(--font-dark);
    }
    .card-operations {
        display: flex;
        flex-direction: row-reverse;
    }
    .card-title-text {
        font-size: 1rem;
        color: var(--font-dark);
        font-weight: 600;
    }
    .card-title-description {
        font-size: 0.9rem;
        color: var(--font-dark-v1);
    }
</style>
