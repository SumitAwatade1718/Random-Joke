function getJoke() {
  document.getElementById("promise").style.display = "block";
  fetch("https://v2.jokeapi.dev/joke/programming?type=twopart")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      document.getElementById("setup").innerHTML = "Setup: " + data.setup;

      document.getElementById("punchline").innerHTML =
        "Punchline: " + data.delivery;
    })

    .catch((error) => {
      console.log("Error:", error);
    });
}

async function getJoke2() {
  document.getElementById("async").style.display = "block";
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/programming?type=twopart",
    );

    const data = await response.json();

    document.getElementById("setup1").innerHTML = "Setup: " + data.setup;

    document.getElementById("punchline1").innerHTML =
      "Punchline: " + data.delivery;
  } catch (error) {
    console.log("Error:", error);
  }
}
