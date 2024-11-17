document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[name="category"]');
    const products = document.querySelectorAll(".product-card");

    // Funkcija za filtriranje proizvoda
    const filterProducts = () => {
        // Dohvati sve selektovane kategorije
        const selectedCategories = Array.from(checkboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        // Iteriraj kroz sve proizvode
        products.forEach((product) => {
            // Dobij kategoriju proizvoda iz atributa "data-category"
            const productCategory = product.getAttribute("data-category");

            // Prikazuj samo proizvode iz selektovanih kategorija
            if (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) {
                product.style.display = "block"; // Prikaži proizvod
            } else {
                product.style.display = "none"; // Sakrij proizvod
            }
        });
    };

    // Dodaj event listener na svaki checkbox
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", filterProducts);
    });

    // Prvo pokretanje kako bi se inicijalizovalo filtriranje
    filterProducts();
});