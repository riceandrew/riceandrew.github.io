$(document).ready(function(){
                var settings = {
                  "async": true,
                  "crossDomain": true,
                  "url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2019",
                  "method": "GET",
                  "headers": {
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "2b1f9e6733msh22bb848a9641962p19a128jsn799dd10dfb90"
                  }
                }

                $.ajax(settings).done(function (response) {
                  console.log(response)
            
                var teams = response.api.standings;
                var teamNames = {
                  1: "Atlanta Hawks",
                  2: "Boston Celtics",
                  3: "Brisbane Bullets",
                  4: "Brooklyn Nets",
                  5: "Charlotte Hornets",
                  6: "Chicago Bulls",
                  7: "Cleveland Cavaliers",
                  8: "Dallas Mavericks",
                  9: "Denver Nuggets",
                  10: "Detroit Pistons",
                  11: "Golden State Warriors",
                  12: "Guangzhou Long-Lions",
                  13: "Haifa Maccabi Haifa",
                  14: "Houston Rockets",
                  15: "Indiana Pacers",
                  16: "LA Clippers",
                  17: "Los Angeles Lakers",
                  18: "Melbourne United",
                  19: "Memphis Grizzlies",
                  20: "Miami Heat",
                  21: "Milwaukee Bucks",
                  22: "Minnesota Timberwolves",
                  23: "New Orleans Pelicans",
                  24: "New York Knicks",
                  25: "Oklahoma City Thunder",
                  26: "Orlando Magic",
                  27: "Philadelphia 76ers",
                  28: "Phoenix Suns",
                  29: "Portland Trail Blazers",
                  30: "Sacramento Kings",
                  31: "San Antonio Spurs",
                  32: "Shanghai Sharks",
                  33: "Sydney Kings",
                  34: "Team Giannis",
                  35: "Team LeBron",
                  36: "Away Away",
                  37: "Home Home",
                  38: "Toronto Raptors",
                  39: "USA USA",
                  40: "Utah Jazz",
                  41: "Washington Wizards",
                  42: "World World",
                  83: "",
                  84: "",
                  85: "",
                  86: "Real Madrid Real Madrid",
                  87: "Rio de Janeiro Flamengo",
                  88: "Barcelona FC Barcelona",
                  89: "Buenos Aires San Lorenzo",
                  90: "Adelaide 36ers",
                  91: "Beijing Ducks",
                  92: "New Zealand Breakers",
                  93: "Perth Wildcats",
                  99: "Franca Franca",
                } 


                console.log(teamNames)


                
            
                for (var i = 0; i < teams.length; i++) {

                  $( teams[i].conference.name == "east" ? ".easternConference" : ".westernConference").append(`
                  <tr>
                  <td class="teamname">${teamNames[teams[i].teamId]}</td>
                  <td class="wins">${teams[i].win}</td>
                  <td class="losses">${teams[i].loss}</td>
                  <td class="conference">${teams[i].winPercentage}</td>
                  </tr>
                  `
                  )
                }



            

        // Team Logos

        // Team Names

        // Wins and Losses

        // Win Percentage

                  });
            
});
            
        