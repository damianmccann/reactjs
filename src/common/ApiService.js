class ApiService {
 
    getDataFromList(callback) {
        fetch('http://localhost:4000')
        .then( function(response) {
            return response.json();
        })
        .then( function(data) {
            callback(data);
        });
    }

    getDataFromSearch(searchText, callback) {
        fetch('http://localhost:4000/search', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: searchText
            })
        })
        .then( function(response) {
            return response.json();
        })
        .then( function(data) {
            callback(data);
        });
    }

}

export default ApiService;
