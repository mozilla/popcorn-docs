
  var gistthis = Popcorn('#narration')
    .popcorndoc({
      start: 5, // seconds
      end: 12, // seconds
      lines: '15,16,17,18,19,20,21',
      gistUrl: 'https://gist.github.com/1045762',
      target: 'gistdiv'
    })
    

    .popcorndoc({
      start: 14, // seconds
      end: 18, // seconds
      lines: '11',
      gistUrl: 'https://gist.github.com/1045762',
      target: 'gistdiv'
    })    
    
    .popcorndoc({
      start: 19, // seconds
      end: 20, // seconds
      lines: '13',
      gistUrl: 'https://gist.github.com/1045762',
      target: 'gistdiv'
    })    
    
    .popcorndoc({
      start: 23, // seconds
      end: 26, // seconds
      lines: '12',
      gistUrl: 'https://gist.github.com/1045762',
      target: 'gistdiv'
    })    
    
     .popcorndoc({
      start: 26, // seconds
      end: 29, // seconds
      lines: '12,31',
      gistUrl: 'https://gist.github.com/1045762',
      target: 'gistdiv'
    })    
    

     .popcorndoc({
     start: 35, // seconds
     end: 60,
     target: 'gistdiv', // DIV in which to load gist
     gistUrl: 'https://gist.github.com/1045762', // URL of gist
     runIn: 'iframediv' // DIV in which to load the example in an iframe
    })
    
    
   
   .play();
    