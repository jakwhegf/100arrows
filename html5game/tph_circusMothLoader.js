
var logo = new Image();
logo.src = "html5game/logo.png";

function circusMothLoader(_graphics, _width, _height, _total, _current, _loadingscreen) {
  //If we have a loading screen, draw that instead of the loading bar
  if (_loadingscreen) {
    _graphics.drawImage(_loadingscreen, 0, 0, _width, _height);
  }

  else {
    //Parameters
    var barwidth = (_width/100)*50;
    var barheight = 40;
    var x = (_width-barwidth)/2;
    var y = 10+(_height-barheight)/2;
    var w = (barwidth/_total)*_current;
	var border = 3;

    //Clear screen
    _graphics.fillStyle = "rgba(0,0,0,255)";
    _graphics.fillRect(0, 0, _width, _height);

    //Logo
    _graphics.drawImage(logo, (_width-logo.width)/2, y-10-logo.height);

    //Only draw the bar once something has loaded in
    if (_current != 0) {
      // Draw the dark gray bar
      _graphics.fillStyle = "rgba(255,255,255,255)";
      _graphics.fillRect(x-border, y-border, barwidth+(2*border), barheight+(2*border));
	_graphics.fillStyle = "rgba(0,0,0,255)";
      _graphics.fillRect(x, y, barwidth, barheight);


      // Now draw the loaded files bar over the top.
      _graphics.fillStyle = "rgba(178,0,0,255)";
      _graphics.fillRect(x+border, y+border, w-border-border, barheight-border-border);
    }
  }
}

function decenterWindow() {
var gameDiv = document.getElementById('gm4html5_div_id');
gameDiv.style.position = "static";
gameDiv.style.marginLeft = "0";
gameDiv.style.marginTop = "0";
gameDiv.style.left = "0";
gameDiv.style.top = "0";
}

function scrollToZero() {
window.scrollTo(0,0);
}