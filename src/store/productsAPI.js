import axios from "axios";

export function fetchCount(keyWord) {
    return new Promise((resolve) => {
            // setTimeout(() => resolve({data: amount}), 5000)
            axios.get(`http://localhost:3001/api/items?q=${keyWord}`).then(response => {
                // console.log(response.data);
                resolve({data: response.data})
            })
        }
    );
}
