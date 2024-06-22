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
            value: "",
            margin: "",
        },
    ];
    export let onOptionChanged = (option) => {
        console.log(option);
    };

    let selectedIndex = -1;

    $: flexDerection = direction == "row" ? "direction-row" : "direction-column";

    $: optionWidth = direction == "row" ? (100 / options.length) + "%" : ""; 

    function onSelected(index) {
        if (index == selectedIndex) return;
        if (selectedIndex != -1) {
            options[selectedIndex].isSelected = false;
        }
        selectedIndex = index;
        options[selectedIndex].isSelected = true;
        onOptionChanged(options[selectedIndex]);
    }

    onMount(() => {
        onSelected(0)
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
