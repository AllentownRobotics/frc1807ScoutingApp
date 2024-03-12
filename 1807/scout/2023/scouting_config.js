var config_data = `
{
  "title":"1807 Scouting App",
  "page_title":"Crescendo",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
	  "Tablet":{
		  "code":"prematchStr1",
		  "type":"text",
		  "defaultValue":"4",
		  "disabled":"true"
	  },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2024njski",
        "required":"true",
        "disabled":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
	  },
    "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2023/field_image.png"
      },
      "": {
        "code":"prematchRadio1",
        "title": "Auto Start",
        "type":"radio",
        "choices":{
          "1":"1 (Red)<br>",
          "2":"2 (Green)<br>",
		  "3":"3 (Purple)<br>",
          "4":"4 (Blue)"
        },
        "defaultValue":"4"
	  }
    },
    "auton": {
      "Notes Scored Speaker": {
        "code":"autoNum1",
        "title": "Notes Scored Speaker",
        "type":"counter"
      },

      "Notes Scored Amp": {
        "code":"autoNum3",
        "title": "Notes Scored Amp",
        "type":"counter"
      },

	  "Notes Collected": {
        "code":"autoNum5",
        "title": "Notes Collcected",
        "type":"counter"
      },
	 "Crossed Community": {
        "code":"autoCBox1",
        "title": "Crossed Community",
        "type":"bool" 
      },
     "Notes Touched in Auto": {
        "code":"autoStr1",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2023/field_image.png"
	 },
     "Notes Touched": {
        "type":"bool2x4",
        "code1":"autoCBox2",
        "title1": "Note-1",
        "code2":"autoCBox3",
        "title2": "Note-2",
       "code3":"autoCBox4",
        "title3": "Note-3",
        "code4":"autoCBox5",
        "title4": "Note-4",
        "code5":"autoCBox6",
        "title5": "Note-5",
        "code6":"autoCBox7",
        "title6": "Note-6",
        "code7":"autoCBox8",
        "title7": "Note-7",
        "code8":"autoCBox9",
        "title8": "Note-8" 
      }
    },
    "teleop": {
      "Notes Scored Speaker": {
        "code":"teleopNum1",
        "title": "Notes Scored Speaker",
        "type":"counter"
      },
      "Notes Scored Amp": {
        "code":"teleopNum3",
        "title": "Notes Scored Amp",
        "type":"counter"
      },

	  "Notes Collected Direct Source": {
        "code":"teleopNum5",
        "title": "Notes Collected Direct Source",
        "type":"counter"
      },
	  "Notes Collected Ground": {
        "code":"teleopNum6",
        "title": "Notes Collected Ground",
        "type":"counter"
      },

	  "Notes Stored": {
        "code":"teleopNum9",
        "title": "Notes Stored",
        "type":"counter"
      },
	  "Amplification Periods": {
        "code":"teleopNum8",
        "title": "Amplification Periods",
        "type":"counter"
      },
	  	"Co-Op Hit?": {
        "code":"teleopCBox1",
        "title": "Co-Op",
        "type":"bool" 
      }	
    },
    "endgame": {
      "Climb": {
        "code":"endgameRadio1",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Parked<br>",
          "2":"On Stage<br>",
		  "3":"Harmony<br>",
          "f":"Attempted but Failed<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
	  "Trap": {
        "code":"endgameCBox1",
        "title": "Trap Scored?",
        "type":"bool"
      },
	   "Spotlight": {
        "code":"endgameCBox2",
        "title": "Spotlit?",
        "type":"bool"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"miscRadio1",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
	   "Robot Speed": {
        "code":"miscRadio2",
        "title": "Robot Speed",
        "type":"radio",
        "choices":{
          "n":"Slow<br>",
          "a":"Medium<br>",
          "v":"Fast<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Defense Rating": {
        "code":"miscRadio3",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Died": {
        "code":"miscCBox1",
        "title": "Died",
        "type":"bool"
      },
      "Tipped": {
        "code":"miscCBox2",
        "title": "Tipped Over",
        "type":"bool"
      },
      "Card Foul": {
        "code":"miscCBox3",
        "title": "Yellow/Red Card",
        "type":"bool"          
      },
	  "Important Notes (Opt.)": {
        "code":"miscStr1",
        "title": "Important Notes",
        "type":"text"     
	  }
    }
  }
}`;
