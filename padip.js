function setLunch() {

    var checkboxes = document.getElementsByName("lunch");
    var checkboxChecked = [];
	var lunchRecList = "", lunchArray = "",  i;
    for (i in checkboxes) {
        if(checkboxes[i].checked) {
            checkboxChecked.push(checkboxes[i]);
			lunchArray = checkboxes[i].value.split(",");          // Split on commas
			
            lunchRecList = lunchRecList + lunchArray[Math.floor(Math.random() * lunchArray.length)] +". ";
           
		   
        }
		document.getElementById("lunchRec").innerHTML = "Lunch: " + lunchRecList;
    }
}
                                         
 
function setAMActivity(){
var activityObj, i, j,k, x,y= "";
activityObj = {
    "name":"John",
    "age":30,
    "activities": [
        { "name":"McCarter Theater", "keywords":[ "Theater", "Culture", "Adult", "Cafe", "Art" ],  "notkeywords":[ "Kid Friendly", "tour"]},
        { "name":" Princeton University Art Museum", "keywords":[ "Culture", "Kid Friendly", "Art","Tours" ],  "notkeywords":[ "Backpacks"] },
   
    ]
}


activityChoice = "Kid Friendly,Art";

var activitiesRecs = []
activityChoiceArray = activityChoice.split(",");          // Split on commas


var activityChoiceArray = document.getElementsByName("amActivity");

for (k in activityChoiceArray){
	if(activityChoiceArray[k].checked)

for (i in activityObj.activities) {
    for (j in activityObj.activities[i].keywords) {
       console.log (activityChoiceArray[k].value)
       if (activityObj.activities[i].keywords[j] == activityChoiceArray[k].value){
		activitiesRecs.push(activityObj.activities[i].name);
		console.log("name" + activityObj.activities[i].name)
          
       }
    }
}



}

for (i in activitiesRecs.filter(onlyUnique)) {
//	y += "" + activitiesRecs[i] + " ";
console.log(y);
}

y = "Morning: " + activitiesRecs[Math.floor(Math.random() * activitiesRecs.length)]
document.getElementById("morningRec").innerHTML = y;
}

function onlyUnique(value,index,self){
	return self.indexOf(value)===index;
}

