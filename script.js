const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        rating: 5
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        rating: 4
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        rating: 5
    }
];

const container = document.querySelector("#book-container");

books.forEach(book => {
    container.innerHTML += `
        <div class="book-card">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Rating: ${book.rating}/5</p>
        </div>
    `;
});

document.querySelector("#welcomeBtn").addEventListener("click", () => {
    alert("Welcome to BookVerse!");
});