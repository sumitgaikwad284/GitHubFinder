// Init Github
const github = new GitHub;
// Ui
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(event) => { 
  // Get input profile
  const userText = event.target.value;

  if(userText !== "")
  { 
    // Make HTTP call
     
    github.getUser(userText) 
      .then(data=>{ 
        if(data.profile.message === 'Not Found')
        {
          // Show alert
          ui.showAlert('User not Found','alert alert-danger');
        }
        else {
          // Show profile
          ui.showProfile(data.profile);  
          ui.showRepos(data.repos);
        }
      })
  }
  else 
  {
    //Clear profile
    ui.clearProfile();
  }
})