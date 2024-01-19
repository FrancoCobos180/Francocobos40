function calcularCuotas() {
    const monto = parseInt(document.getElementById('monto').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
  
    if (isNaN(monto) || isNaN(cuotas) || monto <= 0 || cuotas <= 0) {
      document.getElementById('resultado').innerHTML = 'Por favor, ingresa valores válidos.';
    } else {
      const interesAnual = 10; 
      const interesMensual = interesAnual / 12;
  
      const calculoCuota = monto * (interesMensual * (Math.pow(1 + interesMensual, cuotas))) / (Math.pow(1 + interesMensual, cuotas) - 1);
      const cuotaFinal = calculoCuota.toFixed(2);
  
      document.getElementById('resultado').innerHTML = `La cuota mensual es de $${cuotaFinal} por ${cuotas} meses.`;
    }
  }
  class Persona {
    constructor(nombre, edad, email, ciudad, telefono) {
      this.nombre = nombre;
      this.edad = edad;
      this.email = email;
      this.ciudad = ciudad;
      this.telefono = telefono;
    }
  }

  const personas = [];

  function agregarPersona() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const email = document.getElementById('email').value;
    const ciudad = document.getElementById('ciudad').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre.trim() === '' || isNaN(edad) || edad <= 0) {
      alert('Por favor, ingresa valores válidos para el nombre y la edad.');
    } else {
      const nuevaPersona = new Persona(nombre, edad, email, ciudad, telefono);
      personas.push(nuevaPersona);

      document.getElementById('nombre').value = '';
      document.getElementById('edad').value = '';
      document.getElementById('email').value = '';
      document.getElementById('ciudad').value = '';
      document.getElementById('telefono').value = '';
      mostrarListaPersonas();

      console.log('Persona agregada:', nuevaPersona);
      console.log('Lista de personas:', personas);
    }
  }

  function mostrarListaPersonas() {
    const listaElement = document.getElementById('listaPersonas');
    listaElement.innerHTML = '';

    personas.forEach((persona, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'persona-item';

      listItem.innerHTML = `
        <strong>${persona.nombre}</strong> (${persona.edad} años)<br>
        Correo Electrónico: ${persona.email}<br>
        Ciudad: ${persona.ciudad}<br>
        Teléfono: ${persona.telefono}<br>
        <span class="eliminar-btn" onclick="eliminarPersona(${index})">Eliminar</span>
      `;

      listaElement.appendChild(listItem);
    });
  }

  function eliminarPersona(index) {
    const personaEliminada = personas.splice(index, 1)[0];
    mostrarListaPersonas();

    console.log('Persona eliminada:', personaEliminada);
    console.log('Lista de personas después de la eliminación:', personas);
  }