const input = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');

let current = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (val === 'C') {
      current = '';
      input.value = '';
    } else if (val === '=') {
      try {
        current = eval(current).toString();
        input.value = current;
      } catch {
        input.value = 'Error';
        current = '';
      }
    } else {
      current += val;
      input.value = current;
    }
  });
});
