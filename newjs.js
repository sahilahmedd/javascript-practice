let api = "https://randomuser.me/api/"

let fetchDetails = async() => {
    const res = await fetch(api);
    const data = await res.json()
    console.log(data.results);    
}