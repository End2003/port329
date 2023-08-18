const dataSkillsChart = {
    labels: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    datasets: [{
        data: [66, 60, 44, 78, 46],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#E57373"]
    }]
};

const dataGpaChart = {
    labels: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    datasets: [{
        label: "GPA",
        data: [2.3, 3.0, 2.7, 3.5, 1.5],
        backgroundColor: "rgba(54, 162, 235, 0.5)"
    }]
};

const dataFitnessChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: "Fitness Progress",
        data: [60, 65, 70, 72, 75, 80],
        borderColor: "#FF6384",
        fill: false
    }]
};

const dataIncomeExpenseChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: "Income",
        data: [1200, 1500, 1400, 1600, 1800, 2000],
        borderColor: "#4CAF50",
        fill: false
    }, {
        label: "Expense",
        data: [800, 900, 1000, 950, 1100, 1050],
        borderColor: "#FF6384",
        fill: false
    }]
};
const ctxSkillsChart = document.getElementById("skillsChart").getContext("2d");
new Chart(ctxSkillsChart, {
    type: "pie",
    data: dataSkillsChart
});

const ctxGpaChart = document.getElementById("gpaChart").getContext("2d");
new Chart(ctxGpaChart, {
    type: "bar",
    data: dataGpaChart
});
const ctxFitnessChart = document.getElementById("fitnessChart").getContext("2d");
new Chart(ctxFitnessChart, {
    type: "line",
    data: dataFitnessChart
});
const ctxIncomeExpenseChart = document.getElementById("incomeExpenseChart").getContext("2d");
new Chart(ctxIncomeExpenseChart, {
    type: "line",
    data: dataIncomeExpenseChart
});
