var config_data = `
{
  "title":"1807 Scouting App",
  "page_title":"Charged Up",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2024all",
        "required":"true",
        "disabled":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "auton": {	
	  "Crosses Community": {
        "code":"pitCBox1",
        "title": "Crossed Community",
        "type":"bool" 
      },
      "Notes Scored Speaker": {
        "code":"pitNum1",
        "title": "Notes Scored Speaker",
        "type":"counter"
      },
      "Notes Scored Amp": {
        "code":"pitNum2",
        "title": "Notes Scored Amp",
        "type":"counter"
      },
      "Other Notes Displaced": {
        "code":"pitNum3",
        "title": "Other Notes Displaced",
        "type":"counter"
      },
	   "Extra Auto Notes (opt.)": {
        "code":"pitStr1",
        "title": "Auto Notes",
        "type":"text"
      },
    "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2023/field_image.png"
      },
      "": {
        "code":"pitRadio7",
        "title": "Auto Start",
        "type":"radio",
        "choices":{
          "1":"1 (Red)<br>",
          "2":"2 (Green)<br>",
		  "3":"3 (Purple)<br>",
          "4":"4 (Blue)"
        }
	  },
      "Auto Reliability (1-3)(1 = worst)": {
        "code":"pitRadio6",
        "title": "Auto Reliability",
        "type":"radio",
        "choices":{
          "1":"1",
          "2":"2",
		  "3":"3"
        }
	  }	  
    },
    "teleop": {
     "Where do they collect": {
        "code":"pitRadio1",
        "title": "Where do they collect",
        "type":"radio",
        "choices":{
          "1":"Ground<br>",
          "2":"Source<br>",
		  "3":"Both<br>",
          "x":"None"
        },
        "defaultValue":"x"
      },
	  "How do they collect": {
        "code":"pitStr3",
        "title": "How do they collect",
        "type":"text"
      },
	  "Score Speaker": {
        "code":"pitCBox2",
        "title": "Score Speaker",
        "type":"bool" 
      },
	  "Score Amp": {
        "code":"pitCBox3",
        "title": "Score Amp",
        "type":"bool" 
      },
	  "Score Trap": {
        "code":"pitCBox4",
        "title": "Score Trap",
        "type":"bool" 
      },
	  "Climbing Ability": {
		  "code":"pitRadio2",
		  "title": "Climbing Capability",
		  "type":"radio",
		  "choices":{
			  "1":"Park<br>",
			  "2":"On Stage<br>",
			  "3":"Harmony<br>",
			  "4":"None"
		  }
	  },
      "Average Cycles each Match": {
        "code":"pitNum4",
        "title": "Average Cycles",
        "type":"counter"
	  },
      "Average Amplification Periods": {
        "code":"pitNum5",
        "title": "Average Amplifications",
        "type":"counter"
	  },
	  "Human Player": {
		  "code":"pitRadio3",
		  "title": "Primary Human Player Role",
		  "type":"radio",
		  "choices":{
			  "1":"Source<br>",
			  "2":"Amp"
		  }		  
	  }
	  
    },
    "endgame": {
      "Ground Speed (ft/s)": {
        "code":"pitStr5",
        "title": "Ground Speed (ft/s)",
        "type":"text"
      },
	   "Chassis Type": {
        "code":"pitRadio4",
        "title": "Chassis Type",
        "type":"radio",
        "choices":{
          "n":"Swerve<br>",
          "a":"Tank<br>",
          "x":"Other"
        },
        "defaultValue":"x"
      },
	   "Shortest Chassis Width (Including Bumper)(in)": {
        "code":"pitStr6",
        "title": "Shortest Chassis Width (in)",
        "type":"text"
      }
	  
    },
    "postmatch": {
       "Collection Method": {
        "code":"pitRadio5",
        "title": "Over or Under Bumper Collection",
        "type":"radio",
        "choices":{
          "1":"Over<br>",
          "2":"Under<br>",
          "x":"None"
        },
        "defaultValue":"x"
      },
	   "Extra Notes": {
        "code":"pitStr8",
        "title": "Notes",
        "type":"text"
	  }
    }
  }
}`;
