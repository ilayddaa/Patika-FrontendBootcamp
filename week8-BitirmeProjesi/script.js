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
