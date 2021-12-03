const fs = require('fs');
const generatePage = require('./src/page-template.js')

// Array method .slice() returns a brand-new array based on process.argv starting at the third index and ending
// with the final index
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

console.log(name,github);

const pageHTML = generatePage(name, github);


// First argument - file name (index.html)
// Second argument - data that's being written (HTML String template)
// Third argument - callback function that will handle any errors and success message
fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
});






// // Lack of parentheses around the 'profileDataArr' parameter
// const printProfileData = (profileDataArr) => {
//     // This ...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem)); 
// };

// printProfileData(profileDataArgs);