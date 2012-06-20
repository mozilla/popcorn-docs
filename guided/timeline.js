
  var gistthis = Popcorn('#narration')
   
    .popcorndoc({
      start: 7, // seconds
      end: 10, // seconds
      lines: '27,31',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
    .popcorndoc({
      start: 10.1, // seconds
      end: 15, // seconds
      lines: '28,29,30',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
     .popcorndoc({
      start: 16, // seconds
      end: 19, // seconds
      lines: '27',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
      .popcorndoc({
      start: 20, // seconds
      end: 25, // seconds
      lines: '4',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
      .popcorndoc({
      start: 26, // seconds
      end: 31, // seconds
      lines: '6,7',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
     .popcorndoc({
      start: 32, // seconds
      end: 36, // seconds
      lines: '10',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
     .popcorndoc({
      start: 37, // seconds
      end: 40, // seconds
      lines: '13',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
      .popcorndoc({
      start: 41, // seconds
      end: 42.5, // seconds
      lines: '14,15',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
      .popcorndoc({
      start: 43, // seconds
      end: 46, // seconds
      lines: '16',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
      .popcorndoc({
      start: 47, // seconds
      end: 56, // seconds
      lines: '17,32',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
       .popcorndoc({
      start: 57, // seconds
      end: 60, // seconds
      lines: '21',
      gistUrl: 'https://gist.github.com/1041301',
      target: 'gistdiv'
    })
    
    .popcorndoc({
     start: 60.5, // seconds
     end: 75,
     target: 'gistdiv', // DIV in which to load gist
     gistUrl: 'https://gist.github.com/1041301', // URL of gist
     runIn: 'iframediv' // DIV in which to load the example in an iframe
    })

    .play();

