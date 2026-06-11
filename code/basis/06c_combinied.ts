type FileResponse = {
    type: "file",
    filename: string,
    filesize: number
}

type ChatResponse = {
    type: "chat",
    text: string
    source: 'bot' | 'human'
}

type Response = FileResponse | ChatResponse

function log(response: Response) {
    switch (response.type) {
        case 'chat':
            console.log(response.text, response.source);
            break;
        case 'file':
            console.log(response.filename, response.filesize);
            break;
    }
}


log({ type: 'chat', source: 'bot', text: 'test' })
log({ type: 'file', filename: 'test.pdf', filesize: 10000 })