<script>
    import Point from "../controls/Point.svelte";
    import Card from "./Card.svelte";
    let timeline = [
        {
            id: 0,
            name: "Завершите разработку Candy.",
            status: "#F05654",
            description: "",
            time: "2024.06.22",
            tasks: [
                {
                    id: 0,
                    name: "Завершите разработку Candy.",
                    description: "20240622103246",
                    content: "Candy - это приложение для напоминания о задачах.",
                },
                {
                    id: 1,
                    name: "Сегодняшний список покупок.",
                    description: "20240622181202",
                    content: "Яйца, молоко и хлеб.",
                },
            ],
        },
        {
            id: 1,
            name: "Проект-2",
            status: "#FFC773",
            description: "test project description.",
            time: "2024.07.04",
            tasks: [
                {
                    id: 0,
                    name: "Возвращение в Китай.",
                    description: "20240704153456",
                    content: "Не забудьте купить прямой рейс из Екатеринбурга в Пекин.",
                },
            ],
        }
    ];
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
                    <span class="timeline-item-time" style:background-color={item.status}>{item.time}</span>
                </div>
                <div class="timeline-item-tasks">
                    {#each item.tasks as task (task.id)}
                        <div class="timeline-item-task">
                            <Card
                                name={task.name}
                                content={task.content}
                                description={task.description}
                            ></Card>
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
</style>
