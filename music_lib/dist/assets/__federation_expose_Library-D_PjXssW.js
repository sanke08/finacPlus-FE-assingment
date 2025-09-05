import { importShared } from './__federation_fn_import-BbV1QEaY.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const initialSongs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
  { id: 2, title: "Save Your Tears", artist: "The Weeknd", album: "After Hours" },
  { id: 3, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" },
  { id: 4, title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep" },
  { id: 5, title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line" },
  { id: 6, title: "Peaches", artist: "Justin Bieber", album: "Justice" },
  { id: 7, title: "As It Was", artist: "Harry Styles", album: "Harry's House" },
  { id: 8, title: "Don't Start Now", artist: "Dua Lipa", album: "Future Nostalgia" }
];

const {useMemo: useMemo$1,useState: useState$2} = await importShared('react');
function useLibrary() {
  const [songs, setSongs] = useState$2(initialSongs);
  const [query, setQuery] = useState$2("");
  const [filterArtist, setFilterArtist] = useState$2("all");
  const [filterAlbum, setFilterAlbum] = useState$2("all");
  const [sortBy, setSortBy] = useState$2("title");
  const [groupBy, setGroupBy] = useState$2("none");
  const addSong = (song) => setSongs((prev) => [...prev, { ...song, id: prev.length ? Math.max(...prev.map((s) => s.id)) + 1 : 1 }]);
  const deleteSong = (id) => setSongs((prev) => prev.filter((s) => s.id !== id));
  const artists = useMemo$1(() => Array.from(new Set(songs.map((s) => s.artist))).sort(), [songs]);
  const albums = useMemo$1(() => Array.from(new Set(songs.map((s) => s.album))).sort(), [songs]);
  const filtered = useMemo$1(() => {
    return songs.filter(
      (s) => [s.title, s.artist, s.album].some((v) => v.toLowerCase().includes(query.toLowerCase()))
    ).filter((s) => filterArtist === "all" ? true : s.artist === filterArtist).filter((s) => filterAlbum === "all" ? true : s.album === filterAlbum);
  }, [songs, query, filterArtist, filterAlbum]);
  const sorted = useMemo$1(() => {
    return [...filtered].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [filtered, sortBy]);
  const grouped = useMemo$1(() => {
    if (groupBy === "none") return { All: sorted };
    return sorted.reduce((acc, song) => {
      const key = song[groupBy];
      acc[key] = acc[key] ? [...acc[key], song] : [song];
      return acc;
    }, {});
  }, [sorted, groupBy]);
  return {
    songs,
    addSong,
    deleteSong,
    query,
    setQuery,
    filterArtist,
    setFilterArtist,
    filterAlbum,
    setFilterAlbum,
    sortBy,
    setSortBy,
    groupBy,
    setGroupBy,
    artists,
    albums,
    grouped
  };
}

function FilterBar(props) {
  const {
    query,
    setQuery,
    filterArtist,
    setFilterArtist,
    filterAlbum,
    setFilterAlbum,
    sortBy,
    setSortBy,
    groupBy,
    setGroupBy,
    artists,
    albums,
    canAdd,
    onAddClick
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-end gap-3 items-stretch md:items-end bg-white border-b border-b-neutral-400 rounded-lg p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " pr-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-gray-500", children: "Search" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Title, Artist, Album…",
          className: "w-full ring ring-neutral-300 rounded-lg px-3 py-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-gray-500", children: "Artist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "ring ring-neutral-300 rounded-lg px-3 py-2", value: filterArtist, onChange: (e) => setFilterArtist(e.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All" }),
        artists.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a, children: a }, a))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-gray-500", children: "Album" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "ring ring-neutral-300 rounded-lg px-3 py-2", value: filterAlbum, onChange: (e) => setFilterAlbum(e.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All" }),
        albums.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a, children: a }, a))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-gray-500", children: "Sort by" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "ring ring-neutral-300 rounded-lg px-3 py-2", value: sortBy, onChange: (e) => setSortBy(e.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "title", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "artist", children: "Artist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "album", children: "Album" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-gray-500", children: "Group by" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "ring ring-neutral-300 rounded-lg px-3 py-2", value: groupBy, onChange: (e) => setGroupBy(e.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "none", children: "None" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "title", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "artist", children: "Artist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "album", children: "Album" })
      ] })
    ] }),
    canAdd && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onAddClick, className: "md:ml-auto px-4 py-2 rounded-lg bg-black text-white hover:opacity-90", children: "+ Add Song" })
  ] });
}

function SongCard({
  song,
  canDelete,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white ring ring-neutral-200 rounded-lg flex items-center justify-between hover:shadow-sm transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: song.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-500", children: [
        song.artist,
        " • ",
        song.album
      ] })
    ] }),
    canDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onDelete(song.id),
        className: "text-red-600 hover:text-red-700 px-3 py-1 border rounded",
        children: "Delete"
      }
    )
  ] });
}

const {useState: useState$1} = await importShared('react');

function AddSongModal({
  open,
  onClose,
  onSave
}) {
  const [title, setTitle] = useState$1("");
  const [artist, setArtist] = useState$1("");
  const [album, setAlbum] = useState$1("");
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-center bg-black/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white rounded-lg p-5 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Add Song" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-gray-500 hover:text-black", children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full border rounded px-3 py-2", placeholder: "Title", value: title, onChange: (e) => setTitle(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full border rounded px-3 py-2", placeholder: "Artist", value: artist, onChange: (e) => setArtist(e.target.value) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full border rounded px-3 py-2", placeholder: "Album", value: album, onChange: (e) => setAlbum(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "px-3 py-2 rounded border", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            if (title && artist && album) {
              onSave({ title, artist, album });
              onClose();
              setTitle("");
              setArtist("");
              setAlbum("");
            }
          },
          className: "px-4 py-2 rounded bg-black text-white",
          children: "Save"
        }
      )
    ] })
  ] }) });
}

const {useMemo,useState} = await importShared('react');
function Library() {
  const role = localStorage.getItem("role") ?? "user";
  const canAdmin = role === "admin";
  const {
    grouped,
    addSong,
    deleteSong,
    query,
    setQuery,
    filterArtist,
    setFilterArtist,
    filterAlbum,
    setFilterAlbum,
    sortBy,
    setSortBy,
    groupBy,
    setGroupBy,
    artists,
    albums
  } = useLibrary();
  const [open, setOpen] = useState(false);
  const groups = useMemo(() => Object.entries(grouped), [grouped]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilterBar,
      {
        query,
        setQuery,
        filterArtist,
        setFilterArtist,
        filterAlbum,
        setFilterAlbum,
        sortBy,
        setSortBy,
        groupBy,
        setGroupBy,
        artists,
        albums,
        canAdd: canAdmin,
        onAddClick: () => setOpen(true)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: groups.map(([groupName, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `space-y-2`, children: [
      groupName !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: groupName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: items.map((song) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SongCard,
        {
          song,
          canDelete: canAdmin,
          onDelete: deleteSong
        },
        song.id
      )) })
    ] }, groupName)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddSongModal,
      {
        open,
        onClose: () => setOpen(false),
        onSave: (s) => addSong(s)
      }
    )
  ] });
}

export { Library as default, jsxRuntimeExports as j };
