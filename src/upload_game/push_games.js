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

// const pushAllGames = async (id) => {
//   let count = 0;
//     data.forEach( (id) => {
//     const game = await 
//     pushGame(game);
//     count++;
//     console.log(count);
//   });
// };
