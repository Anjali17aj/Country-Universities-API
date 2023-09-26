
let url ="http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button"); //click button

btn.addEventListener("click", async () => {  //async function
    let country = document.querySelector("input").value; //takes out country
    console.log(country); //prints country

    let colArr = await getColleges(country); //calling getColleges
    show(colArr);//passing array of college
})

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){ //getCollegefunction
    try {
        let res = await axios.get(url + country);  //getColleges function does an API Call  : API and query string "url + country"   
        return res.data; //returns array of data
    } catch(e){
        console.log("error-",e);
      return []; //if error then empty array will be returned
    }
}