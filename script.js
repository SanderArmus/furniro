let index = 0;

function showImage() {
    const images = document.querySelectorAll(".slider-image");
    const slider = document.getElementById("slider");
    const navButtons = document.querySelectorAll(".nav-button");
    
    images.forEach((img, i) => {
        img.classList.remove("active", "next");
        img.style.margin = "10px";
        img.style.transition = "transform 0.5s, opacity 0.5s";
        
        if (i === index) {
            img.classList.add("active");
            img.style.transform = "scale(1)";
            img.style.opacity = "1";

            navButtons.forEach(btn => {
                btn.style.position = "absolute";
                btn.style.top = "50%";
                btn.style.transform = "translateY(-50%)";
                btn.style.zIndex = "10";
                btn.style.border = "none";
                btn.style.padding = "10px 15px";
                btn.style.cursor = "pointer";
                btn.style.borderRadius = "5px";
                btn.style.transition = "background 0.3s";
            });

        } else if (i === index + 1 || (index === images.length - 1 && i === 0)) {
            img.classList.add("next");
            img.style.transform = "scale(0.8)";
            img.style.opacity = "0.6";
        } else {
            img.style.transform = "scale(0.6)";
            img.style.opacity = "0.3";
        }
    });
    
    slider.style.transform = `translateX(-${index * 50}%)`;
}

function nextImage() {
    const images = document.querySelectorAll(".slider-image");
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}

function prevImage() {
    const images = document.querySelectorAll(".slider-image");
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage();
}

document.addEventListener("DOMContentLoaded", showImage);