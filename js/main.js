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
          <img src="assets/icons/python-5.svg" alt="python" title="Python" class="ripple-element">
          <img src="assets/icons/logo-javascript.svg" alt="javascript" title="JavaScript">
          <img src="assets/icons/typescript.svg" alt="typescript" title="TypeScript" class="ripple-element">
          <img src="assets/icons/c-1.svg" alt="c" title="C">
          <img src="assets/icons/bash-2.svg" alt="bash" title="Bash" class="ripple-element">
          <img src="assets/icons/html-1.svg" alt="html" title="HTML">
          <img src="assets/icons/css-3.svg" alt="css" title="CSS" class="ripple-element">
          <img src="assets/icons/arduino.svg" alt="arduino" title="Arduino">
          <img src="assets/icons/matlab.svg" alt="matlab" title="MATLAB" class="ripple-element">
          <img src="assets/icons/mysql.svg" alt="mysql" title="MySQL">
        </span>
      `,
      frameworks: `
        <span class="icons">
          <img src="assets/icons/react-2.svg" alt="react" title="React" class="ripple-element">
          <img src="assets/icons/expressjs.png" alt="express" title="Express">
          <img src="assets/icons/flask.svg" alt="flask" title="Flask" class="ripple-element">
          <img src="assets/icons/jquery-1.svg" alt="jquery" title="jQuery" class="ripple-element">
        </span>
      `,
      tools: `
        <span class="icons">
          <img src="assets/icons/nodejs-2.svg" alt="nodejs" title="Node.js" class="ripple-element">
          <img src="assets/icons/mongodb-icon-2.svg" alt="mongodb" title="MongoDB">
          <img src="assets/icons/sqlite.svg" alt="sqlite" title="SQLite" class="ripple-element">
          <img src="assets/icons/git-icon.svg" alt="git" title="Git">
          <img src="assets/icons/github-icon.svg" alt="github" title="GitHub" class="ripple-element">
          <img src="assets/icons/visual-studio-code-1.svg" alt="vscode" title="VS Code">
          <img src="assets/icons/postman.svg" alt="postman" title="Postman" class="ripple-element">
          <img src="assets/icons/redis.svg" alt="redis" title="Redis">
          <img src="assets/icons/swagger.svg" alt="swagger" title="Swagger" class="ripple-element">
        </span>
      `,
      softskills: `
        <span class="icons">
          <img src="assets/icons/continuous-learning.png" alt="curiosity" title="Curiosity and Continuous Learning" class="ripple-element">
          <img src="assets/icons/analytical_thinking.svg" alt="analytical-thinking" title="Analytical Thinking">
          <img src="assets/icons/problem-solving.svg" alt="problem-solving" title="Problem-Solving" class="ripple-element">
          <img src="assets/icons/message.png" alt="communication" title="Communication">
          <img src="assets/icons/team.svg" alt="team-collaboration" title="Team Collaboration" class="ripple-element">
        </span>
      `
    };

  skillContent.innerHTML = skillData.languages; // default content

  document.querySelectorAll('.skill-row').forEach((row) => {
    row.addEventListener('click', () => {
      const id = row.id;
      skillContent.innerHTML = skillData[id];

      row.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    });
  });
});
