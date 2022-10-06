const getData = async (url: string): Promise<  => {
    const response = fetch(url);
    return response.json();
}