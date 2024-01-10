function RenderBucher() {
    const Wrapper = document.querySelector('.bucher')       
    const Bucher = getBooks()

    Wrapper.innerHTML = `<div class="buch">
    <figure class="buch__img--wrapper">
      <img class="buch__img" src="${Bucher[0].url}" alt="">
    </figure>
    <div class="buch__titel">
    ${Bucher[0].title}
    </div>
    <div class="buch__ratings">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i> 
    </div>
    <div class="buch__preis">
      <span class="buch__preis--normal">€${Bucher[0].originalPreis}</span> €${Bucher[0].salePreis}
    </div>
  </div>`
}

setTimeout(() => {
    RenderBucher()   
});

// api nachahmen
function getBooks() {
    return [
      {
        id: 1,
        title: "Crack the Coding Interview",
        url: "assets/crack the coding interview.png",
        originalPreis: 49.95,
        salePreis: 14.95,
        rating: 4.5,
      },
      {
        id: 2,
        title: "Atomic Habits",
        url: "assets/atomic habits.jpg",
        originalPreis: 39,
        salePreis: null,
        rating: 5,
      },
      {
        id: 3,
        title: "Deep Work",
        url: "assets/deep work.jpeg",
        originalPreis: 29,
        salePreis: 12,
        rating: 5,
      },
      {
        id: 4,
        title: "The 10X Rule",
        url: "assets/book-1.jpeg",
        originalPreis: 44,
        salePreis: 19,
        rating: 4.5,
      },
      {
        id: 5,
        title: "Be Obsessed Or Be Average",
        url: "assets/book-2.jpeg",
        originalPreis: 32,
        salePreis: 17,
        rating: 4,
      },
      {
        id: 6,
        title: "Rich Dad Poor Dad",
        url: "assets/book-3.jpeg",
        originalPreis: 70,
        salePreis: 12.5,
        rating: 5,
      },
      {
        id: 7,
        title: "Cashflow Quadrant",
        url: "assets/book-4.jpeg",
        originalPreis: 11,
        salePreis: 10,
        rating: 4,
      },
      {
        id: 8,
        title: "48 Laws of Power",
        url: "assets/book-5.jpeg",
        originalPreis: 38,
        salePreis: 17.95,
        rating: 4.5,
      },
      {
        id: 9,
        title: "The 5 Second Rule",
        url: "assets/book-6.jpeg",
        originalPreis: 35,
        salePreis: null,
        rating: 4,
      },
      {
        id: 10,
        title: "Your Next Five Moves",
        url: "assets/book-7.jpg",
        originalPreis: 40,
        salePreis: null,
        rating: 4,
      },
      {
        id: 11,
        title: "Mastery",
        url: "assets/book-8.jpeg",
        originalPreis: 30,
        salePreis: null,
        rating: 4.5,
      },
    ];
  }
  