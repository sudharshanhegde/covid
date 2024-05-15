
document.addEventListener('DOMContentLoaded', function ()
{
    fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data =>
        {
            updateGlobalStats(data);
        })
        .catch(error => console.error('Error fetching global statistics:', error));


    function updateGlobalStats(data)
    {
        const globalStatsElement = document.getElementById('global-stats');

        globalStatsElement.innerHTML = `
            <p>Total Cases: ${data.cases}</p>
            <p>Total Deaths: ${data.deaths}</p>
            <p>Total Recovered: ${data.recovered}</p>
        `;
    }
});


document.addEventListener('DOMContentLoaded', function ()
{

    fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data =>
        {
            updateGlobalStats(data);
        })
        .catch(error => console.error('Error fetching global statistics:', error));

    fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(data =>
        {
            updateCountryStats(data);
        })
        .catch(error => console.error('Error fetching country-wise statistics:', error));


    function updateGlobalStats(data)
    {
        const globalStatsElement = document.getElementById('global-stats');

        globalStatsElement.innerHTML = `
            <p>Total Cases: ${data.cases}</p>
            <p>Total Deaths: ${data.deaths}</p>
            <p>Total Recovered: ${data.recovered}</p>
        `;
    }

    function updateCountryStats(data)
    {
        const countryStatsElement = document.getElementById('country-stats');
        countryStatsElement.innerHTML = '<h2>Country-wise Statistics</h2>';

        data.forEach(country =>
        {
            const countryStat = document.createElement('div');
            countryStat.classList.add('country-stat');
            countryStat.innerHTML = `
                <h3>${country.country}</h3>
                <p>Total Cases: ${country.cases}</p>
                <p>Total Deaths: ${country.deaths}</p>
                <p>Total Recovered: ${country.recovered}</p>
            `;
            countryStatsElement.appendChild(countryStat);
        });
    }
});


