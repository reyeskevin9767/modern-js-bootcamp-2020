// 3 pieces to a for loop:

// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through

//* Loops 10 times, prints out 'Hello' and num
for (let i = 1; i <= 10; i++) {
  console.log('HELLO', i);
}

//* Loops 10 times, prints out 'Hello' and every third num
for (let i = 1; i <= 10; i += 3) {
  console.log('Hello', i);
}

//* Loops 20 times, prints out 'num x num = num * num
for (let num = 1; num <= 20; num++) {
  console.log(`${num} x ${num} = ${num * num}`);
}

//* Loops 8 times, prints out 200 -> 1 until i equals 0
for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}
