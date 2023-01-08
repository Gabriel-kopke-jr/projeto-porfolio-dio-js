async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Gabriel-kopke-jr/js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url);
    const response =  fetching.json()
    return response
}