$(function(){var e=window.localStorage.getItem("userName"),o=window.location.search.split("=")[1];e!==o?($("#logOut").css("display","none"),$("#addMsg").css("display","none"),$("#goBackSelf").css("display","block"),$(".del").css("display","none"),$(".edit").css("display","none")):($("#logOut").css("display","block"),$("#addMsg").css("display","block"),$("#goBackSelf").css("display","none"),$(".del").css("display","inline-block"),$(".edit").css("display","inline-block")),$("#forDate").css("display","block"),$("#forTitle").css("display","none"),$("#forKeyword").css("display","none"),$("#forDateFilter").css("background","#eee"),$("#forDateFilter").on("click",function(){$("#forDate").css("display","block"),$("#forTitle").css("display","none"),$("#forKeyword").css("display","none"),$("#forDateFilter").css("background","#eee"),$("#forTitleFilter").css("background","#ccc"),$("#forKeywordFilter").css("background","#ccc")}),$("#forTitleFilter").on("click",function(){$("#forDate").css("display","none"),$("#forTitle").css("display","block"),$("#forKeyword").css("display","none"),$("#forDateFilter").css("background","#ccc"),$("#forTitleFilter").css("background","#eee"),$("#forKeywordFilter").css("background","#ccc")}),$("#forKeywordFilter").on("click",function(){$("#forDate").css("display","none"),$("#forTitle").css("display","none"),$("#forKeyword").css("display","block"),$("#forDateFilter").css("background","#ccc"),$("#forTitleFilter").css("background","#ccc"),$("#forKeywordFilter").css("background","#eee")}),$("#logOut").on("click",function(){window.localStorage.setItem("userName",""),document.cookie="userName=null;path=/;",location.href="./"}),$("#goBackSelf").on("click",function(){location.href="/users/detail?userName="+e});for(var c=$(".del"),s=0;s<c.length;s++)c[s].onclick=function(){$.ajax({url:"../add/subtraction",type:"delete",data:{id:this.getAttribute("data-id"),userName:e},success:function(o,c){location.href="/users/detail?userName="+e},error:function(e,o){console.log(o)}})};var l=$(".edit");for(s=0;s<l.length;s++)l[s].onclick=function(){location.href="../add/edit?id="+this.getAttribute("data-id")+"&userName="+e}});