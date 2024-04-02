export function ajax({url, cdSuccess, error}){

    fetch(url)
    .then(res => res.ok?res.text(): Promise.reject(error))
    .then(text => {
        let data = text;
        cdSuccess(data);
    })
    .catch(err => error(err));
}