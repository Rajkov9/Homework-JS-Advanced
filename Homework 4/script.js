let countriesUrl = "https://restcountries.com/v3.1/alpha/";

async function getCountryByCode(countriesUrl, code) {
    try {
        let response = await fetch(`${countriesUrl}${code}`);
        if (!response.ok) throw new Error(`Failed to fetch country: ${code}`);
        let countryData = await response.json();
        console.log(countryData[0].name.common, countryData);
        let borders = countryData[0].borders;
        if (!borders) {
            console.log("This country does not have a border");
            return;
        }
        for (let border of borders) {
            let answer = await fetch(`${countriesUrl}${border}`);
            if (!answer.ok) {
                throw new Error(`Failed to fetch error: ${common}`);
            }
            let neighbour = await answer.json();
            console.log(neighbour[0].name.common, neighbour);
        }
    } catch (error) {
        console.error("Error fetching country:", error);
    }
}

function countryValidation(code) {
    code = code.toUpperCase().trim();
    if (!isNaN(code)) {
        console.log("Invalid input! Country code must consist only of letters (for exmp. 'MK' or 'MKD').");
        return;
    }
    if (code.length < 2 || code.length > 3) {
        console.log("Invalid country code! It must be 2 or 3 letters (for exmp. 'MK' or 'MKD').");
        return;
    }
    return code;

}

let code = countryValidation(prompt("Please enter a code (Exapmle: MK for North Macedonia)"));
getCountryByCode(countriesUrl, code);