import { Patient } from './patient';

export const PATIENTS: Patient[] = [
    {
        id: 1,
        cardNumber: 2223,
        name: 'Stefan',
        surname: 'Mijic',
        born: '11/01/1959',
        locale: 'Lazarevo',
        street: 'Ulica 17 br. 5',
        phone: 38765333333,
        email: 'Stefan@Mijic.com',
        message: 'Kardiovaskularni problemi, zakazan za pregled u Cetvrtak'
    },
    {
        id: 2,
        cardNumber: 6611,
        name: 'Dragana',
        surname: 'Zeljkovic',
        born: '11/02/1965',
        locale: 'Centar',
        street: 'Centar bb',
        phone: 38765333333,
        email: 'Dragana@Zeljkovic.com',
        message: 'GERB, refluks + gastritis, terapija dodana'
    },
    {
        id: 3,
        cardNumber: 8883,
        name: 'Jovana',
        surname: 'Ilic',
        born: '12/05/1994',
        locale: 'Drakulic',
        street: 'Mladje Cusica 22',
        phone: 38765333333,
        email: 'Jovana@Ilic.com',
        message: 'Rozacea, upucena kod dermatologa'
    }
];