// for adding the typing effect to the text
var typed = new Typed('.typing', {
  strings: ['Software Engineer', 'Web Developer', 'Full-stack Developer'],
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
        <img src="assets/icons/python-5.svg" alt="python" class="ripple-element">
        <img src="assets/icons/logo-javascript.svg" alt="javascript">
        <img src="assets/icons/typescript.svg" alt="typescript">
        <img src="assets/icons/c-1.svg" alt="c">
      </span>
    `,
    frameworks: `
      <span class="icons">
        <img src="assets/icons/react-2.svg" alt="react">
        <img src="assets/icons/express-109.svg" alt="express">
        <img src="assets/icons/mongodb.svg" alt="mongodb">
        <img src="assets/icons/sqlite.svg" alt="sqlite">
        </span>`,
        tools: `
        <span class="icons">
        <img src="assets/icons/nodejs-icon.svg" alt="nodejs">
        <img src="assets/icons/git-icon.svg" alt="git">
        <img src="assets/icons/github-icon.svg" alt="github">
        <img src="assets/icons/vscode-icon.svg" alt="vscode">
        <img src="assets/icons/postman-icon.svg" alt="postman">
      </span>`,
    softskills: `
      <span class="icons">
        <img src="assets/icons/communication.svg" alt="communication">
        <img src="assets/icons/teamwork.svg" alt="teamwork">
        <img src="assets/icons/leadership.svg" alt="leadership">
        <img src="assets/icons/problem-solving.svg" alt="problem-solving">
      </span>
    `
  };

  skillContent.innerHTML = skillData.languages; // default content

  document.querySelectorAll('.skill-row').forEach((row) => {
    row.addEventListener('click', () => {
      const id = row.id;
      skillContent.innerHTML = skillData[id];
    });
  });
});
