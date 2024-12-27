$(function (){
    Universities()
     $("#btn").click(function(){
      $("#table").toggleClass("hideclass");
    });
    $("#btn").click(function(){
        $("#table").animate({
          height: 'toggle'
        });       
      });
    });
function Universities(){
    $.ajax({
        type: "GET",
        url: "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001",
        success: osUniversities
    });
}
function osUniversities(data){
    console.log(data)
    $('#table').append('<table class="table w-100"><thead><tr>'
    +'<th>ID</th>'
    +'<th>Name</th>'
    +'<th>Email</th>'
    +'<th>Age</th>'
    +'<th>Address</th>'
    +'<th>Contact</th>'
    +'<th>Salary</th>'
    +'</tr></thead><tbody></tbody></table>');

    $.each(data, function(i, option){
      $('tbody').append('<tr>'
       +'<td>'+option.id+'</td>'
       +'<td>'+option.firstName+' '+' '+option.lastName+'</td>'
       +'<td>'+option.email+'</td>'
       +'<td>'+option.age+'</td>'
       +'<td>'+option.address+'</td>'
       +'<td>'+option.contactNumber+'</td>'
       +'<td>'+option.salary+'</td>'
       +'</tr>');
  });
}

   