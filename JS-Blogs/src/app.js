class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var titleCard = document.createElement('h1');
    titleCard.setAttribute('id', 'blog-title');
    document.getElementById('card-text').appendChild(titleCard);
    titleCard.innerHTML += this.title;
  }
  addDescription() {
    var desc = document.createElement('p');
    desc.setAttribute('id', 'blog-description');
    document.getElementById('card-text').appendChild(desc);
    desc.innerHTML += this.detail;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
let flag = 1;
let helperAddPost = () => {
  let popup = document.getElementById('popupContact');
  console.log(popup);
  if (flag == 1) {
    popup.style.display = 'block';
    return (flag = 0);
  } else {
    popup.style.display = 'none';
    return (flag = 1);
  }
};

let helperPost = () => {
  let title = document.getElementById('title').value;
  let detail = document.getElementById('detail').value;

  let blog = new Blog(title, detail);
  blog.addTitle();
  blog.addDescription();
};
