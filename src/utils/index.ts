import dayjs from '@/lib/dayjs';

export const randomElement = <T>(array: T[]): T => {
    const index = Math.floor(Math.random() * array.length);
    
    return array[index];
};


export const randomElements = <T>(array: T[], length: number): T[] => {
    const randomArr: T[] = [];

    for(let i = 0; i < length; i++) {
        randomArr.push(randomElement(array));
    }

    return randomArr;
}

export function luminance(r: number, g:number, b: number) {
    let a = [r, g, b].map(function (v)  {
        v /=  255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });

    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function contrast(rgb1: number[], rgb2: number[]) {
    let num1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    let num2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    let brightest = Math.max(num1, num2);
    let darkest = Math.min(num1, num2);
    return (brightest + 0.05) / (darkest + 0.05);
}

export function hexToRgb(hex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
       ? [
           parseInt(result[1], 16),
           parseInt(result[2], 16),
           parseInt(result[3], 16),
       ]
       : null;
}

export const isColorVisible = (
    textColor: string,
    backgroundColor: string = "#000000",
    ratio: number = 3.2
) => {
    const textColorRgb = hexToRgb(textColor);
    const backgroundColorRgb = hexToRgb(backgroundColor);

    return contrast(textColorRgb, backgroundColorRgb) >= ratio;
};

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function parseTime(seconds: string | number) {
    seconds = seconds.toString();
    let minutes = Math.floor(Number(seconds) / 60).toString();
    let hours = "";

    if (Number(minutes) > 59) {
        hours = Math.floor(Number(minutes) / 60).toString();
        hours = Number(hours) >= 10 ? hours : `0${hours}`;
        minutes = (Number(minutes) - Number(hours) * 60).toString();
        minutes = Number(minutes) >= 10 ? minutes : `0${minutes}`;
    }

    seconds = Math.floor(Number(seconds) % 60).toString();
    seconds = Number(seconds) >= 10 ? seconds : "0" + seconds;

    if (hours) {
        return `${hours}:${minutes}:${seconds}`;
    }

    return `${minutes}:${seconds}`
}
