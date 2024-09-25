// Get the articleID from the URL
const urlParams = new URLSearchParams(window.location.search);
const articleID = urlParams.get('id');

// Fetch the article data
fetch('../../data/press.json')
  .then(response => response.json())
  .then(data => {

    // Find the article with the matching articleID
    const article = data.find(item => item.ID === articleID);

    // Check if the article exists
    if (article) {
      const gridContainer = document.querySelector('#populate-article');
      const div = document.createElement('div');
      div.className = 'item';

      // Remove the leading '/views' from the article page URL
      const articlePage = article.link.replace('/views', '');

      // Replace \n\n with <br>
      const formattedText = article.text.replace(/\n\n/g, '<br>');

      div.innerHTML = `
        <a href="${articlePage}?id=${article.ID}"><img src="${article.image}" alt=""></a>
        <div>
          <h1>${article.title}</h1>
   
          <h2>${article.subtitle}</h2>
          <br>
          <p>- ${article.medium} -</p>
          <p class="italic">(${article.year})</p>
          <br>
          <p>${formattedText}</p>
          <br>
        </div>
      `;
      gridContainer.appendChild(div);
    } else {
      console.log('Article not found');
    }
  })
  .catch(error => console.error('Error fetching article data:', error));
