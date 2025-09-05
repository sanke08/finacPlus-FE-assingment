import { useMemo, useState } from "react";
import type { Role } from "./utils/types";
import { useLibrary } from "./hooks/use-library";
import FilterBar from "./components/filter-bar";
import SongCard from "./components/song-card";
import AddSongModal from "./components/add-song-modal";


export default function Library() {
  const role = (localStorage.getItem("role") as Role) ?? "user";
  const canAdmin = role === "admin";

  const {
    grouped,
    addSong,
    deleteSong,
    query, setQuery,
    filterArtist, setFilterArtist,
    filterAlbum, setFilterAlbum,
    sortBy, setSortBy,
    groupBy, setGroupBy,
    artists, albums
  } = useLibrary();

  const [open, setOpen] = useState(false);
  const groups = useMemo(() => Object.entries(grouped), [grouped]);

  return (
    <div className="space-y-5">
      <FilterBar
        query={query} setQuery={setQuery}
        filterArtist={filterArtist} setFilterArtist={setFilterArtist}
        filterAlbum={filterAlbum} setFilterAlbum={setFilterAlbum}
        sortBy={sortBy} setSortBy={setSortBy}
        groupBy={groupBy} setGroupBy={setGroupBy}
        artists={artists} albums={albums}
        canAdd={canAdmin}
        onAddClick={() => setOpen(true)}
      />

      <div className="space-y-10">
        {groups.map(([groupName, items]) => (
          <section key={groupName} className={`space-y-2`}>
            {groupName !== "All" && <h3 className="text-lg font-semibold">{groupName}</h3>}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(song => (
                <SongCard
                  key={song.id}
                  song={song}
                  canDelete={canAdmin}
                  onDelete={deleteSong}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <AddSongModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={(s) => addSong(s)}
      />
    </div>
  );
}
