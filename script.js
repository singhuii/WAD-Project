// alternatively, we can use querySelector to select an id with the name of page1-btn
// let pageOneBtn = document.querySelector('#page1-btn');
let pageOneBtn = document.getElementById('page1-btn');
let pageTwoBtn = document.querySelector("#page2-btn");
let pageThreeBtn = document.getElementById("page3-btn");

let pageOne = document.querySelector("#page-1");
let pageTwo = document.querySelector('#page-2');
let pageThree = document.querySelector("#page-3");

// axios.get('data.txt').then(function(response){
//     pageOne.innerHTML = response.data;
// })

loadData();

async function loadData() {
  let response = await axios.get('Home.txt');
  pageOne.innerHTML = response.data;
}

// when we click page one button
// this example uses using await/async instead of promises 
pageOneBtn.addEventListener('click', async function () {
  console.log("page one btn");
  pageTwo.classList.remove('shown');
  pageTwo.classList.add('hidden')

  pageThree.classList.remove('shown');
  pageThree.classList.add('hidden');

  // axios.get('data.txt').then(function(response){
  //   pageOne.innerHTML = response.data;
  // })
  let response = await axios.get('Home.txt');
  pageOne.innerHTML = response.data;

  // show page one
  pageOne.classList.add('shown');
})

pageTwoBtn.addEventListener('click', function () {
  // purge every existing element in pageTwo 
  console.log("page two btn");
  pageTwo.innerHTML =""

  pageOne.classList.remove('shown');
  pageOne.classList.add('hidden');

  pageThree.classList.remove('shown');
  pageThree.classList.add('hidden')

  // show page pageTwo
  pageTwo.classList.add('shown');

  let template = `<h3 class="title"></h3>
  <img src="" class="image"/>`;

  axios.get('gallery.js').then(function (response) {
    // response.data refers to the entire object in gallery array in gallery.json
    let gallery = response.data.gallery;
    for (let artwork of gallery) {
      // this is to create an empty <div>
      let emptyElement = document.createElement('div');

      // set the HTML inside the <div>
      emptyElement.innerHTML = template;

      // look for an element with the class title within the empty element that we just created
      let titleElement = emptyElement.querySelector('.title');
      titleElement.innerHTML = artwork.title;

      let imgElement = emptyElement.querySelector('.image');
      imgElement.setAttribute('src', artwork.url);

      pageTwo.appendChild(emptyElement);

    }
  })
})

pageThreeBtn.addEventListener('click', async function () {
  console.log("page three btn");
  pageTwo.innerHTML =""
  pageOne.classList.remove('shown');
  pageOne.classList.add('hidden')

  pageTwo.classList.remove('shown');
  pageTwo.classList.add('hidden');

  let response = await axios.get('contact.html');
  pageThree.innerHTML = response.data;

  pageThree.classList.add('shown');
})
