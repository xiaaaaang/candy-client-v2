<script>
    export let name;
    export let description;
    export let photoUrl;
</script>

<div class="ctrl-nameplate">
    <img class="nameplate-photo" src={photoUrl} alt={name} />
    <div class="nameplate-content">
        <span class="nameplate-name">{name}</span>
        <span class="nameplate-description">{description}</span>
    </div>
</div>

<style>
    .ctrl-nameplate {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .nameplate-photo {
        width: 3rem;
        height: 3rem;
        border-radius: 1.5rem;
    }

    .nameplate-content {
        display: flex;
        flex-direction: column;
        margin-left: var(--spacing);
    }

    .nameplate-name{
        font-weight: 600;
        color: var(--font-dark);
    }
    .nameplate-description{
        font-size: .9rem;
        color: var(--font-dark-v1);
    }
</style>
