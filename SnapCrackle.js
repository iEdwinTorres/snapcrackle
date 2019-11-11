function snapCrackle(maxValue) {
    for (let i = 1; i <= maxValue; i++) {
        if (i%10 === 0) {
            console.log("Crackle, ")
        }   else if (i%5 === 0) {
            console.log("SnapCrackle, ")
        }   else if (i%2 === 1) {
            console.log("Snap, ")
        }
        else console.log(i + ', ')
    }
}
snapCrackle(17)