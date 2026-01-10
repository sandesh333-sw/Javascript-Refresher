function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if(success){
                resolve("Data fetched");
            } else {
                reject("Error");
            }
        }, 3000)
    });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(data);
  })