WidgetMetadata = {
  id: "vokdn.tmdb",
  title: "TMDB",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Get TMDB chart data",
  author: "vokdn",
  site: "https://github.com/Corpse00/ForwardWidgets",
  modules: [
    {
      id: "nowPlaying",
      title: "Now Playing",
      functionName: "nowPlaying",
      cacheDuration: 43200,
      params: [
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "trending",
      title: "Trending",
      functionName: "trending",
      cacheDuration: 43200,
      params: [
        {
          name: "time_window",
          title: "Time Window",
          type: "enumeration",
          enumOptions: [
            {
              title: "Today",
              value: "day",
            },
            {
              title: "This Week",
              value: "week",
            },
          ],
        },
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "popular",
      title: "Popular",
      functionName: "popular",
      cacheDuration: 43200,
      params: [
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
        {
          name: "page",
          title: "Page",
          type: "page",
        },
      ],
    },
    {
      id: "topRated",
      title: "Top Rated",
      functionName: "topRated",
      cacheDuration: 43200,
      params: [
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "categories",
      title: "Categories",
      functionName: "categories",
      cacheDuration: 43200,
      params: [
        {
          name: "with_genres",
          title: "Category",
          type: "enumeration",
          enumOptions: [
            {
              title: "Family",
              value: "10751",
            },
            {
              title: "Animation",
              value: "16",
            },
            {
              title: "Comedy",
              value: "35",
            },
            {
              title: "Crime",
              value: "80",
            },
            {
              title: "Documentary",
              value: "99",
            },
            {
              title: "Drama",
              value: "18",
            },
            {
              title: "Mystery",
              value: "9648",
            },
            {
              title: "Western",
              value: "37",
            },
            {
              title: "Kids",
              value: "10762",
            },
            {
              title: "Sci-Fi",
              value: "878",
            },
            {
              title: "Action",
              value: "28",
            },
            {
              title: "Thriller",
              value: "53",
            },
            {
              title: "Reality",
              value: "10764",
            },
          ],
        },
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          belongTo: {
            paramName: "with_genres",
            value: ["16", "35", "80", "99", "18", "878", "9648", "37", "10751"],
          },
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "with_origin_country",
          title: "Country",
          type: "input",
          belongTo: {
            paramName: "with_genres",
            value: ["10764"],
          },
          value: "US",
          placeholders: [
            {
              title: "India",
              value: "IN",
            },
            {
              title: "USA",
              value: "US",
            },
            {
              title: "UK",
              value: "GB",
            },
            {
              title: "Japan",
              value: "JP",
            },
            {
              title: "Korea",
              value: "KR",
            },
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "networks",
      title: "Networks",
      functionName: "networks",
      cacheDuration: 43200,
      params: [
        {
          name: "with_networks",
          title: "Network",
          type: "input",
          placeholders: [
            {
              title: "Netflix",
              value: "213",
            },
            {
              title: "Disney+",
              value: "2739",
            },
            {
              title: "Apple TV+",
              value: "2552",
            },
            {
              title: "HBO Max",
              value: "3186",
            },
            {
              title: "Hulu",
              value: "453",
            },
            {
              title: "Prime Video",
              value: "1024",
            },
            {
              title: "Paramount+",
              value: "4330",
            },
            {
              title: "Hoichoi",
              value: "121059",
            },
            {
              title: "Chorki",
              value: "157210",
            },
            {
              title: "Bongo",
              value: "161019",
            }
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "companies",
      title: "Production Companies",
      functionName: "companies",
      cacheDuration: 43200,
      params: [
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          value: "movie",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "with_companies",
          title: "Company",
          type: "enumeration",
          enumOptions: [
            {
              title: "Disney",
              value: "2",
            },
            {
              title: "Warner Bros.",
              value: "174",
            },
            {
              title: "Columbia Pictures",
              value: "5",
            },
            {
              title: "Sony Pictures",
              value: "34",
            },
            {
              title: "Universal Pictures",
              value: "33",
            },
            {
              title: "Paramount Pictures",
              value: "4",
            },
            {
              title: "20th Century Studios",
              value: "25",
            },
            {
              title: "Lionsgate",
              value: "1632",
            },
          ]
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ]
    },
    {
      id: "list",
      title: "Lists",
      functionName: "list",
      cacheDuration: 43200,
      params: [
        {
          name: "url",
          title: "List URL",
          type: "input",
          description: "TMDB List URL",
          placeholders: [
            {
              title: "Oscar Best Picture",
              value: "https://www.themoviedb.org/list/8512095-2025-oscar-nominations-for-best-picture-97th-academy-awards",
            }
          ],
        }
      ],
    },
    {
      id: "collections",
      title: "Collections",
      functionName: "collections",
      cacheDuration: 43200,
      params: [
        {
          name: "collection_id",
          title: "Collection",
          type: "enumeration",
          enumOptions: [
            { title: "MCU", value: "86311" },
            { title: "DCEU", value: "8028" },
            { title: "Star Wars", value: "10" },
            { title: "James Bond", value: "645" },
            { title: "Lord of the Rings", value: "119" },
            { title: "Harry Potter", value: "1241" },
            { title: "John Wick", value: "403374" },
            { title: "Mission Impossible", value: "87359" },
          ],
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    }
  ],
};

// Base method to fetch TMDB data
async function fetchData(api, params, forceMediaType) {
  try {
    const response = await Widget.tmdb.get(api, { params: params });

    if (!response) {
      throw new Error("Failed to fetch data");
    }

    console.log(response);
    let data = response.results;

    // If no forceMediaType, filter to only keep movie and tv data
    if (!forceMediaType) {
      data = data.filter((item) => {
        let mediaType = item.media_type;
        if (mediaType == null) {
          if (item.title) {
            mediaType = "movie";
          } else {
            mediaType = "tv";
          }
        }
        return mediaType === "movie" || mediaType === "tv";
      });
    }

    const result = data.map((item) => {
      let mediaType = item.media_type;
      if (forceMediaType) {
        mediaType = forceMediaType;
      } else if (mediaType == null) {
        if (item.title) {
          mediaType = "movie";
        } else {
          mediaType = "tv";
        }
      }
      return {
        id: item.id,
        type: "tmdb",
        title: item.title ?? item.name,
        description: item.overview,
        releaseDate: item.release_date ?? item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: mediaType,
        genreTitle: genreTitleWith(item.genre_ids),
      };
    });

    return result;
  } catch (error) {
    console.error("Failed to call TMDB API:", error);
    throw error;
  }
}

async function nowPlaying(params) {
  const type = params.type;
  if (type === "all") {
    const [movies, tv] = await Promise.all([
      fetchData("movie/now_playing", { ...params, type: "movie" }, "movie"),
      fetchData("tv/on_the_air", { ...params, type: "tv" }, "tv"),
    ]);

    const result = [];
    for (let i = 0; i < Math.max(movies.length, tv.length); i++) {
      if (movies[i]) result.push(movies[i]);
      if (tv[i]) result.push(tv[i]);
    }
    return result;
  }

  let api = "tv/on_the_air";
  if (type === "movie") {
    api = "movie/now_playing";
  }
  return await fetchData(api, params, type);
}

async function trending(params) {
  const type = params.type || "all";
  const timeWindow = params.time_window || "day";
  const api = `trending/${type}/${timeWindow}`;
  delete params.type;
  delete params.time_window;
  return await fetchData(api, params, type === "all" ? null : type);
}

async function popular(params) {
  const type = params.type;
  if (type === "all") {
    const [movies, tv] = await Promise.all([
      fetchData("movie/popular", { ...params, type: "movie" }, "movie"),
      fetchData("tv/popular", { ...params, type: "tv" }, "tv"),
    ]);

    const result = [];
    for (let i = 0; i < Math.max(movies.length, tv.length); i++) {
      if (movies[i]) result.push(movies[i]);
      if (tv[i]) result.push(tv[i]);
    }
    return result;
  }

  let api = `movie/popular`;
  if (type === "tv") {
    api = `tv/popular`;
  }
  delete params.type;
  return await fetchData(api, params, type);
}

async function topRated(params) {
  const type = params.type;
  if (type === "all") {
    const [movies, tv] = await Promise.all([
      fetchData("movie/top_rated", { ...params, type: "movie" }, "movie"),
      fetchData("tv/top_rated", { ...params, type: "tv" }, "tv"),
    ]);

    const result = [];
    for (let i = 0; i < Math.max(movies.length, tv.length); i++) {
      if (movies[i]) result.push(movies[i]);
      if (tv[i]) result.push(tv[i]);
    }
    return result;
  }

  let api = `movie/top_rated`;
  if (type === "tv") {
    api = `tv/top_rated`;
  }
  delete params.type;
  return await fetchData(api, params, type);
}

async function categories(params) {
  let genreId = params.with_genres;
  const type = params.type;

  if (type === "all") {
    const [movies, tv] = await Promise.all([
      categories({ ...params, type: "movie" }),
      categories({ ...params, type: "tv" }),
    ]);

    const result = [];
    for (let i = 0; i < Math.max(movies.length, tv.length); i++) {
      if (movies[i]) result.push(movies[i]);
      if (tv[i]) result.push(tv[i]);
    }
    return result;
  }

  const onlyMovieGenreIds = ["28", "53"]; // Action, Thriller
  const onlyTvGenreIds = ["10762", "10764", "10766"]; // Kids, Reality, Soap
  let fetchType = type;

  if (genreId == "878" && fetchType == "tv") {
    genreId = "10765";
  }
  if (onlyMovieGenreIds.includes(genreId)) {
    fetchType = "movie";
  }
  if (onlyTvGenreIds.includes(genreId)) {
    fetchType = "tv";
  }
  const api = `discover/${fetchType}`;
  const fetchParams = { ...params, with_genres: genreId };
  delete fetchParams.type;
  return await fetchData(api, fetchParams, fetchType);
}

async function collections(params) {
  const id = params.collection_id;
  let items = [];

  // Use keyword discovery for MCU (86311) and DCEU (8028) to get full lists
  if (id === "86311" || id === "8028") {
    const keywordId = id === "86311" ? "180547" : "229266";
    const res = await Widget.tmdb.get("discover/movie", {
      params: { ...params, with_keywords: keywordId }
    });
    items = res.results || [];
  } else {
    const res = await Widget.tmdb.get(`collection/${id}`, { params });
    items = res.parts || [];
  }

  const result = items.map((item) => ({
    id: item.id,
    type: "tmdb",
    title: item.title,
    description: item.overview,
    releaseDate: item.release_date,
    backdropPath: item.backdrop_path,
    posterPath: item.poster_path,
    rating: item.vote_average,
    mediaType: "movie",
    genreTitle: genreTitleWith(item.genre_ids),
  }));

  // Sort: New to Old
  return result.sort((a, b) => {
    const dateA = a.releaseDate ? new Date(a.releaseDate) : new Date(0);
    const dateB = b.releaseDate ? new Date(b.releaseDate) : new Date(0);
    return dateB - dateA;
  });
}

async function networks(params) {
  const networkId = params.with_networks;

  // Bengali streaming services are Companies, not Networks in TMDB
  const bengaliCompanies = ["121059", "157210", "161019"];
  const isBengali = bengaliCompanies.includes(networkId);

  const api = `discover/tv`;
  const fetchParams = { ...params };

  if (isBengali) {
    delete fetchParams.with_networks;
    fetchParams.with_companies = networkId;
  }

  return await fetchData(api, fetchParams, "tv");
}

async function companies(params) {
  const type = params.type || "movie";
  if (type === "all") {
    const [movies, tv] = await Promise.all([
      fetchData("discover/movie", { ...params, type: "movie" }, "movie"),
      fetchData("discover/tv", { ...params, type: "tv" }, "tv"),
    ]);

    const result = [];
    for (let i = 0; i < Math.max(movies.length, tv.length); i++) {
      if (movies[i]) result.push(movies[i]);
      if (tv[i]) result.push(tv[i]);
    }
    return result;
  }

  const api = `discover/${type}`;
  delete params.type;
  return await fetchData(api, params, type);
}

async function list(params = {}) {
  let url = params.url;

  // append ?view=grid
  if (!url.includes("view=grid")) {
    if (url.includes("?")) {
      url = url + "&view=grid";
    } else {
      url = url + "?view=grid";
    }
  }

  console.log("Requesting list page:", url);
  // Send request to get list page
  const response = await Widget.http.get(url, {
    headers: {
      Referer: `https://www.themoviedb.org/`,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });

  if (!response || !response.data) {
    throw new Error("Failed to get list data");
  }


  console.log("List page data length:", response.data.length);
  console.log("Starting parsing");

  // Parse HTML to get document ID
  const $ = Widget.html.load(response.data);
  if (!$ || $ === null) {
    throw new Error("Failed to parse HTML");
  }

  // Get all video items, get element ID array
  const coverElements = $(".block.aspect-poster");

  console.log("items:", coverElements);

  let tmdbIds = [];
  for (const itemId of coverElements) {
    const $item = $(itemId);
    const link = $item.attr("href");
    if (!link) {
      continue;
    }
    const match = link.match(/^\/(movie|tv)\/([^\/-]+)-/)
    const type = match?.[1];
    const id = match?.[2];
    if (id && type) {
      tmdbIds.push({ id: `${type}.${id}`, type: 'tmdb' });
    }
  }

  return tmdbIds;
}

function genreTitleWith(genre_ids) {
  if (!genre_ids) {
    return "";
  }
  const genreDict = [
    { "id": 10759, "name": "Action & Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 10762, "name": "Kids" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10763, "name": "News" },
    { "id": 10764, "name": "Reality" },
    { "id": 10765, "name": "Sci-Fi & Fantasy" },
    { "id": 10766, "name": "Soap" },
    { "id": 10767, "name": "Talk" },
    { "id": 10768, "name": "War & Politics" },
    { "id": 37, "name": "Western" },
    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 14, "name": "Fantasy" },
    { "id": 36, "name": "History" },
    { "id": 27, "name": "Horror" },
    { "id": 10402, "name": "Music" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10749, "name": "Romance" },
    { "id": 878, "name": "Sci-Fi" },
    { "id": 10770, "name": "TV Movie" },
    { "id": 53, "name": "Thriller" },
    { "id": 10752, "name": "War" },
    { "id": 37, "name": "Western" },
  ]
  if (genre_ids.length > 2) {
    genre_ids = genre_ids.slice(0, 2);
  }
  const result = genre_ids.map(id => {
    const genre = genreDict.find(genre => genre.id == id);
    if (genre) {
      return genre.name;
    }
    return null;
  }).filter(genre => genre !== null).join(", ");
  return result;
}