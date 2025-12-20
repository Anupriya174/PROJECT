let problems = [];

function addProblem() {
  const name = document.getElementById("problemName").value;
  const difficulty = document.getElementById("difficulty").value;

  if (name === "") return;

  problems.push({
    name: name,
    difficulty: difficulty,
    solved: false
  });

  document.getElementById("problemName").value = "";
  displayProblems();
}

function toggleSolved(index) {
  problems[index].solved = !problems[index].solved;
  displayProblems();
}

function displayProblems() {
  const list = document.getElementById("problemList");
  list.innerHTML = "";

  problems.forEach((problem, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${problem.name} - ${problem.difficulty}
      <button onclick="toggleSolved(${index})">
        ${problem.solved ? "Solved" : "Unsolved"}
      </button>
    `;

    list.appendChild(li);
  });
}
