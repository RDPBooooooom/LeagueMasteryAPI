const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));

process.env.LEAGUE_API_PLATFORM_ID = 'euw1'
process.env.LEAGUE_API_KEY = '*'

const LeagueJS = require('LeagueJS');
const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY);

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/api/leagueJS/championById/:champId', (req, res) => {
    leagueJs.StaticData.gettingChampionById(req.params.champId).then(data => {
        'use strict';
        console.log("NEW REQUEST");
        console.log(data);
        res.send(data);
    });
});

app.get('/api/leagueJS/championMasteryBySummonerId/:summonerId', (req, res) => {
    leagueJs.ChampionMastery.gettingBySummoner(req.params.summonerId).then(data => {
        'use strict';
        console.log("NEW REQUEST Mastery");
        console.log(data);
        res.send(data);
    });
});

app.get('/api/leagueJS/summonerByName/:summonerName', (req, res) => {
    leagueJs.Summoner.gettingByName(req.params.summonerName).then(data => {
        'use strict';
        console.log("NEW REQUEST Mastery");
        console.log(data);
        res.send(data);
    });
});

const port = process.env.PORT || 4201;

app.listen(port, () => {
    console.log(`Listening on Port ${port} ...`)
});