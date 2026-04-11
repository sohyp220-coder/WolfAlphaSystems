const links = document.querySelectorAll('.nav-link, .contact');
const mainContent = document.getElementById('main-content');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const val = link.textContent.trim();
        
        if(val === 'About us' || val === 'contact') {
            e.preventDefault(); 
            
            mainContent.innerHTML = ''; 
            mainContent.style.minHeight = '80vh';
            mainContent.style.display = 'flex';
            mainContent.style.flexDirection = 'column';
            mainContent.style.alignItems = 'center';
            mainContent.style.justifyContent = 'center';

            if(val === 'About us') {
                mainContent.innerHTML = `
                    <img src="https://img.icons8.com/?size=100&id=43s08h4rdYPW&format=png&color=ffffff9d" alt="Large Logo">
                    <h2 style="color:white; font-family:serif;">WolfAlphaSystems</h2>
                    <span style="color:#00A4A7; font-family:serif; text-align:center; padding:20px;">
                        نحن شركة WolfAlphaSystems، نسعى لابتكار حلول برمجية ذكية تغير موازين التكنولوجيا.
                    </span>
                `;
            } else if (val === 'contact') {
                mainContent.innerHTML = `
                    <h2 style="color:white; margin-bottom:20px;">تواصل معنا</h2>
                    <a href='https://wa.me/+20 1063211365' 
                       style="color:white; background:#25D366; padding:15px 30px; border-radius:10px; font-family:serif; text-decoration:none; display:flex; align-items:center; gap:10px;">
                       WhatsApp Support
                    </a>
                `;
            }
        }
    });
});
