
import hints from './Hints'

/*

All game logic occurs here. CommandParser returns an array of strings, which Play.js will display.

*/var commandtokens = "";
var environment = {directory: "ROOT", program: '' /*is none when no program running*/, currentStep : 'runEmergencyLandingMode' /*used to find hints*/, isBackupInstalled: false, gaveModePin: false /*everything else is just going to be specific variables, like whether or not backup has been installed, or not.*/};
var directoryList = ["TOOLKIT", "MODES", "DATA"];
var programList ={
	"STANDARD_SPACESHIP_STATISTICS" : function(){
		if(environment.directory != "DATA"){
			environment.program = null;
			return "STANDARD_SPACESHIP_STATISTICS IS NOT A PROGRAM IN THIS DIRECTORY";
		}
		environment.program = null;
		return ["STANDARD SPACESHIP STATISTICS",
            "CURRENT STATUS: FREE FALL",
            "CURRENT POWER LEVEL: VERY LOW",
            "VELOCITY: 70 LYMP",
            "OXYGEN LEVELS, WITHIN SPACESHIP: MEDIUM",
            "OXYGEN LEVELS, OUTSIDE SPACESHIP: NONEXISTENT",
            "CURRENT LIKELIHOOD OF SURVIVAL: EXTREMELY LOW"
            ];
	},
	"EMERGENCY_LANDING_MODE" : function(){
		if(environment.directory != "MODES"){
			environment.program = null;
			return "EMERGENCY_LANDING_MODE IS NOT A PROGRAM IN THIS DIRECTORY";
		}

		if(environment.isBackupInstalled && !environment.gaveModePin){
			return ["EMERGENCY_LANDING_MODE ACTIVATED.", "PLEASE ENTER MODE PIN TO CONTINUE."];
		}
		else if(environment.isBackupInstalled && environment.gaveModePin){
			return  ["EMERGENCY_LANDING_MODE INITIALIZED. PLEASE INPUT CURRENT VELOCITY."];
		}
		else{
			return ["EMERGENCY LANDING MODE ACTIVATED.",
            "CORRUPTED COMPONENT DETECTED.",
            "PLEASE RUN EMERGENCY_LANDING_MODE_BACKUP AND TRY AGAIN."];
		}
	},
	"EMERGENCY_LANDING_MODE_BACKUP" : function(){
		if(environment.directory != "TOOLKIT"){
			environment.program = null;
			return "EMERGENCY_LANDING_MODE_BACKUP IS NOT A PROGRAM IN THIS DIRECTORY";
		}
		if(environment.isBackupInstalled){
			return ["EMERGENCY_LANDING_MODE ACTIVATED.", "PLEASE ENTER MODE PIN TO CONTINUE."];
		}
		else if(environment.isBackupInstalled && environment.gaveModePin){
			return  ["EMERGENCY_LANDING_MODE INITIALIZED. PLEASE INPUT CURRENT VELOCITY."];
		}
		else{
			environment.isBackupInstalled = true;
			return "EMERGENCY_LANDING_MODE ACTIVATED.", "PLEASE ENTER MODE PIN TO CONTINUE.";
		}
	},
}

var hintlevel = -1;

//TODO: add something like "not available in manual mode" for stuff people might reasonably expect
export default function CommandParser(command){
	 commandtokens = command.toUpperCase().split(" ");
	 //TODO: test hint system
	if(command == "HELP"){
		if(hints[environment.currentStep].length - 1 > hintlevel){
			hintlevel++;
		}	
		return hints[environment.currentStep][hintlevel];
	}
	else if(environment.program){
		return programList[environment.program];
	}
	else{
		return ParseDirectory(command);
	}
}
//I think this could be made cleaner... but, it works for now. :)
function ParseDirectory(command){
	if(commandtokens[0] == "EXT"){
		return "You are not currently in a program."
	}
	else if(commandtokens[0] == "EXC"){
		if(programList[commandtokens[1]]){
			environment.program = commandtokens[1];
			return (programList[commandtokens[1]])();
		}
		else if (commandtokens[1]){
				return commandtokens[1] + " IS NOT A PROGRAM IN THIS DIRECTORY."
			}
		else{
			return "NO PROGRAM SPECIFIED."
		}
	}
	else if(commandtokens[0] == "U"){
		if(environment.directory == "ROOT"){
			return "YOU ARE ALREADY IN ROOT";
		}
		else{
			environment.directory = "ROOT";
			return "CURRENT DIRECTORY: ROOT";
		}
	}
	else if(commandtokens[0] == "E"){
		if(environment.directory == "ROOT" && directoryList.includes(commandtokens[1])){
			environment.directory = commandtokens[1];
			return "CURRENT DIRECTORY: ROOT->" + commandtokens[1];
		}
		else if(environment.directory == commandtokens[1]){
			return "YOU ARE ALREADY IN " + environment.directory + "!";
		}
		else if (commandtokens[1]){
			return commandtokens[1] + " IS NOT A DIRECTORY IN THIS DIRECTORY"
		}
		else{
			return "NO DIRECTORY SPECIFIED."
		}
	}
	else{
		return commandtokens[0] + " IS NOT A VALID COMMAND."
	}
}



function ParseLandingMode(command){
	if(commandtokens[0] == "EXT"){
		environment.program = null;
		return ["Current Directory: " + environment.directory];
	}
	else if(gaveModePin == false){
		if(commandtokens[0] == 2030){
			gaveModePin = true;
			return ["EMERGENCY_LANDING_MODE INITIALIZED. PLEASE INPUT CURRENT VELOCITY."];
		}
		else{
			return ["INCORRECT PIN. PLEASE TRY AGAIN."];
		}
	}
	else{
		if(commandtokens[0] == "70")
			return 	["EMERGENCY LANDING WILL NOW COMMENCE IN",
		        	"3",
        			"2",
        			"1",
        			"..............",
        			"..............",
        			".............."];
        			//TODO: jump to ending
        else
        	return ["UNEXPECTED VELOCITY DENIED. PLEASE TRY AGAIN."]
	}
}
