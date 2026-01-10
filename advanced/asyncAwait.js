function fetchUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "code", url: "https://google.com"})
        }, 3000);
    })

}

async function getUserData(){
    try {
        console.log("Fetching the data");
        const userData =  await fetchUser();
        console.log(userData);
    } catch (error) {
        console.error(`Error occured: ${error}`);
    }
}

getUserData();