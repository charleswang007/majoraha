$(document).ready(function()
{
  piechart();

});

function piechart()
{
  $.jqplot.config.enablePlugins = true;
    s2 = [['engineering related', 9], ['business related', 4], ['history', 1], ['law', 1], ['philosophy', 1], ['none', 5]];

    plot2 = $.jqplot('piechart1', [s2], {
        seriesDefaults: {
            renderer:$.jqplot.PieRenderer,
            rendererOptions:{
                width: 500,
                sliceMargin: 4,
                startAngle: -90,
                showDataLabels: true
            }
        },
        legend: { show:true, location: 'e' },
        highlighter: {
        show: true,
        sizeAdjust: 7.5
      }
    });
}