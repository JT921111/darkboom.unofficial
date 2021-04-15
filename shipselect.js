window.onload = title;
function title(){
  document.getElementsByName('11').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n黑鋒 驅逐"
  })
  document.getElementsByName('12').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n黑鋒 輕巡"
  })
  document.getElementsByName('13').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n黑鋒 重巡"
  })
  document.getElementsByName('14').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n黑鋒 戰艦"
  })
  document.getElementsByName('15').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n黑鋒 航母"
  })
  document.getElementsByName('21').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n薔薇 驅逐"
  })
  document.getElementsByName('22').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n薔薇 輕巡"
  })
  document.getElementsByName('23').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n薔薇 重巡"
  })
  document.getElementsByName('24').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n薔薇 戰艦"
  })
  document.getElementsByName('25').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n薔薇 航母"
  })
  document.getElementsByName('31').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n神代 驅逐"
  })
  document.getElementsByName('32').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n神代 輕巡"
  })
  document.getElementsByName('33').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n神代 重巡"
  })
  document.getElementsByName('34').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n神代 戰艦"
  })
  document.getElementsByName('35').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n神代 航母"
  })
  document.getElementsByName('41').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n銀翼 驅逐"
  })
  document.getElementsByName('42').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n銀翼 輕巡"
  })
  document.getElementsByName('43').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n銀翼 重巡"
  })
  document.getElementsByName('44').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n銀翼 戰艦"
  })
  document.getElementsByName('45').forEach(function tag(element){
    var ship = element.alt
    element.title = ship + "\n銀翼 航母"
  })
}
function ticked(){
  async function select(){
    var germany = document.getElementById('c1');
    var england = document.getElementById('c2');
    var japan = document.getElementById('c3');
    var america = document.getElementById('c4');
    var destroyer = document.getElementById('k1');
    var lightcruiser = document.getElementById('k2');
    var heavycruiser = document.getElementById('k3');
    var battleship = document.getElementById('k4');
    var carrier = document.getElementById('k5');
    if(germany.checked == true){
      if(destroyer.checked == true){
        document.getElementsByName('11').forEach(function visual(element){
          element.style.display = ""
        })
      }else{
        document.getElementsByName('11').forEach(function visual(element){
          element.style.display = "none"
        })
      }
      if(lightcruiser.checked == true){
        document.getElementsByName('12').forEach(function visual(element){
          element.style.display = ""
        })
      }else{
        document.getElementsByName('12').forEach(function visual(element){
          element.style.display = "none"
        })
      }
      if(heavycruiser.checked == true){
        document.getElementsByName('13').forEach(function visual(element){
          element.style.display = ""
        })
      }else{
        document.getElementsByName('13').forEach(function visual(element){
          element.style.display = "none"
        })
      }
      if(battleship.checked == true){
        document.getElementsByName('14').forEach(function visual(element){
          element.style.display = ""
        })
      }else{
        document.getElementsByName('14').forEach(function visual(element){
          element.style.display = "none"
        })
      }
      if(carrier.checked == true){
        document.getElementsByName('15').forEach(function visual(element){
          element.style.display = ""
        })
      }else{
        document.getElementsByName('15').forEach(function visual(element){
          element.style.display = "none"
        })
      }
    }else{
      document.getElementsByName('11').forEach(function visual(element){
        element.style.display = "none"
      })
      document.getElementsByName('12').forEach(function visual(element){
        element.style.display = "none"
      })
      document.getElementsByName('13').forEach(function visual(element){
        element.style.display = "none"
      })
      document.getElementsByName('14').forEach(function visual(element){
        element.style.display = "none"
      })
      document.getElementsByName('15').forEach(function visual(element){
        element.style.display = "none"
      })
    }
    if(england.checked == true){
      if(destroyer.checked == true){
        document.getElementsByName('21').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('21').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(lightcruiser.checked == true){
        document.getElementsByName('22').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('22').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(heavycruiser.checked == true){
        document.getElementsByName('23').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('23').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(battleship.checked == true){
        document.getElementsByName('24').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('24').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(carrier.checked == true){
        document.getElementsByName('25').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('25').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
    }else{
      document.getElementsByName('21').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('22').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('23').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('24').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('25').forEach(function visual(element){
        element.style.display = "none"        
      })
    }
    if(japan.checked == true){
      if(destroyer.checked == true){
        document.getElementsByName('31').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('31').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(lightcruiser.checked == true){
        document.getElementsByName('32').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('32').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(heavycruiser.checked == true){
        document.getElementsByName('33').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('33').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(battleship.checked == true){
        document.getElementsByName('34').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('34').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(carrier.checked == true){
        document.getElementsByName('35').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('35').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
    }else{
      document.getElementsByName('31').forEach(function visual(element){
        element.style.display = "none"       
      })
      document.getElementsByName('32').forEach(function visual(element){
        element.style.display = "none"     
      })
      document.getElementsByName('33').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('34').forEach(function visual(element){
        element.style.display = "none"        
      });
      document.getElementsByName('35').forEach(function visual(element){
        element.style.display = "none"        
      })
    }
    if(america.checked == true){
      if(destroyer.checked == true){
        document.getElementsByName('41').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('41').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(lightcruiser.checked == true){
        document.getElementsByName('42').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('42').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(heavycruiser.checked == true){
        document.getElementsByName('43').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('43').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(battleship.checked == true){
        document.getElementsByName('44').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('44').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
      if(carrier.checked == true){
        document.getElementsByName('45').forEach(function visual(element){
          element.style.display = ""          
        })
      }else{
        document.getElementsByName('45').forEach(function visual(element){
          element.style.display = "none"          
        })
      }
    }else{
      document.getElementsByName('41').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('42').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('43').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('44').forEach(function visual(element){
        element.style.display = "none"        
      })
      document.getElementsByName('45').forEach(function visual(element){
        element.style.display = "none"        
      })
    }
  }
  select();
}