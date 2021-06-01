

    const calculateAgeInDogYears = (age) => {
        const ageInDogYears = age / 7;
        return ageInDogYears
    }

   const dogAge = 6.428
   console.log(dogAge)


   const add = (num1, num2, num3) => {
        return num1 + num2 + num3;
   }
   console.log(add(17, 4, 11))
  
   const go = (direction, speed) => {
       if (speed > 75) {
           console.log(`The car is going ${direction} at ${speed} mph. Slow Down!`)
       } else {
        console.log(`The car is going ${direction} at ${speed} mph.`)
       }
   }

go("forwards", 45)
go("backwards", 8)
go("in circles", 12)
go("insane", 120)


const evenOrOdd = (num) => {
  if (num % {
      return `even` 
      } else {
          return `odd`
      }
}
console.log(evenOrOdd(3))
console.log(evenOrOdd(9))
console.log(evenOrOdd(6))