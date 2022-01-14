// const input = document.getElementById('input');

// function addingEventListener() {    
//     input.addEventListener('click', function() {
//         alert('I was clicked!');
//       });
// }

// addingEventListener()

function addingEventListener(){
  document.querySelector('input').addEventListener('click', () => alert('I was clicked!'));
}