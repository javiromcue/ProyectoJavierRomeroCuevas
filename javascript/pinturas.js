function pintura(nombre, color, descripcion) {
    this.nombre = nombre;
    this.color = color;
    this.descripcion = descripcion;
}

var pintura1 = new pintura("AISLASOL AL AGUA A17", "Mate", "Pintura al agua de alta cubrición para interiores, transpirable y sin olor.");
var pintura2 = new pintura("ESTUCO VENECIANO TINTORETTO", "Satinado - Brillante", "Estuco de alta decoración para aplicación en interiores.");
var pintura3 = new pintura("FONDO FIJADOR D13", "Incoloro", "Preparación para fijar y sellar superficies de albañilería, porosas o pulverulentas.");

this.nomPintura = function(nombre) {
    this.nombre = nombre;
};

this.colPintura = function(color) {
    this.color = color;
};

this.descPintura = function(descripcion) {
    this.descripcion = descripcion;
};

this.nombrePintura = function() {
    return this.nombre;
};

this.colorPintura = function() {
    return this.color;
};

this.descripcionPintura = function() {
    return this.descripcion;
};