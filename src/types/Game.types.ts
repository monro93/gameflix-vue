export class Game {
    public name: string
    public rating: number
    image: string

    constructor(name: string, rating: number, image: string) {
        this.name = name;
        this.rating = rating;
        this.image = image;
    }

    public imageBackground(): string {
        return "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/"+this.image+".jpg"
    }

    public imageCover(): string {
        return "https://images.igdb.com/igdb/image/upload/t_cover_big/"+this.image+".jpg"
    }
}
