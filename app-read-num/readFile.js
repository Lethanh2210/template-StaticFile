function readNum0_19(num) {
    switch (num) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function readNumAll(num) {
    let ones = 0;
    let tens = 0;
    let hund = 0;
    let temp = num;
    let count = 1;
    let read = '';
    while (temp !== 0) {
        switch (count) {
            case 1:
                ones = temp % 10;
                temp = Math.floor(temp / 10);
                count++;
                break;
            case 2:
                tens = temp % 10;
                temp = Math.floor(temp / 10);
                count++;
                break;
            case 3:
                hund = temp % 10;
                temp = Math.floor(temp / 10);
                count++;
                break;
        }
    }
    if (num >= 0 && num <= 99) {
        read = read2Num(num, ones, tens);

    } else if (num >= 100 && num <= 999) {
        let num2 = num % 100;
        read = readNum0_19(hund) + ' hundred and ' + read2Num(num2, ones, tens);
    }
    return read;
}

function readTens(tens) {
    switch (tens) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}

function read2Num(num, ones, tens) {
    if (num >= 0 && num <= 20) {
        return readNum0_19(num);
    } else if (num >= 20 && num < 100) {
        if (ones === 0) {
            return readTens(tens);
        } else {
            return readTens(tens) + ' ' + readNum0_19(ones);
        }
    }
}

console.log(readNumAll(135));