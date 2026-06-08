class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = [];
  const cars = position.map((p, i) => [p, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);
  console.log(cars)
  for (let i = 0; i < cars.length; i++) {
    let time = (target - cars[i][0]) / cars[i][1]; 

    if(stack.length === 0 || time > stack[stack.length - 1]){
        stack.push(time);
    }
  }
  return stack.length;
    }
}
