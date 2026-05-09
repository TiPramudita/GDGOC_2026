const profile = {
    name: "Titi Pramudita Wijayanti",
    hardSkills: ["Rstudio", "python", "excel"],
    softSkills: ["Critical Thinking", "Communication", "Leadership", "Problem solving"],
};
const heroName = document.querySelector("#heroName");
heroName.textContent = profile.name;

const hardSkillContainer = document.querySelector("#hard-skill-container");
const softSkillContainer = document.querySelector("#soft-skill-container");

profile.hardSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    hardSkillContainer.appendChild(li);
});

profile.softSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    softSkillContainer.appendChild(li);
});

const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input_nama = document.querySelector('#nama').value;
    alert(`Terima kasih ${input_nama} sudah menghubungi saya!`);
})
