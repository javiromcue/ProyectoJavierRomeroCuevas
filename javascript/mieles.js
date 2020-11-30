function miel(nombre, info, fecha) {
    this.nombre = nombre;
    this.info = info;
    this.fecha = fecha;
}

var miel1 = new miel("Miel de Romero", "La salvia es un arbusto aromático muy conocido por sus propiedades terapéuticas.", "15/11/2020");
var miel2 = new miel("Miel de Tomillo", "La miel de Tomillo tiene una variedad de colores muy amplia dependiendo del tipo de tomillo al que pertenezca, van del blanco al rojo.", "20/11/2020");
var miel3 = new miel("Miel de Encina", "La encina es el árbol nacional de España y se encuentra prácticamente en toda la península y de la que se extrae éste tipo de miel.", "26/11/2020");

this.nomMiel = function(nombre) {
    this.nombre = nombre;
};

this.infMiel = function(info) {
    this.info = info;
};

this.fecMiel = function(fecha) {
    this.fecha = fecha;
};

this.nombreMiel = function() {
    return this.nombre;
};

this.infoMiel = function() {
    return this.info;
};

this.fechaMiel = function() {
    return this.fecha;
};