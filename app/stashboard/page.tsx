import { fetchListPeople } from "../lib/data-stars";
import { People } from "../lib/definitions-star";
import { lusitana } from "../ui/fonts";
import ListPeople from "../ui/stashboard/listpeople"

export default async function HomeStarWarsPage() {
    const result = await fetchListPeople();
    const listPeople: People[] = result.results;
    return (
        <main>
            <ListPeople listPeople={listPeople} />
        </main>
    );
}