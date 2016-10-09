/*  eslint id-length: [0] */
import main from 'scripts';
import test from 'tape';

test('index', (t) => {

    const actual = main(),
        expect = true;

    t.equal(actual, expect);
    t.end();

});
