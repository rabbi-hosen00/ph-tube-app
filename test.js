

// const isVerified = true;

// if(isVerified === true){
//     console.log("user is verified")
// }else{
//     console.log("user is not verified")
// }

// console.log(`${isVerified === true ? "user is verified": "user is not verified"}`)

const getTimeString = (time) =>{
    // get hour and rest second
    const hour = parseInt(time / 3600)
    let remainingSecond = time % 3600
    let remainingMinutes = parseInt(remainingSecond / 60)
     remainingSecond = remainingSecond % 60
    return `${hour} hour ${remainingMinutes} minutes ${remainingSecond}second ago`
}

console.log(getTimeString(7865))

