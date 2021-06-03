

    const calculateAgeInDogYears = (age) => {
        const ageInDogYears = age / 7;
        return ageInDogYears
    }
   const dogAge = 6.428
   console.log(dogAge)



const bestInShow = (breed) => {
    if (breed === "meow") {
        return `"I like cats."`
    } else
    return `My favorite dog breed is ${breed}.`
} 
const myFavorite = bestInShow()

console.log(`When it comes to pets, ` + bestInShow("meow"))



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
   let calculation = num % 2;
    if (calculation === 0) {
      return `even` 
      } else {
          return `odd`
      }
}
console.log(evenOrOdd(3))
console.log(evenOrOdd(9))
console.log(evenOrOdd(6))
console.log(evenOrOdd(13784128))


const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */

const filter = (arr, str) => { 
    let letter =  str
    let newArr = arr.filter(word => word.startsWith(letter))
             return newArr
    }
    

console.log(filter(words, "k"))
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */


/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


console.log()