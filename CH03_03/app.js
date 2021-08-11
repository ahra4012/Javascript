const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'

ajax.open('GET', NEWS_URL, false);
//false 동기, true 비동기
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

for(let i = 0; i < 10; i++){
  const li = document.createElement('li');
  const a = document.createElement('a');


  li.innerHTML = newsFeed[i].title;
  li.appendChild(a);
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);
