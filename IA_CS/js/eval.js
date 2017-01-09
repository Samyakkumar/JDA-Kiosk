if(uname in response && response[uname] == pname){
                $.ajax(
                    {
                        url:"Chart-page.html",
                        dataType:"html",
                        success:function(data){
                            $(".main-content").html(data);
                            $(".main-content").find("script").each(function(i) {
                                eval($(this).text());
                            });
                        }
                    })
            }else{
                console.log("Wrong");
            }