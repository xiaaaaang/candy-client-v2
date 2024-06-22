<script>
    import Point from "../controls/Point.svelte";
    import Card from "./Card.svelte";
    import * as bizTask from "../businesses/bizTask";
    export let timeline;
    export let onTimelineItemsChanged;
    async function onCompleted(id) {
        let result = await bizTask.CompletedTaskById(id);
        if (result.status) {
            onTimelineItemsChanged();
        }
    }
    async function onDelete(id) {
        let result = await bizTask.DeletedTaskById(id);
        if (result.status) {
            onTimelineItemsChanged();
        }
    }
</script>

<div class="cmp-timeline">
    <div class="timeline-line"></div>
    <div class="timeline-list">
        {#each timeline as item (item.id)}
            <div class="timeline-item">
                <div class="timeline-item-title">
                    <div class="timeline-point">
                        <Point backgroundColor={item.status}></Point>
                    </div>
                    <span
                        class="timeline-item-time"
                        style:background-color={item.status}>{item.time}</span
                    >
                </div>
                <div class="timeline-item-tasks">
                    {#each item.tasks as task (task.id)}
                        <div class="timeline-item-task">
                            <Card
                                {onDelete}
                                {onCompleted}
                                id={task.id}
                                name={task.name}
                                content={task.content}
                                description={task.description}
                            ></Card>
                        </div>
                    {:else}
                        <div class="timeline-dialog">
                            <span class="timeline-dialog-title"
                                >Сегодня делать нечего</span
                            >
                            <span class="timeline-dialog-content"
                                >так что расслабьтесь</span
                            >
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .cmp-timeline {
        display: flex;
        flex-direction: row;
        padding: 0.5rem 0.75rem;
    }
    .timeline-point {
        position: relative;
        margin-left: -1.05rem;
    }
    .timeline-line {
        width: 0.2rem;
        background-color: var(--foreground-color);
        border-radius: 0.1rem;
        margin: 0.5rem 0rem;
        min-width: 2px;
        max-width: 4px;
    }
    .timeline-list {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;
    }
    .timeline-item {
        margin: 0.25rem 0rem;
    }
    .timeline-item-title {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .timeline-item-time {
        padding: 0.2rem 0.4rem;
        border-radius: var(--radius);
        color: var(--font-light);
        font-size: 0.9rem;
        margin: 0rem 0.5rem;
    }
    .timeline-item-tasks {
        display: flex;
        flex-direction: column;
    }
    .timeline-item-task {
        margin-top: 0.5rem;
    }
    .timeline-dialog {
        display: flex;
        flex-direction: column;
        background-color: var(--foreground-color);
        border-radius: var(--radius);
        padding: var(--spacing);
        margin-top: var(--spacing);
    }
    .timeline-dialog-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--font-dark);
    }
    .timeline-dialog-content {
        font-size: 0.75rem;
        color: var(--font-dark-v1);
    }
</style>
