// script.js
document.addEventListener('DOMContentLoaded', () => {
    const trendingContent = [
        { title: 'Trending Movie 1', description: 'Description 1' },
        { title: 'Trending Movie 2', description: 'Description 2' }
    ];
    
    const recommendedContent = [
        { title: 'Recommended Movie 1', description: 'Description 1' },
        { title: 'Recommended Movie 2', description: 'Description 2' }
    ];

    const trendingSection = document.getElementById('trending-content');
    const recommendedSection = document.getElementById('recommended-content');

    function createContentItem(content) {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${content.title}</h3>`;
        div.addEventListener('click', () => {
            localStorage.setItem('contentDetails', JSON.stringify(content));
            window.location.href = 'content-details.html';
        });
        return div;
    }

    trendingContent.forEach(content => {
        trendingSection.appendChild(createContentItem(content));
    });

    recommendedContent.forEach(content => {
        recommendedSection.appendChild(createContentItem(content));
    });

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        document.querySelectorAll('.content-grid div').forEach(div => {
            const title = div.querySelector('h3').textContent.toLowerCase();
            div.style.display = title.includes(query) ? '' : 'none';
        });
    });

    if (window.location.pathname.endsWith('content-details.html')) {
        const contentDetails = JSON.parse(localStorage.getItem('contentDetails'));
        document.getElementById('content-title').textContent = contentDetails.title;
        document.getElementById('content-description').textContent = contentDetails.description;
    }
});
