document.querySelectorAll('.box a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); 
  
      const targetID = this.getAttribute('href');
      const targetSection = document.querySelector(targetID);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
});
  
let contactSlide = () => {
    const targetSection = document.querySelector("#contacts");
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
}