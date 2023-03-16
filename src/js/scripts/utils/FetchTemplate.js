const FetchTemplate = ({state, path, method, needToken, body}) => {
    const url = 'https://openmarket.weniv.co.kr/';

    const headers = {
        "Content-Type": "application/json",
    }

    if (needToken) {
        headers["Authroization"] = state.getToken();
    }

    return fetch(url + path, {
        method,
        headers,
        body,
    });
}

export default FetchTemplate;