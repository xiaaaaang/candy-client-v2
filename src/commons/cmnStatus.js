export function toColor(status) {

    const map = [
        { key: x => x <= 0, value: "#F05654" },
        { key: x => x > 0 && x < 11, value: "#FFC773" },
        { key: x => x > 10 && x < 21, value: "#39a5db" },
        { key: x => x > 20 && x < 31, value: "#329171" },
    ];

    let color = "#3c3c3c";
    for (let i = 0; i < map.length; i++) {
        const e = map[i];
        color = e.value;
        if (e.key(status)) break;
    }

    return color;
}