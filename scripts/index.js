import { data } from './data.js';

// Function to generate cards based on data
const generateCards = () => {
    const container = document.getElementById('cards-container');

    data.forEach(item => {
        const card = `
            <div class="col-md-6 mb-4 container d-flex justify-content-center">
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body" style="overflow-y: auto; max-height: 200px;">
                <h5 class="card-title">${item.title}</h5>
                <p>${item.description}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Timing:</strong> ${item.timing}</p>
                <p><strong>Price:</strong> ${item.price}</p>
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
