<script>
    import Title from "../controls/Title.svelte";
    import Text from "../controls/Text.svelte";
    import Options from "../components/Options.svelte";
    import Date from "../controls/Date.svelte";
    import Button from "../controls/Button.svelte";

    let taskTypes = [
        {
            id: 0,
            imageUrl: "",
            content: "Однажды",
            isSelected: false,
        },
        {
            id: 1,
            imageUrl: "",
            content: "Цикличность",
            isSelected: false,
            margin:"0rem .5rem",
        },
        {
            id: 2,
            imageUrl: "",
            content: "Долгосрочно",
            isSelected: false,
        },
    ];

    let taskRepeatTypes = [
        {
            id: 0,
            imageUrl: "/images/by-day-selected.svg",
            content: "Ежедневно",
            isSelected: false,
            margin:"0rem 0rem .5rem 0rem"
        },
        {
            id: 1,
            imageUrl: "/images/by-week.svg",
            content: "Еженедельно",
            isSelected: false,
            margin:"0rem 0rem .5rem 0rem"
        },
        {
            id: 2,
            imageUrl: "/images/by-month.svg",
            content: "Ежемесячно",
            isSelected: false,
            margin:"0rem 0rem .5rem 0rem"
        },
        {
            id: 3,
            imageUrl: "/images/by-year.svg",
            content: "Ежегодно",
            isSelected: false,
            margin:"0rem 0rem .5rem 0rem"
        },
    ];

    let currentOption = null;
    function onOptionChanged(option) {
        currentOption = option;
    }

    let currentTaskTypeOption = 0;
    function onTaskTypeOptionChanged(option) {
        currentTaskTypeOption = option;
    }
</script>

<div class="page-root page-task">
    <Title title="Информация о миссии" description="Существительные и описания заданий"></Title>
    <div class="task-detail">
        <Text 
            placeholder="Название задания" 
            rows="1"
            margin="0rem 0rem .5rem 0rem"
        ></Text>
        <Text
            placeholder="Описание задания"
            rows="3"
            margin="0rem 0rem .5rem 0rem"
        ></Text>
        <Options fontSize="0.75rem" options={taskTypes} {onOptionChanged} justifyContent="center"></Options>
    </div>
    <Title title="Расширенная информация" description="Типы заданий и способы их повторения"></Title>
    {#if currentOption != null}
        <div class="task-config">
            {#if currentOption.id == 0}
                <div class="task-single">
                    <Date placeholder="Дата ( YYYY / MM / DD )"></Date>
                </div>
            {:else if currentOption.id == 1}
                <Options
                    options={taskRepeatTypes}
                    onOptionChanged={onTaskTypeOptionChanged}
                    direction="column"
                    justifyContent="start"
                ></Options>
            {:else if currentOption.id == 2}
                <div class="task-year">
                    <Date placeholder="Дата начала ( YYYY / MM / DD )" margin="0rem 0rem .5rem 0rem"></Date>
                    <Date placeholder="Дата окончания ( YYYY / MM / DD )" margin="0rem 0rem .5rem 0rem"></Date>
                </div>
            {:else if currentOption.id == 3}
                <div>No</div>
            {/if}
        </div>
    {/if}
    <div class="task-options">
        <Button
            text="Сохраните"
            action={() => {}}
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
        margin: 0rem .5rem;
    }
    .task-config {
        flex-grow: 1;
        margin: 0rem .5rem;
    }
    .task-single {
        display: flex;
        flex-direction: column;
    }
    .task-options {
        display: flex;
        flex-direction: row-reverse;
        margin: .5rem;
    }
    .task-year {
        display: flex;
        flex-direction: column;
    }
</style>
