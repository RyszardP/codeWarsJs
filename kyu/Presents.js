function presents(a) {
    let array = [];
    for (let i = 0; i < a.length; i++) {
        array[i] = a.indexOf(i + 1) + 1;
    }
    return array;
}

[
    {a: [2, 3, 4, 1], ans: [4, 1, 2, 3]},
    {a: [1, 3, 2], ans: [1, 3, 2]},
    {a: [1, 2], ans: [1, 2]}
].forEach(t =>
    console.log(presents(t.a), '->', t.ans, `wrong answer in test a=[${t.a}]`));