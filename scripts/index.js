import { data } from './data.js';

// Function to generate cards based on data
const generateCards = () => {
    const container = document.getElementById('cards-container');

    data.forEach(item => {
        const card = `
            <div class="col-md-6 mb-4 container d-flex justify-content-center">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p>${item.description}</p>
                        <p>${item.location}</p>
                        <p>${item.timing}</p>
                        <p>${item.price}</p>
                    </div>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#inquiryModal">
                        Send Inquiry 
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
};

// Call the function to generate the cards
generateCards();
