document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[name="category"]');
    const products = document.querySelectorAll(".product-card");

    // Funkcija za filtriranje proizvoda
    const filterProducts = () => {
        const selectedCategories = Array.from(checkboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        products.forEach((product) => {
            const productCategory = product.getAttribute("data-category");
            if (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    };

    // Funkcija za postavljanje checkboxova na osnovu URL parametra
    const applyCategoryFromURL = () => {
        const params = new URLSearchParams(window.location.search);
        const category = params.get("category"); // Uzmi kategoriju iz URL-a

        if (category) {
            checkboxes.forEach((checkbox) => {
                if (checkbox.value === category) {
                    checkbox.checked = true; // Selektuj checkbox
                }
            });
            filterProducts(); // Filtriraj proizvode
        }
    };

    // Dodaj event listener na svaki checkbox
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", filterProducts);
    });

    // Primeni filtriranje iz URL-a na početku
    applyCategoryFromURL();
});