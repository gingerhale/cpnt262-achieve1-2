const myChart = document.getElementById('myChart').getContext('2d');

    const massPopChart = new Chart(myChart, {
      type:'bar', 
      data:{
        // this below changed the title of each bar on the graft
        labels:['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Airdrie', 'Fort McMurray'],
        datasets:[{
          label:'Population',
          data:[
          // this below changes the number value of each bar on the graph
          1305550,
          1151635,
          99846,
          92563,
          73578,
          68002
          ],

          // this below changed the color of all the bars on the graph
          backgroundColor:[
            '#770087',
            '#52009E',
            '#1900B3',
            '#0030C7',
            '#007CD7',
            '#13C5E4',
          ]
        }],
      },
      options:{}


    });