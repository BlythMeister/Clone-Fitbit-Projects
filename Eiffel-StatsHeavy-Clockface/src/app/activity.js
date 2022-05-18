import * as document from "document";
import { goals } from "user-activity";
import { today } from "user-activity";
import { weekGoals } from "user-activity";
import { week } from "user-activity";
import { units } from "user-settings";
import { me as device } from "device";

//Progress - START
export let root = document.getElementById('root')
export const screenWidth = root.width
export var distanceUnit = "auto";
export function distanceUnitSet(val) { distanceUnit = val; drawAllProgress(); }
export function getProgressEl(prefix, officialType, dayWeek) {
  let containerEl = document.getElementById(prefix + "-straight");
  return {
    prefix: prefix,
    type: officialType,
    doTotal: prefix == "activeMinutes",
    dayWeek: dayWeek,
    prevProgressVal: null,
    containerStraight: containerEl,
    position:"NONE",
    countStraight: containerEl.getElementById(prefix + "-straight-count"),
    iconStraight: containerEl.getElementById(prefix + "-straight-icon"),
    lineStraight: containerEl.getElementById(prefix + "-straight-line"),
    lineBackStraight: containerEl.getElementById(prefix + "-straight-line-back"),
  }
}

export let goalTypes = [];
export let goalOfficialTypes = [];

export function pushGoalTypeIfSupported(type, officialType)
{
  if(today.adjusted[officialType] != undefined)
  {
    goalTypes.push(type);
    goalOfficialTypes.push(officialType);
  }
}

export function pushWeekGoalTypeIfSupported(type, officialType)
{
  if(week.adjusted[officialType] != undefined)
  {
    goalTypes.push(type);
    goalOfficialTypes.push(officialType);
  }
}

pushGoalTypeIfSupported("steps", "steps");
pushGoalTypeIfSupported("distance", "distance");
pushGoalTypeIfSupported("elevationGain", "elevationGain");
pushGoalTypeIfSupported("calories", "calories");
pushGoalTypeIfSupported("activeMinutes", "activeZoneMinutes");
pushWeekGoalTypeIfSupported("activeMinutesWeek", "activeZoneMinutes");

export let progressEls = [];

for (var i=0; i < goalTypes.length; i++) {
  var goalType = goalTypes[i];
  var goalOfficialType = goalOfficialTypes[i];
  var goalDayWeek = "day";
  if(goalType.indexOf("Week") >= 0){
    goalDayWeek = "week"
  }    
  progressEls.push(getProgressEl(goalType, goalOfficialType, goalDayWeek));
}
//Progress - END


//Progress Draw - START
export function drawProgress(progressEl) {
  let type = progressEl.type;
  let dayWeek = progressEl.dayWeek;
  let doTotal = progressEl.doTotal;

  let actual = 0;
  var goal = 0;
  if(dayWeek == "day") {
    if(today.adjusted[type]) {
      if(doTotal) {
        actual = today.adjusted[type].total
        goal = goals[type].total
      } else {
        actual = today.adjusted[type]
        goal = goals[type]
      }
    }
  } else {
    if(week.adjusted[type]) {
      if(doTotal) {
        actual = week.adjusted[type].total
        goal = weekGoals[type].total
      } else {
        actual = week.adjusted[type]
        goal = weekGoals[type]
      }
    }
  }

  if (progressEl.prevProgressVal == actual) {
    return;
  }
  progressEl.prevProgressVal = actual;

  var displayValue = actual;
  if (!actual || actual < 0)
  {
      displayValue = "0";
  }
  else if (type === "distance" && actual)
  {
      displayValue = (actual / 1000.).toFixed(2);
  }
  progressEl.countStraight.text = `${displayValue}`;

  if(!goal || goal < 0 || !actual || actual < 0)
  {
    progressEl.lineStraight.width = 0;
  }
  else
  {
    var complete = (actual / goal);
    if (complete > 1) complete = 1;
    var maxLine = screenWidth /100 * 28;
    progressEl.lineStraight.width = maxLine*complete;
  }
}

export function drawAllProgress() {
  for (var i=0; i < goalTypes.length; i++) {
    drawProgress(progressEls[i]);
  }
}

export function resetProgressPrevState() {
  for (var i=0; i < goalTypes.length; i++) {
    progressEls[i].prevProgressVal = null;
  }
}

//Progress Draw - END
