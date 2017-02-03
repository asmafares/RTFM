
/*

All game logic occurs here. CommandParser returns an array of strings, which Play.js will display.

*/

var environment = {location: '' /*may be a directory or a program*/, currentStep : '' /*used to find hints*/, /*everything else is just going to be specific variables, like whether or not backup has been installed, or not.*/};

//TODO: move Hints to a separate file
var hints = {
	"runEmergencyLandingMode" : ["Hm... how do I run a program, again? I better check the manual.", "I should be able to find the run command on the List of Commands page of the manual."],
	"runBackup" : ["Hint1", "Hint2"]
	};

var hintlevel = 0;

export default function CommandParser(command){
	if(command == "help"){
		//TODO: return an appropriate hint
		return "called help";
	}
	else{
		//TODO: call the appropriate parsefunctions
		return "you gave something else as input. Yay you.";
	}
}



function ParseProgram(command){
	//TODO
}

//This is quick and dirty.

//TODO: make it so that directories start with something like directoryToolkit so you only have 1 field but can still determine if something STARTS with directory
//TODO: reorganize this so it isn't a mess of if statements
/*
function ParseDirectory(command){
	var commandtokens = command.toUpperCase.split(" ");
	if(commandtokens[0] == "ext"){
		return "You are not currently in a program."
	}
	else if(commandtokens[0] == "e"){
		if(programList.commandtokens[1]){
			environment.location = commandtokens[1];
		}
		else if (commandtokens[1]{
			return commandtokens[1] + " is not a program."
		}
		else{
			return "No program specified."
		}
	}
	//TODO: add all other possible commands
	else{
		return commandtoken[0] + "is not a valid command."
	}
}
*/