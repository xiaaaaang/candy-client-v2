<script>
    import { navigate } from "svelte-routing";
    export let options = [
        {
            id: 0,
            iconUrl: "/images/tasks.svg",
            iconSelectedUrl: "/images/tasks.svg",
            text: "новый",
            routeUrl: "/",
            isSelected: false,
        },
        {
            id: 1,
            iconUrl: "/images/tasks.svg",
            iconSelectedUrl: "/images/tasks.svg",
            text: "задания",
            routeUrl: "/task-line",
            isSelected: false,
        },
        {
            id: 2,
            iconUrl: "/images/tasks.svg",
            iconSelectedUrl: "/images/tasks.svg",
            text: "профиль",
            routeUrl: "/profile",
            isSelected: false,
        },
    ];

    function navigateTo(url) {
        if (url == "") {
            window.history.back();
            return;
        }
        navigate(url);
    }

</script>

<div class="cmp-navigation">
    {#each options as option (option.id)}
        <button class="navigation-button" on:click={navigateTo(option.routeUrl)}>
            <img src={option.iconUrl} alt={option.text} />
            <span>{option.text}</span>
        </button>
    {/each}
</div>

<style>
    .cmp-navigation {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .navigation-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border: none;
        background-color: transparent;
        padding: 0.5rem 0rem;
    }
</style>
