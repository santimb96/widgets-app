import wikipediaApi from "../api/wikipediaApi";

const getWikiResponse = async (text) => {
    let arr = [];
    if(text?.length) {
        try {
            const response = await fetch(`${wikipediaApi.baseUri}${text}`);
            const data = await response?.json();
            arr = await data?.query?.search;
            return arr;
        } catch (err) {
            console.warn(err);
            return arr;
        }
    } else {
        return arr;
    }
}

export default getWikiResponse;