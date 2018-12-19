const axios = require("axios");

// const urlName = "https://github.com/studyminbulat/sem3goss/blob/10c4da0021ab30267334c2122d7b89ea198f894a/CODE-001/secret2?raw=true";
// const urlName = "https://raw.githubusercontent.com/studyminbulat/sem3goss/master/CODE-001/secret2";

//const urlName = "https://github.com/RedBear94/ITMO_LAB_SEM_3/blob/master/CODE-001/secret2?raw=true";
const urlName = "https://raw.githubusercontent.com/RedBear94/ITMO_LAB_SEM_3/master/CODE-001/secret2";

// const url = "http://3336.kodaktor.ru/mystery?minnemullin-bulat";
const url = "http://3336.kodaktor.ru/mystery?babaritskiy-pavel"

axios.post(url, urlName, {headers: { "content-type": "multipart/form-data" } })
    .then(response => {
        console.log(response);
    })
  .catch(function (error) {
    console.log(error);
  });