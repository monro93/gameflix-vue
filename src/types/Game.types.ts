export class Game {
    public name: string
    image: string

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }

    public imageBackground(): string {
        return "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/"+this.image+".jpg"
    }

    public imageCover(): string {
        return "https://images.igdb.com/igdb/image/upload/t_cover_big/"+this.image+".jpg"
    }
}
