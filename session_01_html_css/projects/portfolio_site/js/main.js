const skills = document.querySelectorAll(".skill-progress");

function showProgress() {

    skills.forEach(skill => {

        const skillPosition = skill.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.2;

        if(skillPosition < screenPosition){

            skill.style.width = skill.dataset.width;
        }
    });
}

window.addEventListener("scroll", showProgress);