var Vector = /** @class */ (function () {
    function Vector(x, y, z) {
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    };
    Vector.prototype.sub = function (v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    };
    Vector.prototype.multByScalar = function (s) {
        var scaledVector = new Vector(this.x * s, this.y * s, this.z * s);
        return scaledVector;
    };
    Vector.prototype.cross = function (b) {
        var a = this;
        var sx = a.y * b.z - a.z * b.y;
        var sy = a.z * b.x - a.x * b.z;
        var sz = a.x * b.y - a.y * b.x;
        var cross = new Vector(sx, sy, sz);
        return cross;
    };
    Vector.prototype.dot = function (b) {
        var dot = this.x * b.x + this.y * b.y + this.z * b.z;
        return dot;
    };
    Vector.prototype.angle = function (b) {
        var magA = this.mag;
        var magB = b.mag;
        return Math.acos(this.dot(b) / (magA * magB));
    };
    Object.defineProperty(Vector.prototype, "mag", {
        get: function () {
            var mag = Math.sqrt(this.magSqr);
            return mag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "magSqr", {
        get: function () {
            var mag = (this.x * this.x + this.y * this.y + this.z * this.z);
            return mag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "unit", {
        get: function () {
            var normie = new Vector(this.x / this.mag, this.y / this.mag, this.y / this.mag);
            return normie;
        },
        enumerable: false,
        configurable: true
    });
    Vector.prototype.asList = function () {
        return [
            [this.x],
            [this.y],
            [this.z]
        ];
    };
    return Vector;
}());
