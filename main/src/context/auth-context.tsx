import React, { createContext, useContext, useMemo, useState } from "react";

type Role = "admin" | "user";
type TokenPayload = { role: Role };

function signMockJWT(payload: TokenPayload) {
    return btoa(JSON.stringify(payload));
}
function decodeMockJWT(token: string | null): TokenPayload | null {
    try {
        if (!token) return null;
        const parsed = JSON.parse(atob(token)) as TokenPayload;
        return parsed;
    } catch { return null; }
}

type AuthCtx = {
    role: Role | null;
    token: string | null;
    login: (role: Role, minutes?: number) => void;
    logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
    const payload = useMemo(() => decodeMockJWT(token), [token]);

    const login = (role: Role) => {
        const t = signMockJWT({ role });
        localStorage.setItem("token", t);
        localStorage.setItem("role", role);
        setToken(t);
    };
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setToken(null);
    };

    return (
        <Ctx.Provider value={{ role: payload?.role ?? null, token, login, logout }}>
            {children}
        </Ctx.Provider>
    );
};

export const useAuth = () => {
    const v = useContext(Ctx);
    if (!v) throw new Error("useAuth must be used within AuthProvider");
    return v;
};
