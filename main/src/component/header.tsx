import { useAuth } from "../context/auth-context";


export default function Header() {
    const { role, logout } = useAuth();
    return (
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-xl font-bold tracking-tight">🎵 Micro Music</h1>
                <div className="flex items-center gap-3">
                    {role && <span className="text-sm px-2 py-1 rounded-full bg-gray-100 border capitalize">role: {role}</span>}
                    {role && (
                        <button
                            onClick={logout}
                            className="px-3 py-1.5 rounded-lg border bg-red-50 hover:bg-red-100 text-red-600"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

