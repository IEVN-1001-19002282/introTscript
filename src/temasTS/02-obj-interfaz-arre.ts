
interface Alumno{
    matricula?:number;
    nombre:string;
    edad:number;
    email:string;
}


const alumno:Alumno={
    nombre:'Diego',
    edad:22,
    email:'diego.ar.granados@gmail.com'
}

console.table(alumno);

let mascotas=['perro','gato','perico'];

mascotas[1]='nuevo gato';

mascotas.push();
console.log(mascotas);

let tem:(number|string)[]=[];

tem.push(11);
tem.push('Nombre');
console.log(tem);