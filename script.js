// Updated initGallery function
function initGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    
    wallpapers.forEach(wallpaper => {
        // CHANGE THIS LINE TO MATCH YOUR FILENAMES:
        const imgPath = `images/wallpaper${wallpaper.id}.jpg`;
        
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        card.innerHTML = `
            <img src="${imgPath}" alt="${wallpaper.title}" class="wallpaper-img">
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

// Also update the same in performSearch() function
function performSearch() {
    // ... existing code ...
    results.forEach(wallpaper => {
        // ADD THIS LINE HERE TOO:
        const imgPath = `images/wallpaper${wallpaper.id}.jpg`;
        
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        card.innerHTML = `
            <img src="${imgPath}" alt="${wallpaper.title}" class="wallpaper-img">
            <!-- rest of the code -->
        `;
        gallery.appendChild(card);
    });
}
const wallpapers = [
    { 
        id: 1, 
        title: "Mountain Sunrise", 
        category: "Mountains", 
        downloads: 1242, 
        likes: 845,
        filename: "my-mountain-image.jpg"  // Add this property
    },
    // ... other wallpapers ...
];

// Then use in initGallery:
const imgPath = `images/${wallpaper.filename}`;
