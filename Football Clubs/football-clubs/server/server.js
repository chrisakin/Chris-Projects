

var unirest = require("unirest");

var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/predictions/157462");

req.headers({
	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"x-rapidapi-key": "6776b0c7e8msh42db2a49d6c6123p14f878jsn22c078fcd85c"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});