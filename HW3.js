//1
const twoPow = (number) => {
    let i = 1
    while(i ** 2 < number){
        i++
    }
    return i
}

console.log(twoPow(101));

//2
const kamelBodan = (number) => {
    let sum = 0
    for(let i = 1; i <= number / 2; i++){
        if(number%i === 0){
             sum += i
        }
    }
    return sum === number
}

console.log(kamelBodan(10));

//3
const checkGhaemzavei = (num1, num2, num3) => {
    if( num1**2 === num2**2 + num3**2 || num2**2 === num1**2 + num3**2 || num3**2 === num2**2 + num1**2){
        return 'Yes'
    } else{
        return 'No'
    }
}

console.log(checkGhaemzavei(3,4,5));

//4
const detailsForm = (firstName, lastName, age, gender, phoneNumber, email) => {
    return {
        FirstName : firstName,
        LastName : lastName,
        Age: age,
        Gender: gender,
        PhoneNumber: phoneNumber,
        Email: email
    }
}

console.log(detailsForm('soheil','saedi', 21, 'male', 09197164064, 'soheil.saedi@gmail.com'));

//5
const BMIHandeler = (weight,height) => {
    const BMI = weight/(height ** 2)
    if (BMI < 18.5) {
        console.log(BMI, ` Underweight`);
    }else if(BMI < 25){
        console.log(BMI, ` Normal`);
    }else if(BMI < 30){
        console.log(BMI, ` Overweight`);
    }else{
        console.log(BMI, ` Obense`);
    }
}

BMIHandeler(60,1.71)

//6
const examHandeler = (score,day) => {
    if(day === 0){
        console.log(20);
    }else if(day <= 7){
        console.log(score);
    }else{
        console.log(score - day);
    }
}

examHandeler(13,0)