document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".classes-buttons button");
    const contents = document.querySelectorAll(".tab-content");

    // Burada tablar arasında geçiş yapılacak
    contents.forEach(content => content.classList.add("hidden"));

    // Eğer tab içeriği varsa ilk tabı göster
    if (contents.length > 0) {
        contents[0].classList.remove("hidden");

        // Eğer buton varsa ilk butonu aktif yap
        if (buttons.length > 0) {
            buttons[0].classList.add("active");
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const tab = this.getAttribute("data-tab");

            // Butonlardan aktif olanı kaldır
            buttons.forEach(btn => btn.classList.remove("active"));

            // Tıklanan butonu aktif yap
            this.classList.add("active");

            // Burda tab içeriklerini gizle
            contents.forEach(content => content.classList.add("hidden"));

            // Tıklanan tabı göster
            document.getElementById(tab).classList.remove("hidden");
        });
    });


    // Trainer kısmında isimleri göster/gizle
    const trainerCards = document.querySelectorAll('.trainer-card');

    trainerCards.forEach(card => {
        // İsimleri göster
        card.addEventListener('mouseenter', function () {
            const trainerName = this.querySelector('.trainer-name');
            if (trainerName) {
                trainerName.classList.remove('hidden');
                trainerName.classList.add('show');
            }
        });

        // Mouse çekildiğinde isimleri gizle
        card.addEventListener('mouseleave', function () {
            const trainerName = this.querySelector('.trainer-name');
            if (trainerName) {
                trainerName.classList.add('hidden');
                trainerName.classList.remove('show');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Burada BMI hesaplama işlemleri yapılacak
    const heightInput = document.getElementById('height-input');
    const weightInput = document.getElementById('weight-input');
    const calculateBtn = document.getElementById('calculate-bmi');
    const bmiResult = document.getElementById('bmi-result');
    const bmiCategory = document.getElementById('bmi-category');
    const resultContainer = document.getElementById('result-container');

    // BMI hesaplama butonuna tıklanınca hesapla
    calculateBtn.addEventListener('click', calculateBMI);

    // BMI hesaplama fonksiyonu
    function calculateBMI() {
        // Get values from inputs
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Burada hata kontrolü yapılacak
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            bmiResult.textContent = "Please enter valid height and weight";
            bmiCategory.textContent = "";
            resultContainer.className = "p-4 mt-4 bg-red-100 text-red-700 rounded-lg";
            return;
        }

        // Bmi hesaplama
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBMI = bmi.toFixed(1);

        // Burada sonucu ekrana yazdır
        bmiResult.textContent = `Your BMI: ${roundedBMI}`;

        // BMI kategorisini belirle
        let category;
        let colorClass;

        if (bmi < 18.5) {
            category = "Underweight";
            colorClass = "bg-blue-100 text-blue-700";
        } else if (bmi < 25) {
            category = "Normal weight";
            colorClass = "bg-green-100 text-green-700";
        } else if (bmi < 30) {
            category = "Overweight";
            colorClass = "bg-yellow-100 text-yellow-700";
        } else {
            category = "Obesity";
            colorClass = "bg-red-100 text-red-700";
        }

        bmiCategory.textContent = category; // BMI kategorisini yazdır
        resultContainer.className = `p-4 mt-4 ${colorClass} rounded-lg`; // Renk sınıfını ekle

        // Sonucu göster
        resultContainer.style.display = "block";
    }
});

// Burada mobile menu işlemleri yapılacak
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });

    // Burada mobile menunun dışına tıklanınca menüyü kapat
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileMenuButton.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    });

    // Burada mobile menüdeki linklere tıklanınca menüyü kapat
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    });
});