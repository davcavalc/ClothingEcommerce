const createFooter = () => {
	let footer = document.querySelector('footer');
	footer.innerHTML = `
    
    <div class="footer-content">
    <img src="/public/img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <!-- category 1️⃣ -->
        <ul class="category">
            <li class="category-title">men</li>
            <li>
                <a href="#" class="footer-link">t-shirt</a>
            </li>
            <li>
                <a href="#" class="footer-link">sweatshirt</a>
            </li>
            <li>
                <a href="#" class="footer-link">shirt</a>
            </li>
            <li>
                <a href="#" class="footer-link">jeans</a>
            </li>
            <li>
                <a href="#" class="footer-link">trousers</a>
            </li>
            <li>
                <a href="#" class="footer-link">shoes</a>
            </li>
            <li>
                <a href="#" class="footer-link">casuals</a>
            </li>
            <li>
                <a href="#" class="footer-link">formals</a>
            </li>
            <li>
                <a href="#" class="footer-link">sports</a>
            </li>
            <li>
                <a href="#" class="footer-link">watch</a>
            </li>
        </ul>
        <!-- category 2️⃣ -->
        <ul class="category">
            <li class="category-title">women</li>
            <li>
                <a href="#" class="footer-link">t-shirt</a>
            </li>
            <li>
                <a href="#" class="footer-link">sweatshirt</a>
            </li>
            <li>
                <a href="#" class="footer-link">shirt</a>
            </li>
            <li>
                <a href="#" class="footer-link">jeans</a>
            </li>
            <li>
                <a href="#" class="footer-link">trousers</a>
            </li>
            <li>
                <a href="#" class="footer-link">shoes</a>
            </li>
            <li>
                <a href="#" class="footer-link">casuals</a>
            </li>
            <li>
                <a href="#" class="footer-link">formals</a>
            </li>
            <li>
                <a href="#" class="footer-link">sports</a>
            </li>
            <li>
                <a href="#" class="footer-link">watch</a>
            </li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil laborum harum ea hic
    dolores deleniti explicabo tempora, voluptate totam obcaecati aut voluptatibus dignissimos aperiam
    eveniet soluta magnam, inventore velit nemo?</p>
<p class="info">support emails - <a href="#">help@clothing.com</a> and <a href="#">customersupport@clothing.com</a></p>
<p class="info">telephone - 180 000 123 111</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Clothing - Best Apparels Online Store</p>
    
    `;
};

createFooter();
