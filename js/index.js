 $(document).ready(function(){
        var que;
        var ans;
        var right;
        var i=0;
        var score=0;
        var que1={que:"Giai đoạn đầu đời của bé, chỉ quan tâm đến phát triển não bộ hay hệ tiêu hóa có đủ không?",
            ans:["Bố/ mẹ nên quan tâm phát triển song song cả hệ tiêu hóa khỏe lẫn sự phát triển não bộ để bé nhạy bén tinh anh","Đúng, chỉ nên quan tâm phát triển não bộ thôi","Con chỉ cần có hệ tiêu hóa khỏe là được"],
            right:"0"};
        var que2={que:"Vì sao gọi Hệ tiêu hóa là “bộ não” thứ 2 của bé?",
            ans:["Trong ruột bé có các tế bào thần kinh và được liên tục kết nối với hệ thần kinh não bộ và có tác động lẫn nhau. Nên các nhà khoa học thường gọi hệ tiêu hóa là “ bộ não thứ 2” là vì vậy","Không biết","Hệ tiêu hóa & bộ não trẻ đâu có liên quan"],
            right:"0"};
        var que3={que:" Những dấu hiệu nào dưới đây thể hiện bé có “Hệ tiêu hóa khỏe”?",
            ans:["Đi tiêu đều đặn, phân mềm/ sệt","Bú/ ăn dễ dàng","Tăng trưởng tốt theo chuẩn WHO","Hoạt động hàng ngày thoải mái, lanh lợi","Tất cả các đáp án trên"],
            right:"4"};
        var que4={que:"Những dấu hiệu nào dưới đây thể hiện bé có “Trí não tinh anh”? ",
            ans:["Con lanh lợi, hoạt bát","Phát triển các kỹ năng chuẩn theo mốc tháng ( độ) tuổi","Phát triển khỏe mạnh, cân bằng","Tất cả các đáp án trên"],
            right:"3"};
        var que5={que:"Hệ tiêu hóa khỏe sẽ giúp phát triển gì??",
            ans:["Phát triển thể chất, tăng trưởng đều","Tất cả các đáp án trên, đặc biệt giúp trí não tinh anh."],
            right:"1"};
     
       
        var quelst=[que1,que2,que3,que4,que5];
        var wrong=[];
        $("#start").click(function(){
            $(".front").hide();
            $("#sub").show();
            $(".quiz").show();
            $("#num").text(i+1+"/"+quelst.length)
            $("#q").text(quelst[i].que);
            $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+quelst[i].ans[0])+"</label>";
            $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+quelst[i].ans[1])+"</label>";
            $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+quelst[i].ans[2])+"</label>";
            if(quelst[i].ans[3]){
                 $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>"+quelst[i].ans[3])+"</label>";
            }
            if(quelst[i].ans[4]){
                 $("#op5").html("<input type='radio' name='opt' id='o5' value='4'><label for='o5'>"+quelst[i].ans[4])+"</label>";
            }
            // Remove null 
            $('.radio>div').each(function(i){
                if(!$(this).text()){
                    $(this).hide();
                }
            })
            
        });
        $("#sub").click(function(){
            
            
            if($("input[name='opt']:checked").val()!=null){
                if($("input[name='opt']:checked").val()==quelst[i].right){
                    score++;
                }
                else{
                    wrong.push(i);
                }   
                $("#sub").hide();
                $(".score").text(score);
                if(i!=quelst.length-1){
                next();
                }
                else{
                    reslt();
                }

            }
            else{
                $(".p").text("Select One option");
            }
        });
        function next(){
            if(i!=(quelst.length)-1){
                    i++;
                }
            $('.radio>div').each(function(i){
                
                    $(this).show();
                
            })
            $("#q").text(quelst[i].que);
            $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+quelst[i].ans[0])+"</label>";
            $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+quelst[i].ans[1])+"</label>";
            if(quelst[i].ans[2]){
               $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+quelst[i].ans[2])+"</label>"; 
            }
            else{
                $("#op3").html('');
            }
            
            if(quelst[i].ans[3]){
                 $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>"+quelst[i].ans[3])+"</label>";
            }
            else{
                $('#op4').html('');
            }
            if(quelst[i].ans[4]){
                 $("#op5").html("<input type='radio' name='opt' id='o5' value='4'><label for='o5'>"+quelst[i].ans[4])+"</label>";
            }
            else{
                $('#op5').html('');
            }
            // Remove null 
            $('.radio>div').each(function(i){
                if(!$(this).text()){
                    $(this).hide();
                }
            })
            $("#num").text(i+1+"/"+quelst.length);

            $("#sub").show();
            }
        function reslt(){
            $(".quiz").hide();
            $(".result").show();
            $(".score").text(score+"/"+quelst.length);
            if(score<=4){
                $(".message").text("Tiếc quá!!! ");
            }
            else if(score<8){
                $(".message").text("Tốt lắm");
            }
            else{
                $(".message").text("Wow! Tuyệt vời!");
            }
        }
        $("#an").click(function(){
            $(".result").hide();
            $(".answers").show();
            if((wrong.toString()).search("0")!=-1){
                $("#a1").css('color','#ff6347');
            }
            if((wrong.toString()).search("1")!=-1){
                $("#a2").css('color','#ff6347');
            }
            if((wrong.toString()).search("2")!=-1){
                $("#a3").css('color','#ff6347');
            }
            if((wrong.toString()).search("3")!=-1){
                $("#a4").css('color','#ff6347');
            }
            if((wrong.toString()).search("4")!=-1){
                $("#a5").css('color','#ff6347');
            }
            if((wrong.toString()).search("5")!=-1){
                $("#a6").css('color','#ff6347');
            }
            if((wrong.toString()).search("6")!=-1){
                $("#a7").css('color','#ff6347');
            }
            if((wrong.toString()).search("7")!=-1){
                $("#a8").css('color','#ff6347');
            }
            if((wrong.toString()).search("8")!=-1){
                $("#a9").css('color','#ff6347');
            }
            if((wrong.toString()).search("9")!=-1){
                $("#a10").css('color','#ff6347');
            }
            
        });
        
    });