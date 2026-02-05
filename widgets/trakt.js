WidgetMetadata = {
    id: "vokdn.trakt",
    title: "Trakt",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    description: "Access your Trakt watchlist, recommendations, lists, calendar and history",
    author: "vokdn",
    site: "https://github.com/Corpse00/ForwardWidgets",

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
            id: "recommendations",
            title: "Recommendations",
            functionName: "loadRecommendations",
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "movies",
                    enumOptions: [
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "calendar",
            title: "Calendar",
            functionName: "loadCalendar",
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "my-shows",
                    enumOptions: [
                        { title: "My Shows", value: "my-shows" },
                        { title: "My Movies", value: "my-movies" },
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
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "trending",
            title: "Trending",
            functionName: "loadTrending",
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "movies",
                    enumOptions: [
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "popular",
            title: "Popular",
            functionName: "loadPopular",
            params: [
                {
                    name: "type",
                    title: "Type",
                    type: "enumeration",
                    value: "movies",
                    enumOptions: [
                        { title: "Movies", value: "movies" },
                        { title: "TV Shows", value: "shows" }
                    ]
                },
                { name: "page", title: "Page", type: "page" }
            ]
        },
        {
            id: "lists",
            title: "Public Lists",
            functionName: "loadList",
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
    const headers = {
        "Content-Type": "application/json",
        "trakt-api-version": API_VERSION,
        "trakt-api-key": params.clientId
    };

    if (params.accessToken) {
        headers["Authorization"] = `Bearer ${params.accessToken}`;
    }

    return headers;
}

// OAuth Device Authorization Flow
async function authorize(params) {
    const { clientId, deviceCode } = params;

    if (!clientId) {
        return [{
            id: "error",
            type: "text",
            title: "Client ID Required",
            description: "Create an app at trakt.tv/oauth/applications and enter your Client ID in global params"
        }];
    }

    // Step 1: If no device code, start the flow
    if (!deviceCode) {
        try {
            const response = await Widget.http.post(`${API_BASE}/oauth/device/code`, {
                body: JSON.stringify({ client_id: clientId }),
                headers: { "Content-Type": "application/json" }
            });

            const data = response.data;

            return [{
                id: "auth-instructions",
                type: "text",
                title: "Authorization Required",
                description: `1. Visit: ${data.verification_url}\n2. Enter code: ${data.user_code}\n3. After authorizing, paste this device code in the field above:\n\n${data.device_code}`
            }];
        } catch (error) {
            return [{
                id: "error",
                type: "text",
                title: "Authorization Failed",
                description: error.message
            }];
        }
    }

    // Step 2: If device code provided, poll for token
    try {
        const response = await Widget.http.post(`${API_BASE}/oauth/device/token`, {
            body: JSON.stringify({
                code: deviceCode,
                client_id: clientId
            }),
            headers: { "Content-Type": "application/json" }
        });

        const data = response.data;

        if (data.access_token) {
            return [{
                id: "success",
                type: "text",
                title: "Authorization Successful",
                description: `Copy this access token to your global params:\n\n${data.access_token}`
            }];
        }
    } catch (error) {
        return [{
            id: "pending",
            type: "text",
            title: "Authorization Pending",
            description: "Please complete authorization at trakt.tv/activate, then try again"
        }];
    }
}

// Fetch TMDB details for rich metadata
async function enrichWithTmdb(items, mediaType) {
    const enriched = await Promise.all(items.map(async (item) => {
        const media = item.movie || item.show || item;
        const type = item.movie ? "movie" : (item.show ? "tv" : mediaType);

        if (!media?.ids?.tmdb) {
            return null;
        }

        try {
            const tmdb = await Widget.tmdb.get(`/${type}/${media.ids.tmdb}`, {
                params: { language: "en-US" }
            });

            const releaseDate = tmdb.release_date || tmdb.first_air_date || "";
            const year = releaseDate.substring(0, 4);

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
                genreTitle: year
            };
        } catch (e) {
            return null;
        }
    }));

    return enriched.filter(Boolean);
}

// Watchlist
async function loadWatchlist(params) {
    const { type, sort, page = 1 } = params;
    const limit = 20;

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
        const mediaType = type === "movies" ? "movie" : "tv";

        return await enrichWithTmdb(data, mediaType);
    } catch (error) {
        console.error("Watchlist error:", error);
        return [];
    }
}

// Recommendations (requires OAuth)
async function loadRecommendations(params) {
    const { type, page = 1 } = params;
    const limit = 20;

    if (!params.accessToken) {
        return [{
            id: "error",
            type: "text",
            title: "Authentication Required",
            description: "Recommendations require OAuth. Use the Authorize module first."
        }];
    }

    try {
        const response = await Widget.http.get(
            `${API_BASE}/recommendations/${type}?page=${page}&limit=${limit}&extended=full`,
            { headers: getHeaders(params) }
        );

        const data = response.data || [];
        const mediaType = type === "movies" ? "movie" : "tv";

        // Wrap items in expected format
        const wrapped = data.map(item => ({
            [mediaType]: item
        }));

        return await enrichWithTmdb(wrapped, mediaType);
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
        const tmdbType = mediaType === "movies" ? "movie" : "tv";

        return await enrichWithTmdb(data, tmdbType);
    } catch (error) {
        console.error("Calendar error:", error);
        return [];
    }
}

// History
async function loadHistory(params) {
    const { type, page = 1 } = params;
    const limit = 20;

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
        const mediaType = type === "movies" ? "movie" : "tv";

        return await enrichWithTmdb(data, mediaType);
    } catch (error) {
        console.error("History error:", error);
        return [];
    }
}

// Trending (no auth required)
async function loadTrending(params) {
    const { type, page = 1 } = params;
    const limit = 20;

    try {
        const response = await Widget.http.get(
            `${API_BASE}/${type}/trending?page=${page}&limit=${limit}`,
            { headers: getHeaders(params) }
        );

        const data = response.data || [];
        const mediaType = type === "movies" ? "movie" : "tv";

        return await enrichWithTmdb(data, mediaType);
    } catch (error) {
        console.error("Trending error:", error);
        return [];
    }
}

// Popular (no auth required)
async function loadPopular(params) {
    const { type, page = 1 } = params;
    const limit = 20;

    try {
        const response = await Widget.http.get(
            `${API_BASE}/${type}/popular?page=${page}&limit=${limit}`,
            { headers: getHeaders(params) }
        );

        const data = response.data || [];
        const mediaType = type === "movies" ? "movie" : "tv";

        // Wrap items in expected format
        const wrapped = data.map(item => ({
            [mediaType]: item
        }));

        return await enrichWithTmdb(wrapped, mediaType);
    } catch (error) {
        console.error("Popular error:", error);
        return [];
    }
}

// Public Lists (no auth required)
async function loadList(params) {
    const { username, listSlug, sort = "rank", page = 1 } = params;
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
        const response = await Widget.http.get(
            `${API_BASE}/users/${username}/lists/${listSlug}/items?page=${page}&limit=${limit}&sort=${sort}`,
            { headers: getHeaders(params) }
        );

        const data = response.data || [];

        return await enrichWithTmdb(data, "movie");
    } catch (error) {
        console.error("List error:", error);
        return [];
    }
}
