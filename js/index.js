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
          ans:["Trong ruột bé có các tế bào thần kinh và được liên tục kết nối với hệ thần kinh não bộ và có tác động lẫn nhau. Nên các nhà khoa học thường gọi hệ tiêu hóa là “ bộ não thứ 2” là vì vậy","Vì hệ tiêu hóa hấp thụ và đưa các dưỡng chất lên nuôi dưỡng bộ não.",
          "Hệ tiêu hóa & bộ não trẻ đâu có liên quan"],
          right:"0"};
      var que3={que:" Những dấu hiệu nào dưới đây thể hiện bé có “Hệ tiêu hóa khỏe”?",
          ans:["Đi tiêu đều đặn, phân mềm/ khuôn.","Bú/ ăn dễ dàng","Tăng trưởng tốt theo chuẩn WHO","Hoạt động hàng ngày thoải mái, lanh lợi","Tất cả các đáp án trên"],
          right:"4"};
      var que4={que:"Những dấu hiệu nào dưới đây thể hiện bé có “Trí não tinh anh”? ",
          ans:["Con lanh lợi, hoạt bát","Phát triển các kỹ năng chuẩn theo mốc tháng ( độ) tuổi","Phát triển khỏe mạnh, cân bằng","Tất cả các đáp án trên"],
          right:"3"};
      var que5={que:"Hệ tiêu hóa khỏe sẽ giúp phát triển gì??",
          ans:["Phát triển thể chất, tăng trưởng đều","Phát triển trí não tinh anh","Tất cả các đáp án trên."],
          right:"2"};


      var quelst=[que1,que2,que3,que4,que5];
      var wrong=[];
      $("#join").click(function(){
        $('.first').hide();
        $(".front").show();
        var imageUrl=window.location.href+"/image/front1.jpg";
        $('body').css('background-image', 'url("' + imageUrl + '"').fadeIn(2000);
      })
      $("#start").click(function(){
          $('.first').hide();
          $(".front").hide();
          var imageUrl=window.location.href+"/image/quiz1.jpg";
          $('body').css('background-image', 'url("' + imageUrl + '"').fadeIn(2000);
                $("#sub").show();
                $(".quiz").show();
          $("#num").text("Câu "+1+"/"+quelst.length)
          $("#q").text(quelst[i].que);
          $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+"&nbsp;"+quelst[i].ans[0])+"</label>";
          $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+"&nbsp;"+quelst[i].ans[1])+"</label>";
          $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+"&nbsp;"+quelst[i].ans[2])+"</label>";
          if(quelst[i].ans[3]){
               $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>"+"&nbsp;"+quelst[i].ans[3])+"</label>";
          }
          if(quelst[i].ans[4]){
               $("#op5").html("<input type='radio' name='opt' id='o5' value='4'><label for='o5'>"+"&nbsp;"+quelst[i].ans[4])+"</label>";
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
          $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+"&nbsp;"+quelst[i].ans[0])+"</label>";
          $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+"&nbsp;"+quelst[i].ans[1])+"</label>";
          if(quelst[i].ans[2]){
             $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+"&nbsp;"+quelst[i].ans[2])+"</label>";
          }
          else{
              $("#op3").html('');
          }

          if(quelst[i].ans[3]){
               $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>"+"&nbsp;"+quelst[i].ans[3])+"</label>";
          }
          else{
              $('#op4').html('');
          }
          if(quelst[i].ans[4]){
               $("#op5").html("<input type='radio' name='opt' id='o5' value='4'><label for='o5'>"+"&nbsp;"+quelst[i].ans[4])+"</label>";
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
          $("#num").text("Câu "+parseInt(i+1)+"/"+quelst.length);
          if(i==0){
            let imageUrl=window.location.href+"/image/quiz1.jpg";
            $('body').css('background-image', 'url("' + imageUrl + '"');
          }
          else{
            if(i==1){
              let imageUrl=window.location.href+"/image/quiz2.jpg";
              $('body').css('background-image', 'url("' + imageUrl + '"');
            }
            if(i==2){
              let imageUrl=window.location.href+"/image/quiz3.jpg";
              $('body').css('background-image', 'url("' + imageUrl + '"');
            }
            if(i==3){
              let imageUrl=window.location.href+"/image/quiz4.jpg";
              $('body').css('background-image', 'url("' + imageUrl + '"');
            }
            if(i==4){
              let imageUrl=window.location.href+"/image/quiz5.jpg";
              $('body').css('background-image', 'url("' + imageUrl + '"');
            }
          }
          $("#sub").show();
          }
      function reslt(){
          $(".quiz").hide();
          $(".result").show();
          $(".score").text(score+"/"+quelst.length);
          let imageUrl=window.location.href+"/image/result.jpg";
          $('body').css('background-image', 'url("' + imageUrl + '"');
          if(score<=4){
              $(".message").text("Rất tiếc bạn chỉ trả lời đúng "+score+"/"+quelst.length+ " câu hỏi");
          }

          else{
              $(".message").text("Chúc mừng bạn đã trả lời đúng 5/5 câu hỏi");
          }
      }
      $("#an").click(function(){
          $(".result").hide();
          $(".answers").show();


      });

  });
