
//Code Challenge

(function(){
    
    function Perguntas(pergunta, resposta, respostaCorreta){
        this.pergunta = pergunta;
        this.resposta = resposta;
        this.respostaCorreta = respostaCorreta;
    }

    Perguntas.prototype.displayQuestion = function(){
        console.log(this.pergunta);

        for(var i = 0; i<this.resposta.length; i++){
            console.log(i + ': ' + this.resposta[i]);
        }
    }

    Perguntas.prototype.recebeResposta =  function(resp, callback){
                var po;
            if (resp === this.respostaCorreta){
                po = callback(true);
                console.log('Acertou Porra');
            } else {
                po = callback(false);
                console.log('Achou Errado Otario');
            }
            this.exibePontuacao(po);
        }

    Perguntas.prototype.exibePontuacao = function(pontos){
        console.log('Sua pontuacao eh:' + pontos);
        console.log('##############################');
    }
  
    var pergunta1 = new Perguntas( 'JavaScript eh TOP?', ['Eh TOP D++++', 'Nem EH', 'JavaEh Melhor'], 0);
    var pergunta2 = new Perguntas('Esse curso ta daora?', ['Marromeno',' 3 Palavras : NADAVE', 'tudibao'], 2);
    var pergunta3 = new Perguntas('Qual O melhor filme do mundo?', ['Clube da Luta','Velozes e furiosos','Harry Potter Sem harry potter eh golpe'], 1);
    var arrPerguntas=[pergunta1, pergunta2, pergunta3];
   
    function pontos(){
        var po = 0;
        return function(correta){
            if(correta){
                po++;
            }
            return po;
        }
    }
    var pegaPontos = pontos();
    
    function proximaPergunta(){

    var nPergunta = Math.round(Math.random() * arrPerguntas.length);
    arrPerguntas[nPergunta].displayQuestion();
    var resp = prompt('Digite Sua Resposta');
        if(resp !== 'Sair'){
            arrPerguntas[nPergunta].recebeResposta(parseInt(resp),pegaPontos);

            proximaPergunta();
        } 

    
    }

    proximaPergunta();
})();
