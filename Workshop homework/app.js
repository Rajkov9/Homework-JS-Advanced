document.getElementById("header").innerText = "Weather Alert App";
document.getElementById("greetingResult").innerText = "Welcome to the most accurate weather app!";

let navigationService = {
    navItems: document.getElementsByClassName("nav-item"),
    pages: document.getElementsByClassName("page"),
    citySearchBtn: document.getElementById("citySearchBtn"),
    citySearchInput: document.getElementById("citySearchInput"),
    activateItem: function (item) {
        for (let navItem of this.navItems) {
            navItem.classList.remove("active");
        }
        item.classList.add("active");
    },
    displayPage: function (index) {
        for (let page of this.pages) {
            page.style.display = "none";
        }
        this.pages[index].style.display = "block";
    },
    registerEventListeners: function () {
        for (let i = 0; i < this.navItems.length; i++) {
            this.navItems[i].addEventListener("click", function () {
                navigationService.activateItem(this);
                navigationService.displayPage(i);
            })
        }

        this.citySearchBtn.addEventListener("click", function () {
            console.log(`Search input: ${navigationService.citySearchInput.value}`);
            if (navigationService.citySearchInput.value) {
                weatherApiService.getWeatherData(navigationService.citySearchInput.value);
            }
        })
    }
}
navigationService.registerEventListeners();

let weatherApiService = {
    apiKey: "e0c0551716d3480508ec18e2711bf5eb",
    getWeatherData: async function (city) {
        try {
            debugger
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`
            let response = await fetch(url); 
            let data = await response.json();
            console.log(data);
            let statisticsData = statisticsService.calculateStatistics(data);
            uiService.displayStatistics(statisticsData);
            uiService.displayHourlyInfo(data.list);
            uiService.tableSorting(data.list);
        } catch(error) {
            console.log("An error occurred!", error);
        }
    }
}

let statisticsService = {
    calculateStatistics: function (data) {
        debugger
        let initialValues = {
            tempSum: 0,
            humiditySum: 0,
            minTemp: data.list[0].main.temp,
            maxTemp: data.list[0].main.temp,
            minHumidity: data.list[0].main.humidity,
            maxHumidity: data.list[0].main.humidity,
        }
        let res = data.list.reduce(function (result, item) {
            result.tempSum += item.main.temp;
            result.humiditySum += item.main.humidity;

            if (item.main.temp < result.minTemp) {
                result.minTemp = item.main.temp;
            }

            if (item.main.temp > result.maxTemp) {
                result.maxTemp = item.main.temp;
            }

            if (item.main.humidity < result.minHumidity) {
                result.minHumidity = item.main.humidity;
            }

            if (item.main.humidity > result.maxHumidity) {
                result.maxHumidity = item.main.humidity;
            }

            return result;
        }, initialValues);
        console.log(initialValues);
        console.log(res);
        let statisticsResult = {
            averageTemperature: initialValues.tempSum / data.list.length,
            averageHumidity: initialValues.humiditySum / data.list.length,
            minTemperature: initialValues.minTemp,
            maxTemperature: initialValues.maxTemp,
            minHumidity: initialValues.minHumidity,
            maxHumidity: initialValues.maxHumidity
        }

        return statisticsResult;
    }
}

let aboutInfo = {
    creator: "G6",
    academy: "Qinshift Academy",
    year: 2025
}
let uiService = {
    showAboutInfo: function () {
        document.getElementById("aboutResult").innerHTML = `<h2>This app is created by ${aboutInfo.creator} from the ${aboutInfo.academy}</h2>
        <p><b>${aboutInfo.year}</b></p>`
    },
    displayStatistics: function (statisticsData) {
        document.getElementById("statisticsResult").innerHTML = "";
        document.getElementById("statisticsResult").innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-6">AVG TEMP: ${statisticsData.averageTemperature} C</div>
                <div class="col-6">AVG HUMIDITY: ${statisticsData.averageHumidity} %</div>
            </div>
             <div class="row">
                <div class="col-6">MIN TEMP: ${statisticsData.minTemperature} C</div>
                <div class="col-6">MIN HUMIDITY: ${statisticsData.minHumidity} %</div>
            </div>
            <div class="row">
                <div class="col-6">MAX TEMP: ${statisticsData.maxTemperature} C</div>
                <div class="col-6">MAX HUMIDITY: ${statisticsData.maxHumidiy} %</div>
            </div>
        </div>`
    },
    displayHourlyInfo: function (data) {
       let tableBodyStats= document.getElementById("hourlyTableBody");
       tableBodyStats.innerHTML = "";
        for (let item of data) {
            let row = document.createElement('tr');
            let iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
            row.innerHTML =
         `<td><img src="${iconUrl}" alt="Weather Icon"></td>
       <td>${item.weather[0].description}</td>
        <td>${item.dt_txt}</td>
        <td>${item.main.temp} </td>
        <td>${item.main.humidity}</td>
        <td>${item.wind.speed}</td>`;
        tableBodyStats.appendChild(row);
        }
    },
    tableSorting: function(data) {
        document.getElementById("minTempBtn").addEventListener("click", () => {
            let sortedData = [...data].sort((a, b) => a.main.temp - b.main.temp);
            uiService.displayHourlyInfo(sortedData);
        });
        document.getElementById("maxTempBtn").addEventListener("click", () => {
            let sortedData = [...data].sort((a, b) => b.main.temp - a.main.temp);
            uiService.displayHourlyInfo(sortedData);
        });
        document.getElementById("minHumidityBtn").addEventListener("click", () => {
            let sortedData = [...data].sort((a, b) => a.main.humidity - b.main.humidity);
            uiService.displayHourlyInfo(sortedData);
        });
        document.getElementById("maxHumidityBtn").addEventListener("click", () => {
            let sortedData = [...data].sort((a, b) => b.main.humidity - a.main.humidity);
            uiService.displayHourlyInfo(sortedData);
        });
    }
}

uiService.showAboutInfo();
weatherApiService.getWeatherData("Skopje");