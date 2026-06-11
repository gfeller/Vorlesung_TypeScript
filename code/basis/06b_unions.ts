const logFns = {
    'error': console.error,
    'warn': console.warn,
    'info': console.info,
}


// Mit dem "|" kann ein neuer Union-Type erzeugt werden
type LogLevelUnion = 'error' | 'warn' | 'info'

function log(message: string, options: { logLevel: LogLevelUnion }) {
    logFns[options.logLevel]()
}

log('hi', { logLevel: 'info' })