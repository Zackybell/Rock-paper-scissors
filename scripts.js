    let isautoplayon = false;
    let intervalid="";
    function autoplay() {
    if(!isautoplayon){
      document.querySelector('.js-auto')
          .innerHTML='Stop Play';
    
      intervalid=setInterval(function(){
      const automove = pickComputerMove();
      getResult(automove);
    },1000);
    isautoplayon=true;
    }else{ document.querySelector('.js-auto')
    .innerHTML='Auto Play';
      clearInterval(intervalid);
    isautoplayon=false;
    }
    }
        
    let score=JSON.parse(localStorage.getItem
        ('score')) ||  {
            win:0,
            tie:0,
            lose:0
        };
          
        function getResult(move){
            const ComputerMove= pickComputerMove();
            let result ='';
            if(move==='rock')
          { if(ComputerMove === 'rock')
        result='Tie';
        
        if(ComputerMove === 'paper')
        result='lose';
        
        if(ComputerMove === 'scissors')
        result='win';
        }  
        
        if(move==='paper')
          { if(ComputerMove === 'rock')
            result='win';
        
        if(ComputerMove === 'paper')
        result='Tie';
        
        if(ComputerMove === 'scissors')
        result='lose';
        }  if(move==='scissors')
          {if(ComputerMove === 'rock')
        { result='lose';}  
        
        if(ComputerMove === 'paper')
          {result='win';}  
        
            if(ComputerMove === 'scissors')
        {result='Tie';}}
        
        if(result==='win')
        {score.win+=1;}
        else if(result==='lose')
        {score.lose+=1;}
        else
        {score.tie+=1;}
        console.log(score);
          localStorage.setItem('score',JSON.stringify(score));
        
          displayscore();
        
          document.querySelector('.js-moves')
            .innerHTML=`You 
            <img src="images/${move}-emoji.png" class="move-icon"> Vs
            <img src="images/${ComputerMove}-emoji.png" class="move-icon"> 
            Computer`;
            document.querySelector('.js-result')
            .innerHTML=`You:${result}`;
        }
        
          function displayscore(){
            document.querySelector('.js-score')
            .innerHTML=`Wins:${score.win} , Losses:${score.lose} , Ties:${score.tie}`;
          };
        
          function pickComputerMove() 
          {
          const randomNumber = Math.random();
          let ComputerMove='';
        
          if(randomNumber>= 0 && randomNumber<1/3 )
          {ComputerMove ='rock';
          }
          else if(randomNumber>=1/3 && randomNumber<2/3 )
          {ComputerMove ='paper';
          }
          else if(randomNumber>=2/3 && randomNumber<1)
          {ComputerMove ='scissors';
          }
          return ComputerMove;
          } 