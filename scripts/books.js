const Wrapper = document.querySelector(".bucher");
const Bucher = getBooks();

function RenderBucher(filter) {
  if (filter === "absteigend") {
    Bucher.sort((a, b) => {
      return (
        (a.salePreis || a.originalPreis) - (b.salePreis || b.originalPreis)
      );
    });
  } else if (filter === "hochsteigend") {
    Bucher.sort((a, b) => {
      return (
        (b.salePreis || b.originalPreis) - (a.salePreis || a.originalPreis)
      );
    });
    // Nach Bewertung sortieren
  } else if (filter === "Bewertung") {
    Bucher.sort((a, b) => {
      return b.rating - a.rating;
    });
  }

  const BucherHtml = Bucher.map((buch) => {
    return `<div class="buch">
      <figure class="buch__img--wrapper">
        <img class="buch__img" src="${buch.url}" alt="">
      </figure>
      <div class="buch__titel">
      ${buch.title}
      </div>
      <div class="buch__ratings">
      ${Sterne(buch.rating)}
      </div>
      <div class="buch__preis">
        <span>${CheckAngebot(buch.originalPreis, buch.salePreis)}</span>
      </div>
    </div>`;
  }).join("");

  Wrapper.innerHTML = BucherHtml;
}

function BuchFilter(event) {
  RenderBucher(event.target.value);
}

function CheckAngebot(OriginalPreis, SalePreis) {
  if (!SalePreis) {
    return `${OriginalPreis.toFixed(2)}€`;
  }
  return `<span class="buch__preis--normal">${OriginalPreis.toFixed(
    2
  )}€</span> ${SalePreis.toFixed(2)}€`;
}

function Sterne(rating) {
  const VollStern = Math.floor(rating);
  const HalbStern = rating % 1 !== 0 ? 1 : 0; // berechnet die Anzahl der vollen Sterne (VollStern) und ob ein halber Stern vorhanden ist (HalbStern).

  const starsHtml = Array(VollStern)
    .fill('<i class="fas fa-star"></i>') // erstellt HTML-Code für volle Sterne
    .join("");
  const halfStarHtml = HalbStern ? '<i class="fas fa-star-half-alt"></i>' : ""; // erstellt HTML-Code für Halbe Sterne

  return starsHtml + halfStarHtml;
}

setTimeout(() => {
  RenderBucher();
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
