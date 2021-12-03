// Array method .slice() returns a brand-new array based on process.argv starting at the third index and ending
// with the final index
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);





// Lack of parentheses around the 'profileDataArr' parameter
const printProfileData = (profileDataArr) => {
    // This ...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this...
    profileDataArr.forEach((profileItem) => console.log(profileItem)); 


printProfileData(profileDataArgs);}