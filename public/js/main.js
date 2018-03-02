var io = io();
var json;

var items = {
    c75za: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/c/cf/C75a_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "CZ75-Auto"},
    deagle: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400", name: "Desert Eagle"},
    elite: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/8/82/Elite_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Dual Berettas"},
    fiveseven: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/9/9c/Fiveseven_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Five-Seven"},
    glock: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/3/33/Glock18_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Glock-18"},
    p250: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/5/57/P250_hud.png/revision/latest/scale-to-width-down/400", name: "P250"},
    hkp2000: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/6/67/Hkp2000_hud.png/revision/latest/scale-to-width-down/400", name: "P2000"},
    tec9: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/5/55/Tec9_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Tec-9"},
    usp_silencer: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/7/73/Usps_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "USP-S"},
    mag7: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/2/2e/Mag7_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "MAG-7"},
    revolver: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400", name: "R8 Revolver"},
    nova: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/c/c8/Nova_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Nova"},
    sawedoff: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/9/94/Sawedoff_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Sawed-Off"},
    xm1014: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/a/ad/Xm1014_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "XM1014"},
    mac10: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/f/f7/Mac10_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "MAC-10"},
    mp7: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/8/8d/Mp7_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "MP7"},
    mp9: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/1/14/Mp9_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "MP9"},
    p90: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/b/bd/P90_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "P90"},
    bizon: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/d/d5/Bizon_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "PP-Bizon"},
    ump45: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/c/c4/Ump45_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "UMP-45"},
    ak47: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/7/76/Ak47_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "AK-47"},
    aug: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/6/6f/Aug_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "AUG"},
    famas: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/8/8f/Famas_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "FAMAS"},
    galilar: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/Galilar_hud.png/revision/latest/scale-to-width-down/400", name: "Galil AR"},
    m4a1_silencer: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/4/4f/M4a1s_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "M4A1-S"},
    m4a1: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/d/d9/M4a4_hud.png/revision/latest/scale-to-width-down/400", name: "M4A4"},
    sg556: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/9/9b/Sg556_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "SG 553"},
    awp: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/e/eb/Awp_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "AWP"},
    g3sg1: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/4/4a/G3sg1_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "G3SG1"},
    ssg08: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/3/3c/Ssg08_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "SSG 08"},
    scar20: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/c/c9/Scar20_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "SCAR-20"},
    m249: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/e/ea/M249_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "M249"},
    negev: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/b/be/Negev_hud.png/revision/latest/scale-to-width-down/400", name: "Negev"},

    c4: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/C4_ticking_source.png/revision/latest/scale-to-width-down/400", name: "C4"},
    hegrenade: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/6/60/Ammo_hegrenade_css.png/revision/latest/scale-to-width-down/400", name: "High Explosive Grenade"},
    molotov: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/f/fc/Molotov_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Molotov"},
    flashbang: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/a/af/Flashbang_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Flashbang"},
    decoy: {icon: "http://vignette1.wikia.nocookie.net/cswikia/images/7/78/Decoy_hud.png/revision/latest/scale-to-width-down/400", name: "Decoy Grenade"},
    smokegrenade: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/4/48/Smokegrenade_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Smoke Grenade"},
    incgrenade: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/4/45/Incgrenade_hud_csgo.png/revision/latest/scale-to-width-down/400", name: "Incendiary Grenade"},

    knife: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/4/4b/Knife_ct_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Knife"},
    knife_t: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/2/28/Knife_t_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Knife"},
    knife_bayonet: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/2/28/Csgo_knife_Bayonet.png/revision/latest/scale-to-width-down/400", name: "Bayonet"},
    knife_butterfly: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/d/df/Knife_butterfly_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Butterfly Knife"},
    knife_falchion: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/7/7e/Falchion_Knife_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Falchion Knife"},
    knife_flip: {icon: "http://vignette3.wikia.nocookie.net/cswikia/images/a/a4/Knife_flip_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Flip Knife"},
    knife_gut: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/f/ff/Knife_gut_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Gut Knife"},
    knife_tactical: {icon: "http://vignette2.wikia.nocookie.net/cswikia/images/5/53/Knife_hustman_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Huntsman"},
    knife_karambit: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/5/57/Knife_karambit_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Karambit"},
    knife_m9_bayonet: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/d/d3/Csgo_knife_M9_Bayonet.png/revision/latest/scale-to-width-down/400", name: "M9 Bayonet"},
    knife_shadow_dagger: {icon: "http://vignette4.wikia.nocookie.net/cswikia/images/f/f1/Knife_push_hud_outline_csgo.png/revision/latest/scale-to-width-down/400", name: "Shadow Daggers"}
}

var roundtime = 0;
var bombtime = 0;

io.on("update", function(status) {
    json = JSON.parse(status);
    if (typeof json.extra == "undefined") return;

    roundtime = json.extra.round.timestart;
    bombtime = json.extra.round.bomb.timestart;

	update(json);
});

var slotted = [];
var meth = {
	getPlayers: function(){
		if(this.info.allplayers){
			return this.info.allplayers
		}
		return false;
	},
	getCT: function(){
		var all_players = [];
		var ret = {
			players: []
		};
		if(this.info.map && this.info.map.team_ct){
			ret = $.extend({}, ret, this.info.map.team_ct);
		} else {
			return false;
		}
		for(var psid in this.getPlayers()){
			var curpl = this.getPlayers()[psid];
			if(curpl.team.toLowerCase() == "ct"){
				all_players.push(curpl);
			}
		}
		ret.players = all_players;
		return ret;
	},
	getT: function(){
		var all_players = [];
		var ret = {
			players: []
		};
		if(this.info.map && this.info.map.team_t){
			ret = $.extend({}, ret, this.info.map.team_t);
		}
		for(var psid in this.getPlayers()){
			var curpl = this.getPlayers()[psid];
			if(curpl.team.toLowerCase() == "t"){
				all_players.push(curpl);
			}
		}
		ret.players = all_players;
		return ret;
	},
	getTeam1: function() {
		var all_players = [];
		var ret = {
			players: []
		};
		if(this.info.map && this.info.map.team_t){
			ret = $.extend({}, ret, this.info.map.team_t);
		}
		for(var psid in this.getPlayers()){
			var curpl = this.getPlayers()[psid];
			if(curpl.observer_slot > 0 && curpl.observer_slot < 6){
				all_players.push(curpl);
			}
		}
		ret.players = all_players;
		return ret;
	},
	getTeam2: function() {
		var all_players = [];
		var ret = {
			players: []
		};
		if(this.info.map && this.info.map.team_t){
			ret = $.extend({}, ret, this.info.map.team_t);
		}
		for(var psid in this.getPlayers()){
			var curpl = this.getPlayers()[psid];
			if(curpl.observer_slot > 5){
				all_players.push(curpl);
			}
		}
		ret.players = all_players;
		return ret;
	},
	getObserved: function(){
		if(this.info.player.steamid != 1){
			var csid = this.info.player.steamid;
			var cur_player = this.getPlayers()[csid];
			if(cur_player){
				cur_player.steamid = csid;
				return cur_player;
			}
			//if(this.getPlayers()[csid]) return this.getPlayers()[csid];
			return false;
		}
		return this.info.player;
	},
	getPlayer: function(slot){
		slot = parseInt(slot);
		if(slot >= 0 && slot <= 10) return slotted[slot];
		return false;
	},
	phase: function(){
		if(this.info.phase_countdowns) return this.info.phase_countdowns;
		return false;
	},
	round: function(){
		if(this.info.round) return this.info.round;
		return false;
	},
	map: function(){
		if(this.info.map) return this.info.map;
		return false;
	},
	previously: function(){
		if(this.info.previously) return this.info.previously;
		return false;
	}
}
var integ = {
	info: {},
	extra: {}
};

function update(json) {
	integ.info = json;
	integ = $.extend({}, meth, integ);
	if(integ.getPlayers() !== false){
		for(var k in integ.getPlayers()){
			slotted[integ.getPlayers()[k].observer_slot] = integ.getPlayers()[k];
			integ.getPlayers()[k].getState = function(){
				return this.state;
			};
			integ.getPlayers()[k].getWeapons = function(){
				return this.weapons;
			};
			integ.getPlayers()[k].getCurrentWeapon = function(){
				var temp_weapons = this.getWeapons();
				if(temp_weapons !== false){
					for(var k in temp_weapons){
						if(temp_weapons[k].state == "active"){
							return temp_weapons[k];
						}
					}
				}
			};
			integ.getPlayers()[k].getGrenades = function(){
				var grenades = [];
				var temp_weapons = this.getWeapons();
				if(temp_weapons !== false){
					for(var k in temp_weapons){
						if(temp_weapons[k].type == "Grenade"){
							grenades.push(temp_weapons[k]);
						}
					}
					return grenades;
				}
			};
			integ.getPlayers()[k].getStats = function(){
				var temp_stats = $.extend({}, this.match_stats, this.state);
				return temp_stats;
			};
		}
	}
	updatePage(integ);
}

var guns = ['Rifle', 'Submachine Gun', 'SniperRifle', 'Pistol'];

function updatePage(data) {
	var observed = data.getObserved(); // Observed player's information

	if (observed) {
		$('#player-container').show();
		updateObserved(observed);
	} else {
		//This activates in freecam mode
		$('#player-container').hide();
	}
	
	//Timer
	var seconds = Math.floor(data.phase().phase_ends_in % 60);
	var minutes = Math.floor(data.phase().phase_ends_in / 60);
	$('#time_counter').html(minutes+':'+str_pad_left(seconds,'0',2));

	//Money object
	var money = {
		1: {
			bank : 0,
			equip : 0
		},
		2: {
			bank : 0,
			equip : 0
		}
	}

	var players = data.getPlayers();

	//Determine which team is on which side
	var team1 = 't';
	var team2 = 'ct';

	if (data.getPlayer(1).team == 'CT') {
		team1 = 'ct';
		team2 = 't';
	}

	//Set colours for health bars
	$('#team_1.' + team2).removeClass().addClass('team ' + team1);
	$('#team_2.' + team1).removeClass().addClass('team ' + team2);

	//Set colours for team name/score
	$('#team_1_header.' + team2).removeClass().addClass('team_info ' + team1);
	$('#team_2_header.' + team1).removeClass().addClass('team_info ' + team2);


	//Side menus for all players
	if(players){
		for (var steamid in players) {
			var player = players[steamid];
			var number = player.observer_slot;

			var weapons = player.getWeapons();
			var grenades = player.getGrenades();
			var stats = player.getStats();

			var elem = $('#player' + number);

			var team_num = (number > 0 && number < 6) ? 1 : 2;

			money[team_num].bank += stats.money;
			money[team_num].equip += stats.equip_value;

			elem.find('.bar_weapon > img').attr('src', '');
			updateHtmlIfChanged(stats.health, elem.find('.hp_el'));
			updateHtmlIfChanged(player.name, elem.find('.bar_username'));
			updateHtmlIfChanged(stats.kills, elem.find('.bottom_bar .kills'));
			updateHtmlIfChanged(stats.assists, elem.find('.bottom_bar .assists'));
			updateHtmlIfChanged(stats.deaths, elem.find('.bottom_bar .deaths'));
			updateHtmlIfChanged('$' + stats.money, elem.find('.moneys'));
		};
	}

	//Team names, score and money
	updateTeam(data.getTeam1(), money[1].bank, money[1].equip, 1);
	updateTeam(data.getTeam2(), money[2].bank, money[2].equip, 2);
}

function updateObserved(player) {
	var stats = player.getStats();
	var weapon = player.getCurrentWeapon();

	updateHtmlIfChanged(player.name, $('#current_nick'));
	updateHtmlIfChanged(stats.health, $('#health-text'));
	updateHtmlIfChanged(stats.armor, $('#armor-text'));

	var playerTeam = player.team.toLowerCase();
	var otherTeam;

	if (playerTeam == 't') { otherTeam = 'ct'};
	if (playerTeam == 'ct') { otherTeam = 't'};

	$('#second_row.' + otherTeam).removeClass().addClass(playerTeam);

	if (guns.indexOf(weapon.type) == -1) {
		$('#ammo').hide();
	} else {
		$('#ammo').show();
		updateHtmlIfChanged(weapon.ammo_clip.toString(), $('#clip-text'));
		updateHtmlIfChanged("\/" + weapon.ammo_reserve, $('#reserve-text'));
	}

	updateHtmlIfChanged(items[weapon.name.replace("weapon_", "")].name, $('#gun_name'));
	
	updateHtmlIfChanged(stats.kills.toString(), $('#kills_count'));
	updateHtmlIfChanged(stats.assists.toString(), $('#assist_count'));
	updateHtmlIfChanged(stats.deaths.toString(), $('#death_count'));
}

function updateTeam(info, bank, equip, team) {
	//score and name
	var header = $('#team_' + team + '_header');
	updateHtmlIfChanged(info.score, header.find('.team_score'));
	updateHtmlIfChanged(info.name, header.find('.team_name'));

	//money
	updateHtmlIfChanged("$" + bank, $('#team_money_' + team));
	updateHtmlIfChanged("$" + equip, $('#eq_money_' + team));
}

//This is used for the timer
function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

function updateHtmlIfChanged(needle, haystack) {
	if (haystack.html() != needle) { haystack.html(needle) };
}
