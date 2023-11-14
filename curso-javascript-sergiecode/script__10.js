// let auto1 = {
// 	marca: 'FIAT',
// 	modelo: 'UNO',
// 	peso: 1000,
// 	color: 'Rojo',
// }

// let auto2 = {
// 	marca: 'RENAULT',
// 	modelo: '12',
// 	peso: 1100,
// 	color: 'Marrón',
// }

// console.log('Auto 1: ', auto1)
// console.log('Auto 2: ', auto2)

// console.log('El color del auto1 es: ', auto2.color)

// auto1.marca = 'BMW'
// auto1.modelo = 'x5'
// console.log(auto1)

// console.log(auto1.marca)
// console.log(auto1['marca'])

const vendedor = {
	nombre: 'Pedro',
	apellido: 'González',
	empresa: 'Auto S.A',
	habilidadesBlandas: ['Carisma', 'Puntualidad'],
	vender: function () {
		return 'Pedro ha vendido un auto'
	},
	nombreCompleto: function () {
		return this.nombre + ' ' + this.apellido
	},
}

// console.log(vendedor.vender())
// console.log(vendedor.nombreCompleto())
// console.log(vendedor.nombre)
console.log(vendedor.habilidadesBlandas)
