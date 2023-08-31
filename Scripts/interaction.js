function showSection(sectionClassName) {
    const sections = document.getElementsByTagName("section");
    for (const section of sections) {
        section.style.display = "none";
    }
    document.getElementById(sectionClassName).style.display = "block";
}