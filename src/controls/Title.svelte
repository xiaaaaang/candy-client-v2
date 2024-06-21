<script>
    export let title = 'Title';
    export let description = 'Description'
</script>

<div class="ctrl-title">
    <div class="title-line"></div>
    <div class="title-content">
        <span class="title-text">{title}</span>
        <span class="title-description">{description}</span>
    </div>
</div>

<style>
.ctrl-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: var(--spacing);
}
.title-line {
    height: 1rem;
    width: .2rem;
    background-color: var(--emphasize-color);
    border-radius: .1rem;
}
.title-content {
    display: flex;
    flex-direction: column;
    margin-left: var(--spacing);
}
.title-text{
    font-size: 1rem;
    font-weight: 600;
    color: var(--font-dark);
}
.title-description {
    font-size: .8rem;
    color: var(--font-dark-v1);
}
</style>