import main from 'scripts';
import test from 'tape';

test('index', t => {

    const actual = main(),
        expect = true;

    t.ok(actual, expect);
    t.end();

});
