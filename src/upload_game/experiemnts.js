const pushGame = async (data) => {
  try {
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    };

    const res = await fetch('http://localhost:8080/api/v1/game', options);
  } catch (error) {
    console.log(error);
  }
};

const pushGames = async (id) => {
  const game = await getGame(id);
  pushGame(game);
};



const gameIds = [
  3498,  3328, 4291,  5286,
 12020,  5679, 4062,    28,
   802, 13537, 4286,    32,
 58175,  3070, 2454,  3939,
 11859,   278, 4459, 41494,
  1030,  3272,    422,  9767,
  3612,  3790,  13668, 10533,
   654,  9721,   3144, 12536,
  9882,   613, 326292,  3254,
 22509, 18240, 274755, 11147,
  3498,  3328,   5286, 13536,
    28,  3439,     32,  1030,
 58175,   278,   4459, 41494,
 23027,   416, 290856,  3790,
 58134, 13668,  19487,  4386,
  13633, 10243, 13910,  5525,
  10065, 11147, 10340,  1256,
  10560,   952, 10297, 22571,
   1244, 10073,   624, 28559,
  16209, 23322, 14512, 42187,
  4200,  4291, 12020,   4062,
   802, 13537,  4286,     32,
  2454,  3939, 11859,    766,
 29028,  3192, 19710, 290856,
  4427, 19709, 10035,   3612,
  9721, 326292,  9830, 356714,
  1959,  16343,  2115,  42187,
  2597, 817974, 13628,  12569,
 12019,   3350, 23587,  17037,
  2300,   9575, 10293, 685577,
  10035,   654,   9721, 10243,
   9882, 22509,  10065,  2093,
  10340, 11435, 356714,  1090,
   1358, 10297,   2572, 22571,
    559,  1959,    624, 16209,
  4200,  13536,  1030,  19709,
 18080,   1450,  3853,   3740,
  3474,   1358,  3486,   1774,
  2873,  22781, 13247,   5161,
  3350, 295021,   719, 452638,
  3612, 17540, 22509,  4003,
  3408, 16343,  2115,  5161,
  5687, 14690, 19491,  4347,
  4331,  4249,  2434, 17599,
  2239,  3772,  2830,  3090,
  1030,   422,  9767,    41,
 18080,  3144, 28179,  2361,
 17572,  1450, 28154,  3853,
 17959,  3740, 19590, 11726,
  3771, 17875,  2733, 28199,
  32, 10213,   766, 290856,
10533, 10142,   362, 326292,
22509, 11147,  9810,   2093,
3678, 22571, 58753,   9671,
50781,   678,  3300,   3290,
  3272,   4003,  2572,  58753,
  5578,  19491,  4347, 622492,
  3251,   3090, 23702,  11228,
 19633, 364806,  2131, 244716,
  3726,   3838,  2659,    966,
  3272, 326292,   2572, 53341,
  9575, 622492,    715,    36,
  3251,  11228, 244716, 10436,
 61961,    966,  59197, 10342,
 28126,     27,   1249,  5544,
  17540,    108, 28179,   9830,
 274480,  44525,    38,   2805,
  17599,     36, 14990,   9824,
 791638,  11223,    54,  49225,
   1488, 284664,  2828, 570074,
  3254, 2597,  3350,  3729,
  1259, 1140,  4331,  3850,
  3494, 4361, 11425, 12662,
  2639,  966, 16543, 19908,
  5403, 4480,  1854, 59637,
  23557, 327999,  2055,   758,
   2306,   3187,   964, 10091,
  12891,  11553, 17379,  2427,
  11192,    342, 47043,  7147,
  65969,   6400,   779,  5076,
  1358,  1140,  2778,   9768,
 13777,  6885,  2359,   9969,
 10364,  2226,  5978,    779,
 32126, 12039, 18367, 282882,
 13289, 50616,  6508, 294128,
  28121,  23557, 18852,   8923,
    332,   2306,   533,   1757,
  10091,   8845, 50671, 428208,
 723957, 389054, 11192,    342,
   2737,    779,   181, 868085
];

// ********* ******** ******** ********* Pushes all games
// gameIds.forEach((id) => pushGames(id));

async function getGame(id){
  try {
    const screenshotData = await getScreenshots(id);

    const options = {
    method: "GET",
    headers: {"Content-Type": "application/json"},
    };

    const data = await fetch(`https://api.rawg.io/api/games/${id}?key=11767bc3359549d4878c63e6c5d334e2`, options);
    const response = await data.json();
    delete response.id;
    const description = response.description_raw;
    delete response.description;
    response['description'] = description;
    response['price'] = randomPrice(7, 40);
    response['short_screenshots'] = screenshotData;

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getScreenshots(id){
  try {
    const options = {
    method: "GET",
    headers: {"Content-Type": "application/json"},
    };

    const data = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=11767bc3359549d4878c63e6c5d334e2`, options);
    const response = await data.json();

    return response.results;
  } catch (error) {
    console.log(error);
  }
}

function randomPrice(minPrice, baseNumberRange) {
  return Math.floor((Math.random() * baseNumberRange) + minPrice); //The maximum is exclusive and the minimum is inclusive
}

const obj = {
  id: 1,
  // name: 'hey'
}

function checkThis(object) {
  const { id=null, name=null } = object;
  console.log(id, name);
}

checkThis(obj);


