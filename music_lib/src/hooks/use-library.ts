import { useMemo, useState } from "react";
import { initialSongs } from "../utils/data";
import type { GroupBy, Song, SortBy } from "../utils/types";

export function useLibrary() {
    const [songs, setSongs] = useState<Song[]>(initialSongs);
    const [query, setQuery] = useState("");
    const [filterArtist, setFilterArtist] = useState<string>("all");
    const [filterAlbum, setFilterAlbum] = useState<string>("all");
    const [sortBy, setSortBy] = useState<SortBy>("title");
    const [groupBy, setGroupBy] = useState<GroupBy>("none");

    const addSong = (song: Omit<Song, "id">) =>
        setSongs(prev => [...prev, { ...song, id: prev.length ? Math.max(...prev.map(s => s.id)) + 1 : 1 }]);

    const deleteSong = (id: number) => setSongs(prev => prev.filter(s => s.id !== id));

    const artists = useMemo(() => Array.from(new Set(songs.map(s => s.artist))).sort(), [songs]);
    const albums = useMemo(() => Array.from(new Set(songs.map(s => s.album))).sort(), [songs]);

    const filtered = useMemo(() => {
        return songs
            .filter(s =>
                [s.title, s.artist, s.album].some(v => v.toLowerCase().includes(query.toLowerCase()))
            )
            .filter(s => (filterArtist === "all" ? true : s.artist === filterArtist))
            .filter(s => (filterAlbum === "all" ? true : s.album === filterAlbum));
    }, [songs, query, filterArtist, filterAlbum]);

    const sorted = useMemo(() => {
        return [...filtered].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }, [filtered, sortBy]);

    // group via reduce
    const grouped = useMemo(() => {
        if (groupBy === "none") return { All: sorted } as Record<string, Song[]>;
        return sorted.reduce<Record<string, Song[]>>((acc, song) => {
            const key = song[groupBy];
            acc[key] = acc[key] ? [...acc[key], song] : [song];
            return acc;
        }, {});
    }, [sorted, groupBy]);

    return {
        songs,
        addSong,
        deleteSong,
        query, setQuery,
        filterArtist, setFilterArtist,
        filterAlbum, setFilterAlbum,
        sortBy, setSortBy,
        groupBy, setGroupBy,
        artists, albums,
        grouped
    };
}
