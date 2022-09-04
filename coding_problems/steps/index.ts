function steps(n: number) {
    let count = 1;
    let line = '';

    for (let i = 0; i < n; i++) {
        for (let z = 1; z <= n; z++) {
            if (z <= count) {
                line = "#" + line;
            } else {
                line = line + ' ';
            }
            if (z === n) {
                console.log(line);
            }
        }
        line = '';
        count = count + 1;
    }
}

steps(10);