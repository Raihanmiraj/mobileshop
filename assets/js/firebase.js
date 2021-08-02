const firebaseConfig = {
    apiKey: "AIzaSyDiqocNXrup1txu2ETOSg6whCASjDCJZ-s",
    authDomain: "burger-e7ea8.firebaseapp.com",
    databaseURL: "https://burger-e7ea8-default-rtdb.firebaseio.com",
    projectId: "burger-e7ea8",
    storageBucket: "burger-e7ea8.appspot.com",
    messagingSenderId: "1008842427920",
    appId: "1:1008842427920:web:c8f0cca0edda7e98108495",
    measurementId: "G-67C553E82Y"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();


var database = firebase.database();


// var getJSON = firebase.functions().httpsCallable('getJSON');
// getJSON().then(function(result) {
//     console.log(JSON.stringify(result.data));
// }).catch(function(error) {
//     // Getting the Error details.
//     var code = error.code;
//     var message = error.message;
//     var details = error.details;
//     // ...
// });


// function getAllData(table){
//     var i =0;
//     var ref = database.ref('buyer');
//     console.log(ref);
//     ref.on('value', function(snapshot){snapshot.forEach(function(childSnapshot){
//         i++;
  
//    var data = childSnapshot.val();

 
//    var type=  data['type'];
//    console.log(type);
// var mobileModel = [];
// var imeiNo =[];
// var priceSingle =[];
//  var customer_info = JSON.parse(data['customer_info']) ;
//  var mobile_info = JSON.parse(data['mobile_info']) ;
//  var recommendator_info = JSON.parse(data['recommendator_info']) ;
// var name = customer_info['name'];
// var phone = customer_info['phone'];
// var nid = customer_info['nid'];
// var bdris = customer_info['bdris'];
// var address = customer_info['address'];
// var birthdate = customer_info['birthdate'];



// mobile_info.forEach(mobile_details =>{
// var m_id = mobile_details['m_id'];
// var m_mobile = mobile_details['m_mobile'];
// var m_imei1 = mobile_details['m_imei1'];
// var m_imei2 = mobile_details['m_imei2'];
// var m_ram = mobile_details['m_ram'];
// var m_rom = mobile_details['m_rom'];
// var m_price = mobile_details['m_price'];
// var m_sold = mobile_details['m_sold'];
// var imeiPrint = 'IMEI:' + m_imei1 + '<br>IMEI2:' + m_imei2;
// mobileModel.push(m_mobile);
// imeiNo.push(imeiPrint);
// priceSingle.push(m_price);
// })
// console.log(priceSingle);



// var r_name = recommendator_info['name'];
// var r_phone = recommendator_info['phone'];
// var r_address = recommendator_info['address'];
// var button='';
// if(type==2){
// button = '<td><span class="badge bg-dark">Sold</span></td><td><a href="invoice.html?id='+1+'" class="btn btn-primary btn-sm">View</a></td>';
// }else if(type==1){
// button = '<td><span class="badge bg-warning text-dark">Bought</span></td><td><a href="sellerprofile.html?id='+1+'" class="btn btn-primary btn-sm">View</a></td>';
// }

// $("tbody").append('<tr><td>'+name+'</td><td>'+phone+'</td><td>'+mobileModel.join("<br>")+'</td><td>'+imeiNo.join("<br>")+'</td><td>'+priceSingle.join("<br>")+'</td>'+button+'</tr>');

  
 
// if(i==childSnapshot.length){
//     method2();
//     i=0;
// }
//    })});

// }

function  method2(){
    console.log("called");

    var table = $('#example').DataTable( {
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true
        } );
 }

function dataParsed(e){



// if(i==lengthObject){
//     method2();
// }
 

}

