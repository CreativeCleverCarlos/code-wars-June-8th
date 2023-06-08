

function fakeBin(x){
    //split the string into individual numbers
    let apart = x.split('')
    //go through each individual array element and assign a new value
    let newApart = apart.forEach(number => number < 5 ? 1 : 0)
    //join the string back together
    newApart = newApart.join('')
    //
    return newApart

}
