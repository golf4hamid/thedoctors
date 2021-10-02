
// I Stopped at Filling win array with indexes of the winning 
// Teams And I Got the Total Kill points and Placement Points 
// for each team
var tntp = []; // Result of teamKP are teamPP
// var tn  = document.getElementsByClassName('teamName');
// var kpe = document.getElementsByClassName('teamKP');
// var ppe = document.getElementsByClassName('teamPP');
// var tpe = document.getElementsByClassName('teamTP');

// var teamName = ["Team1", "Team2", "Team3", "Team4",
// 				"Team5", "Team6", "Team7", "Team8",
// 				"Team9", "Team10", "Team11", "Team12",
// 				"Team13", "Team14", "Team15", "Team16",
// 				"Team17", "Team18"];

// var teamkp = ["Team1", "Team2", "Team3", "Team4",
// 				"Team5", "Team6", "Team7", "Team8",
// 				"Team9", "Team10", "Team11", "Team12",
// 				"Team13", "Team14", "Team15", "Team16",
// 				"Team17", "Team18"];

// var teampp = ["Team1", "Team2", "Team3", "Team4",
// 				"Team5", "Team6", "Team7", "Team8",
// 				"Team9", "Team10", "Team11", "Team12",
// 				"Team13", "Team14", "Team15", "Team16",
// 				"Team17", "Team18"];

function result() {
	// Teams Names Array
	var tn    = document.getElementsByClassName('teamName');
	var teams = [];
	// Teams First Map Stats Array
	var m1k  = document.getElementsByClassName('m1k');
	var m1p  = document.getElementsByClassName('m1p');

	// Teams Second Map Stats Array
	var m2k  = document.getElementsByClassName('m2k');
	var m2p  = document.getElementsByClassName('m2p');
	// Teams Second Map Stats Array
	var m3k  = document.getElementsByClassName('m3k');
	var m3p  = document.getElementsByClassName('m3p');

	// Kill and Placement Stats for All Teams
	var kstats = [];
	var pstats = [];

	var results = [];
	// Set Teams that won the map (3 Teams)
	var win = [];
	var totalp = [];
	for (var i = 0; i < tn.length; i++) {
		teams[i] = tn[i].value;
		var Kills = 0;
		var placePoints = [];

		kills = parseInt(m1k[i].value);
		kills += parseInt(m2k[i].value);
		kills += parseInt(m3k[i].value);
		var place =[];

		place.push(m1p[i].value); //[m1p[i].value, m2p[i].value, m3p[i].value];
		place.push(m2p[i].value);
		place.push(m3p[i].value);

		kstats[i] = kills;
		//pstats.push(placePoints);

		placePoints = 0;
		for (var e = 0; e < 3; e++) {
		  	switch (parseInt(place[e])) {
			  case 1:
			    win.push(i);
			  	placePoints += 15;
			    break;
			  case 2:
			    placePoints += 12;
			    break;
			   case 3:
			    placePoints += 10;
			    break;
			   case 4:
			    placePoints += 8;
			    break;
			   case 5:
			    placePoints += 6;
			    break;
			   case 6:
			    placePoints += 4;
			    break;
			   case 7:
			    placePoints += 2;
			    break;
			   case 8:
			    placePoints += 1;
			    break;
			   case 9:
			    placePoints += 1;
			    break;
			   case 10:
			    placePoints += 1;
			    break;
			   case 11:
			    placePoints += 1;
			    break;
			   case 12:
			    placePoints += 1;
			    break;
			   default:
			    placePoints += 0;
			} // End of SWITCH Statement
		} // End of FOR e Loop
		pstats[i] = placePoints;

		totalp[i] = kills + placePoints;
	// Placement Stats for All Teams
	} // End of FOR i Loop 

	for (var c = 0; c < tn.length; c++) {
		results[c] = {name: teams[c], kp: kstats[c], pp: pstats[c], tp: totalp[c], win: 0};
		// [teams[c], kstats[c], pstats[c], totalp[c], 0];

	}
	for(var d = 0; d < win.length; d++){
		results[win[d]].win += 1;
	}

	results.sort(function (x, y) {
    	return y.tp - x.tp;
	});
	//  Create a Loop to put Data from results into the HTML Table
	// Element
	for(var s = 0; s < results.length; s++){
		// Put Team Name
		document.getElementsByClassName('tteam')[s].innerHTML = results[s].name
		// Put Team Win
		document.getElementsByClassName('twwcd')[s].innerHTML = results[s].win;
		// Put Team Kill Points
		document.getElementsByClassName('tkp')[s].innerHTML = results[s].kp;
		// Put Team Placement Points
		document.getElementsByClassName('tpp')[s].innerHTML = results[s].pp;
		// Put Total Points
		document.getElementsByClassName('ttp')[s].innerHTML = results[s].tp;
	}
	document.getElementsByClassName('rtable')[0].style.display = 'block';
	document.getElementsByClassName('datat')[0].style.display = 'none';
}











