getValueInput = function () {


    let horsepower = document.getElementById("domTextElement").value;
    //сколько лошадей

    let month = document.getElementById("domText").value;
    //Сколько у вас автомабиль



    var oblost = document.getElementById("SelectMy").options.selectedIndex;
    //город

    var selind = document.getElementById("SelectMyLove").options.selectedIndex;
    //тип транпорта

    let rubles = 0
    //руб

    var tanport


    console.log(selind + ' цифра траспорта')
    //Перевод из цифры в тип траспорта
    if (1 === selind) {
        tanport = 'PassengerCars'
    } else if (2 === selind) {
        tanport = 'Motorcycles'
    } else if (3 === selind) {
        tanport = 'Buses'
    } else if (4 === selind) {
        tanport = 'Trucks'
    } else if (5 === selind) {
        tanport = 'Propelled'
    } else if (6 === selind) {
        tanport = 'Snowmobiles'
    } else if (7 === selind) {
        tanport = 'Boats'
    } else if (8 === selind) {
        tanport = 'Yachts'
    } else if (9 === selind) {
        tanport = 'JetSkis'
    } else if (10 === selind) {
        tanport = 'NonSelfPropelled'
    } else if (11 === selind) {
        tanport = 'Aircraft'
    } else if (12 === selind) {
        tanport = 'Reagents'
    } else if (13 === selind) {
        tanport = 'Water'
    }


    var City

    if(1 === oblost ){
        City = 'Nizhniy'
    }else if(2 === oblost) {
        City = 'Moscoww'
    }else if (3 === oblost) {
        City = 'Sverdlovsk'
    }

    console.log(City)

    //пычисляет сколько стоет лошадиные силы
    if ("Nizhniy" === City) {
        if ("PassengerCars" === tanport) {//Автомобили легковые
            if (45 >= horsepower) {
                rubles = 13.5
            } else if (100 >= horsepower) {
                rubles = 22.50
            } else if (150 >= horsepower) {
                rubles = 31.5
            } else if (200 >= horsepower) {
                rubles = 45
            } else if (250 >= horsepower) {
                rubles = 75
            } else if (9999 >= horsepower) {
                rubles = 150
            }
        } else if ("Motorcycles" === tanport) {//Мотоциклы и мотороллеры
            if (20 >= horsepower) {
                rubles = 9
            } else if (35 >= horsepower) {
                rubles = 18
            } else if (40 >= horsepower) {
                rubles = 27
            } else if (999 >= horsepower) {
                rubles = 50
            }
        } else if ("Buses" === tanport) {//Автобусы
            if (200 >= horsepower) {
                rubles = 45
            } else if (9999 >= horsepower) {
                rubles = 90
            }
        } else if ("Trucks" === tanport) {//Грузовые автомобили
            if (100 >= horsepower) {
                rubles = 22.5
            } else if (150 >= horsepower) {
                rubles = 36
            } else if (200 >= horsepower) {
                rubles = 45
            } else if (250 >= horsepower) {
                rubles = 58.5
            } else if (9999 >= horsepower) {
                rubles = 76.5
            }
        } else if ("Propelled" === tanport) {//Другие самоходные транспортные средства, машины и механизмы на пневматическом и гусеничном ходу
            if (1 <= horsepower) {
                rubles = 25
            }
        } else if ("Snowmobiles" === tanport) {//Снегоходы, мотосани
            if (50 >= horsepower) {
                rubles = 30
            } else if (9999 >= horsepower) {
                rubles = 50
            }
        } else if ('Boats' === tanport) {//Катера, моторные лодки и другие водные транспортные средства
            if (40 >= horsepower) {
                rubles = 30
            } else if (100 >= horsepower) {
                rubles = 50
            } else if (9999 >= horsepower) {
                rubles = 100
            }
        } else if ('Yachts' === tanport) {//Яхты и другие парусно-моторные суда
            if (100 >= horsepower) {
                rubles = 100
            } else if (9999 >= horsepower) {
                rubles = 200
            }
        } else if ('JetSkis' === tanport) {////Гидроциклы
            if (100 >= horsepower) {
                rubles = 125
            } else if (9999 >= horsepower) {
                rubles = 250
            }
        } else if ('NonSelfPropelled' === tanport) {//Несамоходные (буксируемые) суда, для которых определяется валовая вместимость (с каждой регистровой тонны валовой вместимости)
            if (1 <= horsepower) {
                rubles = 100
            }
        } else if ('Aircraft' === tanport) {//Самолеты, вертолеты и иные воздушные суда, имеющие двигатели (с каждой лошадиной силы)
            if (1 <= horsepower) {
                rubles = 125
            }
        } else if ('Reagents' === tanport) {//Самолеты, имеющие реактивные двигатели (с каждого килограмма силы тяги)
            if (1 <= horsepower) {
                rubles = 100
            }
        } else if ('Water' === tanport) {//Другие водные и воздушные транспортные средства, не имеющие двигателей (с единицы транспортного средства)
            if (1 <= horsepower) {
                rubles = 1000
            }
        }


        //Москва
    }else if ('Moscoww' === City) {
        if ('PassengerCars' === tanport) {//Автомобили легковые
            if (100 >= horsepower) {
                rubles = 12
            } else if (125 >= horsepower) {
                rubles = 25
            }else if (150 >= horsepower) {
                rubles = 35
            } else if (175 >= horsepower) {
                rubles = 45
            } else if (200 >= horsepower) {
                rubles = 50
            } else if (225 >= horsepower) {
                rubles = 65
            } else if (250 >= horsepower) {
                rubles = 75
            } else if (9999 >= horsepower) {
                rubles = 150
            }
        } else if ('Motorcycles' === tanport) {//Мотоциклы и мотороллеры
            if (20 >= horsepower) {
                rubles = 7
            } else if (35 >= horsepower) {
                rubles = 15
            } else if (999 >= horsepower) {
                rubles = 50
            }
        } else if ('Buses' === tanport) {//Автобусы
            if (110 >= horsepower) {
                rubles = 15
            } else if (200 >= horsepower) {
                rubles = 26
            } else if (9999 >= horsepower) {
                rubles = 55
            }
        } else if ('Trucks' === tanport) {//Грузовые автомобили
            if (100 >= horsepower) {
                rubles = 15
            } else if (150 >= horsepower) {
                rubles = 26
            } else if (200 >= horsepower) {
                rubles = 38
            } else if (250 >= horsepower) {
                rubles = 55
            } else if (9999 >= horsepower) {
                rubles = 70
            }
        } else if ('Propelled' === tanport) {//Другие самоходные транспортные средства, машины и механизмы на пневматическом и гусеничном ходу
            if (1 <= horsepower) {
                rubles = 25
            }
        } else if ('Snowmobiles' === tanport) {//Снегоходы, мотосани
            if (50 >= horsepower) {
                rubles = 25
            } else if (9999 >= horsepower) {
                rubles = 50
            }
        } else if ('Boats' === tanport) {//Катера, моторные лодки и другие водные транспортные средства
            if (100 >= horsepower) {
                rubles = 100
            } else if (9999 >= horsepower) {
                rubles = 200
            }
        } else if ('Yachts' === tanport) {//Яхты и другие парусно-моторные суда
            if (100 >= horsepower) {
                rubles = 200
            } else if (9999 >= horsepower) {
                rubles = 400
            }
        } else if ('JetSkis' === tanport) {////Гидроциклы
            if (100 >= horsepower) {
                rubles = 250
            } else if (9999 >= horsepower) {
                rubles = 500
            }
        } else if ('NonSelfPropelled' === tanport) {//Несамоходные (буксируемые) суда, для которых определяется валовая вместимость (с каждой регистровой тонны валовой вместимости)
            if (1 <= horsepower) {
                rubles = 200
            }
        } else if ('Aircraft' === tanport) {//Самолеты, вертолеты и иные воздушные суда, имеющие двигатели (с каждой лошадиной силы)
            if (1 <= horsepower) {
                rubles = 250
            }
        } else if ('Reagents' === tanport) {//Самолеты, имеющие реактивные двигатели (с каждого килограмма силы тяги)
            if (1 <= horsepower) {
                rubles = 200
            }
        } else if ('Water' === tanport) {//Другие водные и воздушные транспортные средства, не имеющие двигателей (с единицы транспортного средства)
            if (1 <= horsepower) {
                rubles = 2000
            }
        }

        //Сан-Петербург
    }else if ('Sverdlovsk' === City){
    if ('PassengerCars' === tanport) {//Автомобили легковые
        if (100 >= horsepower) {
            rubles = 2.5
        }  else if (150 >= horsepower) {
            rubles = 9.4
        } else if (200 >= horsepower) {
            rubles = 32.7
        } else if (250 >= horsepower) {
            rubles = 49.6
        } else if (9999 >= horsepower) {
            rubles = 99.2
        }
    } else if ('Motorcycles' === tanport) {//Мотоциклы и мотороллеры
        if (20 >= horsepower) {
            rubles = 4.5
        } else if (36 >= horsepower) {
            rubles = 9.5
        }  else if (999 >= horsepower) {
            rubles = 32.9
        }
    } else if ('Buses' === tanport) {//Автобусы
        if (200 >= horsepower) {
            rubles = 32.9
        } else if (9999 >= horsepower) {
            rubles = 66.2
        }
    } else if ('Trucks' === tanport) {//Грузовые автомобили
        if (100 >= horsepower) {
            rubles = 7.3
        } else if (150 >= horsepower) {
            rubles = 11.7
        } else if (200 >= horsepower) {
            rubles = 14.7
        } else if (250 >= horsepower) {
            rubles = 19.1
        } else if (9999 >= horsepower) {
            rubles = 56.2
        }
    } else if ('Propelled' === tanport) {//Другие самоходные транспортные средства, машины и механизмы на пневматическом и гусеничном ходу
        if (1 <= horsepower) {
            rubles = 16
        }
    } else if ('Snowmobiles' === tanport) {//Снегоходы, мотосани
        if (50 >= horsepower) {
            rubles = 16.7
        } else if (9999 >= horsepower) {
            rubles = 32.9
        }
    } else if ('Boats' === tanport) {//Катера, моторные лодки и другие водные транспортные средства
        if (100 >= horsepower) {
            rubles = 32.9
        } else if (9999 >= horsepower) {
            rubles = 65.6
        }
    } else if ('Yachts' === tanport) {//Яхты и другие парусно-моторные суда
        if (100 >= horsepower) {
            rubles = 65.6
        } else if (9999 >= horsepower) {
            rubles = 131.2
        }
    } else if ('JetSkis' === tanport) {////Гидроциклы
        if (100 >= horsepower) {
            rubles = 82.4
        } else if (9999 >= horsepower) {
            rubles = 164.1
        }
    } else if ('NonSelfPropelled' === tanport) {//Несамоходные (буксируемые) суда, для которых определяется валовая вместимость (с каждой регистровой тонны валовой вместимости)
        if (1 <= horsepower) {
            rubles = 65.7
        }
    } else if ('Aircraft' === tanport) {//Самолеты, вертолеты и иные воздушные суда, имеющие двигатели (с каждой лошадиной силы)
        if (1 <= horsepower) {
            rubles = 82.4
        }
    } else if ('Reagents' === tanport) {//Самолеты, имеющие реактивные двигатели (с каждого килограмма силы тяги)
        if (1 <= horsepower) {
            rubles = 65.6
        }
    } else if ('Water' === tanport) {//Другие водные и воздушные транспортные средства, не имеющие двигателей (с единицы транспортного средства)
        if (1 <= horsepower) {
            rubles = 656.1
        }
    }
}
     //База цир
     usage = {
         Month1:1,
         Month2:2,
         Month3:3,
         Month4:4,
         Month5:5,
         Month6:6,
         Month7:7,
         Month8:8,
         Month9:9,
         Month10:10,
         Month11:11,
         Month12:12,
     }
                //Проверка месяцы на цифры
     if (usage.Month1===month){
         month = 1
     }else if (usage.Month2===month) {
         month = 2
     }else if (usage.Month3===month) {
         month = 3
     }else if (usage.Month4===month) {
         month = 4
     }else if (usage.Month5===month) {
         month = 5
     }else if (usage.Month6===month) {
         month = 6
     }else if (usage.Month7===month) {
         month = 7
     }else if (usage.Month8===month) {
         month = 8
     }else if (usage.Month9===month) {
         month = 9
     }else if (usage.Month10===month) {
         month = 10
     }else if (usage.Month11===month) {
         month = 11
     }else if (usage.Month10===month) {
         month = 12
     }

    console.log(rubles)

     //Подсчет цифр
     finish = rubles * horsepower * (month / 12)


     //Показывает цифры на сайте
     document.getElementById("rub").innerHTML = rubles + " руб./л.с.";
     document.getElementById("valueInput").innerHTML = finish + " руб.";
 }
getValueInput()
