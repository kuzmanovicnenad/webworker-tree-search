
function getAllConnections(name) {
    let myFriends = friends[name].friends;
    let result = [];
    _.each(myFriends, friend => getConnections(friend, '', result))
    console.log(result.length);
}
//friend: string, path: string, acc: string[]
function getConnections(friend, path, acc) {

    // Add name only if not in a path (no circular connections)

    if (path.indexOf(friend) === -1) {
        let newPath = `${path}->${friend}`;
        console.log(newPath);
        acc.push(newPath);

        let friendObject = friends[friend];
        _.each(friendObject.friends, f => getConnections(f, newPath, acc));
    }
}

function getAllConnectionsWebWorker(name) {
    let myFriends = friends[name].friends;
    let result = [];

    _.each(myFriends, (friend) => {
        console.time(friend)
        let worker = new Worker('task.js');

        worker.postMessage({
            friends: friends,
            friend: friend,
            path: ''
        })
        worker.onmessage = function(event) {
            console.log(event.data);
            console.timeEnd(friend)
        }
    })
}

function start() {
    console.time('no-webworkers');
    getAllConnections('Craig');
    console.timeEnd('no-webworkers');
}

function startWebworkers() {
    getAllConnectionsWebWorker('Craig');
}
