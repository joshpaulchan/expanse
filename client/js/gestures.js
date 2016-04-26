	function MoveLeft(wdo)
	{
		wdo.position.x = wdo.position.x - 0.1;
	};
	
	function MoveRight(wdo)
	{
		wdo.position.x = wdo.position.x +0.1;
	};

	function MoveUp(wdo)
	{
		wdo.position.y = wdo.position.y + 0.1;
	};
	
	function MoveDown(wdo)
	{
		wdo.position.y = wdo.position.y - 0.1;
	};

	function Scale(wdo)
	{
		
		wdo.scale.x = wdo.scale.x + .02;
		wdo.scale.y = wdo.scale.y + .015;
		wdo.scale.z = 1;
			if (wdo.scale.x >= 8 )
				{
					wdo.scale.x = 8;
				}
			if (wdo.scale.y >= 6)
				{
					wdo.scale.y = 6;
				}
	};
	
	function Shrink(wdo)
	{
		wdo.scale.x = wdo.scale.x - .02;
		wdo.scale.y = wdo.scale.y - .015;
		wdo.scale.z = 1;
			if (wdo.scale.x <= .4)
			{
				wdo.scale.x = .4;
			}
			if (wdo.scale.y <= .3)
			{
				wdo.scale.y = .3;
			}
	};
	
	function Minimize(wdo)
	{
		wdo.position.x = 4;
		wdo.position.y = Math.random() * 3-1;
		wdo.position.z = -1;
		wdo.scale.x = 0.1;
		wdo.scale.y = 0.1;
		wdo.scale.z = 0.1;
				
	};

	function Restore(wdo)
	{
		if (wdo.position.x == 4 && wdo.scale.x == 0.1 && wdo.scale.y == 0.1 && wdo.scale.z == 0.1)
			{
				wdo.position.y = 0;
				wdo.scale.x = 1;
				wdo.scale.y = .75;
				wdo.scale.z = 1;
				wdo.position.x = Math.random()* 20-1;
			}

	};
	
	function MoveCloser(wdo)
	{
		wdo.position.z = wdo.position.z + 0.5;
	};
	
	function MoveFurther(wdo)
	{
		wdo.position.z = wdo.position.z - 0.5;
	};
