async function ResumeDataJson() {
    let url = './Data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function GetProfile() {
    let ResumeProfile = await ResumeDataJson();
    let html = '';
    ResumeProfile.Profile.forEach(post => {
        let htmlSegment = `
        <img src="${post.ProfileImg}">
        <p>${post.Name}<br> ${post.Mobile}<br> ${post.Email} <br> ${post.Address}</p>
         
        `;

        html += htmlSegment;
    });

    let _profile = document.getElementById('ProfileID');
    _profile.innerHTML = html;
}

async function GetExperience() {
    let ResumeExperience = await ResumeDataJson();
    let html = '';
    
    ResumeExperience.Workexperience.forEach(post => {
        let htmlSegment = `
         
         <h3>${post.Title} ${post.Date}</h3>
         <p>${post.Description}</p>
        `;

        html +=  htmlSegment;
    });

    let _experience = document.getElementById('ExperienceID');
   
    _experience.innerHTML = "<h1>Yrkeserfarenhet</h1>" +html;
}

async function GetEducation() {
    let ResumeEducation = await ResumeDataJson();
    let html = '';
    
    ResumeEducation.Education.forEach(post => {
        let htmlSegment = `
         
         <h3>${post.School} ${post.Date}</h3>
         <p>${post.Course}</p>
        `;

        html +=  htmlSegment;
    });

    let _education = document.getElementById('EducationID');
   
    _education.innerHTML = "<h1>Utbildning</h1>"+html;
}

GetProfile();
GetExperience();
GetEducation();











