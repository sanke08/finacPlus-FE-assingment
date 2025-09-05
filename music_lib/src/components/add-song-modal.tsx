import { useState } from "react";
import type { Song } from "../utils/types";

export default function AddSongModal({
    open, onClose, onSave
}: {
    open: boolean;
    onClose: () => void;
    onSave: (song: Omit<Song, "id">) => void;
}) {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
            <div className="w-full max-w-md bg-white rounded-lg p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Add Song</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
                </div>
                <div className="space-y-2">
                    <input className="w-full border rounded px-3 py-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <input className="w-full border rounded px-3 py-2" placeholder="Artist" value={artist} onChange={e => setArtist(e.target.value)} />
                    <input className="w-full border rounded px-3 py-2" placeholder="Album" value={album} onChange={e => setAlbum(e.target.value)} />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                    <button onClick={onClose} className="px-3 py-2 rounded border">Cancel</button>
                    <button
                        onClick={() => { if (title && artist && album) { onSave({ title, artist, album }); onClose(); setTitle(""); setArtist(""); setAlbum(""); } }}
                        className="px-4 py-2 rounded bg-black text-white"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
