// declare wheelnav
	var wheelDiv = new wheelnav('wheelDiv');
	wheelDiv.clockwise = false;
	wheelDiv.wheelRadius = wheelDiv.wheelRadius * 0.83;
	wheelDiv.createWheel();



	wheelDiv.navItems.forEach(function (item, i) {
		var slice = item.navSlice;

		var switchCocktail = function (cocktailId) {
			$('#wheelnav-wheelDiv-title-0').attr('href','./images/Glass.png');
			$('#wheelnav-wheelDiv-title-' + cocktailId).attr('href','./images/FullGlass.png');
			showCocktail(cocktailId);
		};

		slice.mouseup(function () {
			switchCocktail(i);
		});

		$(document).on('mouseup', '#wheelnav-wheelDiv-title-' + i, function () {
			switchCocktail(i);
		});
	});
