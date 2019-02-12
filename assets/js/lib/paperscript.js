var keyData = {
	a: {
		color: "red",
		sound: new Howl({
		src: [".sounds/bubbles.mp3"]
	})

},
	b: {
		color: "pink",
		sound: new Howl({
		src: ["sounds/clay.mp3"]
	})

},
	c: {
		color: "steelblue",
		sound: new Howl({
		src: ["sounds/confetti.mp3"]
	})

},
	d: {
		color: "gray",
		sound: new Howl({
		src: ["sounds/corona.mp3"]
	})

},
	e: {
		color: "white",
		sound: new Howl({
		src: ["sounds/dotted-spiral.mp3"]
	})

},
	f: {
		color: "orange",
		sound: new Howl({
		src: ["sounds/flash-1.mp3"]
	})

},
	g: {
		color: "teal",
		sound: new Howl({
		src: ["sounds/flash-2.mp3"]
	})

},
	h: {
		color: "purple",
		sound: new Howl({
		src: ["sounds/flash-3.mp3"]
	})

},
	i: {
		color: "brown",
		sound: new Howl({
		src: ["sounds/glimmer.mp3"]
	})

},
	j: {
		color: "green",
		sound: new Howl({
		src: ["sounds/moon.mp3"]
	})

},
	k: {
		color: "violet",
		sound: new Howl({
		src: ["sounds/pinwheel.mp3"]
	})

},
	l: {
		color: "blue",
		sound: new Howl({
		src: ["sounds/piston-1.mp3"]
	})

},
	m: {
		color: "green",
		sound: new Howl({
		src: ["sounds/piston-2.mp3"]
	})

},
	n: {
		color: "white",
		sound: new Howl({
		src: ["sounds/piston-3.mp3"]
	})

},
	o: {
		color: "teal",
		sound: new Howl({
		src: ["sounds/prism-1.mp3"]
	})

},
	p: {
		color: "pink",
		sound: new Howl({
		src: ["sounds/prism-2.mp3"]
	})

},
	q: {
		color: "red",
		sound: new Howl({
		src: ["sounds/prism-3.mp3"]
	})

},
	r: {
		color: "red",
		sound: new Howl({
		src: ["sounds/bubbles.mp3"]
	})

},
	s: {
		color: "teal",
		sound: new Howl({
		src: ["sounds/bubbles.mp3"]
	})

},
	t: {
		color: "red",
		sound: new Howl({
		src: ["sounds/saved.mp3"]
	})

},
	u: {
		color: "red",
		sound: new Howl({
		src: ["sounds/suspension.mp3"]
	})

},
	v: {
		color: "red",
		sound: new Howl({
		src: ["sounds/timer.mp3"]
	})

},
	w: {
		color: "red",
		sound: new Howl({
		src: ["sounds/ufo.mp3"]
	})

},
	x: {
		color: "red",
		sound: new Howl({
		src: ["sounds/veil.mp3"]
	})

},

	y: {
		color: "blue",
		sound: new Howl({
		src: ["sounds/wipe.mp3"]
		})
},
	z: 	{
		color: "yellow",
		sound: new Howl({
		src: ["sounds/zig-zag.mp3"]
		})
	}
}

	var circles = [];

function onKeyDown(event) {
	if(keyData[event.key]) {
		var maxpoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxpoint * randomPoint;
		var newCircle = new Path.Circle(point, 500)
		newCircle.fillColor = keyData[event.key].color;
		keyData[event.key].sound.play();
		circles.push(newCircle);
	}
}

function onFrame(event){
  for(var i = 0; i < circles.length; i++){
    circles[i].scale(0.9);
    circles[i].fillColor.hue += 1;
    if(circles[i].area < 1){
      circles[i].remove();
      circles.splice(i, 1);
      i--;
    }
  }
}