
import hints from './Hints'

/*

All game logic occurs here. CommandParser returns an array of strings, which Play.js will display.

*/

var environment = {directory: '', program: '' /*is none when no program running*/, currentStep : 'runEmergencyLandingMode' /*used to find hints*/, /*everything else is just going to be specific variables, like whether or not backup has been installed, or not.*/};

var hintlevel = -1;

//TODO: split the command into tokens and convert to upper case here
export default function CommandParser(command){
	if(command == "help"){
		console.log(hints[environment.currentStep].length);
		console.log(hintlevel-2);
		if(hints[environment.currentStep].length - 1 > hintlevel){
		console.log("DID I GET HERE2?");
			hintlevel++;
		}	
		console.log("DID I GET HERE?3");
		return hints[environment.currentStep][hintlevel];
	}
	else{
		//TODO: call the appropriate parsefunctions
		return ParseDirectory(command);
	}
}



function ParseProgram(command){
	var commandtokens = command.toUpperCase().split(" ");
	if(commandtokens[0] == "ext"){
		environment.program = 'none';
		return "Current Directory:" + environment.directory;
	}
}

//This is quick and dirty.

//TODO: reorganize this so it isn't a mess of if statements

function ParseDirectory(command){
	var commandtokens = command.toUpperCase().split(" ");
	if(commandtokens[0] == "EXT"){
		return "You are not currently in a program."
	}
	else if(commandtokens[0] == "EXC"){
	/*	if(programList.commandtokens[1]){
			environment.location = commandtokens[1];
		}
		else */
			if (commandtokens[1]){
			return commandtokens[1] + " is not a program."
		}
		else{
			return "No program specified."
		}
	}
	else if(commandtokens[0] == "E"){
	/*	if(programList.commandtokens[1]){
			environment.location = commandtokens[1];
		}
		else */
			if (commandtokens[1]){
			return commandtokens[1] + " is not a directory."
		}
		else{
			return "No directory specified."
		}
	}
	//TODO: add all other possible commands
	else{
		return commandtokens[0] + " is not a valid command."
	}
}
