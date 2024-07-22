document.addEventListener('DOMContentLoaded', () => {
    const algorithms = [
        {
            name: "Cross",
            steps: [
                { algorithm: "F R U R' U' F'", explanation: "Solve the cross on the first layer by aligning edges with center pieces." },
                { algorithm: "y F R U R' U' F'", explanation: "Alternative algorithm for solving the cross." }
            ]
        },
        {
            name: "F2L",
            steps: [
                { algorithm: "U R U' R'", explanation: "Insert the corner and edge piece into the correct position." },
                { algorithm: "U' L' U L", explanation: "Alternative method for inserting pieces into the correct position." }
            ]
        },
        {
            name: "OLL",
            steps: [
                { algorithm: "R U2 R2 F R F' U2 R' F R F'", explanation: "Orient the last layer to make all top face pieces the same color." },
                { algorithm: "F R U' R' U' R U R' F'", explanation: "Another algorithm to orient the last layer." }
            ]
        },
        {
            name: "PLL",
            steps: [
                { algorithm: "R' U L' U2 R U' R' U2 R L U'", explanation: "Permute the last layer to complete the cube." },
                { algorithm: "x' R U' R D R' U R D' R2", explanation: "Alternative permutation algorithm." }
            ]
        },
    ];

    const algorithmList = document.getElementById('algorithm-list');
    const solutionSteps = document.getElementById('solution-steps');

    algorithms.forEach(algorithm => {
        const algorithmItem = document.createElement('div');
        algorithmItem.classList.add('algorithm-item');
        let stepsHtml = '';
        algorithm.steps.forEach(step => {
            stepsHtml += `<li><strong>${step.algorithm}</strong>: ${step.explanation}</li>`;
        });
        algorithmItem.innerHTML = `<h3>${algorithm.name}</h3><ul>${stepsHtml}</ul>`;
        algorithmList.appendChild(algorithmItem);
    });

    document.getElementById('solve-button').addEventListener('click', () => {
        solveCube();
    });

    function solveCube() {
        solutionSteps.innerHTML = "<p>Solving the cube...</p>";
        setTimeout(() => {
            const solution = [
                "F R U R' U' F'",
                "y F R U R' U' F'",
                "U R U' R'",
                "U' L' U L",
                "R U2 R2 F R F' U2 R' F R F'",
                "F R U' R' U' R U R' F'",
                "R' U L' U2 R U' R' U2 R L U'",
                "x' R U' R D R' U R D' R2"
            ];
            solutionSteps.innerHTML = `<ol>${solution.map(step => `<li>${step}</li>`).join('')}</ol>`;
        }, 1000);
    }
});
