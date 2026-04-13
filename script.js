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
                    <h4 style="color:#f64f06; font-family:serif; text-align:center; padding:10px;">reshape market ruels ... cope with or stay away </h4>
                    <h4 style="color:#f64f06; font-family:serif; text-align:center; padding:10px;">نعيد هيكلة قواعد السوق... المواكبة او ابقي بعيدا <h4>
                    <h5 style="color:#fffe8e; font-family:serif; text-align:center; padding:10px;">
                     WolfAlphaSystems © 2026
                     <h6 style="color:#00CE89; font-family:serif; text-align:center; padding:10px;text-decoration: underline;">🔗 https://bit.ly/WolfAlphaSystems</h6>
                    <h5>
                    </span>
                `;
            } else if (val === 'contact') {
                mainContent.innerHTML = `
                    <h2 style="color:white; margin-bottom:20px;">تواصل معنا</h2>
                    <a href='https://wa.me/201020929052' 
                         style="color:white; background:#25D366; padding:15px 30px; border-radius:10px; font-family:serif; text-decoration:none; display:flex; align-items:center; gap:10px;">
                            WhatsApp Support
                    </a>

                `;
            }
        }
    });
});
