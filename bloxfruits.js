// Responsive nav toggle
document.querySelector('.nav-toggle').onclick = function () {
    document.querySelector('nav').classList.toggle('open');
};

// Table search filter
function filterTable(tableId, query) {
    query = query.toLowerCase();
    const rows = document.querySelectorAll(`#${tableId} tbody tr`);
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });
}
