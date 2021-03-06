const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false);
//false 동기, true 비동기
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function(){
  const id = this.location.hash.substr(1);


  ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  ajax.send();

  const newContent = JSON.parse(ajax.response);
  const title = document.createElement('h1');

  title.innerHTML = newContent.title;

  content.appendChild(title);
  console.log(newContent);
});

for(let i = 0; i < 10; i++){
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_cuont})`;

  li.appendChild(a);
  ul.appendChild(li);
}

document.container.appendChild(ul);
document.container.appendChild(content);