document.getElementById('ageCalculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const day = parseInt(document.getElementById('dob').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months are 0-11
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').innerHTML = '<div class="result-column">Please enter a valid date.</div>';
        return;
    }

    const dob = new Date(year, month, day);
    const today = new Date();

    if (dob > today) {
        document.getElementById('result').innerHTML = '<div class="result-column">Date of birth cannot be in the future.</div>';
        return;
    }

    const ageDifMs = today - dob.getTime();
    const ageDate = new Date(ageDifMs);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = today.getMonth() - dob.getMonth() + (years * 12) + (today.getDate() < day ? -1 : 0);
    const days = Math.floor(ageDifMs / (1000 * 60 * 60 * 24));

    const totalMonths = Math.floor(days / 30);
    const remainingDays = days % 30;

    document.getElementById('result').innerHTML = `
        <div class="result-column">Age: ${years} years</div>
        <div class="result-column">Age: ${years} years ${months % 12} months ${remainingDays} days</div>
        <div class="result-column">Total Days: ${days}</div>`;
});
