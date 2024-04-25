const randomBgColors: string[] = [
    'hover:bg-[#E6FCFF80]',
    'hover:bg-[#E3FCEF80]',
    'hover:bg-[#FFF2FB80]',
    'hover:bg-[#FFEBE580]',
    'hover:bg-[#E6FCFF80]',
    'hover:bg-[#FFFAE580]',
]

export const getNonConsecutiveColor = (prevColor: string) => {
    if (prevColor !== '') {
        let index = randomBgColors.findIndex(color => color === prevColor);
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * randomBgColors.length);
        } while (nextIndex === index || Math.abs(nextIndex - index) === 1);

        return randomBgColors[nextIndex];
    } else {
        let index = Math.floor(Math.random() * randomBgColors.length);
        return randomBgColors[index];
    }
}