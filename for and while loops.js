//for loop
for (var i = 1; i <=3; i++){
    console.log(i)
}
console.log("Go!");

for (var i = 10; i > 0; i--){
    console.log(i)
}
console.log("Happy New Year!")

for (var j = 1; j < 6; j++){
    console.log(j) 
} 
console.log("Counting Completed!")

for (var k = 5; k > 0; k--){
    console.log(k)
}
console.log("Countdown Finished!")

for (var i = 1; i <= 10; i++) {
    switch(i){
        case 1:
            console.log("Gold Medal")
            break
        case 2:
            console.log("Silver Medal")
            break
        case 3:
            console.log("Bronze Medal")
            break
        default:
            console.log(i)
    }
}


//while loop
var counter = 3
while(counter > 0){
    console.log(counter)
    counter = counter - 1
}
console.log("Go!")

var countdown = 10
while (countdown > 0){
    console.log(countdown)
    countdown = countdown - 1
}
console.log("Happy New Year!")

var counting = 1
while(counting < 6){
    console.log(counting)
    counting = counting + 1
}
console.log("Counting Complete!")

var counted = 5
while(counted > 0){
    console.log(counted)
    counted = counted - 1
}
console.log("Countdown Finished!")

var year = 2018
while (year < 2023){
    console.log(year)
    year = year + 1
}