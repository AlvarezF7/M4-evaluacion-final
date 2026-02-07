
/*class UserManager {
    constructor() {
        this.users = []; // almacena data
        this.loadData();
    }

    loadData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                this.users = JSON.parse(xhr.responseText);
                console.log("usuarios i¿obtenidos:", this.users);
            } else {
                console.error("Error al cargar la data:", xhr.status);
            }
        };
        xhr.onerror = () => console.error("Error de red");
        xhr.send();
    }
    //metodo privado  btn cerrar
    _crearBotonCerrar(cont) {
        const btnCerrar = document.createElement("button");
        btnCerrar.textContent = "Cerrar";
        btnCerrar.className = "btnCerrar";
        btnCerrar.type = "button";
        btnCerrar.onclick = () => cont.innerHTML = "";
        return btnCerrar;
    }

    // 1. Listar nombres de todos los usuarios
    listarNombres() {
        const cont = document.querySelector("#result");
        cont.innerHTML = ""; // limpiar contenido 

        // Validar si la data ya cargó
        if (this.users.length === 0) {
            cont.textContent = "Cargando usuarios...";
            return;
        }

    // Crear lista
        const ul = document.createElement("ul");
        this.users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            ul.appendChild(li);
        });

        cont.appendChild(ul);
        cont.appendChild(bthis._crearBotonCerrar(cont));
}

    // 2. Información básica por nombre
    infoBasica() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const user = this.users.find(u => u.name.toLowerCase() === nombre.toLowerCase());
        if (user) {
            window.alert(`Usuario: ${user.username}, Correo: ${user.email}`);
            console.log(`Usuario: ${user.username}, Correo: ${user.email}`);
        } else {
            window.alert(`Usuario no encontrado`);
            console.log("Usuario no encontrado");
        }
    }
    // 3. Dirección por nombre
    mostrarDireccion() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const user = this.users.find(u => u.name.toLowerCase() === nombre.toLowerCase());
        if (user) {
            const cont = document.querySelector("#result");
            cont.innerHTML = "";
            const ul = document.createElement("ul");
            ul.innerHTML = `
                <li><strong>Calle:</strong> ${user.address.street}</li>
                <li><strong>Número/Depto:</strong> ${user.address.suite}</li>
                <li><strong>Ciudad:</strong> ${user.address.city}</li>
                <li><strong>Código Postal:</strong> ${user.address.zipcode}</li>
            `;
            cont.appendChild(ul);
            cont.appendChild(this._crearBotonCerrar(cont));

            console.log("Dirección completa:", user.address);
        } else {
            console.log("Usuario no encontrado");
        }
    }
    // 4. Información avanzada por nombre
    infoAvanzada() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const user = this.users.find(u => u.name.toLowerCase() === nombre.toLowerCase());
        const cont = document.querySelector("#result");
        cont.innerHTML = "";

        
    if (!user) {
        cont.textContent = "Usuario no encontrado";
        return;
    }
    // Crear lista 
    const ul = document.createElement("ul");

    ul.innerHTML = `
        <li><strong>Teléfono:</strong> ${user.phone}</li>
        <li><strong>Sitio web:</strong> ${user.website}</li>
        <li><strong>Compañía:</strong> ${user.company.name}</li>
        <li><strong>Frase:</strong> "${user.company.catchPhrase}"</li>
        <li><strong>Sector:</strong> ${user.company.bs}</li>
    `;

    cont.appendChild(ul);
    cont.appendChild(this._crearBotonCerrar(cont));
}

  // 5. Listar compañías y su frase (catchphrase)
  listarCompanias() {
    const cont = document.querySelector("#result");
    cont.innerHTML = "";

    if (this.users.length === 0) {
        cont.textContent = "Cargando compañías...";
        return;
    }

    const ul = document.createElement("ul");

    this.users.forEach(user => {
        const texto = `${user.company.name} - "${user.company.catchPhrase}"`; // <--- definición
        const li = document.createElement("li");
        li.innerHTML = `<strong>${user.company.name}</strong><br><em>"${user.company.catchPhrase}"</em>`;
        ul.appendChild(li);

         console.log(`${user.company.name} - "${user.company.catchPhrase}"`);
    });

    cont.appendChild(ul);
    cont.appendChild(this._crearBotonCerrar(cont));
}


    // 6. Nombres ordenados alfabéticamente
    nombresOrdenados() {
        const cont = document.querySelector("#result");
        cont.innerHTML = ""; // limpiar contenido previo

        const ul = document.createElement("ul");
        const nombres = this.users.map(u => u.name).sort();
        nombres.forEach(n => {
            const li = document.createElement("li");
            li.textContent = n;
            ul.appendChild(li);
        });

        cont.appendChild(ul);
        cont.appendChild(this._crearBotonCerrar(cont)); 
        } 
}*/
class UserManager {
    constructor() {
        this.users = []; // almacena data
        this.loadData();
    }

    // Cargar datos desde la API
    loadData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                this.users = JSON.parse(xhr.responseText);
                console.log("Usuarios obtenidos:", this.users);
            } else {
                console.error("Error al cargar la data:", xhr.status);
            }
        };
        xhr.onerror = () => console.error("Error de red");
        xhr.send();
    }

    // --- MÉTODO PRIVADO PARA CREAR EL BOTÓN CERRAR ---
    _crearBotonCerrar(cont) {
        const btnCerrar = document.createElement("button");
        btnCerrar.textContent = "Cerrar";
        btnCerrar.className = "btnCerrar";
        btnCerrar.type = "button";
        btnCerrar.onclick = () => cont.innerHTML = "";
        return btnCerrar;
    }

    // 1. Listar nombres de todos los usuarios
    listarNombres() {
        const cont = document.querySelector("#result");
        cont.innerHTML = "";

        if (this.users.length === 0) {
            cont.textContent = "Cargando usuarios...";
            return;
        }

        const ul = document.createElement("ul");
        this.users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            ul.appendChild(li);
        });

        cont.appendChild(ul);
        cont.appendChild(this._crearBotonCerrar(cont));
    }

    // 2. Información básica por nombre
    infoBasica() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const user = this.users.find(u => u.name.toLowerCase() === nombre.toLowerCase());
        if (user) {
            window.alert(`Usuario: ${user.username}, Correo: ${user.email}`);
            console.log(`Usuario: ${user.username}, Correo: ${user.email}`);
        } else {
            window.alert(`Usuario no encontrado`);
            console.log("Usuario no encontrado");
        }
    }

    // 3. Dirección por nombre
    mostrarDireccion() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const user = this.users.find(u => u.name.toLowerCase() === nombre.toLowerCase());
        if (user) {
            const cont = document.querySelector("#result");
            cont.innerHTML = "";
            const ul = document.createElement("ul");
            ul.innerHTML = `
                <li><strong>Calle:</strong> ${user.address.street}</li>
                <li><strong>Número/Depto:</strong> ${user.address.suite}</li>
                <li><strong>Ciudad:</strong> ${user.address.city}</li>
                <li><strong>Código Postal:</strong> ${user.address.zipcode}</li>
            `;
            cont.appendChild(ul);
            cont.appendChild(this._crearBotonCerrar(cont));

            console.log("Dirección completa:", user.address);
        } else {
            console.log("Usuario no encontrado");
        }
    }

    // 4. Información avanzada por nombre
    infoAvanzada() {
        const nombre = prompt("Ingrese el nombre del usuario:");
        const user = this.users.find(u => u.name.toLowerCase() === nombre.toLowerCase());
        const cont = document.querySelector("#result");
        cont.innerHTML = "";

        if (!user) {
            cont.textContent = "Usuario no encontrado";
            return;
        }

        const ul = document.createElement("ul");
        ul.innerHTML = `
            <li><strong>Teléfono:</strong> ${user.phone}</li>
            <li><strong>Sitio web:</strong> ${user.website}</li>
            <li><strong>Compañía:</strong> ${user.company.name}</li>
            <li><strong>Frase:</strong> "${user.company.catchPhrase}"</li>
            <li><strong>Sector:</strong> ${user.company.bs}</li>
        `;

        cont.appendChild(ul);
        cont.appendChild(this._crearBotonCerrar(cont));

        console.log("Información avanzada:", user);
    }

    // 5. Listar compañías y su frase (catchphrase)
    listarCompanias() {
        const cont = document.querySelector("#result");
        cont.innerHTML = "";

        if (this.users.length === 0) {
            cont.textContent = "Cargando compañías...";
            return;
        }

        const ul = document.createElement("ul");
        this.users.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${user.company.name}</strong><br><em>"${user.company.catchPhrase}"</em>`;
            ul.appendChild(li);
            console.log(`${user.company.name} - "${user.company.catchPhrase}"`);
        });

        cont.appendChild(ul);
        cont.appendChild(this._crearBotonCerrar(cont));
    }

    // 6. Nombres ordenados alfabéticamente
    nombresOrdenados() {
        const cont = document.querySelector("#result");
        cont.innerHTML = "";

        const ul = document.createElement("ul");
        const nombres = this.users.map(u => u.name).sort();
        nombres.forEach(n => {
            const li = document.createElement("li");
            li.textContent = n;
            ul.appendChild(li);
        });

        cont.appendChild(ul);
        cont.appendChild(this._crearBotonCerrar(cont));
    }
}


//crear botones
const botones = document.querySelector(".btn");
  botones.innerHTML +=`
        <button type="button" id="btnName">Nombre Usuarios</button>
        <button type="button" id="btnInfo">Información Basica</button>
        <button type="button" id="btnUser">Ingresar Nombre de Usuario</button>
        <button type="button" id="btnAdvance">Información avanzada</button>
        <button type="button" id="btnCompany">Listar compañias</button>
        <button type="button" id="btnOrder">Listar Nombres por Alfabeto</button>
  `;

//inicializa clase
const um = new UserManager();

//Guarda botones por separado
const btnName =document.getElementById(`btnName`);
const btnInfo = document.getElementById(`btnInfo`);
const btnUser = document.getElementById(`btnUser`);
const btnAdvance = document.getElementById(`btnAdvance`);
const btnCompany = document.getElementById(`btnCompany`);
const btnOrder =document.getElementById(`btnOrder`);
 
//agregar evento al btn
btnName.addEventListener("click",() => um.listarNombres());
btnInfo.addEventListener("click",() => um.infoBasica());
btnUser.addEventListener("click", () => um.mostrarDireccion());
btnAdvance.addEventListener("click", () => um.infoAvanzada());
btnCompany.addEventListener("click", () => um.listarCompanias());
btnOrder.addEventListener("click", () => um.nombresOrdenados());

