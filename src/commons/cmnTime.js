export function AfterDays(time, days) {
    let current = new Date(time);
    current.setDate(current.getDate() + days);
    return current;
}

export function ToTime(input) {
    const time = new Date(input);
    return `${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
}

export function ToDate(input) {
    const date = new Date(input);
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}