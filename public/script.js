// Changing DOM UI on submit 
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', () => {
    
    content1.style.opacity = '0';
    
    setTimeout(() => {
        content1.style.display = 'none';
        
        content2.style.display = 'flex';
        content2.style.opacity = '1';
    }, 200);
});

// Changing the rating stat message dynamically!
function changeRating() {
    const ratingBtns = document.querySelectorAll('.ratings');
    const ratingStatText = document.getElementById('rating-stat-text');

    let userRating = '';

    ratingBtns.forEach(rating => {
        rating.addEventListener('click', () => {
            userRating = rating.getAttribute('data-rating');
            ratingStatText.innerHTML = `You selected ${userRating} out of 5`;
        })
    });
};

changeRating();