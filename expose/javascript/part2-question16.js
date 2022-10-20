// Part 2 Questoin 16
for (const item in statistics) {
    if(item[0] == 'r' || (statistics[item] % 2 != 0)) {
        console.log(statistics[item])
    }
}