function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function showSubSection(subSectionId) {
    const subSections = document.querySelectorAll('.sub-section');
    subSections.forEach(subSection => {
        subSection.classList.remove('active');
    });
    document.getElementById(subSectionId).classList.add('active');
}
