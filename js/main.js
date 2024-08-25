// for adding the typing effect to the text
var typed = new Typed('.typing', {
    strings: ["Software Engineer", "Web Developer", "Full-stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    // startDelay: 1500,
    loop: true
});

// for the table toggle
// document.querySelectorAll('#skills tr').forEach(row => {
//     row.addEventListener('click', function() {
//         document.querySelectorAll('#skills td.content').forEach(td => {
//             td.classList.remove('active');
//         });
//         this.querySelector('td.content').classList.add('active');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
  const skillContent = document.getElementById('skill-content');
  const skillData = {
    languages: `
      <span class="icons">
        <img src="assets/icons/python-5.svg" alt="python">
        <img src="assets/icons/logo-javascript.svg" alt="javascript">
        <img src="assets/icons/typescript.svg" alt="typescript">
        <img src="assets/icons/c-1.svg" alt="c">
      </span>
    `,
    frameworks: 'React, Flask, express ...',
    tools: 'Git, Mongodb, Docker',
    softskills: 'Teamwork, Communication, problem-solving'
  };

  document.querySelectorAll('.skill-row').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.id;
      skillContent.innerHTML = skillData[id];
    });
  });
});