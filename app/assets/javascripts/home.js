function store() {
  fetch('/home', {
    method: 'POST', // or 'PUT', // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
    }
  })
  .then(res => res.json())
}

function getData() {
  fetch('/home/access_key', {
    method: 'GET', // or 'PUT', // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
    }
  })
  .then(res => res.json())
  .then(res => {
    document.querySelector('#data-content').innerHTML = JSON.stringify(res);
  })
}
