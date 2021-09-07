function highAndLow(numbers) {
    const arr = numbers.split(" ")
    //here we split the numbers in the string and we create a new array.
    let maxNum = arr[0]
    // we set the maxNum equal to the zero index of our new array
    let minNum = arr[0]
    // we set the minNum equal to the
    for(let num of arr) {
      // here our for loop is looping through the array and picking out the numbers 
      // in each index. 
        if(Number(num) > maxNum) {
            maxNum = num
          //here we use the Number to let the computer know that each stringed int is 
          //going to be treated as a number. if the current num(the current
          // iteration) is greater than the current maxNum(which begins being equal to
         // the first number and then as it is compared in the for loop if statment is 
          //changed by the num value) this if statment behaves differently than I am used 
          //to. here we arent using if else, but two seperate if statments that go into two 
          //seperate values. this is similar to the way we dealt with functions in our
          //snake game. the array is being evaluated in two different contexts which is 
          //how both maxNum and minNum can be = arr[0];
        }

        if(Number(num) < minNum) {
            minNum = num
          //seperate if statment for handling how we want to determine the minimum number.
          //start off by setting the minNumber to arr[0] we then use the if statment to compare
          //the current value to num in the for loop. if the num is less than minNum, minNum is then
          // given num as its new value.
        }
    }

    return maxNum + " " + minNum
  //here we join the min and max number with a space in between, following the syntax 
  //given to us by codewars.
}
