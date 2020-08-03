// the thing        event type      the code to run
// button           click           change the color
// input            hits return     get search results
// image            mouseover       display the image caption

const btn = document.querySelector('#clicker');

//* Set Event to function
btn.onclick = function () {
  console.log('hi!!!');
};

//* 2 Ways Not To Do Event Listeners
//* Add inline
//* Set Event to function
