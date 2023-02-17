const {formatToMoney, formatCategories} = require("../../components/utils");

describe('utils', () => {
    test('formatToMoney valid value', () => {
        expect(formatToMoney('1000')).toEqual('1.000');
    });

    test('formatToMoney invalid value ', () => {
        expect(formatToMoney(false)).toEqual('0');
    });

    test('formatCategories valid value ', () => {
        expect(formatCategories(['nube','carro','moto'])).toEqual(
            'nube  >  carro  >  moto'
        );
    });

    test('formatCategories invalid value ', () => {
        expect(formatCategories(undefined)).toEqual('');
    });
});
