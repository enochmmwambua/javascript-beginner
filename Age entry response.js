var age = 12

if (age>=65){
    console.log("You get your income from the pension")
}
else if (age<18){
    console.log("You get allowance")
}
else if (age<65||age==18){
    console.log("Each month you get a salary")

}
else {
    console.log("The value of the age variable is not numerical")
}
