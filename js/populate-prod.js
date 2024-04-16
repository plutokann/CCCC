// fetch('data/productions.json')
//   .then(response => response.json())
//   .then(data => {
//     const gridContainer = document.querySelector('#populate-productions');
//     // Clear the existing items
//     gridContainer.innerHTML = '';
    
//     // Reverse the data array to iterate from newer to older
//     data.reverse();
    
//     data.forEach(item => {
//       const div = document.createElement('div');
//       div.className = 'item';
//       div.innerHTML = `
//         <a href="#"><img src="${item.image}" alt=""></a>
//         <div>
//           <h3>${item.name}</h3>
//           <p>${item.medium}</p>
//           <p>${item.year}</p>
//         </div>
//       `;
//       gridContainer.appendChild(div);
//     });
//   });

fetch('data/productions.json')
  .then(response => response.json())
  .then(data => {
    const gridContainer = document.querySelector('#populate-productions');
    // Clear the existing items
    gridContainer.innerHTML = '';
    
    // Reverse the data array to iterate from newer to older
    data.reverse();

    // Get the current page name
    const pageName = window.location.pathname.split('/').pop();

    // Limit the number of items if the page is 'index.html'
    const limit = pageName === 'index.html' ? 3 : data.length;

    // Use the slice method to get the limited number of items
    const limitedData = data.slice(0, limit);

    limitedData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <a href="#"><img src="${item.image}" alt=""></a>
        <div>
          <h3>${item.name}</h3>
          <p>${item.medium}</p>
          <p>${item.year}</p>
        </div>
      `;
      gridContainer.appendChild(div);
    });
  });
