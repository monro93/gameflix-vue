export class Game {
    name: string
    image: string

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }

    imageBackground(): string {
        return "https://images.igdb.com/igdb/image/upload/t_screenshot_huge/"+this.image+".jpg"
    }
}
