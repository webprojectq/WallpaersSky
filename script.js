// Sample wallpaper data
const wallpapers = [
    { id: 1, title: "Mountain Sunrise", category: "Mountains", downloads: 1242, likes: 845 },
    { id: 2, title: "Ocean Sunset", category: "Beaches", downloads: 986, likes: 721 },
    { id: 3, title: "Forest Pathway", category: "Nature", downloads: 1567, likes: 1023 },
    { id: 4, title: "City Skyline", category: "Cities", downloads: 2105, likes: 1567 },
    { id: 5, title: "Northern Lights", category: "Nature", downloads: 2876, likes: 2104 },
    { id: 6, title: "Desert Dunes", category: "Nature", downloads: 876, likes: 645 },
    { id: 7, title: "Snowy Peaks", category: "Mountains", downloads: 1321, likes: 987 },
    { id: 8, title: "Tropical Beach", category: "Beaches", downloads: 1765, likes: 1321 },
    { id: 9, title: "Wildlife Safari", category: "Animals", downloads: 1543, likes: 1120 },
    { id: 10, title: "Abstract Art", category: "Abstract", downloads: 921, likes: 876 },
    { id: 11, title: "Night Cityscape", category: "Cities", downloads: 1987, likes: 1543 },
    { id: 12, title: "Autumn Forest", category: "Nature", downloads: 1324, likes: 987 }
];

// Initialize gallery
function initGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    
    wallpapers.forEach(wallpaper => {
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        card.innerHTML = `
            <img src="images/wallpaper${wallpaper.id}.jpg" alt="${wallpaper.title}" class="wallpaper-img">
            <div class="wallpaper-info">
                <div class="wallpaper-title">${wallpaper.title}</div>
                <div class="wallpaper-meta">
                    <span>${wallpaper.category}</span>
                    <span><i class="fas fa-heart"></i> ${wallpaper.likes}</span>
                    <span><i class="fas fa-download"></i> ${wallpaper.downloads}</span>
                </div>
                <button class="download-btn">Download HD</button>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Search functionality
document.getElementById('searchBtn').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') performSearch();
});

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const results = wallpapers.filter(wp => 
        wp.title.toLowerCase().includes(searchTerm) || 
        wp.category.toLowerCase().includes(searchTerm)
    );
    
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    
    if (results.length > 0) {
        results.forEach(wallpaper => {
            const card = document.createElement('div');
            card.className = 'wallpaper-card';
            card.innerHTML = `
                <img src="images/wallpaper${wallpaper.id}.jpg" alt="${wallpaper.title}" class="wallpaper-img">
                <div class="wallpaper-info">
                    <div class="wallpaper-title">${wallpaper.title}</div>
                    <div class="wallpaper-meta">
                        <span>${wallpaper.category}</span>
                        <span><i class="fas fa-heart"></i> ${wallpaper.likes}</span>
                        <span><i class="fas fa-download"></i> ${wallpaper.downloads}</span>
                    </div>
                    <button class="download-btn">Download HD</button>
                </div>
            `;
            gallery.appendChild(card);
        });
    } else {
        gallery.innerHTML = '<p class="no-results">No wallpapers found. Try another search term.</p>';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', initGallery);