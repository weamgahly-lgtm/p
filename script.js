// بيانات المنتجات

const products = [

    // منتجات كريم التخسيس
    {
        id: 1,
        category: "slim",
        name: "كريم تنحيف الجسم",
        price: 180,
        image: "images/slim-1.jpg",
        description: "كريم للعناية بالبشرة والجسم ضمن روتين العناية اليومية.",
        ingredients: "مكونات مرطبة للعناية بالبشرة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 2,
        category: "slim",
        name: "كريم شد الجسم",
        price: 220,
        image: "images/slim-2.jpg",
        description: "كريم للعناية بمظهر البشرة وترطيبها.",
        ingredients: "مكونات مرطبة ومغذية للبشرة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 3,
        category: "slim",
        name: "كريم مساج الجسم",
        price: 150,
        image: "images/slim-3.jpg",
        description: "كريم مناسب للاستخدام أثناء تدليك الجسم.",
        ingredients: "تركيبة للعناية بالبشرة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 4,
        category: "slim",
        name: "جل العناية بالجسم",
        price: 130,
        image: "images/slim-4.jpg",
        description: "جل خفيف للعناية اليومية بالبشرة.",
        ingredients: "مكونات مرطبة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 5,
        category: "slim",
        name: "كريم ترطيب الجسم",
        price: 190,
        image: "images/slim-5.jpg",
        description: "كريم يساعد على ترطيب البشرة.",
        ingredients: "مكونات مرطبة للبشرة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 6,
        category: "slim",
        name: "لوشن الجسم",
        price: 160,
        image: "images/slim-6.jpg",
        description: "لوشن للعناية اليومية بالجسم.",
        ingredients: "مكونات للعناية والترطيب.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },

    // منتجات كريم البشرة
    {
        id: 7,
        category: "skin",
        name: "كريم ترطيب البشرة",
        price: 120,
        image: "images/skin-1.jpg",
        description: "كريم لترطيب البشرة والعناية اليومية بها.",
        ingredients: "مكونات مرطبة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 8,
        category: "skin",
        name: "كريم فيتامين سي",
        price: 175,
        image: "images/skin-2.jpg",
        description: "منتج للعناية بالبشرة ضمن روتين العناية اليومي.",
        ingredients: "تركيبة تحتوي على فيتامين سي حسب المنتج.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 9,
        category: "skin",
        name: "كريم الليل",
        price: 200,
        image: "images/skin-3.jpg",
        description: "كريم مخصص للعناية بالبشرة خلال الروتين المسائي.",
        ingredients: "مكونات للعناية بالبشرة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 10,
        category: "skin",
        name: "كريم النهار",
        price: 185,
        image: "images/skin-4.jpg",
        description: "كريم للعناية اليومية بالبشرة.",
        ingredients: "مكونات مرطبة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 11,
        category: "skin",
        name: "جل تنظيف البشرة",
        price: 95,
        image: "images/skin-5.jpg",
        description: "جل لتنظيف البشرة ضمن روتين العناية اليومي.",
        ingredients: "تركيبة تنظيف حسب المنتج.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 12,
        category: "skin",
        name: "سيروم العناية بالبشرة",
        price: 240,
        image: "images/skin-6.jpg",
        description: "سيروم للعناية بالبشرة.",
        ingredients: "مكونات للعناية بالبشرة.",
        usage: "يُستخدم حسب تعليمات العبوة."
    },

    // منتجات الشاور جل
    {
        id: 13,
        category: "shower",
        name: "شاور جل برائحة الورد",
        price: 85,
        image: "images/shower-1.jpg",
        description: "شاور جل للتنظيف اليومي برائحة الورد.",
        ingredients: "تركيبة تنظيف للجسم.",
        usage: "يُستخدم أثناء الاستحمام."
    },
    {
        id: 14,
        category: "shower",
        name: "شاور جل جوز الهند",
        price: 95,
        image: "images/shower-2.jpg",
        description: "شاور جل برائحة جوز الهند.",
        ingredients: "تركيبة تنظيف للجسم.",
        usage: "يُستخدم أثناء الاستحمام."
    },
    {
        id: 15,
        category: "shower",
        name: "شاور جل الفانيليا",
        price: 90,
        image: "images/shower-3.jpg",
        description: "شاور جل برائحة الفانيليا.",
        ingredients: "تركيبة تنظيف للجسم.",
        usage: "يُستخدم أثناء الاستحمام."
    },
    {
        id: 16,
        category: "shower",
        name: "شاور جل منعش",
        price: 110,
        image: "images/shower-4.jpg",
        description: "شاور جل للاستخدام اليومي.",
        ingredients: "تركيبة تنظيف للجسم.",
        usage: "يُستخدم أثناء الاستحمام."
    },
    {
        id: 17,
        category: "shower",
        name: "شاور جل بالصبار",
        price: 105,
        image: "images/shower-5.jpg",
        description: "شاور جل للعناية اليومية بالجسم.",
        ingredients: "تركيبة تحتوي على الصبار حسب المنتج.",
        usage: "يُستخدم أثناء الاستحمام."
    },
    {
        id: 18,
        category: "shower",
        name: "شاور جل العناية اليومية",
        price: 100,
        image: "images/shower-6.jpg",
        description: "شاور جل مناسب لروتين النظافة اليومية.",
        ingredients: "تركيبة تنظيف للجسم.",
        usage: "يُستخدم أثناء الاستحمام."
    }
];


// أسماء الأقسام

const categories = {
    slim: "كريم التخسيس",
    skin: "كريم البشرة",
    shower: "الشاور جل"
};


// المتغيرات الأساسية

let current_category = "";
let current_product = null;
let current_quantity = 1;

let cart = JSON.parse(localStorage.getItem("my_cart")) || [];


// التنقل بين الصفحات

function show_page(page_id) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(page_id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// الصفحة الرئيسية

function show_home() {
    show_page("home_page");
}


// عرض منتجات القسم

function show_category(category) {

    current_category = category;

    document.getElementById("category_title").textContent =
        categories[category];

    document.getElementById("search_input").value = "";
    document.getElementById("sort_select").value = "default";

    render_products();

    show_page("category_page");
}


// إنشاء كارت المنتج

function create_product_card(product) {

    return `
        <div class="product_card">

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.onerror=null;this.src='images/placeholder.svg';"
                onclick="show_details(${product.id})"
            >

            <div class="product_info">

                <h3>${product.name}</h3>

                <p>${product.price} جنيه</p>

                <div class="product_actions">

                    <button
                        class="main_btn"
                        onclick="add_to_cart(${product.id})"
                    >
                        إضافة للسلة
                    </button>

                    <button
                        class="back_btn"
                        onclick="show_details(${product.id})"
                    >
                        التفاصيل
                    </button>

                </div>

            </div>

        </div>
    `;
}


// عرض المنتجات

function render_products() {

    let list = products.filter(function(product) {
        return product.category === current_category;
    });

    const search = document
        .getElementById("search_input")
        .value
        .trim()
        .toLowerCase();

    list = list.filter(function(product) {
        return product.name.toLowerCase().includes(search);
    });

    const sort = document.getElementById("sort_select").value;

    if (sort === "low") {
        list.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        list.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
        list.sort((a, b) => a.name.localeCompare(b.name, "ar"));
    }

    const grid = document.getElementById("product_grid");

    if (list.length === 0) {
        grid.innerHTML = `<p class="empty_msg">مفيش منتجات مطابقة للبحث.</p>`;
        return;
    }

    grid.innerHTML = list.map(create_product_card).join("");
}


// البحث

function search_products() {
    render_products();
}


// ترتيب المنتجات

function sort_products() {
    render_products();
}


// عرض تفاصيل المنتج

function show_details(id) {

    current_product = products.find(function(product) {
        return product.id === id;
    });

    if (!current_product) return;

    current_quantity = 1;

    document.getElementById("product_details").innerHTML = `

        <img
            src="${current_product.image}"
            alt="${current_product.name}"
            onerror="this.onerror=null;this.src='images/placeholder.svg';"
        >

        <div class="details_info">

            <h2>${current_product.name}</h2>

            <div class="details_price">
                ${current_product.price} جنيه
            </div>

            <p><strong>الوصف:</strong> ${current_product.description}</p>

            <p><strong>المكونات:</strong> ${current_product.ingredients}</p>

            <p><strong>طريقة الاستخدام:</strong> ${current_product.usage}</p>

            <div class="qty_box">

                <button onclick="change_quantity(-1)">-</button>

                <span id="detail_qty">1</span>

                <button onclick="change_quantity(1)">+</button>

            </div>

            <button
                class="main_btn"
                onclick="add_to_cart(${current_product.id}, current_quantity)"
            >
                <i class="fa-solid fa-cart-shopping"></i>
                إضافة للسلة
            </button>

        </div>
    `;

    show_related();
    show_page("details_page");
}


// تغيير كمية المنتج في التفاصيل

function change_quantity(value) {

    current_quantity += value;

    if (current_quantity < 1) {
        current_quantity = 1;
    }

    document.getElementById("detail_qty").textContent =
        current_quantity;
}


// المنتجات المشابهة

function show_related() {

    const related = products.filter(function(product) {
        return product.category === current_product.category &&
               product.id !== current_product.id;
    }).slice(0, 4);

    document.getElementById("related_grid").innerHTML =
        related.map(create_product_card).join("");
}


// الرجوع لمنتجات القسم

function back_to_category() {
    show_category(current_product.category);
}


// حفظ السلة

function save_cart() {

    localStorage.setItem("my_cart", JSON.stringify(cart));

    update_cart_count();
}


// إضافة منتج للسلة

function add_to_cart(id, quantity = 1) {

    const product = products.find(function(item) {
        return item.id === id;
    });

    if (!product) return;

    const found = cart.find(function(item) {
        return item.id === id;
    });

    if (found) {
        found.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    save_cart();

    alert("تمت إضافة المنتج للسلة بنجاح ❤️");
}


// عدد المنتجات في السلة

function update_cart_count() {

    const count = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    document.getElementById("cart_count").textContent = count;
}


// فتح السلة

function show_cart() {

    render_cart();

    show_page("cart_page");
}


// عرض منتجات السلة

function render_cart() {

    const cart_items = document.getElementById("cart_items");
    const cart_total = document.getElementById("cart_total");

    if (cart.length === 0) {

        cart_items.innerHTML = `
            <div class="empty_msg">
                <i class="fa-solid fa-cart-shopping"></i>
                <h3>السلة فارغة</h3>
                <p>ابدئي التسوق وأضيفي منتجاتك المفضلة.</p>
            </div>
        `;

        cart_total.textContent = 0;

        return;
    }

    let total = 0;

    cart_items.innerHTML = cart.map(function(item) {

        total += item.price * item.quantity;

        return `

            <div class="cart_item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    onerror="this.onerror=null;this.src='images/placeholder.svg';"
                >

                <div class="cart_item_info">

                    <h3>${item.name}</h3>

                    <p>${item.price} جنيه</p>

                    <strong>
                        الإجمالي: ${item.price * item.quantity} جنيه
                    </strong>

                </div>

                <div class="cart_controls">

                    <button onclick="change_cart(${item.id}, 1)">+</button>

                    <span>${item.quantity}</span>

                    <button onclick="change_cart(${item.id}, -1)">-</button>

                    <button
                        class="delete_btn"
                        onclick="remove_from_cart(${item.id})"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </div>

        `;

    }).join("");

    cart_total.textContent = total;
}


// تعديل كمية منتج في السلة

function change_cart(id, value) {

    const item = cart.find(function(product) {
        return product.id === id;
    });

    if (!item) return;

    item.quantity += value;

    if (item.quantity <= 0) {
        cart = cart.filter(function(product) {
            return product.id !== id;
        });
    }

    save_cart();
    render_cart();
}


// حذف منتج من السلة

function remove_from_cart(id) {

    cart = cart.filter(function(item) {
        return item.id !== id;
    });

    save_cart();
    render_cart();
}


// إتمام الطلب - تجربة Front-End

function checkout() {

    if (cart.length === 0) {
        alert("السلة فارغة، أضيفي منتجات أولاً.");
        return;
    }

    alert("تم تسجيل طلبك تجريبياً بنجاح ❤️");

    cart = [];

    save_cart();
    render_cart();

    show_home();
}


// تشغيل الموقع

update_cart_count();

/*الخدمات  */

/* الخدمات والقائمة الجانبية */

const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const sideMenu = document.getElementById("side-menu");
const menuOverlay = document.getElementById("menu-overlay");

function openSideMenu() {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
}

function closeSideMenu() {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
}

menuBtn.addEventListener("click", openSideMenu);
closeMenu.addEventListener("click", closeSideMenu);
menuOverlay.addEventListener("click", closeSideMenu);


/* تسجيل الدخول */

let phone = "";
let demoCode = "123456";

const phoneInput = document.getElementById("phone");
const otpInput = document.getElementById("otp");

const loginLink = document.getElementById("login-link");
const profileLink = document.getElementById("profile-link");
const logoutBtn = document.getElementById("logout-btn");


/* التنقل من القائمة */

document.querySelectorAll(".side-link[data-page]").forEach(function(btn) {

    btn.addEventListener("click", function() {

        let page = btn.dataset.page;

        if (page === "profile_page" && !localStorage.getItem("user")) {
            page = "login_page";
        }

        const target = document.getElementById(page);

        if (!target) {
            alert("الصفحة المطلوبة غير موجودة في HTML");
            closeSideMenu();
            return;
        }

        show_page(page);
        closeSideMenu();

    });

});


/* تحديث القائمة والحساب */

function updateAccount() {

    let user = null;

    try {
        user = JSON.parse(localStorage.getItem("user"));
    } catch (error) {
        localStorage.removeItem("user");
    }

    if (user) {

        loginLink.hidden = true;
        profileLink.hidden = false;
        logoutBtn.hidden = false;

        document.querySelector(".menu-user h4").textContent =
            "أهلاً " + user.name;

        document.querySelector(".menu-user p").textContent =
            user.phone;

        document.getElementById("user-name").textContent =
            "الاسم: " + user.name;

        document.getElementById("user-phone").textContent =
            "الموبايل: " + user.phone;

        document.getElementById("user-email").textContent =
            "البريد: " + user.email;

    } else {

        loginLink.hidden = false;
        profileLink.hidden = true;
        logoutBtn.hidden = true;

        document.querySelector(".menu-user h4").textContent =
            "أهلاً بيكي";

        document.querySelector(".menu-user p").textContent =
            "سجلي الدخول للاستفادة من خدماتنا";

    }
}


/* إرسال رقم الموبايل */

document.getElementById("phone-btn").addEventListener("click", function() {

    const value = phoneInput.value.trim();
    const error = document.getElementById("phone-error");

    if (!/^01[0125][0-9]{8}$/.test(value)) {
        error.textContent = "اكتبي رقم موبايل مصري صحيح";
        return;
    }

    phone = value;
    error.textContent = "";

    show_page("otp_page");

});


/* تأكيد كود التحقق */

document.getElementById("otp-btn").addEventListener("click", function() {

    const code = otpInput.value.trim();
    const error = document.getElementById("otp-error");

    if (code !== demoCode) {
        error.textContent = "كود التحقق غير صحيح";
        return;
    }

    error.textContent = "";

    let oldUser = null;

    try {
        oldUser = JSON.parse(localStorage.getItem("user"));
    } catch (e) {
        oldUser = null;
    }

    if (oldUser && oldUser.phone === phone) {

        updateAccount();
        show_page("profile_page");

    } else {

        show_page("register_page");

    }

});


/* إعادة إرسال الكود */

document.getElementById("resend").addEventListener("click", function() {

    demoCode = "123456";

    alert("كود التحقق التجريبي هو 123456");

});


/* حفظ البيانات الشخصية */

document.getElementById("save-btn").addEventListener("click", function() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("register-error");

    if (name.length < 3) {
        error.textContent = "اكتبي الاسم بالكامل";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "اكتبي بريد إلكتروني صحيح";
        return;
    }

    const user = {
        name: name,
        phone: phone,
        email: email
    };

    localStorage.setItem("user", JSON.stringify(user));

    updateAccount();
    show_page("profile_page");

});


/* تسجيل الخروج */

logoutBtn.addEventListener("click", function() {

    localStorage.removeItem("user");

    updateAccount();
    closeSideMenu();
    show_page("home_page");

});


/* تشغيل الحساب عند فتح الموقع */

updateAccount();

// ================= الروشتات الطبية =================

const prescriptionInput = document.getElementById("prescription_file");
const prescriptionCamera = document.getElementById("prescription_camera");
const prescriptionGallery = document.getElementById("prescription_gallery");
const prescriptionEmpty = document.getElementById("prescription_empty");
const prescriptionViewer = document.getElementById("prescription_viewer");
const prescriptionLarge = document.getElementById("prescription_large");
const prescriptionClose = document.getElementById("prescription_close");
const prescriptionNotes = document.getElementById("prescription_notes");
const prescriptionBtn = document.getElementById("prescription_btn");
const prescriptionError = document.getElementById("prescription_error");
const prescriptionSuccess = document.getElementById("prescription_success");

let prescriptionImages = [];

function addPrescriptionImages(files) {

    prescriptionError.textContent = "";
    prescriptionSuccess.textContent = "";

    Array.from(files).forEach(function(file) {

        if (!file.type.startsWith("image/")) {
            prescriptionError.textContent = "اختاري ملفات صور فقط.";
            return;
        }

        const imageUrl = URL.createObjectURL(file);

        prescriptionImages.push({
            file: file,
            url: imageUrl
        });

    });

    renderPrescriptionImages();
}

function renderPrescriptionImages() {

    prescriptionGallery.innerHTML = "";

    prescriptionEmpty.style.display =
        prescriptionImages.length === 0 ? "block" : "none";

    prescriptionImages.forEach(function(image, index) {

        const item = document.createElement("div");
        item.className = "pres-item";

        const img = document.createElement("img");
        img.src = image.url;
        img.alt = "صورة الروشتة " + (index + 1);
        img.title = "اضغطي لعرض الصورة بحجم كبير";

        img.addEventListener("click", function() {
            openPrescriptionImage(image.url);
        });

        const name = document.createElement("p");
        name.textContent = image.file.name;

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "pres-remove";
        removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        removeBtn.title = "حذف الصورة";

        removeBtn.addEventListener("click", function() {
            removePrescriptionImage(index);
        });

        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(removeBtn);

        prescriptionGallery.appendChild(item);

    });
}

// اختيار الصور من الجهاز
if (prescriptionInput) {
    prescriptionInput.addEventListener("change", function() {
        addPrescriptionImages(this.files);
        this.value = "";
    });
}

// تصوير الروشتة بالكاميرا
if (prescriptionCamera) {
    prescriptionCamera.addEventListener("change", function() {
        addPrescriptionImages(this.files);
        this.value = "";
    });
}

// فتح الصورة بالحجم الكبير
function openPrescriptionImage(imageUrl) {

    prescriptionLarge.src = imageUrl;
    prescriptionViewer.classList.add("active");

}

// إغلاق الصورة
function closePrescriptionImage() {

    prescriptionViewer.classList.remove("active");
    prescriptionLarge.src = "";

}

if (prescriptionClose) {
    prescriptionClose.addEventListener("click", closePrescriptionImage);
}

if (prescriptionViewer) {
    prescriptionViewer.addEventListener("click", function(event) {

        if (event.target === prescriptionViewer) {
            closePrescriptionImage();
        }

    });
}

// إغلاق الصورة بزر Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closePrescriptionImage();
    }

});

// حذف صورة
function removePrescriptionImage(index) {

    URL.revokeObjectURL(prescriptionImages[index].url);

    prescriptionImages.splice(index, 1);

    renderPrescriptionImages();

}

// زر إرسال الروشتة
if (prescriptionBtn) {

    prescriptionBtn.addEventListener("click", function() {

        prescriptionError.textContent = "";
        prescriptionSuccess.textContent = "";

        if (prescriptionImages.length === 0) {
            prescriptionError.textContent = "من فضلك اختاري صورة الروشتة أولاً.";
            return;
        }

        const notes = prescriptionNotes.value.trim();

        console.log("صور الروشتة:", prescriptionImages.map(function(item) {
            return item.file;
        }));

        console.log("ملاحظات العميل:", notes);

        prescriptionSuccess.textContent =
            "تم تجهيز الروشتة والملاحظات بنجاح في الواجهة التجريبية.";

    });

}
