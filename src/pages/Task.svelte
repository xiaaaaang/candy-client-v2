<script>
    import Title from "../controls/Title.svelte";
    import Text from "../controls/Text.svelte";
    import Options from "../components/Options.svelte";
    import DateInput from "../controls/DateInput.svelte";
    import Button from "../controls/Button.svelte";
    import * as bizTask from "../businesses/bizTask";
    import { storeAccount } from "../store";
    import * as cmnTime from "../commons/cmnTime";

    let taskCurrent = {
        AccountId: "",
        Name: "",
        Description: "",
        TaskType: "",
        TypeValue: null,
        Today:''
    };

    let taskTypes = [
        {
            id: 0,
            imageUrl: "",
            value: 0,
            content: "Однажды",
            isSelected: false,
        },
        {
            id: 1,
            imageUrl: "",
            value: 1,
            content: "Цикличность",
            isSelected: false,
            margin: "0rem .5rem",
        },
        {
            id: 2,
            imageUrl: "",
            value: 2,
            content: "Долгосрочно",
            isSelected: false,
        },
    ];

    let taskValueTypes = [
        {
            id: 0,
            imageUrl: "",
            value: 0,
            content: `Ежедневно (Начало в ${cmnTime.ToDate(new Date())})`,
            isSelected: false,
            margin: "0rem 0rem .5rem 0rem",
        },
        {
            id: 1,
            imageUrl: "",
            value: 1,
            content: `Еженедельно (${cmnTime.DayOfWeek(new Date())} день недели)`,
            isSelected: false,
            margin: "0rem 0rem .5rem 0rem",
        },
        {
            id: 2,
            imageUrl: "",
            value: 2,
            content: `Ежемесячно (${cmnTime.DayOfMonth(new Date())} день месяца)`,
            isSelected: false,
            margin: "0rem 0rem .5rem 0rem",
        },
        {
            id: 3,
            imageUrl: "",
            value: 3,
            content: `Ежегодно (${cmnTime.DayOfYear(new Date())} день года)`,
            isSelected: false,
            margin: "0rem 0rem .5rem 0rem",
        },
    ];

    let startTime = "";
    let closeTime = "";

    storeAccount.subscribe((x) => {
        taskCurrent.AccountId = x.id;
    });

    let taskTypeIndex = 0;
    function onTaskOptionChanged(option) {
        taskTypeIndex = option.id;
        taskCurrent.TaskType = option.value;
        if (taskCurrent.TaskType != 1) {
            taskCurrent.TypeValue = null;
        }
    }

    function onTaskTypeValueChanged(option) {
        taskCurrent.TypeValue = option.value;
    }

    async function CreateTaskByAccountId() {
        let map = {
            0: {
                Key:0,
                StartTime: startTime,
            },
            1: {
                0: { Key:1, StartTime: cmnTime.ToDate(new Date()) },
                1: { Key:1, DayOfWeek: cmnTime.DayOfWeek(new Date()) },
                2: { Key:1, DayOfMonth: cmnTime.DayOfMonth(new Date()) },
                3: { Key:1, DayOfYear: cmnTime.DayOfYear(new Date()) },
            },
            2: {
                Key:2,
                StartTime: startTime,
                CloseTime: closeTime,
            },
        };

        taskCurrent.TypeValue = JSON.stringify(
            taskCurrent.TaskType == 1
                ? map[1][taskCurrent.TypeValue]
                : map[taskCurrent.TaskType],
        );

        console.log(taskCurrent);

        await bizTask
            .CreateTaskByAccountId(taskCurrent)
            .catch((e) => console.log(e));
    }
</script>

<div class="page-root page-task">
    <Title
        title="Информация о миссии"
        description="Существительные и описания заданий"
    ></Title>
    <div class="task-detail">
        <Text
            placeholder="Название задания"
            rows="1"
            margin="0rem 0rem .5rem 0rem"
            bind:text={taskCurrent.Name}
        ></Text>
        <Text
            placeholder="Описание задания"
            rows="3"
            margin="0rem 0rem .5rem 0rem"
            bind:text={taskCurrent.Description}
        ></Text>
        <Options
            fontSize="0.75rem"
            options={taskTypes}
            onOptionChanged={onTaskOptionChanged}
            justifyContent="center"
        ></Options>
    </div>
    <Title
        title="Расширенная информация"
        description="Типы заданий и способы их повторения"
    ></Title>
    {#if taskTypeIndex != null}
        <div class="task-config">
            {#if taskTypeIndex == 0}
                <div class="task-single">
                    <DateInput
                        placeholder="Дата (YYYY.MM.DD)"
                        bind:date={startTime}
                    ></DateInput>
                </div>
            {:else if taskTypeIndex == 1}
                <Options
                    options={taskValueTypes}
                    onOptionChanged={onTaskTypeValueChanged}
                    direction="column"
                    justifyContent="start"
                ></Options>
            {:else if taskTypeIndex == 2}
                <div class="task-year">
                    <DateInput
                        placeholder="Дата начала (YYYY.MM.DD)"
                        margin="0rem 0rem .5rem 0rem"
                        bind:date={startTime}
                    ></DateInput>
                    <DateInput
                        placeholder="Дата окончания (YYYY.MM.DD)"
                        margin="0rem 0rem .5rem 0rem"
                        bind:date={closeTime}
                    ></DateInput>
                </div>
            {:else if taskTypeIndex == 3}
                <div>No</div>
            {/if}
        </div>
    {/if}
    <div class="task-options">
        <Button
            text="Сохраните"
            action={CreateTaskByAccountId}
            iconUrl="/images/save.svg"
            direction="row"
            backgroundColor="#39a5db"
        ></Button>
    </div>
</div>

<style>
    .page-task {
        display: flex;
        flex-direction: column;
    }
    .task-detail {
        display: flex;
        flex-direction: column;
        margin: 0rem 0.5rem;
    }
    .task-config {
        flex-grow: 1;
        margin: 0rem 0.5rem;
    }
    .task-single {
        display: flex;
        flex-direction: column;
    }
    .task-options {
        display: flex;
        flex-direction: row-reverse;
        margin: 0.5rem;
    }
    .task-year {
        display: flex;
        flex-direction: column;
    }
</style>
