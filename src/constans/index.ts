import dayjs from "@/lib/dayjs";

const START_YEAR = 1940;
const CURRENT_YEAR = dayjs().year();

export const WEBSITE_URL = "https://www.kaguya.live";
export const DISCORD_URL = "https://discord.gg/382BEFfER6";
export const FACEBOOK_URL = "https://www.facebook.com/nguyenvuzxc1/";

export const REVALIDATE_TIME = 18000; // 5 hours
export const SKIP_TIME = 90; // 1m30s


export const SEASONS = [
    { value: "WINTER", label: "winterSeason"},
    { value: "SPRING", label: "springSeason"},
    { value: "SUMMER", label: "summerSeason"},
    { value: "FALL", label: "Fall Season"},

] as const;

export const STATUS = [
    { value: "FINISHED", label: "Finshed"},
    { value: "RELEASING" , label: "releasing"},
    { value: "NOT_YET_RELEASED", label: "not yet released"},
    { value: "CANCELLED", label: "cancled"},
    { value: "HIATUS", label: "hiatus"},
] as const;

export const FORMATS = [
    { value: "TV", label: "TV 프로그램"},
    { value: "TV_SHORT", label: "TV Shorts"},
    { value: "MOVIE", label: "영화"},
    { value: "SPECIAL", label: "스페셜" },
    { value: "OVA", label: "OVA"},
    { value: "ONA", label: "ONA"},
    { value: "MUSIC", label: "Music"},
    { value: "Manga", label: "만화"},
] as const 

export const ANIME_SORTS = [
    { value: "popularity", label: "인기순 정렬"},
    { value: "trending", label: "최신 트렌드 정렬"},
    { value: "favorites", label: "내가 찜한 콘텐츠"},
    { value: "averageScore", label: "평균 점수"},
    { value: "chapterUpdatedAt", label: "업데이트 시간"},
] as const;

export const GENRES = [
    {
        value: "Action",
        label: "액션",
        thumbnail:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-q0V5URebphSG.jpg",
    },
    {
        value: "Adventure",
        label: "Adventure",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
      },
      {
        value: "Comedy",
        label: "Comedy",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20464-HbmkPacki4sl.jpg",
      },
      {
        value: "Drama",
        label: "Drama",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n9253-JIhmKgBKsWUN.jpg",
      },
      {
        value: "Ecchi",
        label: "Ecchi",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108465-RgsRpTMhP9Sv.jpg",
      },
      {
        value: "Fantasy",
        label: "Fantasy",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101759-MhlCoeqnODso.jpg",
      },
      {
        value: "Hentai",
        label: "Hentai",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99894-MWIuMGnDIg1x.jpg",
      },
      {
        value: "Horror",
        label: "Horror",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101759-MhlCoeqnODso.jpg",
      },
      {
        value: "Mahou Shoujo",
        label: "Mahou Shoujo",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9756-d5M8NffgJJHB.jpg",
      },
      {
        value: "Mecha",
        label: "Mecha",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/30-gEMoHHIqxDgN.jpg",
      },
      {
        value: "Music",
        label: "Music",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20665-j4kSsfhfkM24.jpg",
      },
      {
        value: "Mystery",
        label: "Mystery",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n101291-fqIUvQ6apEtD.jpg",
      },
      {
        value: "Psychological",
        label: "Psychological",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21355-f9SjOfEJMk5P.jpg",
      },
      {
        value: "Romance",
        label: "Romance",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101921-GgvvFhlNhzlF.jpg",
      },
      {
        value: "Sci-Fi",
        label: "Sci-Fi",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg",
      },
      {
        value: "Slice of Life",
        label: "Slice of Life",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",
      },
      {
        value: "Sports",
        label: "Sports",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20992-sYHxFXg98JEj.jpg",
      },
      {
        value: "Supernatural",
        label: "Supernatural",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21507-Qx8bGsLXUgLo.jpg",
      },
      {
        value: "Thriller",
        label: "Thriller",
        thumbnail:
          "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100388-CR4PUEz1Nzsl.jpg",
      },
    ] as const;
    
    export const TYPES = [
      {
        value: "anime",
        label: "Anime",
      },
      {
        value: "manga",
        label: "Manga",
      },
      {
        value: "characters",
        label: "Nhân vật",
      },
      {
        value: "voice_actors",
        label: "Seiyuu",
      },
    ] as const;
    
    export const COUNTRIES = [
      {
        value: "JP",
        label: "Nhật Bản",
      },
      {
        value: "CN",
        label: "Trung Quốc",
      },
      {
        value: "KR",
        label: "Hàn Quốc",
      },
    ] as const;
    
    export const CHARACTERS_ROLES = [
      { value: "MAIN", label: "Nhân vật chính" },
      { value: "SUPPORTING", label: "Nhân vật phụ" },
      { value: "BACKGROUND", label: "Nhân vật nền" },
    ] as const;
    
    export const SEASON_YEARS = new Array(CURRENT_YEAR + 1 - START_YEAR)
      .fill(null)
      .map((_, index) => START_YEAR + index)
      .sort((a, b) => b - a);
    
    export const WATCH_STATUS = [
      {
        value: "WATCHING",
        label: "Đang xem",
      },
      {
        value: "PLANNING",
        label: "Dự định xem",
      },
      {
        value: "COMPLETED",
        label: "Đã xem",
      },
    ] as const;
    
    export const READ_STATUS = [
      {
        value: "READING",
        label: "Đang đọc",
      },
      {
        value: "PLANNING",
        label: "Dự định đọc",
      },
      {
        value: "COMPLETED",
        label: "Đã đọc",
      },
    ] as const;