const list = document.getElementById('list');

function load(){
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  list.innerHTML = '';

  bookmarks.forEach((b,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="${b.url}" target="_blank">${b.name}</a>
      <button onclick="remove(${i})">x</button>
    `;
    list.appendChild(li);
  });
}

function add(){
  const name = document.getElementById('name');
  const url = document.getElementById('url');

  if(!name.value || !url.value) return;

  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.push({ name: name.value, url: url.value });

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  name.value = '';
  url.value = '';
  load();
}

function remove(i){
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  bookmarks.splice(i,1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  load();
}

load();
