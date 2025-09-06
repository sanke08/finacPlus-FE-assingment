
# FinacPlus Frontend Assignment



## 🚀 Run Locally


### 1 Clone the Repository
```
git clone https://github.com/sanke08/finacPlus-FE-assingment.git

cd finacPlus-FE-assingment
```

### 2 Install Dependencies
```
cd main && pnpm install
cd ../music_lib && pnpm install
```


### 3 Configure Vite (Local Development)
Inside main/vite.config.ts:

- Comment the line that uses the deployed remote ``` (https://finac-plus-fe-music-lib.vercel.app/...) ```

- Uncomment the line that uses local remote ```(http://localhost:5001/...) ```



### 4 Run Apps

Start Micro Frontend (music_lib)

```
cd music_lib
pnpm serve 
```


Start Main App (Container) 

Open another terminal:
```
cd main
pnpm serve
```

visit 
``` 
http://localhost:5000  -> main application
http://localhost:5001  -> remote music_lib application

```


### 5 Deployment (Vercel)

Each app is deployed separately on Vercel:

Main App: https://finac-plus-fe-main.vercel.app

Music Library (Remote): https://finac-plus-fe-assingment.vercel.app/

When deploying:
- Make sure main/vite.config.ts uses the deployed remote URL:
``` 
remotes: {
  musicLibrary: "https://finac-plus-fe-assingment.vercel.app//assets/remoteEntry.js"
}
```


### 6 Demo Credentials

You can log in with the following credentials to test role-based authentication:

- For Admin -> Choose admin
- For uSER -> Choose USER


- Admin → Can add and delete songs

- User → Can only view, filter, and sort songs


### 7 How It Works

- I use Vite Module Federation (@originjs/vite-plugin-federation)

- music_lib exposes ./Library (its main App component)

- main dynamically imports this exposed module at runtime and renders it

- This allows independent deployment — music_lib can be updated without redeploying main

#### Role-Based Authentication

- A simple mock JWT is stored in localStorage

- Context API (AuthContext) manages current role

- Components check the role to conditionally show/hide Add/Delete controls



### 8 Deliverables

GitHub Repo → https://github.com/sanke08/finacPlus-FE-assingment/

Live Demo Links:

- Main App: https://finac-plus-fe-main.vercel.app

- Music Library: https://finac-plus-fe-assingment.vercel.app/