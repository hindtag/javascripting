// const boxDiv = document.getElementById('box');

// function handleBoxClick(e) {
// 	alert('hey tag');
// }

// boxDiv.addEventListener('click', handleBoxClick);

// Event object
// const boxDiv = document.getElementById('box');

// boxDiv.addEventListener('click', function (e) {
// 	console.log(e);
// });

// Arrow function
const boxDiv = document.getElementById('box');

// This is a standard
boxDiv.addEventListener('click', function (e) {
	console.log(this);
});

// This is a arrow function
boxDiv.addEventListener('click', (e) => {
	console.log('this');
});
