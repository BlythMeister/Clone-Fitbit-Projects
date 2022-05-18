function hasActivity(props, activity)
{
  try
  { 
    let statsTL = JSON.parse(props.settingsStorage.getItem("StatsTL")).values[0].value;
    let statsBL = JSON.parse(props.settingsStorage.getItem("StatsBL")).values[0].value;
    let statsTM = JSON.parse(props.settingsStorage.getItem("StatsTM")).values[0].value;
    let statsMM = JSON.parse(props.settingsStorage.getItem("StatsMM")).values[0].value;
    let statsBM = JSON.parse(props.settingsStorage.getItem("StatsBM")).values[0].value;
    let statsTR = JSON.parse(props.settingsStorage.getItem("StatsTR")).values[0].value;
    let statsBR = JSON.parse(props.settingsStorage.getItem("StatsBR")).values[0].value;

    //console.log(`statsTL: ${statsTL}`);
    //console.log(`statsBL: ${statsBL}`);
    //console.log(`statsTM: ${statsTM}`);
    //console.log(`statsMM: ${statsMM}`);
    //console.log(`statsBM: ${statsBM}`);
    //console.log(`statsTR: ${statsTR}`);
    //console.log(`statsBR: ${statsBR}`);
    //console.log(`activity: ${activity}`);

    return statsTL === activity ||
           statsBL === activity ||
           statsTM === activity ||
           statsMM === activity ||
           statsBM === activity ||
           statsTR === activity ||
           statsBR === activity;
  } catch(e) { 
    console.log(`Error on hasActivity (${activity}): ${e}`); 
    return true;
  }  
}

function hasStat(props)
{
    try
    { 
      let statsTL = JSON.parse(props.settingsStorage.getItem("StatsTL")).values[0].value;
      let statsBL = JSON.parse(props.settingsStorage.getItem("StatsBL")).values[0].value;
      let statsTM = JSON.parse(props.settingsStorage.getItem("StatsTM")).values[0].value;
      let statsMM = JSON.parse(props.settingsStorage.getItem("StatsMM")).values[0].value;
      let statsBM = JSON.parse(props.settingsStorage.getItem("StatsBM")).values[0].value;
      let statsTR = JSON.parse(props.settingsStorage.getItem("StatsTR")).values[0].value;
      let statsBR = JSON.parse(props.settingsStorage.getItem("StatsBR")).values[0].value;

      //console.log(`statsTL: ${statsTL}`);
      //console.log(`statsBL: ${statsBL}`);
      //console.log(`statsTM: ${statsTM}`);
      //console.log(`statsMM: ${statsMM}`);
      //console.log(`statsBM: ${statsBM}`);
      //console.log(`statsTR: ${statsTR}`);
      //console.log(`statsBR: ${statsBR}`);

      return (statsTL != "NONE" && statsTL != "BMIBMR") ||
             (statsBL != "NONE" && statsBL != "BMIBMR") ||
             (statsTM != "NONE" && statsTM != "BMIBMR") ||
             (statsMM != "NONE" && statsMM != "BMIBMR") ||
             (statsBM != "NONE" && statsBM != "BMIBMR") ||
             (statsTR != "NONE" && statsTR != "BMIBMR") ||
             (statsBR != "NONE" && statsBR != "BMIBMR");
    } catch(e) { 
      console.log(`Error on hasStat: ${e}`); 
      return true;
    }
}

function hasBattery(props, barOnly)
{
  try
  {
    let batteryPercent = JSON.parse(props.settingsStorage.getItem("showBatteryPercent"));
    let batteryBar = JSON.parse(props.settingsStorage.getItem("showBatteryBar"));

    if(barOnly)
    {
    return batteryBar;  
    }
    else
    {
     return batteryPercent || batteryBar;
    }
  } catch(e) { 
    console.log(`Error on hasBattery: ${e}`); 
    return true;
  }
}

function hasHeartRate(props)
{
  try
  {
    return JSON.parse(props.settingsStorage.getItem("showHeartRate"));
  } catch(e) { 
    console.log(`Error on hasHeartRate: ${e}`); 
    return true;
  }
}

function hasDate(props)
{
  try
  {
    return JSON.parse(props.settingsStorage.getItem("showDate"));
  } catch(e) { 
    console.log(`Error on hasHeartRate: ${e}`); 
    return true;
  }
}

function hasTime(props)
{
  try
  {
    return JSON.parse(props.settingsStorage.getItem("showTime"));
  } catch(e) { 
    console.log(`Error on hasHeartRate: ${e}`); 
    return true;
  }
}

function mySettings(props) {
  let colourSet = [
  {color: 'mediumvioletred'},   
  {color: 'deeppink'},  
  {color: 'hotpink'},  
  {color: 'pink'},  
  {color: 'lightcoral'},  
  {color: 'salmon'},  
    
  {color: 'red'},
  {color: 'crimson'},
  {color: 'tomato'},
  {color: 'orangered'},
  {color: 'darkorange'},
  {color: 'orange'},
     
  {color: 'gold'},
  {color: 'yellow'},
  {color: 'lightyellow'},
  {color: 'maroon'},
  {color: 'peru'},
  {color: 'tan'},
    
  {color: 'green'},
  {color: 'mediumseagreen'},  
  {color: 'lime'},  
  {color: 'lightgreen'},      
  {color: 'turquoise'},
  {color: 'teal'},
    
  {color: 'cyan'},
  {color: 'blue'},
  {color: 'deepskyblue'},
  {color: 'lightskyblue'}, 
  {color: 'darkblue'},  
  {color: 'navy'},
    
  {color: 'powderblue'},
  {color: 'mediumslateblue'},
  {color: 'violet'},
  {color: 'magenta'}, 
  {color: 'darkviolet'},  
  {color: 'purple'},
    
  {color: 'lavender'},
  {color: 'beige'},
  {color: 'mistyrose'},
  {color: 'honeydew'}, 
  {color: 'azure'}, 
  {color: 'snow'}, 
    
  {color: 'white'},
  {color: 'lightgray'},
  {color: 'darkgray'},
  {color: 'gray'}, 
  {color: 'dimgray'}, 
  {color: 'black'}
];
      
  let modelId = JSON.parse(props.settingsStorage.getItem("deviceModelId"));
  let availiableStats = [ {value:"NONE", name:"Empty"}, 
                          {value:"BMIBMR", name:"BMR/BMI"}, {value:"steps", name:"Steps"}, {value:"distance", name:"Distance"},
                          {value:"elevationGain", name:"Floors"}, {value:"calories", name:"Calories"}, {value:"activeMinutes", name:"Active Zone Minutes"}, 
                          {value:"activeMinutesWeek", name:"Weekly Active Zone Minutes"}, {value:"BATTERY", name:"Battery"}]
  
  return (
    <Page>     
      <Section title="Clock">
        <Toggle settingsKey="showTime" label="Show Time" />
        { hasTime(props) && <Toggle settingsKey="isAmPm" label="AM/PM indication on 12-hour clock" /> }     
        { hasTime(props) && <Toggle settingsKey="showSeconds" label="Show seconds value" /> }
        { hasTime(props) && <Toggle settingsKey="showLeadingZero" label="Show leading zero on hours" /> }
        { hasTime(props) && <Select label="Time Format" settingsKey="timeFormat" options={[ {value:"auto", name:"Automatic (Use Fitbit Setting)"}, {value:"12h", name:"12 hour"}, {value:"24h", name:"24 hour"} ]} /> }
      </Section>   
      
      <Section title="Date">
        <Toggle settingsKey="showDate" label="Show Date" />
        { hasDate(props) && <Toggle settingsKey="showDay" label="Show Day" /> }
        
      </Section>
      
      <Section title="Heart Rate">
        <Toggle settingsKey="showHeartRate" label="Show Heart rate" />
        { hasHeartRate(props) && <Toggle settingsKey="isHeartbeatAnimation" label="Heartbeat animation" /> }   
        { hasHeartRate(props) && <Toggle settingsKey="heartRateZoneVis" label="Show heart rate zone" /> }
      </Section>
            
    
      
      <Section title="Battery">
        <Toggle settingsKey="showBatteryPercent" label="Show battery percentage" />
      </Section>
      
      <Section title="Torch">
        <Toggle settingsKey="torchEnabled" label="Enable on torch on double tap" />
        <Select settingsKey="torchAutoOff" label="Automatically turn torch off after" options={[{value:"-1", name: "Never" }, {value:"1", name:"1 Second"}, {value: "2", name: "2 Seconds"}, {value: "5", name: "5 Seconds"}, {value: "15", name: "15 Seconds"}, {value: "30", name: "30 Seconds"}, {value: "60", name: "60 Seconds"}]} />
      </Section>
      
      { hasTime(props) && <Section title="Time colour">
        <ColorSelect settingsKey="timeColour" colors={colourSet}/>
      </Section> }
      
      { hasDate(props) && <Section title="Date colour">
        <ColorSelect settingsKey="dateColour" colors={colourSet} />
      </Section> }
      
      { hasActivity(props, "steps") && <Section title="Steps colour">
        <ColorSelect settingsKey="stepsColour" colors={colourSet} />
      </Section> }
      
      { hasActivity(props, "distance") && <Section title="Distance colour">
        <ColorSelect settingsKey="distanceColour" colors={colourSet} />
      </Section> }
       
      { hasActivity(props, "elevationGain") && <Section title="Floors colour">
        <ColorSelect settingsKey="elevationGainColour" colors={colourSet} />
      </Section> }
       
      { hasActivity(props, "calories") && <Section title="Calories colour">
        <ColorSelect settingsKey="caloriesColour" colors={colourSet} />
      </Section> }
      
      { hasActivity(props, "activeMinutes") && <Section title="Active Zone Minutes colour">
        <ColorSelect settingsKey="activeMinutesColour" colors={colourSet} />
      </Section> }
      
      { hasActivity(props, "activeMinutesWeek") && <Section title="Weekly Active Zone Minutes colour">
        <ColorSelect settingsKey="activeMinutesWeekColour" colors={colourSet} />
      </Section> }
      
      { hasHeartRate(props) && <Section title="Heart colour">
        <ColorSelect settingsKey="heartColour" colors={colourSet} />
      </Section> }
      
      { hasHeartRate(props) && <Section title="Heart rate colour">
        <ColorSelect settingsKey="heartRateColour" colors={colourSet} />
      </Section> }
      
      { hasActivity(props, "BMIBMR") && <Section title="BMI/BMR colour">
        <ColorSelect settingsKey="bmColour" colors={colourSet} />
      </Section> }
      
      { hasActivity(props, "BATTERY") && <Section title="Battery Stat colour">
        <ColorSelect settingsKey="batteryStatColour" colors={colourSet} />
      </Section> }
      
      { hasStat(props) && <Section title="Progress background colour">
        <ColorSelect settingsKey="progressBackgroundColour" colors={colourSet} />
      </Section> }
      
      { hasBattery(props, false) && <Section title="Battery 0% - 25% colour">
        <ColorSelect settingsKey="battery0Colour" colors={colourSet} />
      </Section> } 
      
      { hasBattery(props, false) && <Section title="Battery 25% - 50% colour">
        <ColorSelect settingsKey="battery25Colour" colors={colourSet} />
      </Section> }
      
      { hasBattery(props, false) && <Section title="Battery 50% - 75% colour">
        <ColorSelect settingsKey="battery50Colour" colors={colourSet} />
      </Section> }  
      
      { hasBattery(props, false) && <Section title="Battery 75% - 100% colour">
        <ColorSelect settingsKey="battery75Colour" colors={colourSet} />
      </Section> }
      
      { hasBattery(props, true) && <Section title="Battery bar background colour">
        <ColorSelect settingsKey="batteryBackgroundColour" colors={colourSet} />
      </Section> }
      
      <Section title="Background colour">
        <ColorSelect settingsKey="backgroundColour" colors={colourSet} />
      </Section>         
    </Page>    
  );
}

try
{ 
  registerSettingsPage(mySettings);
} catch(e) { 
  console.log(`Error on settings: ${e}`); 
}

