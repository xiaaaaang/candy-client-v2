export function toColor(status) {

    const map = {
        0: '#F05654',
        1: '#FFC773',
        2: '#39a5db',
        3: '#329171'
    }

    let color = map[status];
    if (color == undefined) {
        color = map(0);
    }

    return color;
}