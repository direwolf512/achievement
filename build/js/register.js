$(function(){$("#sss").on("click",function(){var s=$("#username").val(),r=$("#passwordF").val(),e=$("#passwordS").val(),o=[],a=null;$.ajax({url:"./users/usersArr",type:"get",success:function(n,c){(a=n)&&(a=JSON.parse(a));for(var i=0;i<a.length;i++)o.push(a[i].userName);if(-1!==o.indexOf(s))alert("该用户名已被注册");else if(r!==e)$("#passwordF").css("border","1px solid red"),$("#passwordS").css("border","1px solid red");else if(r===e){var t={username:s,password:r};$.ajax({url:"./register",type:"post",data:t,success:function(s,r){"success"==r&&(location.href="/")},error:function(s,r){location.href="/register"}})}},error:function(s,r){location.href="register"}})})});