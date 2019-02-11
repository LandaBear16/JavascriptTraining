var c;
function foo(a) {

    var b = a * 2;
    var c = 20;

    function bar(c) {
        console.log(a, b, c);
    }

    bar(b * 3);
}

foo(2); // 2, 4, 12

