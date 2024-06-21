<script>
    import Title from "../controls/Title.svelte";
</script>

<div class="page-root page-dashboard">
    <Title title="Прогресс" description="Ежедневный ввод заданий"></Title>
    <div class="dashboard-progress">
        <div class="dashboard-progress-current">
            78%
        </div>
    </div>
    <div>

    </div>
</div>

<style>
    .page-dashboard {
        display: flex;
        flex-direction: column;
    }
    .dashboard-progress{
        margin: var(--spacing);
        height: 3rem;
        border-radius: var(--radius);
        background-color: var(--foreground-color);
    }
    .dashboard-progress-current{
        height: 100%;
        width: 42%;
        color: var(--font-light);
        border-radius: var(--radius);
        background: var(--emphasize-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center ;
    }
</style>