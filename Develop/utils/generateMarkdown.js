// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// example url https://shields.io/badge/license-MIT-green

function createLicenseBadge(license) {
  var badge =  "No License Badge";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseURL(license) {
  var licenseURL = "";

  // select correct license link for the selected license
  switch(license) {
   

    case "Apache":
      licenseURL = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "BSD":
      licenseURL = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseURL = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "MIT":
      licenseURL = "https://mit-license.org/";
      break;
    
    default:
      licenseURL = "";
      break;
  }
  
  return licenseURL;
}

// creates license section



function createLicenseSection(license) {
  var licenseSection = "";

 
  licenseSection += "## License\n"
  licenseSection += "Please see " + renderLicenseURL(license) + " to get detailed information for this license\n";
 
    return licenseSection
}








function generatemdText(data) {
  var sections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];

 
  // add title
  var mdText = "# " + data.title + "\n";

  // add license badge
  mdText += createLicenseBadge(data.license) + "\n";

  // add table of contents
  mdText += "## Table of Contents\n";


  for (var i=0; i<sections.length; i++) {
    if (! (data.license == "None" && sections[i] == "License" )) 
    
    {
      mdText += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
    }

  }

  mdText += "\n";

  //  description section
  mdText += "## " + sections[0] + "\n";
  mdText += data.description + "\n";

  // installation section
  mdText += "## " + sections[1] + "\n";
  mdText += data.install + "\n";

  // instructions for use section
  mdText += "## " + sections[2] + "\n";
  mdText += data.usage + "\n";

  // contribution section
  mdText += "## " + sections[3] + "\n";
  mdText += data.guidelines + "\n";

  // test section


  mdText += "## " + sections[4] + "\n";
  mdText += data.test + "\n";

  // license section


  mdText += createLicenseSection(data.license) + "\n";

 // contact section

  mdText += "## " + sections[6] + "\n";
  mdText += "You can find me [HERE](https://github.com/" + data.username + ") on Github\n";
  mdText += "You can email me at " + data.email + " if you have any additional questions.\n"

  return mdText;
}

module.exports = generatemdText;
