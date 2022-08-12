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
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});