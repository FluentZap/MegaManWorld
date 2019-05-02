$(function () {
	$('#feed').click(function () {
		$.post("/commandpet",
		{
			command: "feed",
		}, function () {
			$("#stats").load("/updatepet");
		});
	});
	//$("#shopList").

  setInterval(function(){
    $("#stats").load("/updatepet");
  }, 100);
});


$(function () {

	PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
	var Container = PIXI.Container,
		autoDetectRenderer = PIXI.autoDetectRenderer,
		loader = PIXI.loader,
		resources = PIXI.loader.resources,
		Sprite = PIXI.Sprite,
		maxFrame = 2,
		af = 0,
		df = 100; // images per seconds

	//Create the renderer
	var renderer = autoDetectRenderer(256, 256, { transparent: true});
	
	//Add the canvas to the HTML document
	document.body.appendChild(renderer.view);

	//Create a container object called the `stage`
	var stage = new Container();

	//Tell the `renderer` to `render` the `stage`
	renderer.render(stage);

	renderer.view.style.position = "absolute";
	renderer.view.style.display = "block";
	renderer.autoResize = true;
	renderer.resize(window.innerWidth, window.innerHeight);
	
	//renderer.resize(256, 256);
	loader.add("megaman", "../img/chill12x3.png").load(setup);
	
	var megaman;
	var run = [];
	var megamanTexture;

	function setup() {
		megamanTexture = loader.resources["megaman"].texture;
		run.push(new PIXI.Rectangle(0, 0, 82, 82),
			new PIXI.Rectangle(82 * 1, 0, 82, 82));			
		megamanTexture.frame = run[0];
		megaman = new Sprite(megamanTexture);
		megaman.x = 0;
		megaman.y = 0;
		megaman.scale.x = 3.0;
		megaman.scale.y = 3.0;
		stage.addChild(megaman);
		renderer.render(stage);
	}

	function gameLoop() {
		var f = requestAnimationFrame(gameLoop);
		if (af >= maxFrame) {
			af = 0;
		} else {
			af += 1 / df;
		}
		megamanTexture.frame = run[Math.floor(af)];
		stage.removeChild(megaman);
		megaman = new Sprite(megamanTexture);
		megaman.scale.x = 3.0;
		megaman.scale.y = 3.0;
		megaman.x = 10;
		megaman.y = 10;
		stage.addChild(megaman);
		renderer.render(stage);
	}



	//Start the game loop
	gameLoop();
});