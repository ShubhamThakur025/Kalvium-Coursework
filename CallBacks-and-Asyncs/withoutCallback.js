const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies() {
  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    let cookieList = '';
    cookies.forEach((cookie) => {
      cookieList += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = cookieList;
  }, 1000);
}

//Progression 3: Create a function to create cookies
// use setTimeout() -- use 2000 units for time parameter
function createCookies(newCookie) {
  setTimeout(() => {
    cookies.push(newCookie);
  }, 2000);
}

// Progression 4: calling functions
createCookies(newCookie);
getCookies();
