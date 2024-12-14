document.addEventListener('DOMContentLoaded', function () {
    // Handle the contact form submission
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    //handle the last modified in the footer
    const lastModified = document.querySelector('#lastModified');
    lastModified.innerHTML = (document.lastModified);

    // Add images with captions to the About Us page
    const imageGallery = document.querySelector('.image-gallery');
    if (imageGallery) {
        const images = [
            { src: 'images/business_1_medium.webp', caption: 'Venezuela - Falcón' },
            { src: 'images/business_2_medium.webp', caption: 'Venezuela - Caracas' },
            { src: 'images/business_3_medium.webp', caption: 'Venezuela - Maracaibo' }
        ];
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.loading = 'lazy';
            const captionElement = document.createElement('div');
            captionElement.className = 'caption';
            captionElement.textContent = image.caption;
            const container = document.createElement('div');
            container.appendChild(imgElement);
            container.appendChild(captionElement);
            imageGallery.appendChild(container);
        });
    }

    // activate the hamburger button
    const hamButton = document.querySelector("#menu");
    const ul = document.querySelector("ul");

    hamButton.addEventListener("click", () => {
        ul.classList.toggle("open-ul");
        hamButton.classList.toggle("open");
    });


    // Add product items to the products & services pages
    const productList = document.querySelector('.product-list');
    if (productList) {
        const products = [
            { title: 'Graphic Design Services', description: 'We have trained graphic designers to capture your ideas graphically.', imgSrc: 'images/designers_graphic_medium.webp' },
            { title: 'Printing, Copying & Stamping Services. ', description: 'Explore our printing and copying services to bring your ideas to reality. ', imgSrc: 'images/print_medium.webp' },
            { title: 'Office Supplies', description: 'We have pencils, pencil sharpeners, erasers, pens, among others. Just ask us for the item you need!', imgSrc: 'images/office_supplies_medium.webp' },
        ];
        products.forEach(product => {
            const imgElement = document.createElement('img');
            imgElement.src = product.imgSrc;
            imgElement.alt = product.title;
            imgElement.loading = 'lazy'; // Set lazy loading

            const titleElement = document.createElement('h3');
            titleElement.textContent = product.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = product.description;

            const container = document.createElement('div');
            container.className = 'product-item';
            container.appendChild(imgElement);
            container.appendChild(titleElement);
            container.appendChild(descriptionElement);

            productList.appendChild(container);
        });
    }

    // Add news items to the News page
    const newsList = document.querySelector('.news-list');
    if (newsList) {
        const newsItems = [
            { title: 'Launching of our new line of clothing', description: 'Stay tuned to our social networks to learn more about the launch date.', date: 'December 14, 2024', imgSrc: 'images/new_clothing_medium.webp' },
            { title: 'New AI features in our customer service and support', description: 'Artificial intelligence features to improve our response to your messages.', date: 'December 3, 2024', imgSrc: 'images/ia_features_medium.webp' },
            { title: 'We have a weekly newsletter!', description: 'Our weekly newsletter, delivered to your inbox, provides you with exclusive offers and new products.', date: 'November, 2024', imgSrc: 'images/newsletter_medium.webp' }
        ];

        newsItems.forEach(news => {
            const imgElement = document.createElement('img');
            imgElement.src = news.imgSrc;
            imgElement.alt = news.title;
            imgElement.loading = 'lazy'; // Set lazy loading

            const titleElement = document.createElement('h3');
            titleElement.textContent = news.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = news.description;

            const dateElement = document.createElement('small');
            dateElement.textContent = news.date;

            const container = document.createElement('div');
            container.className = 'news-item';
            container.appendChild(imgElement);
            container.appendChild(titleElement);
            container.appendChild(descriptionElement);
            container.appendChild(dateElement);

            newsList.appendChild(container);
        });
    }

});