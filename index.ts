import {UploadedFile} from "express-fileupload";

// interface Fi

export default class File{
    constructor(private file: UploadedFile | string) {
    }

    async moveTo(target: string){
        if (typeof this.file != 'string'){
            await this.file.mv(target)
        }
    }
}