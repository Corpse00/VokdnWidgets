WidgetMetadata = {
    id: "vokdn.trakt",
    title: "Trakt",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    description: "Access your Trakt watchlist, recommendations, lists, calendar and history",
    author: "Vokdn",
    site: "https://github.com/Corpse00/VokdnWidgets",

    globalParams: [
        {
            name: "clientId",
            title: "Client ID",
            type: "input",
            description: "Create an app at trakt.tv/oauth/applications to get your Client ID"
        },
        {
            name: "accessToken",
            title: "Access Token",
            type: "input",
            description: "Get token: 1) Create app at trakt.tv/oauth/applications 2) Use POST https://api.trakt.tv/oauth/device/code with your client_id 3) Visit trakt.tv/activate and enter the user_code 4) Poll POST https://api.trakt.tv/oauth/device/token to get access_token"
        }
    ],

    modules: [
        {
            id: "watchlist",
            title: "Watchlist",
            functionName: "loadWatchlist",
            cacheDuration: 43200,
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "All", value: "all" },
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                {
                    name: "sort",
                    title: "Sort By",
                    type: "enumeration",
                    value: "added",
                    enumOptions: [
                        { title: "Date Added", value: "added" },
                        { title: "Title", value: "title" },
                        { title: "Release Date", value: "released" },
                        { title: "Rank", value: "rank" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "favorites",
            title: "Favorites",
            functionName: "loadFavorites",
            cacheDuration: 43200,
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "All", value: "all" },
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                {
                    name: "sort",
                    title: "Sort By",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "Default", value: "default" },
                        { title: "Rating", value: "rating" },
                        { title: "Release Date", value: "release_date" },
                        { title: "Title", value: "title" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "recommendations",
            title: "Recommendations",
            functionName: "loadRecommendations",
            cacheDuration: 43200,
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "All", value: "all" },
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                {
                    name: "sort",
                    title: "Sort By",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "Default", value: "default" },
                        { title: "Rating", value: "rating" },
                        { title: "Release Date", value: "release_date" },
                        { title: "Title", value: "title" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "calendar",
            title: "Calendar",
            functionName: "loadCalendar",
            cacheDuration: 43200,
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "my-shows",
                    enumOptions: [
                        { title: "My All", value: "my-all" },
                        { title: "My Shows", value: "my-shows" },
                        { title: "My Movies", value: "my-movies" },
                        { title: "New All", value: "all-all" },
                        { title: "New Shows", value: "all-shows" },
                        { title: "New Movies", value: "all-movies" }
                    ]
                },
                {
                    name: "days",
                    title: "Days",
                    type: "enumeration",
                    value: "7",
                    enumOptions: [
                        { title: "7 Days", value: "7" },
                        { title: "14 Days", value: "14" },
                        { title: "30 Days", value: "30" }
                    ]
                }
            ]
        },
        {
            id: "history",
            title: "History",
            functionName: "loadHistory",
            cacheDuration: 43200,
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "All", value: "all" },
                        { title: "Movies", value: "movies" },
                        { title: "Shows", value: "shows" }
                    ]
                },
                {
                    name: "sort",
                    title: "Sort By",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "Default", value: "default" },
                        { title: "Rating", value: "rating" },
                        { title: "Release Date", value: "release_date" },
                        { title: "Title", value: "title" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "trending",
            title: "Trending",
            functionName: "loadTrending",
            cacheDuration: 43200,
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "movies",
                    enumOptions: [
                        { title: "All", value: "all" },
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                {
                    name: "sort",
                    title: "Sort By",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "Default", value: "default" },
                        { title: "Rating", value: "rating" },
                        { title: "Release Date", value: "release_date" },
                        { title: "Title", value: "title" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "popular",
            title: "Popular",
            functionName: "loadPopular",
            cacheDuration: 43200,
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "movies",
                    enumOptions: [
                        { title: "All", value: "all" },
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                {
                    name: "sort",
                    title: "Sort By",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "Default", value: "default" },
                        { title: "Rating", value: "rating" },
                        { title: "Release Date", value: "release_date" },
                        { title: "Title", value: "title" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "myLists",
            title: "My Lists",
            functionName: "loadMyLists",
            cacheDuration: 43200,
            params: [
                {
                    name: "listSlug",
                    title: "List",
                    type: "input",
                    description: "Your list slug (from URL). Leave empty to see all your lists."
                },
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "All", value: "all" },
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                {
                    name: "sort",
                    title: "Sort By",
                    type: "enumeration",
                    value: "rank",
                    enumOptions: [
                        { title: "Rank", value: "rank" },
                        { title: "Date Added", value: "added" },
                        { title: "Title", value: "title" },
                        { title: "Release Date", value: "released" },
                        { title: "Popularity", value: "popularity" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "lists",
            title: "Public Lists",
            functionName: "loadList",
            cacheDuration: 43200,
            params: [
                {
                    name: "username",
                    title: "Username",
                    type: "input",
                    description: "Trakt username",
                    placeholders: [
                        { title: "giladg", value: "giladg" }
                    ]
                },
                {
                    name: "listSlug",
                    title: "List Slug",
                    type: "input",
                    description: "List name from URL",
                    placeholders: [
                        { title: "latest-4k-releases", value: "latest-4k-releases" }
                    ]
                },
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "All", value: "all" },
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                {
                    name: "sort",
                    title: "Sort By",
                    type: "enumeration",
                    value: "rank",
                    enumOptions: [
                        { title: "Rank", value: "rank" },
                        { title: "Date Added", value: "added" },
                        { title: "Title", value: "title" },
                        { title: "Release Date", value: "released" },
                        { title: "Popularity", value: "popularity" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        }
    ]
};

// API Configuration
const API_BASE = "https://api.trakt.tv";
const API_VERSION = "2";

function getHeaders(params) {
    const cleanParam = (val) => typeof val === 'string' ? val.replace(/^(cid|acctoken|token|key):\s*/i, '').trim() : val;

    const clientId = cleanParam(params.clientId);
    const accessToken = cleanParam(params.accessToken);

    const headers = {
        "Content-Type": "application/json",
        "trakt-api-version": API_VERSION,
        "trakt-api-key": clientId || ""
    };

    if (accessToken) {
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return headers;
}

// Sort enriched results client-side
function sortResults(items, sortBy) {
    if (!sortBy || sortBy === "default" || sortBy === "rank") return items;
    return [...items].sort((a, b) => {
        if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
        if (sortBy === "release_date" || sortBy === "released") {
            const dateA = a.releaseDate ? new Date(a.releaseDate) : new Date(0);
            const dateB = b.releaseDate ? new Date(b.releaseDate) : new Date(0);
            return dateB - dateA;
        }
        if (sortBy === "title") return (a.title || "").localeCompare(b.title || "");
        if (sortBy === "added") return 0; // preserve API order (already sorted by added)
        if (sortBy === "popularity") return (b.rating || 0) - (a.rating || 0); // use rating as proxy
        return 0;
    });
}

// Fetch TMDB details for rich metadata
async function enrichWithTmdb(items, mediaType) {
    if (!items || items.length === 0) {
        return [];
    }

    const enriched = await Promise.all(items.map(async (item) => {
        // Trakt API returns different structures depending on the endpoint.
        // We try to find the media object under 'movie', 'show', or as the item itself.
        const media = item.movie || item.show || item.tv || item;
        const type = item.movie ? "movie" : (item.show || item.tv ? "tv" : mediaType);

        if (!media?.ids?.tmdb) {
            console.warn(`Item missing TMDB ID:`, JSON.stringify(item).substring(0, 100));
            return null;
        }

        try {
            const tmdb = await Widget.tmdb.get(`${type}/${media.ids.tmdb}`, {
                params: { language: "en-US" }
            });

            if (!tmdb) return null;

            const releaseDate = tmdb.release_date || tmdb.first_air_date || "";
            const genres = tmdb.genres
                ? tmdb.genres.map(g => g.name).slice(0, 2).join(", ")
                : "";

            return {
                id: String(tmdb.id),
                tmdbId: tmdb.id,
                type: "tmdb",
                mediaType: type,
                title: tmdb.title || tmdb.name,
                description: tmdb.overview,
                releaseDate: releaseDate,
                posterPath: tmdb.poster_path,
                backdropPath: tmdb.backdrop_path,
                rating: tmdb.vote_average,
                genreTitle: genres
            };
        } catch (e) {
            console.error(`Failed to enrich item ${media.ids.tmdb}:`, e.message);
            return null;
        }
    }));

    return enriched.filter(Boolean);
}

// Simple text response for empty states
function emptyState(title, description) {
    return [{
        id: "empty",
        type: "text",
        title: title || "No Content",
        description: description || "No items found in this category."
    }];
}

// Watchlist (requires OAuth)
async function loadWatchlist(params) {
    const { type, sort, page = 1 } = params;
    const limit = 20;

    if (!params.accessToken) {
        return [{
            id: "error",
            type: "text",
            title: "Authentication Required",
            description: "Watchlist requires OAuth. Please enter your Client ID and Access Token in the Global Parameters."
        }];
    }

    let endpoint = "/users/me/watchlist";
    if (type !== "all") {
        endpoint += `/${type}`;
    }
    endpoint += `?page=${page}&limit=${limit}&sort=${sort}`;

    try {
        const response = await Widget.http.get(`${API_BASE}${endpoint}`, {
            headers: getHeaders(params)
        });

        const data = response.data || [];
        if (data.length === 0) {
            return emptyState("Watchlist is Empty", "You haven't added anything to your Trakt watchlist yet.");
        }

        // The watchlist API returns an array of objects where each object has a 'type' property
        // and a property named after that type (e.g. {type: 'movie', movie: {...}})
        return await enrichWithTmdb(data, "movie");
    } catch (error) {
        console.error("Watchlist error:", error);
        return [];
    }
}

// Recommendations (requires OAuth)
async function loadRecommendations(params) {
    const { type, sort, page = 1 } = params;
    const limit = 20;

    if (!params.accessToken) {
        return [{
            id: "error",
            type: "text",
            title: "Authentication Required",
            description: "Recommendations require OAuth. Please enter your Client ID and Access Token in the Global Parameters."
        }];
    }

    try {
        if (type === "all") {
            const [moviesRes, showsRes] = await Promise.all([
                Widget.http.get(
                    `${API_BASE}/recommendations/movies?page=${page}&limit=${Math.ceil(limit / 2)}&extended=full`,
                    { headers: getHeaders(params) }
                ).catch(() => ({ data: [] })),
                Widget.http.get(
                    `${API_BASE}/recommendations/shows?page=${page}&limit=${Math.floor(limit / 2)}&extended=full`,
                    { headers: getHeaders(params) }
                ).catch(() => ({ data: [] }))
            ]);

            const movies = (moviesRes.data || []).map(item => ({ movie: item }));
            const shows = (showsRes.data || []).map(item => ({ show: item }));

            // Interleave results
            const interleaved = [];
            const max = Math.max(movies.length, shows.length);
            for (let i = 0; i < max; i++) {
                if (movies[i]) interleaved.push(movies[i]);
                if (shows[i]) interleaved.push(shows[i]);
            }

            if (interleaved.length === 0) {
                return emptyState("No Recommendations", "Trakt doesn't have any recommendations for you yet. Try watching and rating more content!");
            }

            return sortResults(await enrichWithTmdb(interleaved, "movie"), sort);
        } else {
            const response = await Widget.http.get(
                `${API_BASE}/recommendations/${type}?page=${page}&limit=${limit}&extended=full`,
                { headers: getHeaders(params) }
            );

            const data = response.data || [];
            if (data.length === 0) {
                return emptyState(`No ${type === "movies" ? "Movie" : "Show"} Recommendations`);
            }

            const mediaType = type === "movies" ? "movie" : "tv";

            // Wrap items in expected format (Trakt recommendations return items directly, not wrapped)
            const wrapped = data.map(item => ({
                [mediaType === "movie" ? "movie" : "show"]: item
            }));

            return sortResults(await enrichWithTmdb(wrapped, mediaType), sort);
        }
    } catch (error) {
        console.error("Recommendations error:", error);
        return [{
            id: "error",
            type: "text",
            title: "Recommendations Failed",
            description: `Error: ${error.message || JSON.stringify(error)}\n\nCheck: 1) Access token is valid 2) Client ID matches the app that created the token 3) Token has correct permissions`
        }];
    }
}

// Calendar
async function loadCalendar(params) {
    const { type, days = "7" } = params;
    const today = new Date().toISOString().split("T")[0];

    if (type === "my-all" || type === "all-all") {
        const isPersonal = type.startsWith("my-");
        const base = isPersonal ? "/calendars/my" : "/calendars/all";

        const [moviesRes, showsRes] = await Promise.all([
            Widget.http.get(`${API_BASE}${base}/movies/${today}/${days}`, {
                headers: getHeaders(params)
            }).catch(() => ({ data: [] })),
            Widget.http.get(`${API_BASE}${base}/shows/${today}/${days}`, {
                headers: getHeaders(params)
            }).catch(() => ({ data: [] }))
        ]);

        const movies = moviesRes.data || [];
        const shows = showsRes.data || [];

        // Interleave results
        const interleaved = [];
        const max = Math.max(movies.length, shows.length);
        for (let i = 0; i < max; i++) {
            if (movies[i]) interleaved.push(movies[i]);
            if (shows[i]) interleaved.push(shows[i]);
        }

        if (interleaved.length === 0) {
            return emptyState("Calendar is Empty", "No upcoming releases found for this period.");
        }

        return await enrichWithTmdb(interleaved, "movie");
    }

    const isPersonal = type.startsWith("my-");
    const mediaType = type.includes("shows") ? "shows" : "movies";

    let endpoint = isPersonal
        ? `/calendars/my/${mediaType}/${today}/${days}`
        : `/calendars/all/${mediaType}/${today}/${days}`;

    try {
        const response = await Widget.http.get(`${API_BASE}${endpoint}`, {
            headers: getHeaders(params)
        });

        const data = response.data || [];
        if (data.length === 0) {
            return emptyState("Calendar is Empty", "No upcoming releases found for this period.");
        }

        const tmdbType = mediaType === "movies" ? "movie" : "tv";
        return await enrichWithTmdb(data, tmdbType);
    } catch (error) {
        console.error("Calendar error:", error);
        return [];
    }
}

// History (requires OAuth)
async function loadHistory(params) {
    const { type, sort, page = 1 } = params;
    const limit = 20;

    if (!params.accessToken) {
        return [{
            id: "error",
            type: "text",
            title: "Authentication Required",
            description: "History requires OAuth. Please enter your Client ID and Access Token in the Global Parameters."
        }];
    }

    let endpoint = "/users/me/history";
    if (type !== "all") {
        endpoint += `/${type}`;
    }
    endpoint += `?page=${page}&limit=${limit}`;

    try {
        const response = await Widget.http.get(`${API_BASE}${endpoint}`, {
            headers: getHeaders(params)
        });

        const data = response.data || [];
        if (data.length === 0) {
            return emptyState("History is Empty", "You haven't watched anything yet.");
        }

        // History items have type and a property named after it
        return sortResults(await enrichWithTmdb(data, "movie"), sort);
    } catch (error) {
        console.error("History error:", error);
        return [];
    }
}

// Trending (no auth required)
async function loadTrending(params) {
    const { type, sort, page = 1 } = params;
    const limit = 20;

    try {
        if (type === "all") {
            const [moviesRes, showsRes] = await Promise.all([
                Widget.http.get(
                    `${API_BASE}/movies/trending?page=${page}&limit=${Math.ceil(limit / 2)}`,
                    { headers: getHeaders(params) }
                ).catch(() => ({ data: [] })),
                Widget.http.get(
                    `${API_BASE}/shows/trending?page=${page}&limit=${Math.floor(limit / 2)}`,
                    { headers: getHeaders(params) }
                ).catch(() => ({ data: [] }))
            ]);

            const movies = moviesRes.data || [];
            const shows = showsRes.data || [];
            const interleaved = [];
            const max = Math.max(movies.length, shows.length);
            for (let i = 0; i < max; i++) {
                if (movies[i]) interleaved.push({ movie: movies[i].movie || movies[i] });
                if (shows[i]) interleaved.push({ show: shows[i].show || shows[i] });
            }
            return sortResults(await enrichWithTmdb(interleaved, "movie"), sort);
        } else {
            const response = await Widget.http.get(
                `${API_BASE}/${type}/trending?page=${page}&limit=${limit}`,
                { headers: getHeaders(params) }
            );

            const data = response.data || [];
            if (data.length === 0) return [];

            const mediaType = type === "movies" ? "movie" : "tv";
            return sortResults(await enrichWithTmdb(data, mediaType), sort);
        }
    } catch (error) {
        console.error("Trending error:", error);
        return [];
    }
}

// Popular (no auth required)
async function loadPopular(params) {
    const { type, sort, page = 1 } = params;
    const limit = 20;

    try {
        if (type === "all") {
            const [moviesRes, showsRes] = await Promise.all([
                Widget.http.get(
                    `${API_BASE}/movies/popular?page=${page}&limit=${Math.ceil(limit / 2)}`,
                    { headers: getHeaders(params) }
                ).catch(() => ({ data: [] })),
                Widget.http.get(
                    `${API_BASE}/shows/popular?page=${page}&limit=${Math.floor(limit / 2)}`,
                    { headers: getHeaders(params) }
                ).catch(() => ({ data: [] }))
            ]);

            const movies = (moviesRes.data || []).map(item => ({ movie: item }));
            const shows = (showsRes.data || []).map(item => ({ show: item }));
            const interleaved = [];
            const max = Math.max(movies.length, shows.length);
            for (let i = 0; i < max; i++) {
                if (movies[i]) interleaved.push(movies[i]);
                if (shows[i]) interleaved.push(shows[i]);
            }
            return sortResults(await enrichWithTmdb(interleaved, "movie"), sort);
        } else {
            const response = await Widget.http.get(
                `${API_BASE}/${type}/popular?page=${page}&limit=${limit}`,
                { headers: getHeaders(params) }
            );

            const data = response.data || [];
            if (data.length === 0) return [];

            const mediaType = type === "movies" ? "movie" : "tv";
            const wrapped = data.map(item => ({
                [mediaType === "movie" ? "movie" : "show"]: item
            }));

            return sortResults(await enrichWithTmdb(wrapped, mediaType), sort);
        }
    } catch (error) {
        console.error("Popular error:", error);
        return [];
    }
}

// Favorites (requires OAuth)
async function loadFavorites(params) {
    const { type, sort, page = 1 } = params;
    const limit = 20;

    if (!params.accessToken) {
        return [{
            id: "error",
            type: "text",
            title: "Authentication Required",
            description: "Favorites requires OAuth. Please enter your Client ID and Access Token in the Global Parameters."
        }];
    }

    try {
        if (type === "all") {
            const [moviesRes, showsRes] = await Promise.all([
                Widget.http.get(
                    `${API_BASE}/users/me/favorites/movies?page=${page}&limit=${Math.ceil(limit / 2)}`,
                    { headers: getHeaders(params) }
                ).catch(() => ({ data: [] })),
                Widget.http.get(
                    `${API_BASE}/users/me/favorites/shows?page=${page}&limit=${Math.floor(limit / 2)}`,
                    { headers: getHeaders(params) }
                ).catch(() => ({ data: [] }))
            ]);

            const movies = (moviesRes.data || []).map(item => ({ movie: item.movie || item }));
            const shows = (showsRes.data || []).map(item => ({ show: item.show || item }));
            const interleaved = [];
            const max = Math.max(movies.length, shows.length);
            for (let i = 0; i < max; i++) {
                if (movies[i]) interleaved.push(movies[i]);
                if (shows[i]) interleaved.push(shows[i]);
            }

            if (interleaved.length === 0) {
                return emptyState("No Favorites", "You haven't added any favorites on Trakt yet.");
            }

            return sortResults(await enrichWithTmdb(interleaved, "movie"), sort);
        } else {
            const mediaType = type === "movies" ? "movies" : "shows";
            const response = await Widget.http.get(
                `${API_BASE}/users/me/favorites/${mediaType}?page=${page}&limit=${limit}`,
                { headers: getHeaders(params) }
            );

            const data = response.data || [];
            if (data.length === 0) {
                return emptyState("No Favorites", `No favorite ${type === "movies" ? "movies" : "shows"} found.`);
            }

            const tmdbType = type === "movies" ? "movie" : "tv";
            const wrapped = data.map(item => ({
                [tmdbType === "movie" ? "movie" : "show"]: item.movie || item.show || item
            }));

            return sortResults(await enrichWithTmdb(wrapped, tmdbType), sort);
        }
    } catch (error) {
        console.error("Favorites error:", error);
        return [];
    }
}

// My Lists (requires OAuth)
async function loadMyLists(params) {
    const { listSlug, type = "all", sort = "rank", page = 1 } = params;
    const limit = 20;

    if (!params.accessToken) {
        return [{
            id: "error",
            type: "text",
            title: "Authentication Required",
            description: "My Lists requires OAuth. Please enter your Client ID and Access Token in the Global Parameters."
        }];
    }

    try {
        // Fetch all user's lists for pairing detection
        const listsRes = await Widget.http.get(
            `${API_BASE}/users/me/lists`,
            { headers: getHeaders(params) }
        );
        const allLists = listsRes.data || [];

        // Build a map of paired lists: group movies-* and tv-* by their common suffix
        const pairs = {};
        const standalone = [];
        for (const list of allLists) {
            const slug = list.ids?.slug || "";
            if (slug.startsWith("movies-")) {
                const key = slug.slice(7);
                pairs[key] = pairs[key] || {};
                pairs[key].movies = list;
            } else if (slug.startsWith("tv-")) {
                const key = slug.slice(3);
                pairs[key] = pairs[key] || {};
                pairs[key].tv = list;
            } else {
                standalone.push(list);
            }
        }

        // If no list slug provided, show merged + standalone lists
        if (!listSlug) {
            if (allLists.length === 0) {
                return emptyState("No Lists", "You haven't created any lists on Trakt yet.");
            }

            const results = [];

            // Show merged pairs first
            for (const [key, pair] of Object.entries(pairs)) {
                if (pair.movies && pair.tv) {
                    const totalItems = (pair.movies.item_count || 0) + (pair.tv.item_count || 0);
                    const displayName = key.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
                    results.push({
                        id: key,
                        type: "text",
                        title: displayName,
                        description: `${totalItems} items (${pair.movies.item_count} movies + ${pair.tv.item_count} shows) • Slug: ${key}`
                    });
                } else {
                    const list = pair.movies || pair.tv;
                    results.push({
                        id: list.ids?.slug || list.name,
                        type: "text",
                        title: list.name,
                        description: `${list.item_count} items • Slug: ${list.ids?.slug}`
                    });
                }
            }

            // Show standalone lists
            for (const list of standalone) {
                results.push({
                    id: list.ids?.slug || list.name,
                    type: "text",
                    title: list.name,
                    description: `${list.item_count} items • Slug: ${list.ids?.slug}\n${list.description || ""}`
                });
            }

            return results;
        }

        // Check if the slug is a merged pair key
        const isMergedPair = pairs[listSlug]?.movies && pairs[listSlug]?.tv;
        // Also check if the slug directly matches an existing list
        const directMatch = allLists.find(l => l.ids?.slug === listSlug);

        if (isMergedPair) {
            const movieSlug = `movies-${listSlug}`;
            const tvSlug = `tv-${listSlug}`;
            const halfLimit = Math.ceil(limit / 2);

            if (type === "movies") {
                const res = await Widget.http.get(
                    `${API_BASE}/users/me/lists/${movieSlug}/items?page=${page}&limit=${limit}`,
                    { headers: getHeaders(params) }
                );
                return sortResults(await enrichWithTmdb(res.data || [], "movie"), sort);
            } else if (type === "shows") {
                const res = await Widget.http.get(
                    `${API_BASE}/users/me/lists/${tvSlug}/items?page=${page}&limit=${limit}`,
                    { headers: getHeaders(params) }
                );
                return sortResults(await enrichWithTmdb(res.data || [], "tv"), sort);
            } else {
                // All: fetch from both and interleave
                const [moviesRes, tvRes] = await Promise.all([
                    Widget.http.get(
                        `${API_BASE}/users/me/lists/${movieSlug}/items?page=${page}&limit=${halfLimit}`,
                        { headers: getHeaders(params) }
                    ).catch(() => ({ data: [] })),
                    Widget.http.get(
                        `${API_BASE}/users/me/lists/${tvSlug}/items?page=${page}&limit=${halfLimit}`,
                        { headers: getHeaders(params) }
                    ).catch(() => ({ data: [] }))
                ]);

                const movieItems = moviesRes.data || [];
                const tvItems = tvRes.data || [];
                const combined = [];
                const max = Math.max(movieItems.length, tvItems.length);
                for (let i = 0; i < max; i++) {
                    if (movieItems[i]) combined.push(movieItems[i]);
                    if (tvItems[i]) combined.push(tvItems[i]);
                }

                if (combined.length === 0) {
                    return emptyState("List is Empty", "This list has no items yet.");
                }

                return sortResults(await enrichWithTmdb(combined, "movie"), sort);
            }
        } else if (directMatch) {
            let endpoint = `/users/me/lists/${listSlug}/items`;
            if (type !== "all") {
                endpoint += `/${type === "movies" ? "movies" : "shows"}`;
            }

            const response = await Widget.http.get(
                `${API_BASE}${endpoint}?page=${page}&limit=${limit}`,
                { headers: getHeaders(params) }
            );

            const data = response.data || [];
            if (data.length === 0) {
                return emptyState("List is Empty", "This list has no items yet.");
            }

            return sortResults(await enrichWithTmdb(data, type === "movies" ? "movie" : "tv"), sort);
        } else {
            return emptyState("List Not Found", `No list found with slug "${listSlug}". Leave the field empty to see all your lists.`);
        }
    } catch (error) {
        console.error("My Lists error:", error);
        return [];
    }
}

// Public Lists (no auth required)
async function loadList(params) {
    const { username, listSlug, type = "all", sort = "rank", page = 1 } = params;
    const limit = 20;

    if (!username || !listSlug) {
        return [{
            id: "error",
            type: "text",
            title: "Missing Parameters",
            description: "Please enter both username and list slug"
        }];
    }

    try {
        let endpoint = `/users/${username}/lists/${listSlug}/items`;
        if (type !== "all") {
            endpoint += `/${type === "movies" ? "movies" : "shows"}`;
        }

        const response = await Widget.http.get(
            `${API_BASE}${endpoint}?page=${page}&limit=${limit}`,
            { headers: getHeaders(params) }
        );

        const data = response.data || [];

        return sortResults(await enrichWithTmdb(data, type === "movies" ? "movie" : "tv"), sort);
    } catch (error) {
        console.error("List error:", error);
        return [];
    }
}
