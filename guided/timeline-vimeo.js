
  var gistthis = Popcorn('#narration')
    .popcorndoc({
      start: 8, // seconds
      end: 11, // seconds
      lines: '11',
      gistUrl: 'https://gist.github.com/1045775',
      target: 'gistdiv'
    })
    
      .popcorndoc({
      start: 11.1, // seconds
      end: 14, // seconds
      lines: '12,31',
      gistUrl: 'https://gist.github.com/1045775',
      target: 'gistdiv'
    })
    
      .popcorndoc({
      start: 14.1, // seconds
      end: 16, // seconds
      lines: '13',
      gistUrl: 'https://gist.github.com/1045775',
      target: 'gistdiv'
    })
    

     .popcorndoc({
     start: 17, // seconds
     end: 60,
     target: 'gistdiv', // DIV in which to load gist
     gistUrl: 'https://gist.github.com/1045775', // URL of gist
     runIn: 'iframediv' // DIV in which to load the example in an iframe
    })
    
    
   
   .play();
    