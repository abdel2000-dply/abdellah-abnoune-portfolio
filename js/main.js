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
        <img src="assets/icons/bash-2.svg" alt="bash">
        <img src="assets/icons/html-1.svg" alt="html">
        <img src="assets/icons/css-3.svg" alt="css">
        <img src="assets/icons/arduino.svg" alt="arduino">
      </span>
    `,
    frameworks: `
      <span class="icons">
        <img src="assets/icons/react-2.svg" alt="react">
        <img src="assets/icons/expressjs.png" alt="express">
        <img src="assets/icons/flask.svg" alt="flask">
        <img src="assets/icons/jquery-1.svg" alt="jquery">
        </span>`,
    tools: `
        <span class="icons">
        <img src="assets/icons/nodejs-2.svg" alt="nodejs">
        <img src="assets/icons/mongodb-icon-2.svg" alt="mongodb">
        <img src="assets/icons/sqlite.svg" alt="sqlite">
        <img src="assets/icons/git-icon.svg" alt="git">
        <img src="assets/icons/github-icon.svg" alt="github">
        <img src="assets/icons/visual-studio-code-1.svg" alt="vscode">
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
