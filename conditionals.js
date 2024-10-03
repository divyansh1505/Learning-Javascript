const name = prompt("Enter your good name : ")
alert (`Hello ${name}`)

let time = prompt("Enter the time of your visit (in 24hr format): ")
if (time < 0 || time > 24){
    alert("Enter valid time")
}
else if (time > 17 || time < 9){
    alert(`Office will be closed at that time ${name}`)
} else if (time > 9 && time < 17) {
    let ans = prompt("Slot is available. Confirm slot booking? : ")
    if (ans === "yes" || ans === "Yes"){
        alert("Slot Booked!")
    }else if (ans === "No" || ans === "no"){
        alert("Okay")
    }
}
