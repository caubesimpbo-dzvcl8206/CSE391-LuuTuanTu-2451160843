const images = [
    "https://placehold.co/800x500?text=1",
    "https://placehold.co/800x500?text=2",
    "https://placehold.co/800x500?text=3",
    "https://placehold.co/800x500?text=4",
    "https://placehold.co/800x500?text=5",
    "https://placehold.co/800x500?text=6",
    "https://placehold.co/800x500?text=7",
    "https://placehold.co/800x500?text=8",
    "https://placehold.co/800x500?text=9"
];

const commands = [
    "Open Gallery",
    "Next Image",
    "Previous Image",
    "Start Slideshow",
    "Stop Slideshow",
    "Toggle Modal"
];

let currentIndex = 0;
let slideShow = null;

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

function renderGallery() {
    images.forEach((src, index) => {
        const img = document.createElement("img");

        img.src = src;
        img.tabIndex = 0;
        img.setAttribute(
            "aria-label",
            `Image ${index + 1}`
        );

        img.addEventListener("click", () => {
            openModal(index);
        });

        gallery.appendChild(img);
    });
}

function openModal(index) {
    currentIndex = index;
    modalImage.src = images[index];
    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}

function nextImage() {
    currentIndex =
        (currentIndex + 1) % images.length;

    modalImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex =
        (currentIndex - 1 + images.length)
        % images.length;

    modalImage.src = images[currentIndex];
}

function toggleSlideshow() {
    if (slideShow) {
        clearInterval(slideShow);
        slideShow = null;
    } else {
        slideShow = setInterval(
            nextImage,
            2000
        );
    }
}

// Keyboard Controls
document.addEventListener("keydown", e => {

    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openPalette();
    }

    if (!modal.classList.contains("hidden")) {

        if (e.key === "ArrowRight") {
            nextImage();
        }

        if (e.key === "ArrowLeft") {
            prevImage();
        }

        if (e.key === " ") {
            e.preventDefault();
            toggleSlideshow();
        }

        if (e.key === "Escape") {
            closeModal();
        }

        if (/^[1-9]$/.test(e.key)) {
            const index =
                Number(e.key) - 1;

            if (index < images.length) {
                openModal(index);
            }
        }
    }
});

// Modal close
document
.getElementById("closeModal")
.addEventListener("click", closeModal);

// ===== Command Palette =====

const palette =
    document.getElementById("palette");

const commandInput =
    document.getElementById("commandInput");

const commandList =
    document.getElementById("commandList");

function renderCommands(list) {

    commandList.innerHTML = "";

    list.forEach(command => {

        const li =
            document.createElement("li");

        li.textContent = command;

        li.addEventListener(
            "click",
            () => executeCommand(command)
        );

        commandList.appendChild(li);
    });
}

function openPalette() {
    palette.classList.remove("hidden");
    commandInput.focus();
    renderCommands(commands);
}

function closePalette() {
    palette.classList.add("hidden");
}

function executeCommand(command) {
    alert("Command: " + command);
    closePalette();
}

commandInput.addEventListener(
    "input",
    () => {

        const keyword =
            commandInput.value.toLowerCase();

        const filtered =
            commands.filter(cmd =>
                cmd.toLowerCase()
                .includes(keyword)
            );

        renderCommands(filtered);
    }
);

commandInput.addEventListener(
    "keydown",
    e => {

        if (e.key === "Enter") {

            const first =
                commandList.firstElementChild;

            if (first) {
                executeCommand(
                    first.textContent
                );
            }
        }

        if (e.key === "Escape") {
            closePalette();
        }
    }
);

document
.getElementById("openPalette")
.addEventListener("click", openPalette);

renderGallery();