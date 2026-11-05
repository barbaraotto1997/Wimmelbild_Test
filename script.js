const objects = [
    {
        name: "Triforce",
        left: 19,
        top: 31,
        width: 4,
        height: 5
    },

    {
        name: "Creeper",
        left: 22.5,
        top: 29,
        width: 3.5,
        height: 6
    },

    {
        name: "Grogu",
        left: 93.4,
        top: 51.5,
        width: 3.5,
        height: 6
    },

    {
        name: "Silas",
        left: 74,
        top: 78.6,
        width: 15,
        height: 12
    },

    {
        name: "Headsets",
        id: "headset1",
        left: 38,
        top: 29,
        width: 5.5,
        height: 7
    },

    {
        name: "Headsets",
        id: "headset2",
        left: 65,
        top: 29,
        width: 4,
        height: 7
    },

    {
        name: "Headsets",
        id: "headset3",
        left: 52,
        top: 68,
        width: 9,
        height: 7.5
    },

    {
        name: "Tassen",
        id: "tasse1",
        left: 26,
        top: 77,
        width: 3,
        height: 8
    },

    {
        name: "Tassen",
        id: "tasse2",
        left: 44,
        top: 65,
        width: 7,
        height: 8
    },

    {
        name: "Tassen",
        id: "tasse3",
        left: 61,
        top: 35,
        width: 5,
        height: 6
    }

];

const counters = {
    Tassen: 3,
    Headsets: 3
};

const gameContainer =
    document.getElementById("game-container");

const scene =
    document.getElementById("scene");

objects.forEach(obj => {

    const item =
        document.createElement("div");

    item.classList.add("item");

    item.dataset.name = obj.name;

    item.style.left = obj.left + "%";
    item.style.top = obj.top + "%";

    item.style.width = obj.width + "%";
    item.style.height = obj.height + "%";

    item.addEventListener("click", () => {

    if (item.classList.contains("already-found")) {
        return;
    }

    item.classList.add("already-found");
    item.classList.add("found-item");

    const entry =
        document.getElementById(obj.name);

    if (obj.name === "Tassen") {

        counters.Tassen--;
        if (counters.Tassen > 1) {
            entry.textContent =
                counters.Tassen + " Tassen";
        }

        else if (counters.Tassen === 1) {
            entry.textContent =
                "1 Tasse";
        }

        else {
            entry.textContent =
                "Tassen";
            entry.classList.add("found");
        }

    }

    else if (obj.name === "Headsets") {

        counters.Headsets--;
        if (counters.Headsets > 1) {
            entry.textContent =
                counters.Headsets + " Headsets";
        }

        else if (counters.Headsets === 1) {
            entry.textContent =
                "1 Headset";
        }

        else {
            entry.textContent =
                "Headsets";
            entry.classList.add("found");
        }

    }

    else {
        entry.classList.add("found");
    }
});

    gameContainer.appendChild(item);
});

/* ================= KOORDINATEN-TOOL ============================================
scene.addEventListener("click", (event) => {
    const rect = scene.getBoundingClientRect();

    const xPercent =
        ((event.clientX - rect.left) / rect.width * 100)
        .toFixed(1);

    const yPercent =
        ((event.clientY - rect.top) / rect.height * 100)
        .toFixed(1);

    alert(
        `left: ${xPercent}%\ntop: ${yPercent}%`
    );
});

*/