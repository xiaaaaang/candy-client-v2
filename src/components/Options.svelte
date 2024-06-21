<script>
    import Option from "../controls/Option.svelte";
    import { onMount, onDestroy } from "svelte";

    export let fontSize;
    export let justifyContent;
    export let direction = "row";
    export let options = [
        {
            id: 0,
            content: "",
            imageUrl: "",
            isSelected: false,
            margin: "",
        },
    ];
    export let onOptionChanged = (option) => {
        console.log(option);
    };

    let selectedIndex = 0;

    $: flexDerection =
        direction == "row" ? "direction-row" : "direction-column";

    $: optionWidth = direction == "row" ? (100 / options.length) + "%" : ""; 

    function onSelected(index) {
        if (index == selectedIndex) return;
        options[selectedIndex].isSelected = false;
        selectedIndex = index;
        options[selectedIndex].isSelected = true;
        onOptionChanged(options[selectedIndex]);
    }

    onMount(() => {
        options[0].isSelected = true;
    });

    onDestroy(() => {
        onSelected(0);
    });
</script>

<div style:font-size={fontSize} class="cmp-options {flexDerection}">
    {#each options as option, index (option.id)}
        <Option
            width={optionWidth}
            content={option.content}
            imageUrl={option.imageUrl}
            isSelected={option.isSelected}
            margin={option.margin}
            {justifyContent}
            action={() => onSelected(index)}
        ></Option>
    {/each}
</div>

<style>
    .cmp-options {
        display: flex;
    }
    .direction-row {
        flex-direction: row;
        justify-content: space-between;
    }
    .direction-column {
        flex-direction: column;
    }
</style>
