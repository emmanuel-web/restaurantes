document.querySelector('#botonregistara').addEventListener('click', salvardatos);
getimprimirtabla();

function salvardatos(){
    var snombres=document.querySelector('#NOMBRE').value,
        sapellidos=document.querySelector('#Apellido').value,
        spais=document.querySelector('#pais').value,
        sedad=document.querySelector('#edad').value,
        ssexo=document.querySelector('#sexo').value,
        snacimiento=document.querySelector('#naci').value,
        sestado=document.querySelector('#civil').value,
        semail=document.querySelector('#direccionemail').value,
        stel=document.querySelector('#telefono').value,
        scel=document.querySelector('#celular').value,
        sestratos=document.querySelector('#estrato').value,
        sid=document.querySelector('#Identidad').value,
        sdireccion=document.querySelector('#Direccion').value,
        sreli=document.querySelector('#religion').value,
        ssangre=document.querySelector('#sangre').value;

        addinformcion(snombres,sapellidos,spais,sedad,ssexo,snacimiento,sestado, semail,  stel,scel, sestratos,sid,sdireccion,sreli,ssangre);
        getimprimirtabla();

}

function getimprimirtabla(){
    var list= obtenertabla2();
        tbody=document.querySelector('#tblaRegistro tbody');
        
    tbody.innerHTML =''; 

   for (var i=0;i<list.length;i++){
       var row=tbody.insertRow(i);
       var nombrecell=row.insertCell(0),
           apellidocell=row.insertCell(1),
           nacionalidadcell=row.insertCell(2),
           edadcell=row.insertCell(3),
           sexocell=row.insertCell(4),
           nacimientocell=row.insertCell(5),
           estadocell=row.insertCell(6),
           correocell=row.insertCell(7),
           fijocell=row.insertCell(8),
           celcell=row.insertCell(9),
           estratocell=row.insertCell(10),
           idcell=row.insertCell(11),
           direccell=row.insertCell(12),
           relicell=row.insertCell(13),
           sangrecell=row.insertCell(14),
           selectcell=row.insertCell(15);
           

           nombrecell.innerHTML=list[i].nombre;
           apellidocell.innerHTML=list[i].apellido;
           nacionalidadcell.innerHTML=list[i].nacionalidad;
           edadcell.innerHTML=list[i].edades;
           sexocell.innerHTML=list[i].sexos;
           nacimientocell.innerHTML=list[i].echa_naci;
           estadocell.innerHTML=list[i]. estado_civil;
           correocell.innerHTML=list[i].email;
           fijocell.innerHTML=list[i].telefono_fijo;
           celcell.innerHTML=list[i].celulares;
           estratocell.innerHTML=list[i].estatos;
           idcell.innerHTML=list[i].No_ID;
           direccell.innerHTML=list[i].direcciones;
           relicell.innerHTML=list[i].relgiones;
           sangrecell.innerHTML=list[i].tipo_sangr;

       var inputselect=document.createElement('input');
       inputselect.type='radio';
       inputselect.value=list[i].No_ID;
       selectcell.appendChild(inputselect);



       tbody.appendChild(row);

   }
        


}