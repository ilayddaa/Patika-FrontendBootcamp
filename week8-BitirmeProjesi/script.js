document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".classes-buttons button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const tab = this.getAttribute("data-tab");

            // Önce tüm içerikleri gizle
            contents.forEach(content => content.classList.add("hidden"));

            // Seçilen içeriği göster
            document.getElementById(tab).classList.remove("hidden");
        });
    });

    // Add hover event listeners to trainer cards
    const trainerCards = document.querySelectorAll('.trainer-card');

    trainerCards.forEach(card => {
        // Show name on mouse enter (hover)
        card.addEventListener('mouseenter', function () {
            const trainerName = this.querySelector('.trainer-name');
            if (trainerName) {
                trainerName.classList.remove('hidden');
                trainerName.classList.add('show');
            }
        });

        // Hide name on mouse leave
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
    // Get elements
    const heightInput = document.getElementById('height-input');
    const weightInput = document.getElementById('weight-input');
    const calculateBtn = document.getElementById('calculate-bmi');
    const bmiResult = document.getElementById('bmi-result');
    const bmiCategory = document.getElementById('bmi-category');
    const resultContainer = document.getElementById('result-container');

    // Add event listener to the calculate button
    calculateBtn.addEventListener('click', calculateBMI);

    // Also calculate when pressing Enter in input fields
    heightInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') calculateBMI();
    });

    weightInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') calculateBMI();
    });

    function calculateBMI() {
        // Get values from inputs
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Validate inputs
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            bmiResult.textContent = "Please enter valid height and weight";
            bmiCategory.textContent = "";
            resultContainer.className = "p-4 mt-4 bg-red-100 text-red-700 rounded-lg";
            return;
        }

        // Calculate BMI - convert height from cm to m
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBMI = bmi.toFixed(1);

        // Display result
        bmiResult.textContent = `Your BMI: ${roundedBMI}`;

        // Determine BMI category
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

        bmiCategory.textContent = category;
        resultContainer.className = `p-4 mt-4 ${colorClass} rounded-lg`;

        // Show result container
        resultContainer.style.display = "block";
    }
});
