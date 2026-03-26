function highlight(table) {
  const tbody = table.querySelector('tbody');
  const rows = tbody.rows;

  for (let row of rows) {
    // 1. Проверка Status (data-available)
    const statusCell = row.cells[3];
    if (statusCell.hasAttribute('data-available')) {
      const isAvailable = statusCell.dataset.available === 'true';
      row.classList.add(isAvailable ? 'available' : 'unavailable');
    } else {
      row.hidden = true; // Проставить атрибут hidden, если атрибута нет
    }

    // 2. Проверка Gender (m/f)
    const genderCell = row.cells[2];
    if (genderCell.textContent === 'm') {
      row.classList.add('male');
    } else if (genderCell.textContent === 'f') {
      row.classList.add('female');
    }

    // 3. Проверка Age (< 18)
    const ageCell = row.cells[1];
    if (parseInt(ageCell.textContent, 10) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
