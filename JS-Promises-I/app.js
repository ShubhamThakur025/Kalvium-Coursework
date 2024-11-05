// create a function and following the progressions inside the function.
const getBtn = document.getElementById('btnGet');
getBtn.addEventListener('click', getData);

function getData() {
  let getMessage = document.getElementById('message');
  console.log(getMessage);
  getMessage.innerHTML = '';

  // Progression 1: Create a promise call which fetches data
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      console.log('First Response', res);
      return res.json();
    })
    .then((result) => {
      console.log('Second Response', result);

      // Progression 2: Display the fetched data in the form of list
      result.forEach((user) => {
        getMessage.innerHTML += `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`;
      });
    })
    // Progression 3: When the promise call is rejected then throw an error
    .catch((error) => {
      console.log('Promise Rejected');
      console.log(error.message);
    });
}
