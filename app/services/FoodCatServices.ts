const baseURL = "https://dmapi.ipaypro.co/app_task/"

export const fetchCategoryData = async () => {
    let result = null;
    try {
        const response = await fetch(`${baseURL}categories`);
        const JSONResponse = await response.json();
        if (JSONResponse) {
            // console.log('stringify JSONResponse', JSON.stringify(JSONResponse));
            result = JSONResponse;
        } else {
            console.log('Error in getting JSONResponse');
        }
    } catch (error) {
        console.log(error);
    }
    return result;
}


export const addCategory = async (payload: any) => {
    let result = null;
    try {
        if (payload) {
            const response = await fetch(`${baseURL}categories/add`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const JSONResponse = await response.json();
            if (JSONResponse) {
                // console.log('stringify JSONResponse', JSON.stringify(JSONResponse));
                result = JSONResponse;
            } else {
                console.log('Error in getting JSONResponse');
            }
        } else {
            console.log('Error in getting payload');
        }
    } catch (error) {
        console.log(error);
    }
    return result;
}
