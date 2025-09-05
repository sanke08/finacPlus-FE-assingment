
import type { Song } from "../utils/types";

export default function SongCard({
    song,
    canDelete,
    onDelete
}: {
    song: Song;
    canDelete: boolean;
    onDelete: (id: number) => void;
}) {
    return (
        <div className="p-4 bg-white ring ring-neutral-200 rounded-lg flex items-center justify-between hover:shadow-sm transition">
            <div>
                <div className="font-semibold">{song.title}</div>
                <div className="text-sm text-gray-500">{song.artist} • {song.album}</div>
            </div>
            {canDelete && (
                <button
                    onClick={() => onDelete(song.id)}
                    className="text-red-600 hover:text-red-700 px-3 py-1 border rounded"
                >
                    Delete
                </button>
            )}
        </div>
    );
}
