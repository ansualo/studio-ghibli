export interface Film {
    id: string
    title: string
    original_title: string
    image: string
    description: string
    director: string
    producer: string
    release_date: string
    running_time: string
}

export interface SearchContextType {
    searchedString: string;
    setSearchedString: (searchedString: string) => void;
}