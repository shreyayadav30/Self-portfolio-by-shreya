// Typing Animation

const text = "Hi, I'm Shreya ";
let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;


// Smooth Scroll

function scrollToProjects() {

    document.getElementById("projects")
    .scrollIntoView({
        behavior: "smooth"
    });

}