function hasError() {
    throw "hi"
}

try {
    hasError();
}
catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    else if (typeof error === 'string') {
        console.log(error)
    }
    else {
        console.log('Unknown error:', error);
    }
}

