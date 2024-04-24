const randomBgColors: string[] = [
    'E6FCFF80',
    'E3FCEF80',
    'FFF2FB80',
    'FFEBE580',
    'E6FCFF80',
    'FFFAE580',
]

export const getNonConsecutiveColor = (prevColor: string) => {
    let index = randomBgColors.findIndex(color => color === prevColor);
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * randomBgColors.length);
    } while (nextIndex === index || Math.abs(nextIndex - index) === 1);

    return randomBgColors[nextIndex];
}