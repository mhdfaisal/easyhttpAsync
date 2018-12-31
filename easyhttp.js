//HTTP Errors class
class HttpError extends Error{
    constructor(response){
        super(`${response.status} for ${response.url}`);
    }
}

class easyHttp {
    //Handling get request
     async get(url){
            const response = await fetch(url);
            const data = await response.json();
            try{
                if(response.status!=200){
                    throw new HttpError(response);
                }
                else{
                    return data;
                }
            }
            catch(error){
                return error;
            }
         }

        //Handling post request
        async post(url,info){
            const response = await fetch(url, {
                                method : 'POST',
                                headers:{
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(info)});
            const data = await response.json();
            try{
                if(response.status!=201){
                    throw new HttpError(response);
                }
                else 
                return data;
            }
            catch(error){
                return error;
            }
        }
        //Handling PUT Request
        async put(url, info){
            const response = await fetch(url, {
                method : 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(info)
                });
            const data = await response.json();
            try{
                if(response.status!=200){
                    throw new HttpError(response);
                }
                else{
                    return data;
                }
            }
            catch(error){
                return error;
            }
        }
        //Handling the delete request
        async delete(url){
            let response = await fetch(url, {
                method:'DELETE'
            });
            let data = await response.json();
            try{
                if(response.status!=200){
                    throw new HttpError(response);   
                }
                else{
                    //return data;
                    return "Deleted";
                }
            }
            catch(error){
                return error;
            }
        }
        
}