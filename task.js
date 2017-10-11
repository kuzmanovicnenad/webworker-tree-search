// let index = 0;
//
// function inc() {
//     index++;
//     postMessage(index);
//     setTimeout("inc()", 500);
// }
//
// inc();

self.addEventListener("message", function(e) {
    var friends = e.data.friends;
    var friend = e.data.friend;
    var path = e.data.path;

    var result = [];

    function getConnections(friend, path, acc) {

        // Add name only if not in a path (no circular connections)

        if (path.indexOf(friend) === -1) {
            let newPath = `${path}->${friend}`;
            console.log(newPath);
            acc.push(newPath);

            let friendObject = friends[friend];

            for (let i = 0; i < friendObject.friends.length; i++) {
                getConnections(friendObject.friends[i], newPath, acc);
            }
        }
    }

    getConnections(friend, path, result);
    postMessage(result.length)

}, false);
