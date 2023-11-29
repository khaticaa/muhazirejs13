const game = {
    team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
    
    [
    'Neuer',
    
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
          'Kimmich',
          'Goretzka',
          'Coman',
          'Muller',
          'Gnarby',
          'Lewandowski',
    ], [
    
          'Burki',
          'Schulz',
          'Hummels',
          'Akanji',
          'Hakimi',
          'Weigl',
          'Witsel',
          'Hazard',
          'Brandt',
          'Sancho',
          'Gotze',
    ], ],
    
      score: '4:0',
      scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
      'Hummels'],
      date: 'Nov 9th, 2037',
      odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }, };
    
    












    

const[team1,team2]= game.players
console.log(team1,team2)

let [goalKeaper ,...fieldPLayers ]= team1
console.log(goalKeaper,fieldPLayers)

allPlayer =  [...team1 , ...team2]
console.log(allPlayer)

let finalPlayers=   [ ...fieldPLayers,"Chighago","Perisic","Thigago"]
console.log(finalPlayers)

let{ team1:team1win , x:draw , team2:team2win}=game.odds
console.log(team1win,draw,team2win)