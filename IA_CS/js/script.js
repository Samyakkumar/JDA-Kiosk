/**
 * Created by samyak on 31/12/16.
 */
document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector("#Submit").addEventListener("click", function(){
        window.stuff;
        window.student;
        var uname = document.querySelector("#Uname").value;
        var pname = document.querySelector("#Pname").value;

        $ajaxUtils.sendGetRequest("../json/info.json", function(response){
            window.stuff = $.parseJSON(response.responseText);
            // console.log(stuff);
        });
        function size(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        }
        var numstu = size(window.stuff);
        var i = 0;
        var k = 1;
        function showall(data){
            var origdata = data;
            var studentdata = [];
            while(i<numstu-1) {
                console.log("Executed");
                var url = "../json/";
                url += "student" + k.toString() + ".txt";
                console.log(url);
                // console.log(data);
                $ajaxUtils.sendGetRequest(url, function(response){
                    studentdata.push(response.responseText);
                    window.student = response.responseText;
                });
                console.log(studentdata);
                var chartn = "chartContainer" + k.toString();
                data = data.replace("Replace", student);
                data = data.replace(/foo/g, chartn);
                // console.log(data);
                $(".main-content").append(data);
                data = origdata;
                i+= 1;
                k+= 1;
            }
            $(".form").addClass(" hidden");
            $(".main-content").find("script").each(function(i) {
                eval($(this).text());
            })
        }
        if(uname in stuff && stuff[uname] == pname){
            if(uname == "admin"){
                    $.ajax(
                        {
                            url:"Chart-page.html",
                            dataType:"html",
                            success:function(data){
                                showall(data);

                            }
                        })
            }
            if(uname == "Student1"){
                $.ajax(
                    {
                        url:"Chart-page.html",
                        dataType:"html",
                        success:function(data){
                            $ajaxUtils.sendGetRequest("../json/student1.txt", function(response){
                                window.student = response.responseText;
                                console.log(student);
                            })
                            data = data.replace("Replace", student);
                            $(".main-content").html(data);
                            $(".main-content").find("script").each(function(i) {
                                eval($(this).text());
                            });
                        }
                    })
            }
            if(uname == "Student2"){
                $.ajax(
                    {
                        url:"Chart-page.html",
                        dataType:"html",
                        success:function(data){
                            $ajaxUtils.sendGetRequest("../json/student2.txt", function(response){
                                window.student = response.responseText;
                                console.log(student);
                            })
                            data = data.replace("Replace", student);
                            $(".main-content").html(data);
                            $(".main-content").find("script").each(function(i) {
                                eval($(this).text());
                            });
                        }
                    })
            }

        }else{
            var response = "<h4 style = 'color:red'> Invalid username or password </h4>";
            $(".invalid").html(response);
        }
    });
});
