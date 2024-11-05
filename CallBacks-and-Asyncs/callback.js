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

//Progression 3: Create a function to create cookies using callback function
function createCookies(newCookie, callback) {
  setTimeout(() => {
    cookies.push(newCookie);
    callback();
  }, 2000);
}

// Progression 4: calling functions
createCookies(newCookie, getCookies);
