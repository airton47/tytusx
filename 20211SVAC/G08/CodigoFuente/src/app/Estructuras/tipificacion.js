"use strict";
exports.__esModule = true;
exports.TipoOperador = exports.TipoNodo = exports.TipoParametro = void 0;
var TipoParametro;
(function (TipoParametro) {
    TipoParametro[TipoParametro["Entero"] = 0] = "Entero";
    TipoParametro[TipoParametro["Decimal"] = 1] = "Decimal";
    TipoParametro[TipoParametro["Funtion_Last"] = 2] = "Funtion_Last";
    TipoParametro[TipoParametro["Funtion_Position"] = 3] = "Funtion_Position";
    TipoParametro[TipoParametro["DosPuntos"] = 4] = "DosPuntos";
    TipoParametro[TipoParametro["Punto"] = 5] = "Punto";
    TipoParametro[TipoParametro["Atributo"] = 6] = "Atributo";
    TipoParametro[TipoParametro["Cadena"] = 7] = "Cadena";
    TipoParametro[TipoParametro["Nodo"] = 8] = "Nodo";
    TipoParametro[TipoParametro["Operacion"] = 9] = "Operacion";
})(TipoParametro = exports.TipoParametro || (exports.TipoParametro = {}));
var TipoNodo;
(function (TipoNodo) {
    TipoNodo["Raiz"] = "RAIZ";
    TipoNodo["Descendiente"] = "DESCENDIENTE";
    TipoNodo["ID"] = "ID";
    TipoNodo["Axis"] = "AXIS";
    TipoNodo["AutoReferencia"] = "AUTOREFERENCIA";
    TipoNodo["Asterisco"] = "ASTERISCO";
    TipoNodo["NodoPadre"] = "NODO_PADRE";
    TipoNodo["Atributo"] = "ATRIBUTO";
    TipoNodo["Funcion_Node"] = "Funcion_Node";
    TipoNodo["Funcion_Text"] = "Funcion_Text";
})(TipoNodo = exports.TipoNodo || (exports.TipoNodo = {}));
var TipoOperador;
(function (TipoOperador) {
    TipoOperador[TipoOperador["Mas"] = 0] = "Mas";
    TipoOperador[TipoOperador["Menos"] = 1] = "Menos";
    TipoOperador[TipoOperador["Por"] = 2] = "Por";
    TipoOperador[TipoOperador["Mod"] = 3] = "Mod";
    TipoOperador[TipoOperador["Div"] = 4] = "Div";
    TipoOperador[TipoOperador["MenorIgual"] = 5] = "MenorIgual";
    TipoOperador[TipoOperador["MayorIgual"] = 6] = "MayorIgual";
    TipoOperador[TipoOperador["Menor"] = 7] = "Menor";
    TipoOperador[TipoOperador["Mayor"] = 8] = "Mayor";
    TipoOperador[TipoOperador["Igual"] = 9] = "Igual";
    TipoOperador[TipoOperador["Diferente"] = 10] = "Diferente";
    TipoOperador[TipoOperador["And"] = 11] = "And";
    TipoOperador[TipoOperador["Or"] = 12] = "Or";
    TipoOperador[TipoOperador["None"] = 13] = "None";
})(TipoOperador = exports.TipoOperador || (exports.TipoOperador = {}));