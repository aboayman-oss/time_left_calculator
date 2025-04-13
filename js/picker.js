export function togglePicker() {
  const picker = document.getElementById('datetime-picker');
  if (!picker.hasChildNodes()) {
    const label = document.createElement('label');
    label.innerText = 'Select a future date & time:';
    const input = document.createElement('input');
    input.type = 'datetime-local';
    input.id = 'datetime-value';
    Object.assign(input.style, {
      backgroundColor: 'var(--card)',
      color: 'var(--text)',
      padding: '0.75rem',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '0.5rem',
      width: '100%',
      marginTop: '0.5rem'
    });
    picker.appendChild(label);
    picker.appendChild(input);
  }
  picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
};