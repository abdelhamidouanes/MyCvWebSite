export function getFileName(fileName: string): string{
    return fileName.split('.').slice(0, -1).join('.');
}
export function  getLength(array: any[]): number{
    return array.length;
}
export function getMonth(mois: number, type: string): string{
    let res: string;
    if (type === '3') {
        switch (mois) {
            case 1:
                res = 'Jan';
                break;
            case 2:
                res = 'Fev';
                break;
            case 3:
                res = 'Mar';
                break;
            case 4:
                res = 'Avr';
                break;
            case 5:
                res = 'Mai';
                break;
            case 6:
                res = 'Jun';
                break;
            case 7:
                res = 'Jul';
                break;
            case 8:
                res = 'Aou';
                break;
            case 9:
                res = 'Sep';
                break;
            case 10:
                res = 'Oct';
                break;
            case 11:
                res = 'Nov';
                break;
            case 12:
                res = 'Dec';
                break;
            default:
                res = '';
                break;
        }
    }
    return res;
}

export function getAge(dateNaissace: Date): number{
    const todayYear = new Date().getFullYear();
    const naissanceYear = dateNaissace.getFullYear();
    const difference = todayYear - naissanceYear;
    return difference;
}

export function getDomaineEmail(adrEmail: string): string {
    return adrEmail.substring(adrEmail.indexOf('@'));
}

export function getIdentifiantEmail(adrEmail: string): string {
    return adrEmail.substring(0, adrEmail.indexOf('@'));
}
