const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url){
    ajax.open('GET', url, false);
    //false 동기, true 비동기
    ajax.send();

    return JSON.parse(ajax.response);
}


const newsFeed = getData(NEWS_URL);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function(){
  const id = this.location.hash.substr(1);

  const newContent =  getData(CONTENT_URL.replace('@id',id));
  const title = document.createElement('h1');

  title.innerHTML = newContent.title;

  content.appendChild(title);
  console.log(newContent);
});

for(let i = 0; i < 10; i++){
  const div = document.createElement('div');
  const li = document.createElement('li');
  const a = document.createElement('a');

div.innerHTML = `
<li>
    <a href="#${newsFeed[i].id}">
    ${newsFeed[i].title} (${newsFeed[i].comments_cuont})
    </a>
</li>
`;
  ul.appendChild(div.firstElementChild);
}

container.appendChild(ul);
container.appendChild(content);