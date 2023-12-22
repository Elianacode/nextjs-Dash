'use server';

export async function fetchListPeople() {
    const info = await fetch(
        'https://swapi.dev/api/people'
    )
    .then((response) => response.json() )
    .catch((e) => {
        console.error('API Error:', e);
        throw new Error('Failed to fetch people.');
    })
    return info;
}