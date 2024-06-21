<script>
    import Button from "../controls/Button.svelte";
    import Text from "../controls/Text.svelte";
</script>

<div class="cmp-number">
    <Button
        text="Minimize"
        isSelected="true"
        borderRadius="var(--radius)"
        textMargin="0rem .5rem 0rem 0rem"
    ></Button>
    <Text rows="1" readonly=true/>
    <Button
        text="Add"
        isSelected="true"
        borderRadius="var(--radius)"
        textMargin="0rem 0rem 0rem .5rem"
    ></Button>
</div>

<style>
    .cmp-number {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
