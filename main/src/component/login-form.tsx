import { useState } from "react";
import { useAuth } from "../context/auth-context";

export default function LoginForm() {
    const { login } = useAuth();
    const [role, setRole] = useState<"admin" | "user">("user");

    return (
        <div className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Sign in</h2>
                <p className="text-sm text-gray-500">Mock JWT in-memory (localStorage)</p>
                <label className="block text-sm font-medium">Select role</label>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as any)}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring"
                >
                    <option value="user">User (view/filter)</option>
                    <option value="admin">Admin (add/delete)</option>
                </select>
                <button
                    onClick={() => login(role, 120)}
                    className="w-full py-2.5 rounded-xl bg-black text-white hover:opacity-90"
                >
                    Continue as {role}
                </button>
            </div>
        </div>
    );
}