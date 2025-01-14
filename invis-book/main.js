function addBook() {
    const title = prompt('Enter book title:');
    if (!title) return;

    const author = prompt('Enter author name:');
    if (!author) return;

    const description = prompt('Enter book description:');
    if (!description) return;

    const bookList = document.getElementById('bookList');
    const bookCard = createBookCard(title, author, description);
    bookList.appendChild(bookCard);
}

function createBookCard(title, author, description) {
    const article = document.createElement('article');
    article.className = 'book-card';

    const titleElement = document.createElement('h2');
    titleElement.className = 'book-title';
    titleElement.textContent = title;

    const authorElement = document.createElement('h3');
    authorElement.className = 'book-author';
    authorElement.textContent = author;

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'book-description';
    descriptionElement.textContent = description;

    article.appendChild(titleElement);
    article.appendChild(authorElement);
    article.appendChild(descriptionElement);

    return article;
}