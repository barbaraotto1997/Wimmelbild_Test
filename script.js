const objects = [
    {
        name: "Zelda",
        id: "zelda1",
        left: 19,
        top: 30,
        width: 4,
        height: 5.5
    },

    {
        name: "Zelda",
        id: "zelda2",
        left: 65,
        top: 54,
        width: 7,
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
        name: "Katze",
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
        width: 3.5,
        height: 7
    },

    {
        name: "Headsets",
        id: "headset3",
        left: 52,
        top: 68,
        width: 7,
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
    },
    
    {
        name: "Tassen",
        id: "tasse4",
        left: 55.5,
        top: 13.5,
        width: 2,
        height: 3
    },

    {
        name: "Schallplatten",
        id: "platte1",
        left: 82,
        top: 0,
        width: 7,
        height: 11
    },

    {
        name: "Schallplatten",
        id: "platte2",
        left: 81,
        top: 56.5,
        width: 9,
        height: 5
    },

    {
        name: "Schallplatten",
        id: "platte3",
        left: 74,
        top: 70,
        width: 15,
        height: 8
    },

    {
        name: "Schallplatten",
        id: "platte4",
        left: 26,
        top: 84,
        width: 15,
        height: 10
    },

    {
        name: "Würfel",
        left: 40.5,
        top: 76.5,
        width: 5,
        height: 4
    },

    {
        name: "Thrones",
        id: "thrones1",
        left: 19,
        top: 47,
        width: 5,
        height: 8
    },

    {
        name: "Thrones",
        id: "thrones2",
        left: 29,
        top: 66,
        width: 15,
        height: 4
    },

    {
        name: "Thrones",
        id: "thrones3",
        left: 84.5,
        top: 40.4,
        width: 5.5,
        height: 9
    },

    {
        name: "Netflix",
        id: "netflix1",
        left: 90,
        top: 84,
        width: 6,
        height: 8
    },

    {
        name: "Netflix",
        id: "netflix2",
        left: 75,
        top: 33,
        width: 4.5,
        height: 5
    },

    {
        name: "Kamera",
        left: 15,
        top: 43,
        width: 4.5,
        height: 4
    },

    {
        name: "Controller",
        id: "controller1",
        left: 47,
        top: 43,
        width: 2.5,
        height: 3
    },

    {
        name: "Controller",
        id: "controller2",
        left: 59,
        top: 68,
        width: 7,
        height: 7
    },

    {
        name: "Controller",
        id: "controller3",
        left: 73,
        top: 48,
        width: 3.5,
        height: 3
    },

    {
        name: "Controller",
        id: "controller4",
        left: 76.5,
        top: 50,
        width: 3.5,
        height: 3
    },

    {
        name: "Controller",
        id: "controller5",
        left: 80.5,
        top: 51,
        width: 3.5,
        height: 3
    },

    {
        name: "Controller",
        id: "controller6",
        left: 58,
        top: 90,
        width: 13.5,
        height: 9
    },

    {
        name: "Globus",
        left: 17.5,
        top: 8,
        width: 3.5,
        height: 8
    },

];

const counters = {
    Zelda: {
        remaining: 2,
        singular: "Zelda"
    },
    
    Tassen: {
        remaining: 4,
        singular: "Tasse"
    },

    Headsets: {
        remaining: 3,
        singular: "Headset"
    },

    Thrones: {
        remaining: 3
    },

    Schallplatten: {
        remaining: 4,
        singular: "Schallplatte"
    },
    
    Netflix: {
        remaining: 2,
        singular: "Netflix"
    },

    Controller: {
        remaining: 6,
        singular: "Controller"
    }
};

const gameContainer =
    document.getElementById("game-container");

const scene =
    document.getElementById("scene");

const startButton =
    document.getElementById("start-button");

startButton.addEventListener("click", () => {

    gameStarted = true;

    startTime = Date.now();

    timerInterval = setInterval(() => {

    const seconds =
        Math.floor(
            (Date.now() - startTime) / 1000
        );

    document
        .getElementById("timer")
        .textContent =
        "⏱ Zeit: " + seconds + " s";

    }, 1000);

    document
        .getElementById("start-popup")
        .style.display = "none";
    document
        .getElementById("start-overlay")
        .style.display = "none";

});

let foundObjects = 0;
const totalObjects = objects.length;

let totalClicks = 1;
let successfulClicks = 0;

let startTime;
let gameStarted = false;
let timerInterval;

gameContainer.addEventListener("click", () => {

    if (!gameStarted) {
        return;
    }

    totalClicks++;

});

objects.forEach(obj => {

    const item =
        document.createElement("div");

    item.classList.add("item");

    item.dataset.name = obj.name;

    item.style.left = obj.left + "%";
    item.style.top = obj.top + "%";

    item.style.width = obj.width + "%";
    item.style.height = obj.height + "%";

    item.addEventListener("click", (event) => {

        if (!gameStarted) {
            return;
        }

        if (item.classList.contains("already-found")) {
            return;
        }

        item.classList.add("already-found");
        item.classList.add("found-item");

        foundObjects++;
        successfulClicks++;

        const entry =
            document.getElementById(obj.name);

        if (counters[obj.name]) {

            counters[obj.name].remaining--;

            const count =
                counters[obj.name].remaining;

            if (count > 1) {

                entry.textContent =
                    count + " " + obj.name;

            }

            else if (count === 1) {

                entry.textContent =
                    "1 " +
                    counters[obj.name].singular;

            }

            else {

                entry.textContent =
                    obj.name;

                entry.classList.add("found");

            }

        }

        else {

            entry.classList.add("found");

        }

        checkWin();

    });

    gameContainer.appendChild(item);

});

function checkWin() {

    if (foundObjects !== totalObjects) {
        return;
    }

    const seconds =
        Math.floor(
            (Date.now() - startTime) / 1000
        );
    clearInterval(timerInterval);

    const accuracy =
        Math.round(
            (totalObjects / totalClicks) * 100
        );

    let rating;

    if (accuracy >= 95) {
        rating = "🕵️ Meisterdetektiv";
    }
    else if (accuracy >= 80) {
        rating = "⭐ Sehr gut";
    }
    else if (accuracy >= 60) {
        rating = "👍 Solide";
    }
    else {
        rating = "😄 Wildes Herumgeklicke";
    }

    document
        .getElementById("final-time")
        .textContent = seconds;

    document
        .getElementById("final-clicks")
        .textContent = totalClicks;

    document
        .getElementById("final-accuracy")
        .textContent = accuracy;

    document
        .getElementById("final-rating")
        .textContent = rating;

    console.log("Gefundene Objekte:", foundObjects);
    console.log("Treffer:", successfulClicks);
    console.log("Klicks:", totalClicks);

    document
        .getElementById("win-popup")
        .classList.remove("hidden");
}
/*
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

    if (counters[obj.name]) {

        counters[obj.name].remaining--;

        const count=
        counters[obj.name].remaining;

        if (count >1) {
            entry.textContent = 
            count + " " + obj.name;
        }

        else if (count === 1) {
            entry.textContent =
                "1 " + counters[obj.name].singular;
        }

        else {
            entry.textContent =
                obj.name;
            entry.classList.add("found");
        }

    }

    else {
        entry.classList.add("found");
    }
});


    gameContainer.appendChild(item);
});

*/

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
