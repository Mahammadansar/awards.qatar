// Product Data - AwardsQatar Services
const products = [
    // Printing Services
    {
        id: 1,
        name: "Business Card Printing",
        category: "printing",
        price: 250,
        image: "📇",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional business card printing with premium paper stock. Multiple finishes available including matte, glossy, and textured."
    },
    {
        id: 2,
        name: "Letterhead Printing",
        category: "printing",
        price: 180,
        image: "📝",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional letterhead printing with your company branding. Premium paper quality for official correspondence."
    },
    {
        id: 3,
        name: "Flyers Printing",
        category: "printing",
        price: 150,
        image: "📋",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "High-quality flyer printing for events and promotions. Eye-catching designs with professional finish."
    },
    {
        id: 4,
        name: "Brochures Printing",
        category: "printing",
        price: 200,
        image: "📄",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional brochure printing with high-quality paper and vibrant colors. Perfect for marketing materials."
    },
    {
        id: 5,
        name: "Envelope Printing",
        category: "printing",
        price: 120,
        image: "✉️",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom envelope printing with your logo and branding. Various sizes and paper options available."
    },
    {
        id: 6,
        name: "NCR Vouchers",
        category: "printing",
        price: 180,
        image: "🧾",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Carbonless NCR voucher printing for receipts and invoices. Multiple copies with professional finish."
    },
    {
        id: 7,
        name: "Wedding Cards",
        category: "printing",
        price: 220,
        image: "💒",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Beautiful wedding invitation cards with elegant designs. Multiple paper options and printing techniques available."
    },
    {
        id: 8,
        name: "Name Badges",
        category: "printing",
        price: 95,
        image: "🪧",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional name badges for events and conferences. Durable materials with various attachment options."
    },
    {
        id: 9,
        name: "ID Card Printing",
        category: "printing",
        price: 150,
        image: "🪪",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "High-quality ID card printing with photo and personalization. Laminated options for durability."
    },
    {
        id: 10,
        name: "Button Badges",
        category: "printing",
        price: 65,
        image: "🔘",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom button badges with your design. Perfect for events, promotions, and team identification."
    },
    {
        id: 11,
        name: "Restaurant Menu",
        category: "printing",
        price: 160,
        image: "🍽️",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "High-quality restaurant menu printing with food photography. Laminated options available for durability."
    },
    {
        id: 12,
        name: "Calendars Printing",
        category: "printing",
        price: 140,
        image: "📅",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom calendar printing with your photos or designs. Wall and desk calendar options available."
    },
    {
        id: 13,
        name: "Notebook Printing",
        category: "printing",
        price: 180,
        image: "📓",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom notebook printing with your branding. Various sizes and binding options available."
    },
    {
        id: 14,
        name: "Label Stickers",
        category: "printing",
        price: 89,
        image: "🏷️",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom label stickers in various shapes and sizes. Waterproof and durable for product labeling and branding."
    },
    {
        id: 15,
        name: "Sticker Printing",
        category: "printing",
        price: 95,
        image: "🎯",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "High-quality sticker printing for branding and decoration. Various materials and finishes available."
    },
    {
        id: 16,
        name: "Rubber Stamp",
        category: "printing",
        price: 75,
        image: "🖨️",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom rubber stamps with your logo or text. Various sizes and handle options available."
    },
    
    // Packaging
    {
        id: 17,
        name: "Packaging Boxes",
        category: "packaging",
        price: 350,
        image: "📦",
        imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom packaging boxes with your brand design. Premium quality materials for product protection and presentation."
    },
    {
        id: 18,
        name: "Gift Boxes",
        category: "packaging",
        price: 280,
        image: "🎁",
        imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Elegant custom gift boxes perfect for special occasions. Available in various sizes and premium finishes."
    },
    {
        id: 19,
        name: "Bag Printing",
        category: "packaging",
        price: 220,
        image: "🛍️",
        imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom bag printing with your logo. Available in various materials including paper, canvas, and non-woven."
    },
    {
        id: 20,
        name: "Plastic Bag Printing",
        category: "packaging",
        price: 180,
        image: "🛍️",
        imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom plastic bag printing for retail and promotional use. Durable and eco-friendly options available."
    },
    {
        id: 21,
        name: "Shopping Bags",
        category: "packaging",
        price: 200,
        image: "🛍️",
        imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Premium shopping bags with your branding. Various sizes and handle options for retail businesses."
    },
    {
        id: 22,
        name: "Tissue Boxes",
        category: "packaging",
        price: 150,
        image: "📦",
        imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom tissue box printing with your design. Perfect for hotels, restaurants, and events."
    },
    
    // Apparel & Textiles
    {
        id: 23,
        name: "Screen Printing",
        category: "apparel",
        price: 320,
        image: "👕",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional screen printing services for T-shirts and apparel. Vibrant colors and durable prints."
    },
    {
        id: 24,
        name: "Embroidery Services",
        category: "apparel",
        price: 380,
        image: "🧵",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "High-quality embroidery services for uniforms and apparel. Professional finish with various thread options."
    },
    {
        id: 25,
        name: "DTF Printing",
        category: "apparel",
        price: 350,
        image: "👕",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Direct-to-Film printing for vibrant and durable designs on various fabrics. Perfect for custom apparel."
    },
    {
        id: 26,
        name: "T-Shirts Printing",
        category: "apparel",
        price: 299,
        image: "👕",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom T-shirt printing with your design. High-quality prints perfect for events, teams, and promotions."
    },
    {
        id: 27,
        name: "Customized Uniforms",
        category: "apparel",
        price: 450,
        image: "👔",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional uniform customization with your company logo. Various styles and sizes available."
    },
    {
        id: 28,
        name: "Wrist Band",
        category: "apparel",
        price: 55,
        image: "⌚",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom wrist bands for events and promotions. Available in various colors and materials."
    },
    
    // Promotional Products
    {
        id: 29,
        name: "Mug Printing",
        category: "promotional",
        price: 85,
        image: "☕",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom printed promotional mugs with your logo or design. High-quality ceramic mugs perfect for branding."
    },
    {
        id: 30,
        name: "Pen Printing",
        category: "promotional",
        price: 45,
        image: "✒️",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Promotional pens with your logo. Available in various styles and colors for effective brand promotion."
    },
    {
        id: 31,
        name: "Mouse Pad Printing",
        category: "promotional",
        price: 75,
        image: "🖱️",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom mouse pads with your logo or design. Comfortable surface with vibrant printing."
    },
    {
        id: 32,
        name: "USB Printing",
        category: "promotional",
        price: 120,
        image: "💾",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Branded USB drives with your logo. Available in various capacities and colors."
    },
    {
        id: 33,
        name: "Lanyard Printing",
        category: "promotional",
        price: 55,
        image: "🎗️",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom printed lanyards for ID cards and badges. Various colors and attachment options."
    },
    {
        id: 34,
        name: "Promotional Gift Set",
        category: "promotional",
        price: 350,
        image: "🎁",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Curated promotional gift sets with multiple branded items. Perfect for corporate gifting and events."
    },
    {
        id: 35,
        name: "Key Chain",
        category: "promotional",
        price: 35,
        image: "🔑",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Promotional key chains with your logo. Durable materials perfect for brand promotion."
    },
    {
        id: 36,
        name: "Stress Ball Printing",
        category: "promotional",
        price: 65,
        image: "⚽",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom printed stress balls with your branding. Perfect promotional item for corporate events."
    },
    {
        id: 37,
        name: "Balloon Printing",
        category: "promotional",
        price: 45,
        image: "🎈",
        imageUrl: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom printed balloons for events and celebrations. Various sizes and colors available."
    },
    
    // Awards
    {
        id: 38,
        name: "Crystal Awards",
        category: "awards",
        price: 550,
        image: "💎",
        imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Stunning crystal awards with engraved base. Premium quality for special recognition events."
    },
    {
        id: 39,
        name: "Premium Gold Trophy",
        category: "awards",
        price: 450,
        image: "🏆",
        imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Exquisite gold-plated trophy perfect for prestigious awards ceremonies. Features elegant design with premium finish."
    },
    
    // Signage & Branding
    {
        id: 40,
        name: "Banner & Flex Signage",
        category: "signage",
        price: 199,
        image: "📢",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Large format banner and flex signage printing. Weather-resistant materials for indoor and outdoor use."
    },
    {
        id: 41,
        name: "Rollup Banner",
        category: "signage",
        price: 250,
        image: "📜",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional rollup banners with retractable stand. Perfect for exhibitions and events."
    },
    {
        id: 42,
        name: "Acrylic Signs",
        category: "signage",
        price: 320,
        image: "📋",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional acrylic signs for indoor and outdoor use. Modern design with UV printing technology."
    },
    {
        id: 43,
        name: "Name Boards",
        category: "signage",
        price: 380,
        image: "🏢",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom name boards for offices and businesses. Various materials including acrylic, metal, and wood."
    },
    {
        id: 44,
        name: "Industrial Safety Stickers",
        category: "signage",
        price: 120,
        image: "⚠️",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Durable industrial safety stickers and labels. Weather-resistant and compliant with safety standards."
    },
    {
        id: 45,
        name: "Acrylic Safety Signs",
        category: "signage",
        price: 280,
        image: "🛡️",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional acrylic safety signs for workplaces. Clear visibility and durable construction."
    },
    {
        id: 46,
        name: "Vehicle Branding",
        category: "signage",
        price: 450,
        image: "🚗",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Complete vehicle branding and wrapping services. High-quality vinyl with professional installation."
    },
    {
        id: 47,
        name: "Flag Printing",
        category: "signage",
        price: 250,
        image: "🚩",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Custom flag printing for events and branding. Weather-resistant materials for outdoor use."
    },
    {
        id: 48,
        name: "Display Stands",
        category: "signage",
        price: 320,
        image: "📊",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional display stands for exhibitions and retail. Various sizes and materials available."
    },
    
    // Specialized Services
    {
        id: 49,
        name: "Laser Engraving Services",
        category: "specialized",
        price: 280,
        image: "⚡",
        imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Precision laser engraving on various materials including wood, acrylic, metal, and glass."
    },
    {
        id: 50,
        name: "Laser Cutting & Acrylic Stands",
        category: "specialized",
        price: 350,
        image: "✂️",
        imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Professional laser cutting services and custom acrylic stands. Precision cutting for various applications."
    },
    {
        id: 51,
        name: "Digital Print & Sticker",
        category: "specialized",
        price: 180,
        image: "🖨️",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "High-resolution digital printing and custom sticker production. Fast turnaround with vibrant colors."
    },
    {
        id: 52,
        name: "Die Cutting",
        category: "specialized",
        price: 220,
        image: "✂️",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Precision die cutting services for custom shapes and designs. Perfect for labels, stickers, and packaging."
    }
];

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load featured products on homepage
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }

    // Load all products on products page
    if (document.getElementById('productsGrid')) {
        loadAllProducts();
        setupFilters();
    }

    // Load product detail if on product detail page
    if (document.getElementById('productDetailContent')) {
        loadProductDetail();
    }

    // Setup category cards
    setupCategoryCards();
});

// Load featured products (first 8 products)
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featured = products.slice(0, 8);
    
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
    
    // Add event listeners to product cards
    attachProductCardListeners();
}

// Load all products
function loadAllProducts(filteredProducts = null) {
    const container = document.getElementById('productsGrid');
    const productsToShow = filteredProducts || products;
    
    if (productsToShow.length === 0) {
        container.innerHTML = '';
        document.getElementById('noProducts').style.display = 'block';
        return;
    }
    
    document.getElementById('noProducts').style.display = 'none';
    container.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    attachProductCardListeners();
}

// Create product card HTML
function createProductCard(product) {
    const imageUrl = product.imageUrl || `images/products/${product.id}.jpg`;
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${imageUrl}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-placeholder" style="display:none;">
                    ${product.image}
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price} QAR</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Attach event listeners to product cards
function attachProductCardListeners() {
    // Product card click - go to detail page
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking the add to cart button
            if (e.target.closest('.add-to-cart-btn')) {
                return;
            }
            const productId = this.dataset.productId;
            window.location.href = `product-detail.html?id=${productId}`;
        });
    });

    // Add to cart button
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            addToCart(productId);
        });
    });
}

// Load product detail page
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'products.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    // Update breadcrumb
    document.getElementById('productBreadcrumb').textContent = product.name;
    
    // Load product detail
    const imageUrl = product.imageUrl || `images/products/${product.id}.jpg`;
    const container = document.getElementById('productDetailContent');
    container.innerHTML = `
        <div class="product-detail-image">
            <img src="${imageUrl}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; font-size:8rem; color:var(--primary-color);">
                ${product.image}
            </div>
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="product-detail-price">${product.price} QAR</div>
            <p class="product-detail-description">${product.description}</p>
            <div class="quantity-selector">
                <button class="quantity-btn" id="decreaseQty">-</button>
                <input type="number" class="quantity-input" id="productQuantity" value="1" min="1">
                <button class="quantity-btn" id="increaseQty">+</button>
            </div>
            <button class="btn-primary btn-block" id="addToCartDetail">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    
    // Quantity controls
    document.getElementById('increaseQty').addEventListener('click', function() {
        const input = document.getElementById('productQuantity');
        input.value = parseInt(input.value) + 1;
    });
    
    document.getElementById('decreaseQty').addEventListener('click', function() {
        const input = document.getElementById('productQuantity');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
    
    // Add to cart
    document.getElementById('addToCartDetail').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('productQuantity').value);
        addToCart(productId, quantity);
    });
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// Load related products
function loadRelatedProducts(category, currentProductId) {
    const related = products.filter(p => p.category === category && p.id !== currentProductId).slice(0, 4);
    const container = document.getElementById('relatedProducts');
    
    if (related.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No related products found.</p>';
        return;
    }
    
    container.innerHTML = related.map(product => createProductCard(product)).join('');
    attachProductCardListeners();
}

// Setup filters
function setupFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const priceRange = document.getElementById('priceRange');
    const sortSelect = document.getElementById('sortSelect');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    // Category filter
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
    
    // Price filter
    priceRange.addEventListener('input', function() {
        document.getElementById('maxPrice').textContent = this.value + ' QAR';
        applyFilters();
    });
    
    // Sort
    sortSelect.addEventListener('change', function() {
        applyFilters();
    });
    
    // Clear filters
    clearFiltersBtn.addEventListener('click', function() {
        categoryFilters.forEach(filter => filter.checked = false);
        priceRange.value = priceRange.max;
        document.getElementById('maxPrice').textContent = priceRange.max + ' QAR';
        sortSelect.value = 'default';
        applyFilters();
    });
}

// Apply filters
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    const sortBy = document.getElementById('sortSelect').value;
    
    let filtered = products;
    
    // Filter by category
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }
    
    // Filter by price
    filtered = filtered.filter(p => p.price <= maxPrice);
    
    // Sort
    switch(sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    loadAllProducts(filtered);
}

// Setup category cards
function setupCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            window.location.href = `products.html?category=${category}`;
        });
    });
    
    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category && document.getElementById('productsGrid')) {
        // Check the corresponding checkbox
        const checkbox = document.querySelector(`.category-filter[value="${category}"]`);
        if (checkbox) {
            checkbox.checked = true;
            applyFilters();
        }
    }
}

// Add to cart function (will be used by cart.js)
function addToCart(productId, quantity = 1) {
    if (typeof addToCartStorage === 'function') {
        addToCartStorage(productId, quantity);
    } else {
        // Fallback if cart.js not loaded
        alert('Cart functionality loading...');
    }
}

// Export products for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products };
}
