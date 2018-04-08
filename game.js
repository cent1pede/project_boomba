var field_size_x = 7;
var field_size_y = 7;

var setup_obj = [];
var shown = false;
var setup_accidents = [];
var setup_items = [];
var p = 0;
var q = 0;
var current_round = 1;
var found_accidents = 0;
var found_items = 0;

var players_count = 4;
var decks_object = [{}];
var drawal_object = [{}];
var setup_bomb_cards = [];

var drawalsMade = 0;



//фунеция перемешивания массива
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function plusround() {
    current_round = current_round + 1;
    document.getElementById("currentround").innerHTML = ("Текущий раунд: " + current_round);
}

function minusround() {
    if (current_round != 1) {
        current_round = current_round - 1;
    }
    document.getElementById("currentround").innerHTML = ("Текущий раунд: " + current_round);
}



function fillCardsRandom() {


    var bomb_cards = ["Пинок на 4 клетки со взрывом", "Взрываем бомбу по прямой", "Уворот на 4 клетки", "Взрываем бомбу по 2 стороны от бомбы", "Пинок на 4 клетки со взрывом", "Камикадзе", "Пинок на 4 клетки со взрывом", "Пинок на 4 клетки", "Вернуть бомбу тому кто запустил", "Пинок на 4 клетки со взрывом", "Воскреснуть", "Пинок на 4 клетки со взрывом", "Забрать бомбу себе", "Пинок на 4 клетки со взрывом", "Защититься от взрыва", "Взрываем бомбу по 2 стороны от бомбы", "Пинок на 4 клетки", "Поменяться местами с другим", "Уворот на 4 клетки", "Защититься от взрыва", "Защититься от взрыва", "Воскреснуть", "Потушить бомбу", "Потушить бомбу", "Взрываем бомбу по 2 стороны от бомбы", "Защититься от взрыва", "Взрываем бомбу по прямой", "Пинок на 4 клетки со взрывом", "Взрываем бомбу по прямой", "Пинок на 4 клетки со взрывом", "Пинок на 4 клетки", "Вернуть бомбу тому кто запустил", "Вернуть бомбу тому кто запустил", "Воскреснуть", "Взрываем бомбу по 2 стороны от бомбы", "Забрать бомбу себе", "Съесть бомбу", "Уворот на 4 клетки", "Забрать бомбу себе", "Взрываем бомбу по прямой", "Камикадзе", "Уворот на 4 клетки", "Потушить бомбу", "Вернуть бомбу тому кто запустил", "Уворот на 4 клетки", "Вернуть бомбу тому кто запустил", "Взрываем бомбу по прямой", "Вернуть бомбу тому кто запустил", "Потушить бомбу", "Уворот на 4 клетки", "Взрываем бомбу по прямой", "Пинок на 4 клетки", "Потушить бомбу", "Забрать бомбу себе", "Поменяться местами с другим", "Пинок на 4 клетки", "Пинок на 4 клетки", "Камикадзе", "Съесть бомбу", "Потушить бомбу"];



    /*
        var bomb_cards = [
            "Уворот на 4 клетки",
            "Уворот на 4 клетки",
            "Уворот на 4 клетки",
            "Уворот на 4 клетки",
            "Уворот на 4 клетки",
            "Уворот на 4 клетки",
            "Пинок на 4 клетки",
            "Пинок на 4 клетки",
            "Пинок на 4 клетки",
            "Пинок на 4 клетки",
            "Пинок на 4 клетки",
            "Пинок на 4 клетки",
            "Пинок на 4 клетки со взрывом",
            "Пинок на 4 клетки со взрывом",
            "Пинок на 4 клетки со взрывом",
            "Пинок на 4 клетки со взрывом",
            "Пинок на 4 клетки со взрывом",
            "Пинок на 4 клетки со взрывом",
            "Пинок на 4 клетки со взрывом",
            "Пинок на 4 клетки со взрывом",
            "Вернуть бомбу тому кто запустил",
            "Вернуть бомбу тому кто запустил",
            "Вернуть бомбу тому кто запустил",
            "Вернуть бомбу тому кто запустил",
            "Вернуть бомбу тому кто запустил",
            "Вернуть бомбу тому кто запустил",
            "Защититься от взрыва",
            "Защититься от взрыва",
            "Защититься от взрыва",
            "Защититься от взрыва",
            "Потушить бомбу",
            "Потушить бомбу",
            "Потушить бомбу",
            "Потушить бомбу",
            "Потушить бомбу",
            "Потушить бомбу",
            "Забрать бомбу себе",
            "Забрать бомбу себе",
            "Забрать бомбу себе",
            "Забрать бомбу себе",
            "Взрываем бомбу по прямой",
            "Взрываем бомбу по прямой",
            "Взрываем бомбу по прямой",
            "Взрываем бомбу по прямой",
            "Взрываем бомбу по прямой",
            "Взрываем бомбу по прямой",
            "Взрываем бомбу по 2 стороны от бомбы",
            "Взрываем бомбу по 2 стороны от бомбы",
            "Взрываем бомбу по 2 стороны от бомбы",
            "Взрываем бомбу по 2 стороны от бомбы",
            "Камикадзе",
            "Камикадзе",
            "Воскреснуть",
            "Камикадзе",
            "Воскреснуть",
            "Воскреснуть",
            "Съесть бомбу",
            "Съесть бомбу",
            "Поменяться местами с другим",
            "Поменяться местами с другим"
            ]


    */

    var accidents_arr = [
        "Вой собаки-призрака", "Вой собаки-призрака",
        "Скрипучий пол", "Скрипучий пол", "Скрипучий пол", "Скрипучий пол",
        "Жажда действий", "Жажда действий", "Жажда действий", "Жажда действий",
        "Слабость", "Слабость",
        "Астрал", "Астрал", "Астрал", "Астрал",
        "Оцепенение", "Оцепенение",
        "Отяжелевшее золото", "Отяжелевшее золото", "Отяжелевшее золото", "Отяжелевшее золото",
        "Предательство", "Предательство",
        "Чрезмерная уверенность", "Чрезмерная уверенность", "Чрезмерная уверенность", "Чрезмерная уверенность",
        "Храбрость", "Храбрость", "Храбрость", "Храбрость",
        "Боязливость", "Боязливость",
        "Карточка “Заебок”", "Карточка “Заебок”",
        "Дальнозоркость", "Дальнозоркость",
        "Паника", "Паника",
        "Съёбинг", "Съёбинг",
        "Съёбинг PRO", "Съёбинг PRO",
        "Жертва", "Жертва",
        "Телепатия", "Телепатия", "Телепатия", "Телепатия"]




    var items_arr = [
        "Мешок золота/хилка", "Мешок золота/хилка", "Мешок золота/хилка", "Мешок золота/хилка", "Мешок золота/хилка", "Мешок золота/хилка",
        "Бодрящий гриб", "Бодрящий гриб", "Бодрящий гриб", "Бодрящий гриб", "Бодрящий гриб", "Бодрящий гриб",
        "Факел", "Факел", "Факел", "Факел", "Факел", "Факел",
        "Фамильная реликвия", "Фамильная реликвия", "Фамильная реликвия", "Фамильная реликвия",
        "Призрачная косточка", "Призрачная косточка",
        "Противоядие", "Противоядие", "Противоядие", "Противоядие",
        "Благовония", "Благовония", "Благовония", "Благовония",
        "Святая вода", "Святая вода", "Святая вода", "Святая вода",
        "Мантия невидимка", "Мантия невидимка",
        "Поясная сумка", "Поясная сумка",
        "Крюк", "Крюк", "Крюк", "Крюк", "Крюк", "Крюк",
        "Кукла вуду",
        "Склянка “Лови Момент”", "Склянка “Лови Момент”"
    ]
    //setup_accidents = shuffle(accidents_arr);
    // setup_items = shuffle(items_arr);
    setup_bomb_cards = shuffle(bomb_cards);

    return setup_bomb_cards;
}



function shuffleAndDrawBombCards(card_array) {

    for (var i = 0; i < 4; i++) {
        decks_object[i] = card_array.splice(0, 15);
    }
    drawal_object = $.extend(true, {}, decks_object);


}

//функция удаляет текущие карты на руках игроков, 
function cardDrawal() {
    drawalsMade++;
    if (drawalsMade > 3) {
        drawalsMade = 0;
        decks_object = [{}];
        drawal_object = [{}];
        shuffleAndDrawBombCards(fillCardsRandom());

    }
    $('.bombs-hand').remove();


    for (var i = 0; i < players_count; i++) {

        $.each(drawal_object[i], function (index, val) {
            var correct_i = i + 1;
            var player_hand = "#player" + correct_i + "-hand";
            if (index == 0) {
                for (var j = 0; j < 3; j++) {
                    var li = $('<li/>')
                        .addClass('bombs-hand')
                        .appendTo(player_hand)
                        .text(drawal_object[i][j]);
                }
                drawal_object[i].splice(0, 3);
            }

        });

    }


    /*
            switch (i) {
                case 0:
                    var j = 0;
                    $.each(decks_object[i], function (index, val) {

                        if (index < 3) {
                            var li = $('<li/>')
                                .addClass('bombs-hand')
                                .appendTo('#player1-hand')
                                .text(decks_object[i][j]);
                            j++;
                        }
                        decks_object[i].splice(0, 3);
                    });
                    break;
                case 1:
                    $.each(decks_object[i], function (index, val) {

                        if (index < 3) {
                            var li = $('<li/>')
                                .addClass('bombs-hand')
                                .appendTo('#player2-hand')
                                .text(decks_object[i][j]);
                            j++;
                        }
                        decks_object[i].splice(0, 3);
                    });
                    break;
                case 2:
                    var j = 0;
                    $.each(decks_object[i], function (index, val) {

                        if (index < 3) {
                            var li = $('<li/>')
                                .addClass('bombs-hand')
                                .appendTo('#player3-hand')
                                .text(decks_object[i][j]);
                            j++;
                        }
                        decks_object[i].splice(0, 3);
                    });
                    break;
                case 3:
                    var j = 0;
                    $.each(decks_object[i], function (index, val) {

                        if (index < 3) {
                            var li = $('<li/>')
                                .addClass('bombs-hand')
                                .appendTo('#player4-hand')
                                .text(decks_object[i][j]);
                            j++;
                        }
                        decks_object[i].splice(0, 3);
                    });
                    break;
            }
            
            */

}




function fillTilesRandom() {

    var tiles_arr = [
        "kingnotes", "free", "free", "free", "free", "free", "kingnotes", "kingnotes", "kingnotes", "kingnotes", "kingnotes", "kingnotes", "kingnotes", "kingnotes", "kingnotes", "slippery", "free", "free", "free", "free", "free", "slippery", "slippery", "slippery", "hall", "hall", "hall", "hall", "hall", "blokage", "blokage", "blokage", "blokage", "tower", "tower", "tower", "tower", "tower", "tower", "soultrap", "soultrap", "free", "free", "free", "free", "free", "soultrap", "soultrap", "secretpassage", "secretpassage", "secretpassage", "secretpassage", "secretpassage", "secretpassage", "ghostguard", "ghostguard", "ghostguard", "ghostguard", "occulttotem", "occulttotem", "castlemap", "castlemap", "castlemap", "free", "free", "free", "free", "free", "pit", "pit", "pit", "pit", "pit", "pit", "kingtoilet", "kingtoilet", "kingtoilet", "kingtoilet", "treasury", "free", "free", "free", "free", "free", "throneroom", "library", "library", "receptionhall", "receptionhall", "receptionhall", "receptionhall", "free", "free", "free", "free", "free", "store", "store", "diningroom", "diningroom"

    ]
    setup_obj = shuffle(tiles_arr);


}

//функция для подсчёта вхождений каждого элемента в массив
function countItems(arr) {

    var count = {};
    arr.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
    });

    return count;
}

//1. Выход - 8 шт.
//2. Рычаг - 2 шт.
//3. Склон - 4 шт. - стоя на этой клетке можно переместиться на 2 клетки
//4. Туман - 4 шт. - что я блять про него придумал я так и не помню
//5. Скрытая тропа - 5 шт. - с этой клетки ты можешь сразу переместиться на любую клетку рядом с этой.(работает сразу после открытия)
//6. Ужас - 4 шт. - возвращаешься на предыдущее место 
//7. Чаща - 4 шт. - ДОМ (в дом не может зайти убийца, он должен нанести 1 атаку по дому чтобы разбить дверь после чего можно заходить/проходить свободно по клетке)
//8. Холм - 6 шт. Стоя на этой клетке можешь потратить весь свой ход на то, чтобы открыть одну клетку в радиусе от холма
//9. Ядовитое болото - 5 шт. - получаешь один урона. болото не может тебя убить, если у тебя и так 1 здоровья, то работает как капкан
//10. Пещера - 6 шт. - стоя на этой клетке ты можешь сойти с неё только по диагональным клеткам
//11. Капкан - 5 шт. - пропускаешь один ход и отнимает 1 хп
//12. Тотем - 2 шт. - раскрывает метоположение всех выживших
//13. castlemap - 5 шт. - открываешь любые 2 клетки на карте
//наблюдательная tower - 2 




//функция для инкремента символов
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}


function prepareField() {
    //создаём цифры и буквы навигации
    //var nav_symbols = document.createElement('table');
    //nav_symbols.setAttribute('class', 'navigation-top');
    var nav_top = document.createElement('tr');
    var top_symbol = "А";

    for (var i = 0; i < field_size_x + 1; i++) {

        if (i == 0) {
            var row = document.createElement('td');
            row.setAttribute('class', 'navigation-top');
            nav_top.appendChild(row);

        } else {
            var row = document.createElement('td');
            row.setAttribute('class', 'navigation-top');
            row.innerHTML = top_symbol;
            top_symbol = nextChar(top_symbol);
            nav_top.appendChild(row);
        }
    }
    //nav_symbols.appendChild(nav_top);




    //    generateTiles();
    fillTilesRandom();

    //создаём поле
    var game_table = document.createElement('table');
    game_table.appendChild(nav_top);
    game_table.setAttribute('class', 'game-table');

    var tile_number = 0;


    for (var i = 0; i < field_size_x; i++) {
        //создаём строку
        var row = document.createElement('tr');
        row.className = 'game-table-cell cell-' + i;
        for (var j = 0; j < field_size_y + 1; j++) {

            if (j == 0) {
                var cell = document.createElement('td');
                cell.innerHTML = i + 1;
                cell.className = 'navigation-left';
                row.appendChild(cell);

                // left_symbol = nextChar(left_symbol);
            } else {
                //создаём клетку и даём ей имя класса
                var cell = document.createElement('td');
                cell.className = 'game-table-cell cell-' + i + '-' + j + ' ' + 'tile' + ' ' + setup_obj[tile_number] + ' ' + 'hidden';
                row.appendChild(cell);
                tile_number++;
            }
        }
        //присоединяем строку
        game_table.appendChild(row);
    }
    var f = document.getElementById('forest-field');
    f.appendChild(game_table);


}

function toggleHidden() {
    $('.tile').toggleClass('hidden');
}


function revealOthers() {
    var socket = io();
    socket.emit('boba');
    return false;
}

function hideOrShow() {
    //    alert('Showing/Hiding');
    if (shown == false) {
        $('.tile').removeClass('hidden');

        shown = true;
    } else {
        $('.tile').addClass('hidden');
        shown = false;
    }

}

function restart() {
    location.reload();
}

function init() {

    players_count = prompt("Введите количество игроков", 4);
    fillCardsRandom();
    shuffleAndDrawBombCards(setup_bomb_cards);

    prepareField();
    fillTilesRandom();
    //fillCardsRandom();


    var classname = document.getElementsByClassName('trap');
    $(document).ready(function () {

            var cntrlIsPressed = false;
            var shiftIsPressed = false;

            $(document).keydown(function (event) {
                if (event.which == "17")
                    cntrlIsPressed = true;

                if (event.which == "18")
                    shiftIsPressed = true;

            });

            $(document).keyup(function () {
                cntrlIsPressed = false;
                shiftIsPressed = false;
            });


            //            $('tile').mouseover(function (e) {
            //                    if (e.shiftKey) {
            //                        console.log("the shift key is pressed");
            //                    }
            //                }
            //
            //
            //
            //
            //            );


            $('.tile').on('mouseover', function () {
                var hovertile = $(this);

                $(document).bind("keydown", function (e) {
                    var originator = e.keyCode || e.which;
                    switch (e.keyCode) {
                        case 90:
                            var getkiller = document.getElementById('killer');
                            if (getkiller) {
                                getkiller.removeAttribute('id', 'killer');
                            }

                            $(hovertile).attr('id', 'killer');

                            if ($(getkiller).is('#killer')) getkiller.removeAttribute('id', 'killer');



                            break;
                        case 88:
                            $(hovertile).toggleClass('noise');
                            break;
                        case 67:
                            $(hovertile).toggleClass('tile-crossed');
                            break;

                        case 49:
                            var getplayer = document.getElementById('player1-tile');
                            if (getplayer) {
                                getplayer.removeAttribute('id', 'player1-tile');
                            }

                            $(hovertile).attr('id', 'player1-tile');

                            if ($(getplayer).is('#player1-tile')) getplayer.removeAttribute('id', 'player1-tile');
                            break;

                        case 50:
                            var getplayer = document.getElementById('player2-tile');
                            if (getplayer) {
                                getplayer.removeAttribute('id', 'player2-tile');
                            }

                            $(hovertile).attr('id', 'player2-tile');

                            if ($(getplayer).is('#player2-tile')) getplayer.removeAttribute('id', 'player2-tile');
                            break;

                        case 51:
                            var getplayer = document.getElementById('player3-tile');
                            if (getplayer) {
                                getplayer.removeAttribute('id', 'player3-tile');
                            }

                            $(hovertile).attr('id', 'player3-tile');

                            if ($(getplayer).is('#player3-tile')) getplayer.removeAttribute('id', 'player3-tile');
                            break;
                        case 52:
                            var getplayer = document.getElementById('player4-tile');
                            if (getplayer) {
                                getplayer.removeAttribute('id', 'player4-tile');
                            }

                            $(hovertile).attr('id', 'player4-tile');

                            if ($(getplayer).is('#player4-tile')) getplayer.removeAttribute('id', 'player4-tile');
                            break;




                    }

                    //if (e.keyCode == 90)

                });

            }).on("mouseout", function () {
                $(document).unbind("keydown");
            });



            $('body').on('click', '.tile', function () {



                if (cntrlIsPressed) {

                    var getkiller = document.getElementById('killer');
                    if (getkiller) {
                        getkiller.removeAttribute('id', 'killer');
                    }

                    $(this).attr('id', 'killer');
                } else if (!shiftIsPressed && !cntrlIsPressed) {
                    $(this).toggleClass('hidden');
                    if (!$(this).hasClass('hidden')) {
                        var tile_info;
                        var classList = $(this).attr('class').split(/\s+/);

                        switch (classList[3]) {
                            case "kingnotes":
                                tile_info = "Записи короля - соберите 5 и победите!";
                                break;
                            case "slippery":
                                tile_info = "Скользкий пол - стоя на этой клетке можно переместиться на 2 клетки";
                                break;
                            case "hall":
                                tile_info = "Холл - с этой клетки ты можешь сразу переместиться на любую клетку рядом с этой.(работает сразу после открытия)";
                                break;
                            case "blokage":
                                tile_info = "Завал - прячемся в нём и всё заебись";
                                break;
                            case "tower":
                                tile_info = "Башня - Стоя на этой клетке можешь потратить весь свой ход на то, чтобы открыть одну клетку в радиусе от холма";
                                break;
                            case "soultrap":
                                tile_info = "Ловушка - получаешь один урона.болото не может тебя убить, если у тебя и так 1 здоровья, то работает как капкан";
                                break;
                            case "secretpassage":
                                tile_info = "Потайной ход - стоя на этой клетке ты можешь сойти с неё только по диагональным клеткам";
                                break;
                            case "ghostguard":
                                tile_info = "Призрак стража - пропускаешь один ход и отнимает 1 хп";
                                break;
                            case "occulttotem":
                                tile_info = "Оккультный тотем - раскрывает местоположение всех выживших";
                                break;
                            case "castlemap":
                                tile_info = "Карта - 3 открываешь любые 2 клетки на карте";
                                break;
                            case "pit":
                                tile_info = "Яма - 6 обездвиживает игрока на следующий раунд";
                                break;
                            case "kingtoilet":
                                tile_info = "Королевская уборная - возвращаешься на предыдущее место";
                                break;
                            case "free":
                                tile_info = "Пустой тайл";
                                break;
                            case "treasury":
                                tile_info = "Сокровищница - позволяет игроку найти предмет, который он хочет, и забрать его";
                                break;
                            case "throneroom":
                                tile_info = "Тронный зал - король может телепортнуть на эту карту через один раунд после вскрытия, потратив свою ульту";
                                break;
                            case "library":
                                tile_info = "Библиотека - игрок тянет 4 карты случая и выбирает из них один";
                                break;
                            case "receptionhall":
                                tile_info = "Зал для приёмов - игрок обязан тянуть карту случая и применять эффект";
                                break;
                            case "store":
                                tile_info = "Склад - игрок тянет 4 карты предметов и выбирает из них один";
                                break;
                            case "diningroom":
                                tile_info = "Столовая - игрок должен показать куда он пошел в следующем ходу";
                                break;
                        }

                    }


                }

                if (shiftIsPressed) {

                    $(this).toggleClass('noise');
                } //else if(!cntrlIsPressed) $(this).toggleClass('hidden');

                var hiddenCount = $('.hidden').length;
                document.getElementById('tilesnothidden').innerHTML = ("Количество открытых ячеек: " + (setup_obj.length - hiddenCount));


            })


            $('body').on('click', '#card-1', function () {
                var annotation;
                var current_card = p + 1;
                var text = document.getElementById('text');

                found_accidents++;


                $('#text').addClass('accident');
                $('#text').removeClass('item');


                switch (setup_accidents[p]) {
                    case "Вой собаки-призрака":
                        annotation = "на клетку с игроком ставится маркер шума"
                        break;
                    case "Скрипучий пол":
                        annotation = "маркер шума ставится рядом с одной из 4-х сторон карты, где стоит игрок"
                        break;
                    case "Жажда действий":
                        annotation = "игрок должен вскрыть карту, на которой он стоит, ходить в этом раунде нельзя, даже использовать предметы"
                        break;
                    case "Слабость":
                        annotation = "игрок скидывает полностью инвентарь"
                        break;
                    case "Астрал":
                        annotation = "игрок, получивший карту, выбывает из игры на 2 раунда, по истечению времени он продолжает с того места, где был"
                        break;
                    case "Оцепенение":
                        annotation = "игрок лишается режима паники на 2 раунда"
                        break;
                    case "Отяжелевшее золото":
                        annotation = "если в течение двух раундов с момента взятия карты игрок не открывает ячейку карты, то он теряет одну единицу сокровища"
                        break;
                    case "Предательство":
                        annotation = "игрок обязан указать на местоположение любого другого игрока"
                        break;
                    case "Чрезмерная уверенность":
                        annotation = "если все игроки живы, то игрок, получивший данную карту, два раунда подряд обязан вскрывать ячейки"
                        break;
                    case "Храбрость":
                        annotation = "игрок должен в текущем ходу сделать шаг на встречу опасности"
                        break;
                    case "Боязливость":
                        annotation = "игрок должен посмотреть карту на которой он стоит и положить назад не открывая"
                        break;
                    case "Карточка “Заебок”":
                        annotation = "позволяет открыть 2 ячейки за текущий ход вокруг себя"
                        break;
                    case "Дальнозоркость":
                        annotation = "игрок может вскрыть в текущем раунде любую ячейку в радиусе 2 единиц"
                        break;
                    case "Паника":
                        annotation = "игрок обязан показать своё местоположение и переместиться на 3 клетки в любом направлении кроме диагонали"
                        break;
                    case "Съёбинг":
                        annotation = "походить на 2 ячейки (на 1 по диагонали) и открыть последнюю"
                        break;
                    case "Съёбинг PRO":
                        annotation = "позволяет сделать 3 шага"
                        break;
                    case "Жертва":
                        annotation = "игроку дается выбор: он может открыть 4 любые ячейки вокруг себя или походить с дальностью 5 ячеек за 1 единицу здоровья, если здоровье 1, то ты пропускаешь следующий раунд"
                        break;
                    case "Телепатия":
                        annotation = "позволяет открыть ячейку карты, на которой стоит король"
                        break;
                }

                var mytext = ('Ты вытащил карту события: ' + current_card + '. ' + setup_accidents[p] + '<br>' + ' Её эффект : ' + annotation);

                text.innerHTML = mytext;
                p++;
                if (typeof (setup_accidents[p]) === 'undefined') {
                    setup_accidents = shuffle(setup_accidents);
                    p = 0;
                }

            });

            $('body').on('click', '#card-2', function () {
                var annotation;
                var current_card = q + 1;
                var text = document.getElementById('text');

                found_items++;

                $('#text').addClass('item');
                $('#text').removeClass('accident');
                switch (setup_items[q]) {
                    case "Мешок золота/хилка":
                        annotation = "дает +1 к золоту/здоровью (можно восстановить золото другого игрока, если вы находитесь на смежных клетках)"
                        break;
                    case "Бодрящий гриб":
                        annotation = "дает возможность игроку не издавать звуков когда у него отбирают золото/бьют (действует до первого раза, сбрасывается в начале следующего хода)"
                        break;
                    case "Факел":
                        annotation = "перевернуть ячейку поля в радиусе двух клеток, при нахождении на “холме” радиус не увеличивается"
                        break;
                    case "Фамильная реликвия":
                        annotation = "позволяет оглушить короля на ход, дальность действия - 3 ячейки, показывать можно только по вертикали/горизонтали, раскрывает местоположение"
                        break;
                    case "Призрачная косточка":
                        annotation = "нейтрализовывает шум от воя призрачной собаки"
                        break;
                    case "Противоядие":
                        annotation = "нейтрализует действие ловушки"
                        break;
                    case "Благовония":
                        annotation = "позволяет нейтрализовать “королевскую уборную”, заменив на пустую клетку"
                        break;
                    case "Святая вода":
                        annotation = "позволяет обезвредить призрачного стража"
                        break;
                    case "Мантия невидимка":
                        annotation = "позволяет перепрыгнуть через одну ячейку"
                        break;
                    case "Поясная сумка":
                        annotation = "позволяет взять с собой на один предмет больше, при этом сама барсетка места не занимает"
                        break;
                    case "Крюк":
                        annotation = "позволяет выбраться из ямы и сделать ход"
                        break;
                    case "Кукла вуду":
                        annotation = "воскрешает игрока в радиусе двух клеток от короля; если игрока убивают второй раз, кукла не поможет"
                        break;
                    case "Склянка “Лови Момент”":
                        annotation = "позволяет оставить у себя положительную карту случая, чтобы использовать потом"
                        break;


                }




                text.innerHTML = ('Ты вытащил карту предмета: ' + current_card + '. ' + setup_items[q] + '<br>' + ' Её эффект : ' + annotation);
                q++;
                if (typeof (setup_items[q]) === 'undefined') {
                    setup_items = shuffle(setup_items);
                    q = 0;
                }


            });

            cardDrawal();
        }


    );





    // тестовая тема для socket.io
    //    $(function () {
    //        var socket = io();
    //
    // 
    //        socket.on('boba', function (msg) {
    //            hideOrShow();
    //        });
    //    });

    //var players_array = [];

    for (var i = 1; i <= players_count; i++) {
        var player_enabler = "#player" + i;
        $(player_enabler).show();
    }

    $('body').on('click', '.bombs-hand', function () {
        $(this).toggleClass('drawn');


    });






}

/* function switchGames() {
     if (document.getElementById("theswitch").checked) {
         $('#info-container').hide();
         $('#bomb-cards').show();
     } else {
         $('#info-container').show();
         $('#bomb-cards').hide();
     }
 }*/


window.onload = init();
