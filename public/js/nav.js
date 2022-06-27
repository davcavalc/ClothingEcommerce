const CREATE_NAVBAR = () => {
	let nav = document.querySelector('.navbar');
	nav.innerHTML = `

    <div class="nav">
            <img src="public/img/dark-logo.png" alt="" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" placeholder="search brand, product" class="search-box">
                    <button class="search-btn">search</button>
                </div>
                <a href="#">
                    <img src="public/img/user.png" alt="">
                </a>
                <a href="#">
                    <img src="/public/img/cart.png" alt="">
                </a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item">
                <a href="#" class="link">home</a>
            </li>
            <li class="link-item">
                <a href="#" class="link">women</a>
            </li>
            <li class="link-item">
                <a href="#" class="link">men</a>
            </li>
            <li class="link-item">
                <a href="#" class="link">kids</a>
            </li>
            <li class="link-item">
                <a href="#" class="link">accessories</a>
            </li>
        </ul>

    `;
};

CREATE_NAVBAR();
