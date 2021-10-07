export function fetchImages(url) {
    return fetch(url)
        .then((response) => {
            return response.ok ? response.json() : [];
        })
        .catch((e) => {
            return [];
        });
}
