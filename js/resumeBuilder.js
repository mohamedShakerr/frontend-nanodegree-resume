/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio={
   "name":"Mohamed Shaker",
   "role":"Web developer",
   "contactInfo":"mshaker809@yahoo.com",
   "picUrl":"images/fry.jpg",
   "welcomeMessage":"I would like to thank you for visiting my website ",
   "skills":["programming","HTML","CSS","JavaScript","Java"]
 };
var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);
var formattedContact=HTMLcontactGeneric.replace("%contact%","Email").replace("%data%",bio.contactInfo);
$("#header").append(formattedContact);
var formattedBioPic=HTMLbioPic.replace("%data%",bio.picUrl);
$("#header").append(formattedBioPic);
var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

if(bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  var formattedSkills=HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkills);
   formattedSkills=HTMLskills.replace("%data%",bio.skills[1]);
   $("#skills").append(formattedSkills);
   formattedSkills=HTMLskills.replace("%data%",bio.skills[2]);
   $("#skills").append(formattedSkills);
   formattedSkills=HTMLskills.replace("%data%",bio.skills[3]);
   $("#skills").append(formattedSkills);
   formattedSkills=HTMLskills.replace("%data%",bio.skills[4]);
   $("#skills").append(formattedSkills);
}


//Json
var education={"schools":[
  {
      "school":"XXXX University",
      "city":"Cairo",
      "graduationYear":"2019",
      "onlineCourses":["Java","Embedded Systems"]
  },
  {
      "school":"YYYYschool",
      "city":"Cairo",
      "graduationYear":2014,
      "onlineCourses":["HTML","Css"]
  }
]
};
$("#education").append(HTMLschoolStart);
education.schools.forEach(function(elementObj){
  var formattedHTMLschoolName=HTMLschoolName.replace("%data%",elementObj.school);
  var formattedHTMLschoolDegree=HTMLschoolDegree.replace("%data%","ZZZZZ");
  $(".education-entry").append(formattedHTMLschoolName+formattedHTMLschoolDegree);
  var formattedHTMLschoolLocation=HTMLschoolLocation.replace("%data%",elementObj.city);
  $(".education-entry").append(formattedHTMLschoolLocation);
  var formattedHTMLschoolDates=HTMLschoolDates.replace("%data%",elementObj.graduationYear);
  $(".education-entry").append(formattedHTMLschoolDates);
  $(".education-entry").append("<br/>");
});
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

function displayWork(){

for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedHTMLworkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedHTMLworkTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
  $(".work-entry:last").append(formattedHTMLworkEmployer+formattedHTMLworkTitle);
  var formattedDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
  $(".work-entry:last").append(formattedDate);
  var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);
  var formattedDesc=HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedDesc);
}
}
displayWork();




// Your code goes here! Let me help you get started

function locationizer(work_obj) {
  var locations=[];
  work.jobs.forEach(function(job){
    locations.push(job.location);
  });
  return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));


$("#main").append(internationalizeButton);
function inName(name){
  var nameArr=name.split(" ");
  return nameArr[0].charAt(0).toUpperCase() + nameArr[0].slice(1)+" "+nameArr[1].toUpperCase();
}

var projects = {
	"projects": [
		{
			"title": "HTML5 Canvas Game",
			"datesWorked": "December 2014 - January 2015",
			"description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree.",
			"images": ["images/p1.jpg"],
			"url": "http://www.cherylcourt.ca/frogger"
		},
		{
			"title": "Online Portfolio",
			"datesWorked": "October 2014",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
			"images": ["images/p2.jpg","images/p3.jpg"],
			"url": "http://www.cherylcourt.ca/"
		}
	]
}

//Encapsulation
projects.display=function(){
  projects.projects.forEach(function(proj){
    $("#projects").append(HTMLprojectStart);
    var HTMLprojectTitleFormatted=HTMLprojectTitle.replace("%data%",proj.title);
    $(".project-entry:last").append(HTMLprojectTitleFormatted);
    var HTMLprojectDatesFormatted=HTMLprojectDates.replace("%data%",proj.datesWorked);
    $(".project-entry:last").append(HTMLprojectDatesFormatted);
    var HTMLprojectDescriptionFormatted=HTMLprojectDescription.replace("%data%",proj.description);
    $(".project-entry:last").append(HTMLprojectDescriptionFormatted);
    if(proj.images.length>0){
    proj.images.forEach(function(imgSrc){
      var HTMLprojectImageFormatted=HTMLprojectImage.replace("%data%",imgSrc);
      $(".project-entry:last").append(HTMLprojectImageFormatted);
    });
  }
  });
}
projects.display();
$("#mapDiv").append(googleMap);
