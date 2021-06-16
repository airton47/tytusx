"use strict";
class XpathUtil {
    static procesarEncoding(xml) {
        var cadEncoding;
        var xmlBoddy;
        if (xml == undefined || xml == null || typeof xml !== 'string') {
            return xml;
        }
        xmlBoddy = xml.replace(/\<\?xml.+\?\>|\<\!DOCTYPE.+]\>/g, ' ');
        try {
            cadEncoding = xml
                .match(/\<\?xml.+\?\>|\<\!DOCTYPE.+]\>/g)[0]
                .toUpperCase()
                .match(/ENCODING=\".+\"/g)[0]
                .replace('"', "")
                .replace('"', "")
                .replace("ENCODING=", "");
            return xmlBoddy;
        }
        catch (exception) {
            console.log(exception);
            return xmlBoddy;
        }
    }
    static procesarCaracteresEspeciales(cadena) {
        if (cadena == undefined || cadena == null) {
            return null;
        }
        return cadena.trim()
            .replace("&lt;", "<")
            .replace("&gt;", ">")
            .replace("&amp;", "&")
            .replace("&apos;", "'")
            .replace("&quot;", "\"")
            .replace("&eq;", "=")
            .replace("\\=", "=")
            .replace("\\<", "<")
            .replace("\\>", ">")
            .replace("\\/", "\"")
            .replace("\\“", "“")
            .replace("\\\"", "\"")
            .replace("\\'", "'")
            .replace("\\’", "’")
            .replace("\\`", "`")
            .replace("\\`", "\`")
            .replace("\\‘", "‘");
    }
    static printTabHtml(strTabla) {
        let w = window.open("XPath", "#");
        let d = w.document.open();
        d.write("<!DOCTYPE html><html><header><title>XPath</title></header><body background='../images/fondo-azul.jpg' >" + strTabla + "</body></html>");
        d.close();
    }
    static crearTablaSimbolos(listSimbolos) {
        let ts = new TablaSimbolos(null);
        ts.listaSimbolos = listSimbolos;
        return ts;
    }
}