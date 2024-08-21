const country_section = document.getElementById("country_section");
let countries = [];

const get_request = new XMLHttpRequest();
get_request.open("GET", "https://raw.githubusercontent.com/linssen/country-flag-icons/master/countries.json");
get_request.onload = () =>{
    countries = JSON.parse(get_request.responseText);
    function showCountries(){
        for(let i=0; i<countries.length; i++){
            if(i == 10){
                continue;
            }
            let country_item = document.createElement("div");
            country_item.className = "country_item";

            let country_img = document.createElement("img");
            country_img.src = countries[i].file_url;

            let country_name = document.createElement("p");
            country_name.innerText = countries[i].name;

            country_item.append(country_img, country_name);
            country_section.append(country_item);
        }
    }
    showCountries();
}
get_request.send();