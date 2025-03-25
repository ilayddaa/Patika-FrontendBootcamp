document.addEventListener('DOMContentLoaded', function () {
    // Burada DOMContentLoaded eventini kullanarak sayfa yüklendiğinde çalışacak kodları yazıyoruz.
    const todoInput = document.getElementById('todo-input'); // Bu satırda input alanını seçiyoruz.
    const addButton = document.getElementById('add-button'); // Bu satırda butonu seçiyoruz.
    const todoList = document.getElementById('todo-list'); // Bu satırda listeyi seçiyoruz.

    // Bu satırda butona tıklanınca veya enter tuşuna basılınca yeni bir task eklemek için gerekli olan fonksiyonu çağırıyoruz.
    addButton.addEventListener('click', addNewTask); // Butona tıklanınca yeni task eklemek için gerekli olan fonksiyonu çağırıyoruz.
    todoInput.addEventListener('keypress', function (e) { // Enter tuşuna basılınca yeni task eklemek için gerekli olan fonksiyonu çağırıyoruz.
        if (e.key === 'Enter') {
            addNewTask();
        }
    });

    // Burada yeni bir task eklemek için gerekli olan fonksiyonu tanımlıyoruz.
    function addNewTask() { // Bu fonksiyon sayesinde yeni bir task ekleyebiliriz.
        const text = todoInput.value.trim();

        if (text === '') return; // Eğer input alanı boşsa fonksiyonu sonlandırıyoruz.

        // Burada yeni bir task oluşturuyoruz ve içeriğini belirliyoruz.
        const li = document.createElement('li'); // Yeni bir li elementi oluşturuyoruz.
        li.innerHTML = ` 
            <span class="task-text">${text}</span>
            <div class="task-actions">
                <button class="complete-btn">Yaptım</button>
                <button class="delete-btn">Yarın yaparım💅🏻 </button>
            </div>
        `; // Oluşturduğumuz li elementinin içeriğini belirliyoruz.

        // Burada complete ve delete butonlarına event ekliyoruz.
        li.querySelector('.complete-btn').addEventListener('click', function () {
            const taskText = li.querySelector('.task-text');
            taskText.classList.toggle('completed');
            this.textContent = taskText.classList.contains('completed') ? 'Geri Al' : 'Tamamla';
        });

        // Burada delete butonuna event ekliyoruz.
        li.querySelector('.delete-btn').addEventListener('click', function () { // Delete butonuna tıklandığında çalışacak olan fonksiyonu tanımlıyoruz.
            li.remove(); // Task'ı listeden kaldırıyoruz.
        });

        // Burada oluşturduğumuz task'ı listeye ekliyoruz.
        todoList.appendChild(li);
        todoInput.value = ''; // Input alanını temizliyoruz.
        todoInput.focus(); // Input alanına odaklanıyoruz.
    }
});