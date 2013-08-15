var s1;
var s2;
var s3;
var ticks;
var arr;


$(document).ready(function()
{
  navpre();
  if(!window.localStorage){alert('This browser does NOT support localStorage...Please update your browser');}
  // alert(localStorage.a);
  if(localStorage.majorsele==null){localStorage.majorsele = 0;}
  // alert("majorsele: "+localStorage.majorsele);

  if (localStorage.majorsele==0){allmajor();}
  else if (localStorage.majorsele==1) {major1();}
  else if (localStorage.majorsele==2) {major2();}
  else if (localStorage.majorsele==3) {major3();}
});

function allmajor()
{
  s1 = [38025,38460,41022.22222,41616.66667,36637.5,50014.28571,49500,31400,58330,38562.5,39000,39950,36500,35766.66667,49533.33333,36216.66667,42000,36600,46966.66667,35200,38910,34733.33333,32450,35430];
  s2 = [64675,66880,73455.55556,69566.66667,65125,85671.42857,86100,46000,97580,70075,70200,58183.33333,52100,58866.66667,95766.66667,54866.66667,65500,65500,92000,60200,70200,52033.33333,50850,58680];
  s3 = [0.69,0.73,0.80,0.67,0.78,0.72,0.74,0.46,0.68,0.82,0.80,0.47,0.43,0.65,0.93,0.52,0.56,0.78,0.96,0.71,0.78,0.50,0.57,0.66,];
  ticks = ['Agriculture, Agriculture Operations, and Related Sciences','Architecture and Related Services','Biological and Biomedical Sciences','Business, Management, Marketing, and Related Support Services','Communication, Journalism, and Related Programs','Computer and Information Sciences and Support Services','Construction Trades','Education','Engineering','Foreign Languages, Literatures, and Linguistics','History','Human Services','Legal Professions and Studies','Liberal Arts and Sciences Studies and Humanities','Mathematics and Statistics','Multi/interdisciplinary Studies','Natural Resources and Conservation','Philosophy and Religious Studies','Physical Sciences','Psychology','Social Sciences','Sports Science','Theology and Religious Vocations','Visual and Performing Arts'];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major1()
{
  s1=[33300,36800,38000,44000];
  s2=[53200,55100,69300,81100];
  s3=[0.60,0.50,0.82,0.84];
  ticks=["Animal Science","Horticulture","Agriculture","Food Science"];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major2()
{
  s1=[35500,35300,40600,41900,39000];
  s2=[55500,57500,66300,75200,79900];
  s3=[0.56,0.63,0.63,0.79,1.05];
  ticks=["Graphic Design","Interior Design","Landscape Architecture","Architecture","Urban Planning"];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major3()
{
  s1=[40600,49600,39000,36500,39100,39700,41400,40100,43200];
  s2=[57900,60200,68700,69700,72200,76200,82800,84900,88500];
  s3=[0.43,0.21,0.76,0.91,0.85,0.92,1.00,1.12,1.05];
  ticks=["Nutrition","Medical Technology","Health Sciences","Zoology","Biology","Microbiology","Biotechnology","Molecular Biology","Biochemistry (BCH)"];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major4()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major5()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major6()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major7()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major8()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major9()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major10()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major11()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major12()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major13()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major14()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major15()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major16()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major17()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major18()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major19()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major20()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major21()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major22()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major23()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}
function major24()
{
  s1=[33300,36800,38000,44000];
  s2=[33300,36800,38000,44000];
  s3=[33300,36800,38000,44000];
  ticks=[33300,36800,38000,44000];
  arr=[];
  for (var i = 0; i < s1.length; i++) {
    tmp=[];
    tmp.push(s1[i]);tmp.push(s2[i]);tmp.push(s3[i]);tmp.push(ticks[i]);
    arr.push(tmp);
  };
  chart7();
}

function chart7()
{
  $.jqplot.config.enablePlugins = false;
  $("#tabs").tabs();

  $.jqplot.config.enablePlugins = true;
  // s1 = [38025,38460,41022.22222,41616.66667,36637.5,50014.28571,49500,31400,58330,38562.5,39000,39950,36500,35766.66667,49533.33333,36216.66667,42000,36600,46966.66667,35200,38910,34733.33333,32450,35430];
  // s2 = [64675,66880,73455.55556,69566.66667,65125,85671.42857,86100,46000,97580,70075,70200,58183.33333,52100,58866.66667,95766.66667,54866.66667,65500,65500,92000,60200,70200,52033.33333,50850,58680];
  // s3 = [0.690436559,0.733749549,0.804745159,0.671492926,0.778469289,0.715893264,0.739393939,0.464968153,0.679505971,0.822994078,0.8,0.469518121,0.42739726,0.647418991,0.93173392,0.517252234,0.55952381,0.784456897,0.95990265,0.710227273,0.782786875,0.499622248,0.567022792,0.655602203];
  // ticks = ['Agriculture, Agriculture Operations, and Related Sciences','Architecture and Related Services','Biological and Biomedical Sciences','Business, Management, Marketing, and Related Support Services','Communication, Journalism, and Related Programs','Computer and Information Sciences and Support Services','Construction Trades','Education','Engineering','Foreign Languages, Literatures, and Linguistics','History','Human Services','Legal Professions and Studies','Liberal Arts and Sciences Studies and Humanities','Mathematics and Statistics','Multi/interdisciplinary Studies','Natural Resources and Conservation','Philosophy and Religious Studies','Physical Sciences','Psychology','Social Sciences','Sports Science','Theology and Religious Vocations','Visual and Performing Arts'];
   
  var plot1 = $.jqplot('chart1', [s1, s2, s3], {
      // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
      height: 600,
      width: 950,
      animate: !$.jqplot.use_excanvas,
      legend:{renderer: $.jqplot.EnhancedLegendRenderer,show: true},
      cursor: {
            show: true,
            zoom: true,
            looseZoom: true,
            showTooltip: false
      },
      series:[
      {
          renderer:$.jqplot.BarRenderer,
          pointLabels: { show: false },
          label: 'Average Starting Salary',
          yaxis: 'yaxis'
      },
      {
          renderer:$.jqplot.BarRenderer,
          pointLabels: { show: false },
          label: 'Average Mid-Career Salary',
          yaxis: 'yaxis'
      },
      {
          pointLabels: { show: false },
          label: 'Growth In Pay',
          yaxis: 'y2axis'
      }
      ],
      axes: {
          xaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              // ticks: ticks
          },
          yaxis: {
                tickOptions: {
                },
                rendererOptions: {
                    forceTickAt0: true
                }
            },
            y2axis: {
                tickOptions: {
                },
                rendererOptions: {
                    // align the ticks on the y2 axis with the y axis.
                    alignTicks: true,
                    forceTickAt0: false
                }
            }
      },
      // stackSeries: true,
      highlighter: 
      {
        show: true
        
      }
  });
  $.each(ticks, function(index, val) {
    $('#legend1').append('<tr><td>'+val+'</td></tr>');
  });
  $('#legend1').css('font-size','30%');
  $('#legend1').css('border-style','solid');
  $('#legend1').css('border-width','1px');

  $('#chart1').bind('jqplotDataHighlight', 
    function (ev, seriesIndex, pointIndex, data, radius) {    
      var chart_left = $('#chart1').offset().left,
        chart_top = $('#chart1').offset().top,
        x = plot1.axes.xaxis.u2p(data[0]),  // convert x axis unita to pixels
        y = plot1.axes.yaxis.u2p(data[1]);  // convert y axis units to pixels
      var color = 'rgb(50%,50%,100%)';
      $('#legend1 tr').css('background-color', '#ffffff');
      $('#legend1 tr').eq(pointIndex+1).css('background-color', color);
    });
   
  // Bind a function to the unhighlight event to clean up after highlighting.
  $('#chart1').bind('jqplotDataUnhighlight', 
      function (ev, seriesIndex, pointIndex, data) {
          $('#legend6 tr').css('background-color', '#ffffff');
      });




  // var arr = [[11, 123, 1236, "Acura"], [45, 92, 1067, "Alfa Romeo"], 
  // [24, 104, 1176, "AM General"], [50, 23, 610, "Aston Martin Lagonda"], 
  // [18, 17, 539, "Audi"], [7, 89, 864, "BMW"], [2, 13, 1026, "Bugatti"]];
  
  // arr=[[41616.66667,69566.66667,0.67,"Business, Management, Marketing, and Related Support Services"],[36637.5,65125,0.77,"Communication, Journalism, and Related Programs"],[49500,86100,0.73,"Construction Trades"],[50014.28571,85671.42857,0.71,"Computer and Information Sciences and Support Services"],[58330,97580,0.67,"Engineering"],[38460,66880,0.73,"Architecture and Related Services"],[31400,46000,0.46,"Education"],[38562.5,70075,0.82,"Foreign Languages, Literatures, and Linguistics"],[39950,58183.33333,0.46,"Human Services"],[36500,52100,0.42,"Legal Professions and Studies"],[36216.66667,54866.66667,0.51,"Multi/interdisciplinary Studies"],[42000,65500,0.55,"Natural Resources and Conservation"],[32450,50850,0.56,"Theology and Religious Vocations"],[35430,58680,0.65,"Visual and Performing Arts"],[38025,64675,0.69,"Agriculture, Agriculture Operations, and Related Sciences"],[41022.22222,73455.55556,0.80,"Biological and Biomedical Sciences"],[39000,70200,0.8,"History"],[35766.66667,58866.66667,0.64,"Liberal Arts and Sciences Studies and Humanities"],[49533.33333,95766.66667,0.93,"Mathematics and Statistics"],[36600,65500,0.78,"Philosophy and Religious Studies"],[46966.66667,92000,0.95,"Physical Sciences"],[35200,60200,0.71,"Psychology"],[38910,70200,0.78,"Social Sciences"],[34733.33333,52033.33333,0.49,"Sports Science"]];

  var plot2 = $.jqplot('chart6',[arr],{
    height: 600,
    width: 900,
    seriesDefaults:{
      renderer: $.jqplot.BubbleRenderer,
      rendererOptions: {
        bubbleAlpha: 0.6,
        highlightAlpha: 0.8,
        showLabels: false
      },
      shadow: true,
      shadowAlpha: 0.05
    },
    axes: {
      yaxis: {showTicks: false},
      xaxis:{showTicks: false}
    }
  });
   
  // Legend is a simple table in the html.
  // Dynamically populate it with the labels from each data value.
  // alert(arr.length-1);
  $.each(arr, function(index, val) {
    $('#legend6').append('<tr><td>'+val[3]+'</td><td>'+val[2]+'</td></tr>');
  });
  $('#legend6').css('font-size','30%');
  $('#legend6').css('border-style','solid');
  $('#legend6').css('border-width','1px');
   
  // Now bind function to the highlight event to show the tooltip
  // and highlight the row in the legend. 
  $('#chart6').bind('jqplotDataHighlight', 
    function (ev, seriesIndex, pointIndex, data, radius) {    
      var chart_left = $('#chart6').offset().left,
        chart_top = $('#chart6').offset().top,
        x = plot2.axes.xaxis.u2p(data[0]),  // convert x axis unita to pixels
        y = plot2.axes.yaxis.u2p(data[1]);  // convert y axis units to pixels
      var color = 'rgb(50%,50%,100%)';
      $('#legend6 tr').css('background-color', '#ffffff');
      $('#legend6 tr').eq(pointIndex+1).css('background-color', color);
    });
   
  // Bind a function to the unhighlight event to clean up after highlighting.
  $('#chart6').bind('jqplotDataUnhighlight', 
      function (ev, seriesIndex, pointIndex, data) {
          $('#legend6 tr').css('background-color', '#ffffff');
      });


  $('#tabs').bind('tabsactivate', function(event, ui) {
    if (ui.newTab.index() === 0 && plot1._drawCount === 0) {
      plot1.replot();
    }
    else if (ui.newTab.index() === 1 && plot2._drawCount === 0) {
      plot2.replot();
    }
  });
 
}

function record(n)
{
  // alert("record is called");
  localStorage.majorsele=n;
  // alert(localStorage.majorsele);
  window.location.reload(true);
}

function navpre()
{
  $("#navigation").navPlugin({
         'itemWidth': 400,
         'itemHeight': 30,
         'navEffect': "slide",
         'speed': 250
       });
}