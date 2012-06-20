
  var gistthis = Popcorn('#narration')
    .popcorndoc({
      start: 8, // seconds
      end: 12, // seconds
      lines: '13, 14,15,16,17,18,19,20',
      gistUrl: 'https://gist.github.com/1055278',
      target: 'gistdiv'
    })
    
    .popcorndoc({
      start: 13, // seconds
      end: 17, // seconds
      lines: '16',
      gistUrl: 'https://gist.github.com/1055278',
      target: 'gistdiv'
    })
    
    .popcorndoc({
      start: 17.1, // seconds
      end: 22, // seconds
      lines: '18',
      gistUrl: 'https://gist.github.com/1055278',
      target: 'gistdiv'
    })    
    
    .popcorndoc({
      start: 17.1, // seconds
      end: 22, // seconds
      lines: '18',
      gistUrl: 'https://gist.github.com/1055278',
      target: 'gistdiv'
    })      

    .popcorndoc({
      start: 22.1, // seconds
      end: 24, // seconds
      lines: '19',
      gistUrl: 'https://gist.github.com/1055278',
      target: 'gistdiv'
    })         

    .popcorndoc({
      start: 24.1, // seconds
      end: 27, // seconds
      lines: '17,34',
      gistUrl: 'https://gist.github.com/1055278',
      target: 'gistdiv'
    })  
    
    .popcorndoc({
     start: 27.1, // seconds
     end: 60,
     target: 'gistdiv', // DIV in which to load gist
     gistUrl: 'https://gist.github.com/1055278', // URL of gist
     runIn: 'iframediv' // DIV in which to load the example in an iframe
    })
  
   .play();
    