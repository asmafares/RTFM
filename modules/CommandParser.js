
import hints from './Hints'

/*

All game logic occurs here.

*/

var commandtokens = "";
var environment = {directory: "MODES", program: null, currentStep : 'runEmergencyLandingMode' /*used to find hints*/, isBackupInstalled: false, gaveModePin: false}
var hintlevel = -1;
var endgame = false;
var directoryList = ["MODES", "TOOLKIT", "DATA"];

/*
* Checks if player has requested help, performed an operation while currently in a program,
* or performed an operation while currently in a directory and responds accordingly
*/
//TODO: add something like "not available in manual mode" for stuff people might reasonably expect
function CommandParser(command){
	console.log(command + " " + environment.directory);
	 commandtokens = command.toUpperCase().split(" ");
	if(commandtokens[0] == "HELP"){
		if(hints[environment.currentStep].length - 1 > hintlevel){
			hintlevel++;
		}	
		return hints[environment.currentStep][hintlevel];
	}
	else if(environment.program){
		return ParseLandingMode(command);
	}
	else{
		return ParseDirectory(command);
	}
}

/*
* Contains implementations of the 4 main commands and command-specific error messages
*I think this could be made cleaner... but, it works for now. :)
*/
function ParseDirectory(command){
	if(commandtokens[0] == "EXT"){
		return "YOU ARE NOT CURRENTLY IN A PROGRAM."
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


/*
* Contains most of the logic of the three implemented programs. Most of the shared functionality of EMERGENCY_LANDING_MODE and EMERGENCY_LANDING_MODE_BACKUP is handled separately below.
* The rest I decided was too low of a priority to sort out at this point.
*/
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
			environment.currentStep = "runBackup";
			environment.program = null;
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
		if(environment.isBackupInstalled && !environment.gaveModePin){
			return ["EMERGENCY_LANDING_MODE ACTIVATED.", "PLEASE ENTER MODE PIN TO CONTINUE."];
		}
		else if(environment.isBackupInstalled && environment.gaveModePin){
			return  ["EMERGENCY_LANDING_MODE INITIALIZED. PLEASE INPUT CURRENT VELOCITY."];
		}
		else{
			environment.isBackupInstalled = true;
			environment.currentStep = "modePIN";
			return "EMERGENCY_LANDING_MODE ACTIVATED.", "PLEASE ENTER MODE PIN TO CONTINUE.";
		}
	},
}

/*
* Handles remaining emergency_landing_mode logic
*/
function ParseLandingMode(command){
	if(commandtokens[0] == "EXT"){
		environment.program = null;
		return ["CURRENT DIRECTORY: " + environment.directory];
	}
	else if(environment.gaveModePin == false){
		if(commandtokens[0] == 2030){
			environment.currentStep = "SSS"
			environment.gaveModePin = true;
			return ["EMERGENCY_LANDING_MODE INITIALIZED. PLEASE INPUT CURRENT VELOCITY."];
		}
		else{
			return ["INCORRECT PIN. PLEASE TRY AGAIN."];
		}
	}
	else{
		if(commandtokens[0] == "70"){
			endgame = true;
			return 	["EMERGENCY LANDING WILL NOW COMMENCE IN",
		        	"3",
        			"2",
        			"1",
        			"..............",
        			"..............",
        			".............."];
        			//TODO: jump to ending
        		}
        else
        	return ["UNEXPECTED VELOCITY DENIED. PLEASE TRY AGAIN."]
	}
}

export{CommandParser, endgame};