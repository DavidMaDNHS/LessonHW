const cors = require('cors');
const express = require('express');
const app = express();

// Enable CORS for localhost:4100
app.use(cors({ origin: 'http://localhost:4100' }));

app.get('/api/assignments/debug', (req, res) => {
    // Mock assignment data
    const assignments = [
        { id: 1, title: "Math Homework", dueDate: "2025-02-01", details: "Complete chapter 5 exercises" },
        { id: 2, title: "Science Project", dueDate: "2025-02-03", details: "Prepare a model of a volcano" },
        { id: 3, title: "History Essay", dueDate: "2025-02-05", details: "Write an essay on World War II" },
    ];
    res.json(assignments);
});

app.get('/api/frq', (req, res) => {

    const responses = [

`The program uses a list to store multiple club names and their information. The list allows the algorithm to efficiently search through data using iteration and selection.`,

`The list named "clubs" stores multiple related values in one structure. A loop iterates through the list and compares each item to the user input.`,

`The program uses a list so multiple club values can be managed without creating separate variables. The algorithm loops through the list and outputs matching information.`

    ];

    const pick = responses[Math.floor(Math.random() * responses.length)];

    res.json({
        answer: pick
    });

});

app.listen(8085, () => {
    console.log('Backend running on http://localhost:8085');
});
