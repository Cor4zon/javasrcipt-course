/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    let resultTriplets = [];

    for (let i=0; i < nums.length; i++){
        for (let j=i+1; j < nums.length; j++) {
            for (let k=j+1; k < nums.length; k++) {
                if (!((i != j) && (i != k) && (j != k))) {
                    continue;
                };

                if (!(nums[i] + nums[j] + nums[k])){
                    const newTriplet = [nums[i], nums[j], nums[k]].sort();

                    if (resultTriplets.indexOf(newTriplet) == -1){
                        resultTriplets.push(newTriplet);
                    };
                };
            }
        }
    }
    return resultTriplets;
};

let a = 5;
let b = 10;
let temp = 0;

te
a, b = b, a;
console.log(a);
console.log(b);