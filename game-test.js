const {getCanvas} = require('./game');

describe('getCanvas()', () => {
  test('Creates canvas using x, y, width height', () =>{
    // get canvas, does it exist? y
    let canvas = document.getElementById('gameCanvas');
    expect(canvas.width).toBe("800px");
    // get obstacles, do they exist? n
    // call draw Obstacles
    // now do obstacles exist? y
  });
});
