let url = "https://jsonplaceholder.typicode.com/photos"
let wrapper = document.querySelector('.wrapper')

for (let i = 0; i <= 50; i++) {
   axios.get(url + '/' + i)
      .then(res => {
         if (res.status === 200 || res.status === 201) {
            reload(res.data)
            console.log(res.data);
         }
      })
      .catch(err => console.log(err))
}

function reload(item) {
   wrapper.innerHTML += `
         <div class="item">
            <img src="${item.url}">
            <span class="item_text">${item.title}</span>
         </div>
      `
}
