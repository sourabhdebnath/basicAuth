module.exports = function (req) {
    req = req.req || req;

    var auth = req.headers.authorization;
    if (!auth) return;

    // malformed
    var parts = auth.split(' ');
    if ('basic' != parts[0].toLowerCase()) return;
    if (!parts[1]) return;
    auth = parts[1];

    // credentials
    auth = new Buffer(auth, 'base64').toString();
    auth = auth.match(/^([^\\]*)\\([^:]*):(.*)$/);

    if (!auth) return;

    return {
        domain: auth[1],
        name: auth[2],
        pass: auth[3]
    };
}
