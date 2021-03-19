import fetchAndPrint from './libs/fetchAndPrint.js'
import help from './libs/help.js'


const options = {
    hostname: "localhost",
    port: 18381,
    method: "GET",
    path: "/",
    headers: {
        settingValue: null,
        newSettings: null
    }
}

const [node, entryPoint, option, ...args] = process.argv

switch (option) {
    case "settings":
        if (args[0] == "get")
            if (args[1]) {
                options.method = "GET"
                options.path = `/settings/get/${args[1]}`
                fetchAndPrint(options)
            } else {
                options.method = "GET"
                options.path = `/settings/get`
                fetchAndPrint(options)
            }
        else if (args[0] == "set")
            if (args[2]) {
                options.method = "POST"
                options.path = `/settings/set/${args[1]}`
                options.headers.settingValue = args[2]
                fetchAndPrint(options)
            } else {
                console.log("You cannot set all settings at once, yet!")
            }
        
        break
    
    case "status":
        if (args[0] == "casting") {
            options.method = "GET"
            options.path = `/server/status/casting`
            fetchAndPrint(options)
        } else if (args[0] == "allow-connect") {
            options.method = "GET"
            options.path = `/server/status/allowConnections`
            fetchAndPrint(options)
        } else {
            options.method = "GET"
            options.path = `/server/status`
            fetchAndPrint(options)
        }

        break

    default:
        help.print()
        break
}