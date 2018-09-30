"use strict";
var Testing;
(function (Testing) {
    var Musico = /** @class */ (function () {
        function Musico(genero, instrumento) {
            this.instrumento = instrumento;
            this.genero = genero;
        }
        Musico.prototype.getGenero = function () {
            return this.genero;
        };
        Musico.prototype.getInstrumento = function () {
            return this.instrumento;
        };
        return Musico;
    }());
    Testing.Musico = Musico;
})(Testing || (Testing = {}));
//# sourceMappingURL=clase01.js.map