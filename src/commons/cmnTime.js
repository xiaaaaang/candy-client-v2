export function AfterDays(time, days) {
    let current = new Date(time);
    current.setDate(current.getDate() + days);
    return current;
}

export function AfterCurrentDays(days) {
    let current = new Date();
    current.setDate(current.getDate() + days);
    return current;
}

export function ToTime(input) {
    const time = input;
    return `${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
}

export function ToDate(input) {
    const date = input;
    let insert = x =>  x < 10 ? '0' + x : x;
    return `${date.getFullYear()}.${insert(date.getMonth() + 1)}.${insert(date.getDate())}`;
}

export function DayOfWeek(input) {
    return input.getDay();
}

export function DayOfMonth(input) {
    return input.getDate();
}

export function DayOfYear() {
    const currentYear = new Date().getFullYear().toString();
    const hasTimestamp = new Date() - new Date(currentYear);
    let hasDays = Math.ceil(hasTimestamp / 86400000); return hasDays;
}