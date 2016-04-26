	function MoveLeft(wdo.obj)
	{
		wdo.object.position.x = wdo.object.position.x - 0.1;
	};
	
	function MoveRight(wdo.obj)
	{
		wdo.object.position.x = wdo.object.position.x +0.1;
	};

	function MoveUp(wdo.obj)
	{
		wdo.object.position.y = wdo.object.position.y + 0.1;
	};
	
	function MoveDown(wdo.obj)
	{
		wdo.object.position.y = wdo.object.position.y - 0.1;
	};

	function Scale(wdo.obj)
	{
		
		wdo.object.scale.x = wdo.object.scale.x + .02;
		wdo.object.scale.y = wdo.object.scale.y + .015;
		wdo.object.scale.z = 1;
			if (wdo.object.scale.x >= 8 )
				{
					wdo.object.scale.x = 8;
				}
			if (wdo.object.scale.y >= 6)
				{
					wdo.object.scale.y = 6;
				}
	};
	
	function Shrink(wdo.obj)
	{
		wdo.object.scale.x = wdo.object.scale.x - .02;
		wdo.object.scale.y = wdo.object.scale.y - .015;
		wdo.object.scale.z = 1;
			if (wdo.object.scale.x <= .4)
			{
				wdo.object.scale.x = .4;
			}
			if (wdo.object.scale.y <= .3)
			{
				wdo.object.scale.y = .3;
			}
	};
	
	function Minimize(wdo.obj)
	{
		wdo.object.position.x = 4;
		wdo.object.position.y = Math.random() * 3-1;
		wdo.object.position.z = -1;
		wdo.object.scale.x = 0.1;
		wdo.object.scale.y = 0.1;
		wdo.object.scale.z = 0.1;
				
	};

	function Restore(wdo.obj)
	{
		if (wdo.object.position.x == 4 && wdo.object.scale.x == 0.1 && wdo.object.scale.y == 0.1 && wdo.object.scale.z == 0.1)
			{
				wdo.object.position.y = 0;
				wdo.object.scale.x = 1;
				wdo.object.scale.y = .75;
				wdo.object.scale.z = 1;
				wdo.object.position.x = Math.random()* 20-1;
			}

	};
	
	function MoveCloser(wdo.obj)
	{
		wdo.object.position.z = wdo.object.position.z + 0.5;
	};
	
	function MoveFurther(wdo.obj)
	{
		wdo.object.position.z = wdo.object.position.z - 0.5;
	};

		this.gestureserver = io();
        this.gestureserver.on('gesture', function(gestureNum){	
        console.log(gestureNum);
        


