const myChart = document.getElementById('myChart').getContext('2d');

    const massPopChart = new Chart(myChart, {
      type:'bar', 
      data:{
        labels:['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Airdrie', 'Fort McMurray'],
        datasets:[{
          label:'Population',
          data:[
          1305550,
          1151635,
          99846,
          92563,
          73578,
          68002
          ],
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