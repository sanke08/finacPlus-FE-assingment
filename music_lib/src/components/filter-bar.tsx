
import type { GroupBy, SortBy } from "../utils/types";

type Props = {
    query: string;
    setQuery: (v: string) => void;
    filterArtist: string;
    setFilterArtist: (v: string) => void;
    filterAlbum: string;
    setFilterAlbum: (v: string) => void;
    sortBy: SortBy;
    setSortBy: (v: SortBy) => void;
    groupBy: string;
    setGroupBy: (v: GroupBy) => void;
    artists: string[];
    albums: string[];
    canAdd: boolean;
    onAddClick: () => void;
};

export default function FilterBar(props: Props) {
    const {
        query, setQuery,
        filterArtist, setFilterArtist,
        filterAlbum, setFilterAlbum,
        sortBy, setSortBy,
        groupBy, setGroupBy,
        artists, albums,
        canAdd, onAddClick
    } = props;

    return (
        <div className="flex flex-col md:flex-row justify-end gap-3 items-stretch md:items-end bg-white border-b border-b-neutral-400 rounded-lg p-4">
            <div className=" pr-10">
                <label className="text-xs text-gray-500">Search</label>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Title, Artist, Album…"
                    className="w-full ring ring-neutral-300 rounded-lg px-3 py-2"
                />
            </div>
            <div className="space-x-2">
                <label className="text-xs text-gray-500">Artist</label>
                <select className="ring ring-neutral-300 rounded-lg px-3 py-2" value={filterArtist} onChange={e => setFilterArtist(e.target.value)}>
                    <option value="all">All</option>
                    {artists.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
            </div>
            <div className="space-x-2">
                <label className="text-xs text-gray-500">Album</label>
                <select className="ring ring-neutral-300 rounded-lg px-3 py-2" value={filterAlbum} onChange={e => setFilterAlbum(e.target.value)}>
                    <option value="all">All</option>
                    {albums.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
            </div>
            <div className="space-x-2">
                <label className="text-xs text-gray-500">Sort by</label>
                <select className="ring ring-neutral-300 rounded-lg px-3 py-2" value={sortBy} onChange={e => setSortBy(e.target.value as SortBy)}>
                    <option value="title">Title</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                </select>
            </div>
            <div className="space-x-2">
                <label className="text-xs text-gray-500">Group by</label>
                <select className="ring ring-neutral-300 rounded-lg px-3 py-2" value={groupBy} onChange={e => setGroupBy(e.target.value as any)}>
                    <option value="none">None</option>
                    <option value="title">Title</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                </select>
            </div>
            {canAdd && (
                <button onClick={onAddClick} className="md:ml-auto px-4 py-2 rounded-lg bg-black text-white hover:opacity-90">
                    + Add Song
                </button>
            )}
        </div>
    );
}
