class GitHub {
  constructor() 
  {
    this.client_id  = 'b21cbe7c0e1078a0282a';
    this.client_secret  = 'ab8a2884a205356de8208c15f53cfef041b74920'; 
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) 
  {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id= ${this.client_id}&client_secret=${this.client_secret}`);
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id= ${this.client_id}&client_secret=${this.client_secret}`);

    const profile  = await profileResponse.json();
    const repos  = await reposResponse.json();
    return {
      profile ,repos
    }
  }


}