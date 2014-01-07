fun.views.games = Backbone.View.extend({

    events: {
        'click #match-plus-blue': 'scorePlayerOne',
        'click #match-plus-pink': 'scorePlayerTwo',

        'click #match-minus-blue': 'minusScorePlayerOne',
        'click #match-minus-pink': 'minusScorePlayerTwo',

        'click #set-player-1': 'changePlayerA',
        'click #set-player-2': 'changePlayerB',

        'click #match-start': 'matchStart',
        'click #match-stop': 'endMatch'
    },

    initialize : function(options) {
        fun.containers.games = this.$el;
    },
    
    render : function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.games)
        );
    
        this.$el.html(template);
        this.$el.show();

        this.renderScoreboard();
    },

    renderScoreboard: function(){
        this.renderGameScores();
        this.renderMatchScores();
        this.renderGlobalScores();
    },

    renderGameScores: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.gameScores)
        );

        var gameScores = this.$('#fun-game-scores');
        gameScores.html(template);
    },

    renderMatchScores: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.matchScores)
        );

        var matchScores = this.$('#fun-match-scores');
        matchScores.html(template);
    },

    renderGlobalScores: function(){
        var template = _.template(
            fun.utils.getTemplate(fun.conf.templates.globalScores)
        );

        var globalScores = this.$('#fun-global-scores');
        globalScores.html(template);
    },

    scorePlayerOne: function(event){
        
        // Same stuff but localStorage for hardcore shit.

        if(typeof(Storage)!=="undefined") {
            if (sessionStorage.scorePlayerOne) {
                sessionStorage.scorePlayerOne=Number(sessionStorage.scorePlayerOne)+1;
            } else {
                sessionStorage.scorePlayerOne=1;
            }
            console.log(sessionStorage.scorePlayerOne)

            var scoreStuff = this.$('#match-score-blue');
            scoreStuff.html(sessionStorage.scorePlayerOne);
        }
        else {
            console.log('Your current browser does not support HTML5.')
        }
    },

    scorePlayerTwo: function(event){

        // Same stuff but localStorage for hardcore shit.

        if(typeof(Storage)!=="undefined") {
            if (sessionStorage.scorePlayerTwo) {
                sessionStorage.scorePlayerTwo=Number(sessionStorage.scorePlayerTwo)+1;
            } else {
                sessionStorage.scorePlayerTwo=1;
            }
            console.log(sessionStorage.scorePlayerTwo);

            var scoreStuff = this.$('#match-score-pink');
            scoreStuff.html(sessionStorage.scorePlayerTwo);
        }
        else {
            console.log('Your current browser does not support HTML5.')
        }
    },

    minusScorePlayerOne: function(event){
        if(typeof(Storage)!=="undefined") {
            if (sessionStorage.scorePlayerOne) {
                sessionStorage.scorePlayerOne = Number(sessionStorage.scorePlayerOne) - 1;
            }
            console.log(sessionStorage.scorePlayerOne)

            var scoreStuff = this.$('#match-score-blue');
            scoreStuff.html(sessionStorage.scorePlayerOne);
        }
        else {
            console.log('Your current browser does not support HTML5.')
        }
    },

    minusScorePlayerTwo: function(event){
        if(typeof(Storage)!=="undefined") {
            if (sessionStorage.scorePlayerTwo) {
                sessionStorage.scorePlayerTwo = Number(sessionStorage.scorePlayerTwo) - 1;
            }
            console.log(sessionStorage.scorePlayerTwo)

            var scoreStuff = this.$('#match-score-pink');
            scoreStuff.html(sessionStorage.scorePlayerTwo);
        }
        else {
            console.log('Your current browser does not support HTML5.')
        }
    },

    endMatch: function(event){

        var matchTimer = this.$('#fun-match-timer');

        matchTimer.countdown('destroy');

        var playerSettings = this.$('#player-settings');

        playerSettings.addClass("show");

        if(typeof(Storage)!=="undefined") {
            if (sessionStorage.scorePlayerOne || sessionStorage.scorePlayerTwo) {

                if (sessionStorage.scorePlayerOne > sessionStorage.scorePlayerTwo) {

                    if (sessionStorage.gamePlayerOne) {

                        sessionStorage.gamePlayerOne = Number(sessionStorage.gamePlayerOne) + 1;

                    } else {

                        sessionStorage.gamePlayerOne = 1;

                    }

                    var scoreStuff = this.$('#game-score-blue');
                    scoreStuff.html(sessionStorage.gamePlayerOne);


                } else if (sessionStorage.scorePlayerTwo > sessionStorage.scorePlayerOne) {

                    if (sessionStorage.gamePlayerTwo) {

                        sessionStorage.gamePlayerTwo = Number(sessionStorage.gamePlayerTwo) + 1;

                    } else {

                        sessionStorage.gamePlayerTwo = 1;

                    }

                    var scoreStuff = this.$('#game-score-pink');
                    scoreStuff.html(sessionStorage.gamePlayerTwo);

                } else if (sessionStorage.scorePlayerOne == 0 && sessionStorage.scorePlayerTwo == 0) {

                    sessionStorage.gamePlayerOne = 0;
                    sessionStorage.gamePlayerTwo = 0;

                    var gameBlue = this.$('#game-score-blue');
                    gameBlue.html(sessionStorage.gamePlayerOne);

                    var gamePink = this.$('#game-score-pink');
                    gamePink.html(sessionStorage.gamePlayerTwo);

                }else {
                    console.log('ending what match?');
                }
            }

            sessionStorage.scorePlayerOne = 0;
            sessionStorage.scorePlayerTwo = 0;

            var scoreBlue = this.$('#match-score-blue');
            var scorePink = this.$('#match-score-pink');
            
            scoreBlue.html(sessionStorage.scorePlayerOne);
            scorePink.html(sessionStorage.scorePlayerTwo);
        }
        else {
            console.log('Your current browser does not support HTML5.')
        }
    },

    endGame: function(event){

        if(typeof(Storage)!=="undefined") {
            sessionStorage.scorePlayerOne = 0;
            sessionStorage.scorePlayerTwo = 0;
            sessionStorage.gamePlayerOne = 0;
            sessionStorage.gamePlayerTwo = 0;
        }
        else {
            console.log('Your current browser does not support HTML5.')
        }

    },

    matchStart: function(event){

        var playerSettings = this.$('#player-settings');

        playerSettings.removeClass("show");
        playerSettings.addClass("hide");

        var matchTimer = this.$('#fun-match-timer').countdown({since: '-1S', description: 'Play time'});


        if(typeof(Storage)!=="undefined") {
            if (sessionStorage.gamePlayerOne || sessionStorage.gamePlayerTwo) {

                console.log('alert current games');
            } else {
                console.log('alert no games');

                sessionStorage.gamePlayerOne = 0;
                sessionStorage.gamePlayerTwo = 0;
            }

            sessionStorage.scorePlayerOne = 0;
            sessionStorage.scorePlayerTwo = 0; 

            console.log('starting match');

            var blueScore = this.$('#match-score-blue');
            var pinkScore = this.$('#match-score-pink');

            var blueGame = this.$('#game-score-blue');
            var pinkGame = this.$('#game-score-pink');

            blueScore.html(sessionStorage.scorePlayerOne);
            pinkScore.html(sessionStorage.scorePlayerTwo);

            blueGame.html(sessionStorage.gamePlayerOne);
            pinkScore.html(sessionStorage.gamePlayerTwo);
        }
        else {
            console.log('Your current browser does not support HTML5.')
        }

    },

    gameStart: function(event){

        var playerSettings = this.$('#player-settings');

        playerSettings.addClass("hide");

        if(typeof(Storage)!=="undefined") {
            if (sessionStorage.scorePlayerOne || sessionStorage.scorePlayerTwo) {
                sessionStorage.gamePlayerOne = 0;
                sessionStorage.gamePlayerTwo = 0;
            } else {
                sessionStorage.gamePlayerOne = 0;
                sessionStorage.gamePlayerTwo = 0;
            }
            console.log('starting game')
        }
        else {
            console.log('Your current browser does not support HTML5.')
        }

    },

     
    changePlayerA: function (event) {

        var playerName = this.$('#player-1');

        var setPlayerName = this.$('#set-player-name');
        var setPlayerFlag = this.$('#set-player-flag');

        var flag = setPlayerFlag.val();

        playerName.html(setPlayerName.val());

        document.getElementById("player-1-flag").src = './img/flags/' + flag + '.png';

    },


    changePlayerB: function (event) {

        var playerName = this.$('#player-2');

        var setPlayerName = this.$('#set-player-name');
        var setPlayerFlag = this.$('#set-player-flag');

        var flag = setPlayerFlag.val();

        playerName.html(setPlayerName.val());

        document.getElementById("player-2-flag").src = './img/flags/' + flag + '.png';

    },

});