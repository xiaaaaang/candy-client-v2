<script>
    import { onMount,onDestroy } from "svelte";

    let timer = null;
    let clock = {
        time:'HH:mm',
        date:'yyyy-MM-dd'
    }

    onMount(() => {
        timer = setInterval(() => {
            let time = new Date();
            clock.time = `${time.getHours()}:${time.getMinutes()}`;
            clock.date = `${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()}`;
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(timer);
    });
</script>

<div class="ctrl-clock">
    <span class="clock-time">{clock.time}</span>
    <span class="clock-date">{clock.date}</span>
</div>

<style>
    .ctrl-clock {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .clock-time {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--font-dark);
    }
    .clock-date{
        font-size: .8rem;
        color: var(--font-dark-v1);
    }
</style>
