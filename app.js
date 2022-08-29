   (function(){ 
    let actualizarHora= function (){
        let fecha =new Date(),
        horas = fecha.getHours(),
        ampm,
       minutos = fecha.getMinutes(),
       segundos = fecha.getSeconds(),
       diaSemana = fecha.getDay(),
       dia = fecha.getDate(), 
       mes = fecha.getMonth(),
       year = fecha.getFullYear();

       let 
       pHoras = document.getElementById('horas'),
       pAMPM = document.getElementById('ampm'),
       pMinutos = document.getElementById('minutos'),
       pSegundos = document.getElementById('segundos'),
       pDiaSemana = document.getElementById('diaSemana')
       pDia = document.getElementById('dia'),
       pMes = document.getElementById ('mes'),
       pYear = document.getElementById ('year');

      let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes','Sabado'];
      pDiaSemana.textContent = semana[diaSemana];

      pDia.textContent = dia;

      let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
      pMes.textContent = meses[mes];

      pYear.textContent = year;

      if (horas >= 12) {
        horas = horas - 12;
        ampm = 'PM';
      } else {
        ampm = 'AM'; 
      }

      if (horas == 0) {
        horas = 12 ;
      }

      pHoras.textContent = horas;
      pAMPM.textContent = ampm;

      if(minutos < 10) {
        minutos = '0' + minutos
      };

      if(segundos < 10) {
        segundos = '0' + segundos
      };

      pMinutos.textContent = minutos;
      pSegundos.textContent = segundos;


    
    };
    actualizarHora();
    var intervalo = setInterval (actualizarHora, 1000);
   }());


  


// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();



const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.querySelector('#close')
close.addEventListener('click',()=>{
  Swal.fire({
    title: 'Desea guardar los cambios?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    denyButtonText: `No guardar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Guardar!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('No se guardo los cambios', '', 'info')
    }
  })
}
)



open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


const usuario ={
  nombre : "Tom", 
  rol : "alumno",
  curso : "javascript",
  tel : { casa : null,
    movil : {
      movistar : null,
      personal : 1151511 ,


    }

  },
  email:'tomprueba'
}


const { nombre,curso,rol,apellido} = usuario
console.log (nombre,curso,rol, apellido);


const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
 

////////calendario////

let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Deciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
        }else{
            dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);

//////////////////

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

 //fetch('https://jsonplaceholder.typicode.com/todos/1')
 //.then((res) => res.json())
 //.then((data) => {
 // console.log('data')
  //data.forEach((pots) =>{

   // const li = document.createElement ('li')
   // li.innerHTML =
   // <h4>${post.title}</h4>
  //  listaPosts.append(li)
  //})
 //})