    // Enemies our player must avoid
    var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    };

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

    // make enemies loop to left side of canvas after reaching canvas.width
    if (this.x >= 505) {
        this.x = 0;
    }

    // Check for collision with enemies or barrier-walls
    checkCollision(this);

    };

    // Draw the enemy on the screen, required method for game
    Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.
    var Player = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    };

    Player.prototype.update = function(dt){

    };

    // Draw the player on the screen, required method for game
    Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    Player.prototype.handleInput = function(allowedKeys){
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 505, 50);
    if(allowedKeys == 'left'){
        if(this.x - 101 >0 )
        this.x -= 101;
    }

    if(allowedKeys == 'right'){
        if(this.x + 101 < 505)
        this.x += 101;
    }

    if(allowedKeys == 'up'){
        if(this.y - 80 > -80)
        this.y -= 80;
    }

    if(allowedKeys == 'down'){
        if(this.y + 80 < 400)
        this.y += 80;
    }


    //alert("player : " + player.x + " "+ player.y);
    //alert("enemy : " + enemy.x + " "+ enemy.y);

    };

    var checkCollision = function(anEnemy) {



    if( player.x  <= anEnemy.x + 80 && player.x >=  anEnemy.x -80 
        && player.y >= anEnemy.y - 45 
        &&  player.y <= anEnemy.y + 45){
        player.x = 202.5;
        player.y = 380;
    }



    };


var Game = function(){

    this.allEnemies = [];
    this.initEnemies();

}

Game.prototype.initEnemies = function(){
  for (var i = 0; i < 4; i++) {
    var enemy = new Enemy(0, Math.random() * 160 + 60, Math.random() * 300);
    this.allEnemies.push(enemy);
  };
};
    // Now instantiate your objects.
    // Place all enemy objects in an array called allEnemies
    // Place the player object in a variable called player
    //var allEnemies = [];
    var player = new Player(202.5, 380, 50);
   // var enemy = new Enemy(0, Math.random() * 160 + 60, Math.random() * 300);

    //allEnemies.push(enemy);

    // This listens for key presses and sends the keys to your
    // Player.handleInput() method. You don't need to modify this.
    document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    });
