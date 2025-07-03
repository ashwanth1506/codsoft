document.addEventListener("DOMContentLoaded", function() {
  const items1 = document.querySelectorAll('.item1');
  const items2 = document.querySelectorAll('.item2');
  const hint = document.querySelector('.hint');

  function addHintListeners(items) {
    items.forEach(function(item) {
      item.addEventListener("mouseenter", function() {
        const img = item.querySelector('img');
        if (img) {
          hint.innerHTML = "I am provoken with " + img.alt + " skills";
        }
      });
      item.addEventListener("mouseleave", function() {
        hint.innerHTML = "";
      });
    });
  }

  if (hint) {
    addHintListeners(items1);
    addHintListeners(items2);
  }
});
document.addEventListener("DOMContentLoaded", function() {

  const selectorMap = [
    { selector: '.grid-item1', target: '.about-page' },
    { selector: '.grid-item2', target: '.achievements-section' }, 
    { selector: '.grid-item3', target: '.Certifications' },
    { selector: '.grid-item4', target: '.contact-slide' },
    { selector: '.grid-item5', target: '.achievements-section' }
  ];

  selectorMap.forEach(item => {
    const btn = document.querySelector(item.selector);
    const section = document.querySelector(item.target);
    if (btn && section) {
      btn.addEventListener('click', function() {
        section.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
});