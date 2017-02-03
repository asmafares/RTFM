const hints =	{
	"runEmergencyLandingMode" : 
		["Hm... how do I run a program, again? I better check the manual.",
		 "I should be able to find the run command on the List of Commands page of the manual.", 
		 "Oh, I remember! It's \"exc emergency_landing_mode\"."],
	"runBackup" : 
		["It looks like I might be the wrong directory.",
		 "Hmm... I wonder if I can find anything useful in the Index.",
		  "Okay, according to the Index, it looks like there are three directories. I wonder which one contains the backups?",
		  "A Table of Contents is sort of like a directory, right? Let's try looking there for a hint.",
		  "Backups is listed as a chapter of the Toolkits section in the Table of Contents.",
		  "Okay, so how do I get out of here? If I remember correctly, there were some navigation commands in the List of Commands page...",
		  "I've got it! \"u\", then \"e toolkit\" then \"exc emergency_landing_mode_backup\""],
	"modePIN" :
		["This looks like it's going to be harder. Is there any reference to a PIN anywhere in the manual?",
		"The second footnote of chapter two mentions a PIN! I can't really look up scholarly articles right now, though...",
		"I've figured it out! The References section lists a paper by Vido Gaem. I hope typing in 2030 works..."],
	"SSS":
		["Let's see if I can find any references to velocity in the manual.",
		"The first footnote of chapter two references a file that contains the velocity! Now, what's it called...",
		"The footnote says to check chapter 4.3, p1049. Gah, if only I had the full manual! What can I even do with that information!",
		"The index has an entry for page 1049! Let's hope it's the file! But first, I'll have to exit the backup...",
		"Let's check the Command List again.",
		"Hm... which directory is it likely to be in? I wonder if Chapter 4.3 contains any hints...",
		"It's in the data directory!"],


};
export default hints;