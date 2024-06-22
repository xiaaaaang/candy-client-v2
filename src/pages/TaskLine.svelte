<script>
    import Timeline from "../components/Timeline.svelte";
    import * as bizTask from "../businesses/bizTask";
    import { storeAccount } from "../store";
    import * as cmpTime from "../commons/cmnTime";
    import * as cmpStatus from "../commons/cmnStatus";

    let accountId = -1;
    storeAccount.subscribe(async (x) => {
        if (x.id == "") return;
        accountId = x.id;
        await QueryTasksByAccountId(x.id);
    });

    $: taskLine = [
        {
            id: 0,
            status: cmpStatus.toColor(0),
            time: cmpTime.ToDate(new Date()),
            tasks: [],
        },
        {
            id: 1,
            status: cmpStatus.toColor(1),
            time: cmpTime.ToDate(cmpTime.AfterCurrentDays(1)),
            tasks: [],
        },
        {
            id: 2,
            status: cmpStatus.toColor(1),
            time: cmpTime.ToDate(cmpTime.AfterCurrentDays(2)),
            tasks: [],
        },
        {
            id: 3,
            status: cmpStatus.toColor(2),
            time: cmpTime.ToDate(cmpTime.AfterCurrentDays(3)),
            tasks: [],
        },
        {
            id: 4,
            status: cmpStatus.toColor(2),
            time: cmpTime.ToDate(cmpTime.AfterCurrentDays(4)),
            tasks: [],
        },
        {
            id: 5,
            status: cmpStatus.toColor(2),
            time: cmpTime.ToDate(cmpTime.AfterCurrentDays(5)),
            tasks: [],
        },
        {
            id: 6,
            status: cmpStatus.toColor(3),
            time: cmpTime.ToDate(cmpTime.AfterCurrentDays(6)),
            tasks: [],
        },
        {
            id: 7,
            status: cmpStatus.toColor(3),
            time: cmpTime.ToDate(cmpTime.AfterCurrentDays(7)),
            tasks: [],
        },
    ];

    async function onTimelineItemsChanged() {
        taskLine.map(x => x.tasks = []);
        await QueryTasksByAccountId(accountId);
    }

    async function QueryTasksByAccountId(accountId) {
        let result = await bizTask.QueryTasksByAccountId(accountId);
        if (result.status) {
            result.value.forEach((x) => {
                let sameday = taskLine.find((y) => y.time == x.today);
                if (sameday != undefined) {
                    sameday.tasks = [
                        ...sameday.tasks,
                        {
                            id: x.id,
                            name: x.name,
                            content: x.description,
                            description: `No${x.id}`,
                        },
                    ];
                }
            });
            taskLine = [...taskLine];
        }
        console.log(taskLine);
    }
</script>

<div class="page-root page-task-line">
    <Timeline {onTimelineItemsChanged} bind:timeline={taskLine}></Timeline>
</div>

<style>
</style>
