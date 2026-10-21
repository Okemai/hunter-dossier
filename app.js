(function(){
"use strict";
var QR_SRC = "data:image/png;base64,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";
var SHELL = '<header class="top"><div class="top-in"><button type="button" class="qr-btn" id="btn-qr" aria-label="QR-код канала @couchheroes"><img src="'+QR_SRC+'" alt=""></button><div class="brand"><span class="eyebrow">Hunter: The Reckoning 5 · досье</span><div class="name-row"><b id="hdr-name">Охотник</b><button type="button" class="lock-btn" id="btn-lock" aria-pressed="false"></button><button type="button" class="lock-btn sess-btn" id="btn-session" aria-pressed="false">Режим сессии</button></div><span id="hdr-imp" class="hdr-imp" hidden></span></div>'+
  '<div class="actions"><span id="save-status" class="status" role="status" aria-live="polite"></span>'+
  '<button type="button" class="btn small" id="btn-chars">Персонажи</button>'+
  '<button type="button" class="btn ghost small" id="btn-rules">Правила</button>'+
  '<button type="button" class="btn ghost small" id="btn-theme">Тема</button>'+
  '<button type="button" class="btn ghost small" id="btn-export">Экспорт</button>'+
  '<label class="btn ghost small file" for="imp-in">Импорт<input type="file" id="imp-in" accept=".json,application/json" hidden></label>'+
  '<button type="button" class="btn ghost small" id="btn-install" hidden>Установить</button></div></div></header>'+
  '<main id="app" class="wrap"></main>'+
  '<div id="modal" class="modal" hidden><div class="m-card" role="dialog" aria-modal="true"><button type="button" class="m-x" data-close="1" aria-label="Закрыть">×</button><div id="m-body"></div></div></div>';
document.getElementById("page-shell").innerHTML = SHELL;
var PALETTES = [
  {k:"amber", n:"Натриевый фонарь", d:"Ночная смена, фонари на мокром асфальте", c:["#101318","#1d222b","#e8a23a","#e7e2d6"]},
  {k:"hope", n:"HOPE", d:"Неоновый розовый, цвет тега Матеуша", c:["#121015","#231e29","#ff4fa3","#f2eaf0"]},
  {k:"blood", n:"Кровь", d:"Багровый, в духе Маскарада", c:["#0e0a0b","#20181a","#d23a44","#eee1dc"]},
  {k:"canal", n:"Каналы", d:"Холодная бирюза ночного Амстердама", c:["#0c1416","#19292c","#3fc6b3","#dde9e7"]},
  {k:"paper", n:"Досье", d:"Светлая бумага и ржавый штамп", c:["#e9e3d6","#fffdf7","#a6441c","#24201a"]}
];
function applyPalette(k){ if (!PALETTES.some(function(p){return p.k===k;})) k="amber"; if (k==="amber") document.documentElement.removeAttribute("data-palette"); else document.documentElement.setAttribute("data-palette",k); var m=document.querySelector('meta[name="theme-color"]'); var P=PALETTES.filter(function(p){return p.k===k;})[0]; if (m) m.setAttribute("content", P.c[0]); return k; }
var palette = "amber"; try { palette = localStorage.getItem("h5-palette") || "amber"; } catch(e){}
palette = applyPalette(palette);
function paletteHtml(){ return '<h2>Цветовая тема</h2><div class="pal-list">'+PALETTES.map(function(p){ return '<button type="button" class="pal'+(p.k===palette?' on':'')+'" data-pal="'+p.k+'" style="background:'+p.c[1]+';color:'+p.c[3]+';border-color:'+p.c[2]+'"><span class="sw">'+p.c.map(function(c){return '<i style="background:'+c+'"></i>';}).join('')+'</span><b>'+p.n+'</b><small>'+p.d+'</small></button>'; }).join('')+'</div><p class="hint">Тема запоминается на этом устройстве.</p>'; }

/* ---------- reference data (H5 core, Russian edition) ---------- */
var CREEDS = {
  "Предприимчивый": {en:"Entrepreneurial", desp:"Строительство, изобретение, улучшение или ремонт во время охоты.", text:"Инновации и эксперименты: гаджеты, наборы, снаряжение и оружие. Решение проблем проверенными средствами и методом проб и ошибок.", edges:"Флот, Самодельное снаряжение, Дрон-жокей", drives:"Любопытство, Жадность, Зависть"},
  "Верный": {en:"Faithful", desp:"Любой прямой конфликт (физический, социальный или ментальный) со сверхъестественным во время охоты.", text:"Охота как призвание и вера: противостоять тьме лицом к лицу."},
  "Пытливый": {en:"Inquisitive", desp:"Сбор информации во время охоты: исследования, взлом и проникновение, допрос.", text:"Знание как оружие: расследовать, разбираться, находить слабые места."},
  "Боевой": {en:"Martial", desp:"Физический конфликт во время охоты (не обязательно с самой добычей или сверхъестественным).", text:"Сила, тактика и прямое столкновение."},
  "Подпольный": {en:"Underground", desp:"Скрытность и уловки на службе охоты.", text:"Связи, тени и теневые методы."}
};
var DRIVES = {
  "Любопытство": {en:"Curiosity", text:"Что монстры делают в тени? Охотник стремится узнать всё о своей добыче, копая всё глубже.", red:"Ячейка должна раскрыть новую информацию о своей добыче."},
  "Месть": {en:"Vengeance", text:"Охотник или кто-то из его близких пострадал от добычи или ей подобных. Весы должны быть сбалансированы.", red:"Ячейка должна причинить вред своей добыче (или подобному существу) напрямую или через посредников."},
  "Клятва": {en:"Oath", text:"Охотник дал обещание и не остановится ни перед чем, пока оно не будет выполнено.", red:"Ячейка должна помочь охотнику активно отстаивать клятву или приблизить её исполнение."},
  "Жадность": {en:"Greed", text:"Охотник хочет того же, что и сверхъестественный враг: несправедливо, что ночные существа наживаются на своей чудовищности.", red:"Добыть ресурсы у добычи или подобных ей существ."},
  "Гордость": {en:"Pride", text:"Встреча со сверхъестественным пробудила желание проявить себя против существ, наделённых способностями, которых они никогда не заслуживали.", red:"Победить добычу в каком-либо испытании, прямо или косвенно."},
  "Покаяние": {en:"Atonement", text:"Охотник в прошлом помогал монстру и теперь искупает вину, подвергая себя опасности. (В русском корбуке Драйв назван «Искупление».)", red:"Ячейка должна защитить кого-то от добычи (или подобного существа), прямо или через посредников. Или сделать то же для товарища по ячейке."},
  "Зависть": {en:"Envy", text:"Почему у монстров такие преимущества? Охотник присоединится к ночи или умрёт, пытаясь.", red:"Заручиться расположением добычи или добыть образцы источника её силы."},
  "Долг": {en:"Duty", src:"Legacy of Defiance", text:"Обязательство перед Охотой. В отличие от Клятвы, Долг обычно возлагается извне: наследием рода, семейной традицией, ожиданиями других.", red:"Уточнить по книге Legacy of Defiance (на wta5.ru условие не приведено)."},
  "Вина": {en:"Guilt", src:"Legacy of Defiance", text:"Охотника преследует потеря: близкие погибли от монстров, и он чувствует личную ответственность за это. Опиши событие, породившее вину.", red:"Уточнить по книге Legacy of Defiance (на wta5.ru условие не приведено)."}
};
var LINEAGES = {
  "Бенанданти": {en:"The Benandanti", prey:"Призраки", text:"Медиумы-воины из Фриули, «добрые ходоки»: упокаивают мёртвых, видят и входят в мир духов через «рубашку» (caul). На грани вымирания.", lore:"«Добрые ходоки»: бонусы при расследовании призраков, социальные бонусы, снижение Отчаяния."},
  "Кровавые Охотники": {en:"Blood Hunters", prey:"Вампиры", text:"Охотники на вампиров, пристрастившиеся к крови своей добычи. Цель оправдывает средства.", lore:"«Братство Крови»: бонусы при работе с Кровавыми Охотниками и охоте на вампиров."},
  "Культ Исиды": {en:"Cult of Isis", prey:"Колдуны", text:"Языческие охотники, обращающие колдовство против монстров.", lore:"«Та, у кого десять тысяч имён»: исцеление, уход от обнаружения, союзники и информация."},
  "Дети Сорбонны": {en:"Enfants de la Sorbonne", prey:"Странные вещи", text:"Учёные-охотники, чьё оружие — знание.", lore:"«Архивы Оссуария»: помощь в расследовании добычи, убежище с оружием, бонусный пул."},
  "Дом фон Мурнау": {en:"House von Murnau", prey:"Оборотни", text:"Изгнанные из Общества Св. Леопольда, но по-прежнему гордые своей Охотой.", lore:"«Отпрыск Дома»: деньги и влияние, способность чувствовать, ранить монстров и получать от них услуги."},
  "Рыцари Акры": {en:"Knights of Acre", prey:"Колдуны", text:"Мистические воины, несущие в Охоту божественную веру и истину.", lore:"«Осколок Истинного Креста»: урон монстрам, контакт, способы обойти Отчаяние, особый Артефакт."},
  "«Ли и Ко»": {en:"Lee & Co.", prey:"Фэйри", text:"Обретённая семья охотников, выслеживающих добычу через синестезию. Основатели Терра и Билли Ли. Типичная Грань — Почувствовать неестественное со Специализацией (призраки или фэйри).", lore:"«Джеки Ли»: бонусы к обнаружению монстров и союзники для охоты."},
  "Служители Милосердия": {en:"Servants of Mercy", prey:"Оборотни", text:"Межконфессиональные охотники, дарующие монстрам милосердие через смерть.", lore:"«Милосердный убийца»: Оккультизм вместо других навыков, патроны, убежище и защита."}
};
var TRAITS = {
 strength:{d:"Сколько можешь поднять, как сильно бьёшь и какое усилие можешь приложить. В скобках — становая тяга без проверки.", l:["Легко раздавишь пивную банку (20 кг: ёлка, дорожный знак).","Среднее телосложение (45 кг: унитаз).","Можешь выбить деревянную дверь (115 кг: крупный человек, холодильник).","Отличная физическая форма, заметная мускулатура (180 кг: полный гроб).","Настоящая силовая установка: выбьешь металлическую противопожарную дверь, порвёшь сетку забора (250 кг: мотоцикл, пианино)."]},
 dexterity:{d:"Ловкость и грация: как быстро уходишь с линии удара и насколько точна мелкая моторика, когда время поджимает.", l:["Немного неуклюж: равновесие и уклонение даются с трудом.","Бегаешь естественно, иногда выглядишь изящно.","Впечатляющая ловкость, координация на уровне тренированного любителя.","Мог бы преуспеть в акробатике, двигаешься так, как могут немногие.","Движения плавные и гипнотические, почти сверхчеловеческие."]},
 stamina:{d:"Физическая стойкость: выдерживать урон, тяготы и долгие усилия. Выносливость + 3 = Здоровье.", l:["Даже небольшие усилия утомляют.","Можешь проиграть драку, но выдержишь её.","Несколько дней тяжёлых походов с рюкзаком — не проблема.","Мог бы пробежать марафон и терпеть сильную боль.","Даже не вспотеешь: кардио-виртуоз."]},
 charisma:{d:"Природное обаяние и притягательность: люди тянутся к тебе. Не зависит от внешности (это отдельное Достоинство).", l:["Говоришь внятно, но слушают тебя немногие.","В целом симпатичен, у тебя есть друзья.","Люди доверяют тебе, ты легко заводишь друзей.","Сильная личная притягательность, легко собираешь последователей.","Чистый животный магнетизм."]},
 manipulation:{d:"Умение склонять других к своей точке зрения, убедительно лгать и уходить так, чтобы никто ничего не понял.", l:["Пока честен, можешь убедить людей сделать, что хочешь.","Твой обман пробивает волю слабовольных и простодушных.","Тебе никогда не приходится платить полную цену.","Мог бы быть лидером секты или успешным адвокатом.","Убедишь людей в полнейшей чепухе."]},
 composure:{d:"Спокойствие и контроль эмоций под давлением, от перестрелки до интимной встречи. Самообладание + Решительность = Сила воли.", l:["Малейшее оскорбление или конфронтация выводят из себя.","Можешь подавить низменные инстинкты в большинстве неопасных ситуаций.","К тебе обращаются за советом, когда всё летит к чертям.","Блефуешь в картах и заключаешь многомиллионные сделки без единого «теллса».","Будь ты капитаном «Титаника», всё вышло бы иначе."]},
 intelligence:{d:"Способность рассуждать, исследовать и применять логику, вспоминать и анализировать информацию.", l:["Грамотно читаешь и пишешь, хотя некоторые термины смущают.","Достаточно умён, чтобы понимать свои ограничения.","Просвещён, без труда складываешь улики воедино.","Не только хорошо осведомлён, но и понимаешь, как люди познают, и можешь улучшить этот процесс.","«Гений» — скромное слово для твоего интеллекта."]},
 wits:{d:"Быстрое мышление и верная реакция при малом количестве информации: заметить засаду, мгновенно найти ответ.", l:["В конце концов понимаешь суть, но может понадобиться объяснение.","Можешь блефовать в покере или вовремя дёрнуть стоп-кран. Обычно.","Быстро оцениваешь ситуацию и находишь лучший путь к отступлению.","Тебя не застать врасплох, у тебя всегда есть остроумный ответ.","Думаешь и реагируешь быстрее, чем большинство успевает понять."]},
 resolve:{d:"Сосредоточенность, решимость и психологическая устойчивость: долгая слежка, игнорирование отвлечений. Самообладание + Решительность = Сила воли.", l:["Уделяешь минимум внимания всему, кроме самого срочного.","Выдержишь долгое дело, если оно не слишком долгое.","Чтобы тебя отвлечь, нужно больше усилий, чем большинство готово потратить.","Перебором пробьёшься к выводу через любые препятствия.","Думаешь посреди перестрелки или обойдёшь весь периметр и уберёшь каждую гильзу."]},
 athletics:{d:"Бег, прыжки, лазание, плавание, погони. Атлетику можно использовать вместо боевого навыка для защиты, но тогда урона противнику ты не наносишь.", l:["На физкультуре был внимателен, походка всё ещё пружинистая.","Тренировался или есть заметные спортивные способности.","Отличная форма, преуспеваешь в спорте.","Образцовый спортсмен.","Олимпийские рекорды: на это способны лишь немногие."], s:"Акробатика, Стрельба из лука, Скалолазание, Выносливость, Прыжки, Паркур, Плавание, Метание"},
 brawl:{d:"Удары кулаком, ногой, захваты и удушения — любая атака без оружия в руках, от боевых искусств до пьяной драки.", l:["Тот ребёнок с вечным фингалом — но видел бы ты другого.","Учился бить сильно и точно.","Более чем постоишь за себя.","Серьёзная школа или многочисленные драки на собственном опыте.","Можешь выигрывать чемпионаты по ММА."], s:"Животные, Вооружённые люди, Драки в барах, Вампиры, Грэпплинг, Спортивный бой, Безоружные"},
 craft:{d:"Мастерство и создание предметов, от красивых до функциональных: декоративное искусство, работа руками. Бесплатная специализация; можно иметь больше специализаций, чем точек.", l:["Любитель, но знаешь, что делаешь.","Твоё мастерство восхищает своей функциональностью.","Твои творения прекрасны или ужасны, но их цель всегда ясна.","Твоё мастерство уважают знатоки, люди и сверхъестественные.","Виртуоз, способный на прорывы в своём деле."], s:"Столярное дело, Резьба, Дизайн, Живопись, Скульптура, Шитьё, Оружейное дело"},
 drive:{d:"Быстрая и безопасная езда в плохих условиях и под стрессом: бездорожье, засады, уличные гонки, уход от погони.", l:["Осторожный водитель, вряд ли ошибёшься.","Можешь давить на газ без аварий при хорошей видимости.","Выигрывал погони, которые принесли репутацию.","Мог бы быть каскадёром.","Готов к гонкам на «розовые листки»?"], s:"Внедорожники, Уклонение, Мотоциклы, Уличные гонки, Трюки, Слежка на дороге, Грузовики, Винтаж"},
 firearms:{d:"Стрелковое оружие от пистолетов до штурмовых винтовок, а также арбалеты и гранатомёты. Включает чистку, разборку и быструю перезарядку.", l:["Несколько раз стрелял из пистолета на стрельбище или не только.","Умеешь чистить, разбирать и собирать оружие.","Наверняка бывал в перестрелке и вышел живым.","Трюковые выстрелы, стрельба на бегу — всё, что заканчивается выстрелом.","Если цель в пределах досягаемости, попадёшь точно."], s:"Арбалеты, Торговля оружием, Оружейное дело, Ручное снаряжение патронов, Быстрое выхватывание, Снайпер, Трюковая стрельба"},
 larceny:{d:"Взлом замков, установка жучков, отключение охраны и сигнализаций, подлог, угон, вскрытие сейфов — и защита от всего этого.", l:["Вскроешь простой замок или карман растяпы.","Легко заведёшь машину без ключа или украдёшь в магазине.","Находишь камеры и сигнализации, чтобы обойти их.","Взломаешь кодовую панель, переделаешь удостоверение, вскроешь сейф.","Войдёшь в хранилище международного банка и выйдешь."], s:"Сигнализации, Подделка, Угон, Взлом, Карманная кража, Сейфы, Анализ охраны"},
 melee:{d:"Владение ручным оружием: ножи, цепи, биты, импровизированное — хоть кусок арматуры.", l:["Размахиваешь битой или клинком и в основном попадаешь.","Твоё умение обращаться с оружием заставляет задуматься.","Знаешь фехтовальные школы и держишь кинжал наготове.","Дураки принесли пистолет на поножовщину.","Оружие движется как продолжение тебя."], s:"Топоры, Цепи, Дубинки, Фехтование, Обезоруживание, Удавки, Самодельное оружие, Ножи, Колья, Мечи"},
 stealth:{d:"Скрытность в городе и в глуши: шпионить, красться, сливаться с толпой.", l:["В темноте или в камуфляже тебя непросто заметить.","Прокрадёшься мимо случайных наблюдателей и выследишь ничего не подозревающих.","Уходишь от патрулей, двигаешься мягко и легко прячешься.","Тихий и незаметный — проклятие тех, кто считает себя хищником.","Добыча даже не знает, что ты рядом."], s:"Засады, Толпа, Маскировка, Сокрытие, Слежка, Бесшумное движение, Город, Глушь"},
 survival:{d:"Выживание в глуши и в плохих условиях: навигация, укрытие, следы, поиск еды. Хоть на улицах, хоть в лесу.", l:["Знаешь тропы и окрестности своего места.","Больше времени проводишь на улице, выследишь менее умелого.","Выживешь без дома: ставишь ловушки и строишь укрытие.","Процветаешь на ходу, как настоящий хищник.","Твоя выносливость — урок для всех."], s:"Пустыня, Охота, Джунгли, Выслеживание, Ловушки, Укрытия, Городские исследования, Леса"},
 animalken:{d:"Обращение с животными: управлять, усмирять, дрессировать, предсказывать реакцию. Знание следов и поведения зверей. Это навык, а не сверхсила.", l:["Животные шарахаются, но не убегают и не кусаются.","Животные рядом спокойны и ведут себя, будто тебя нет.","Животные относятся к тебе как к знакомому хозяину.","Притягиваешь животных, немногие сохраняют агрессию.","Предугадываешь чувства и мысли животных, а они — твои."], s:"Атакующая дрессировка, Кошки, Собаки, Соколиная охота, Лошади, Успокоение, Крысы, Змеи, Трюки"},
 etiquette:{d:"Понимание социальных условностей любой среды — от тату-салона до совета директоров — и умение им соответствовать.", l:["Знаешь, когда и как сказать «убирайся отсюда».","Знаешь правила всех популярных ночных клубов.","Впечатляешь вежливостью, почтительностью и грацией.","Твоё поведение задаёт тенденции, даже когда ты нарушаешь нормы.","Денди, когда нужно, но и роль Байрона тебе сойдёт с рук."], s:"Знаменитости, Корпорации, Центр города, Протокол организации, Сверхбогатые, Тайное общество"},
 insight:{d:"Чтение языка тела, мимики и тона, отличие правды от лжи, понимание мотивов.", l:["Видишь насквозь пустое хвастовство.","Улавливаешь скрытые эмоции между людьми.","Тебя трудно обвести вокруг пальца.","Ходячий детектор лжи.","Люди для тебя как книги крупным шрифтом."], s:"Амбиции, Желания, Распознавание лжи, Эмоции, Эмпатия, Допрос, Мотивы, Фобии, Пороки"},
 intimidation:{d:"Запугивать, принуждать, угрожать и продавливать свой путь к социальной победе.", l:["Твои слова — дубина.","Без труда продавишь большинство людей.","Чванство и жестокость принесли тебе репутацию.","Тебе давно не нужны простые физические угрозы.","Даже Дракула может отступить, когда ты нависаешь."], s:"Вымогательство, Допрос, Физическое принуждение, Оскорбления, Взгляд, Скрытые угрозы, Безмолвие"},
 leadership:{d:"Вести толпу, командовать отрядом, поднимать боевой дух и подавлять бунт.", l:["Руководил неформальными клубами, организуешь единомышленников.","Твой голос слышен в ячейке, и даже начальство иногда прислушивается.","Командуешь на поле боя и ведёшь людей на смерть.","Вдохновишь раненых и умирающих действовать.","Поведёшь целую организацию в адское пламя."], s:"Командование, Не сдаваться, Партизанское сплочение, Вдохновение, Ораторство, Командная динамика"},
 performance:{d:"Исполнительские искусства: танец, музыка, поэзия, комедия, драма. Бесплатная специализация.", l:["Душа вечеринки, но на сцену не выйдешь.","Выступал, отзывы смешанные.","Эксперт в своём виде искусства.","Блестяще исполняешь, покоряешь даже придирчивых критиков.","Играешь на эмоциях публики, как на инструменте."], s:"Комедия, Танец, Драма, Барабаны, Гитара, Клавишные, Поэзия, Публичные выступления, Рэп, Пение, Скрипка, Духовые"},
 persuasion:{d:"Убеждать других принять твою точку зрения: аргументы, эмоции, здравый смысл. В суде, у костра, в баре и в спальне.", l:["Продашь тому, кто уже хочет купить.","Всегда выбьешь скидку или узнаешь свежие слухи.","Всегда найдёшь компромисс.","«Конечно, так написано в законе, но...»","Настоящий змей-искуситель."], s:"Торг, Быстрый разговор, Допрос, Юридический спор, Переговоры, Заговаривание зубов, Риторика"},
 streetwise:{d:"Язык улиц и преступного мира: сленг, коды, граффити-теги, знаки банд. Не обязательно преступность, но часто рядом.", l:["Знаешь, где купить травку.","Знаешь банды района, их цвета и соперничество. Может быть, у тебя свой тег.","Отличаешь хороший товар от плохого, достанешь оружие, свой на улице.","Когда кто-то говорит «я знаю парня» — этот парень ты.","Организуешь почти любую преступную деятельность в своём городе."], s:"Торговля оружием, Чёрный рынок, Взятки, Наркотики, Скупка краденого, Банды, Граффити, Лучшие вечеринки"},
 subterfuge:{d:"Убедительно лгать, продвигать скрытые цели, находить оправдания. Интриги, секреты, двуличие, соблазнение, игра в слугу монстра.", l:["Говоришь правдоподобную простую ложь.","Заставишь наивных отдать тебе свои вещи.","Действуешь на нескольких уровнях: ложь, которую раскроют, прикрывает другую.","Бесконечно работаешь под глубоким прикрытием: идеальный двойной агент.","Никто не верит, что у тебя есть хоть одна точка Хитрости."], s:"Блеф, Безупречная ложь, Невинность, Выдавать себя за гуля, Долгая афера, Соблазнение"},
 academics:{d:"Гуманитарное образование и исследования: история, литература, философия, журналистика. Бесплатная специализация. Языки — Достоинство Лингвистика.", l:["Базовое школьное образование, курсы в колледже.","Базовое высшее образование, бакалавр.","Продвинутое высшее, отличный диплом или докторская.","Специализированное обучение за рамками университета, темы, которые мало кто понимает.","Изысканная учёность: к тебе обращаются за советом."], s:"Литература, Архитектура, История искусства, История, Журналистика, Философия, Исследования, Преподавание, Теология"},
 awareness:{d:"Восприятие: волосы встают дыбом до того, как оборотень выскочит из тени; заметить ключ в мусорке, почувствовать запах духов.", l:["Чувствуешь, когда что-то не так.","Замечаешь беспорядочное или шаблонное поведение.","Видишь сквозь большинство маскировок, чуешь скрытые опасности и улики.","Даже отвлечённым мало что упускаешь.","Твои чувства сверхъестественны."], s:"Засады, Маскировка, Скрытые объекты, Слух, Инстинкты, Зрение, Ловушки, Глушь"},
 finance:{d:"Рынки, инвестиции, манипуляции с акциями, оценка богатства и имущества, отслеживание денег.", l:["Ведёшь бизнес и бухгалтерию.","Управляешь отделом корпорации или отделением банка.","Отличный брокер на зарубежных биржах.","Инвестбанки следуют твоему примеру, легко скроешь мошенничество.","Заработаешь на чём угодно — или обрушишь страну."], s:"Оценка, Банковское дело, Чёрный рынок, Корпоративные финансы, Валюты, Искусство, Судебная бухгалтерия, Отмывание денег, Фондовый рынок"},
 investigation:{d:"Распутывать дела обычными и загадочными средствами: находить и толковать улики, искать пропавших, связывать трагедии с монстрами.", l:["Любишь детективы и воображаешь себя сыщиком.","Твёрдые знания криминологии и признаков серьёзных преступлений.","Мог бы быть детективом по профессии.","С тобой консультируется полиция.","Загадываешь загадки другим, и в твою жизнь мало кто проникнет."], s:"Криминология, Дедукция, Криминалистика, Пропавшие, Убийства, Паранормальное, Рэкет, Анализ движения"},
 medicine:{d:"Медицинская помощь людям и животным, диагностика, препараты, остановка крови. Лечение Аггравированного урона.", l:["Знаешь анатомию, отличаешь вену от артерии, СЛР и первая помощь.","Лечишь лёгкие травмы и болезни: медсестра или фельдшер.","Серьёзные операции и травмы: терапевт, врач общей практики.","Диагностируешь и лечишь почти всё: хирург или специалист.","Известный медицинский эксперт."], s:"Первая помощь, Гематология, Патология, Фармация, Флеботомия, Хирургия, Травмы, Ветеринария"},
 occult:{d:"Знание мистического мира: обряды, народная магия, эзотерика, оккультные символы — работающие или нет. Охотникам это не даётся само собой.", l:["Знаешь несколько тайн мира на базовом уровне.","Отличаешь правду от поп-оккультной чепухи.","Лично сталкивался с необъяснимым даже по меркам охотников.","Мог бы построить модель метафизической космологии.","Призраки и колдуны советуются с тобой."], s:"Алхимия, Магия крови, Фэйри, Призраки, Гоэтия, Гримуары, Маги, Метафизика, Некромантия, Парапсихология, Вампиры"},
 politics:{d:"Дипломатия и бюрократия, городская власть, а среди охотников — кто на какую территорию претендует и где зарыты тела.", l:["Следишь за местной политикой людей и охотников.","Можешь влиять на местном уровне или знаешь, кто может.","Ведёшь избирательные кампании.","Знаешь, кто на самом деле дёргает за ниточки — люди и, возможно, не только.","Признанный государственный деятель — или будешь им."], s:"Городское управление, Дипломатия, СМИ, Национальная политика, Региональная политика, Организация"},
 science:{d:"Естественные науки: от основ жизни до энтропии. Бесплатная специализация.", l:["Увлекаешься наукой, понимаешь базовые принципы.","Понимаешь не только «что», но и «почему».","Руководишь лабораторией, толкуешь результаты, чинишь научное оборудование.","Эксперт в своей и смежных областях.","Мало кто сравнится с тобой, к тебе идут за советом."], s:"Астрономия, Биология, Химия, Подрывное дело, Инженерия, Генетика, Геология, Математика, Физика"},
 technology:{d:"Современные технологии и компьютерные системы: железо, сети, взлом, связь, наблюдение.", l:["Обновишь домашний ПК и защитишь от вирусов.","Скрываешь IP, управляешь дронами, подделываешь цифровые фото.","Пишешь и распространяешь свои вирусы незамеченным.","Обеспечишь кибербезопасность компании или региона.","В интернете никто не знает, что ты собака — или что ты вообще там."], s:"Артиллерия, Программирование, Сборка компьютеров, Анализ данных, Энергосистемы, Взлом, Сети, Телефоны, Системы наблюдения"}
};
var GEAR = [
 ["Ближний бой","Импровизированное оружие","+0",""],["Ближний бой","Кол","+0","Прицельно в сердце с уроном 5+: вампир парализован"],["Ближний бой","Лёгкий удар (кастет)","+1",""],["Ближний бой","Сильный удар (дубинка, монтировка, бита)","+2",""],["Ближний бой","Лёгкое проникновение (выкидной нож)","+2",""],["Ближний бой","Тяжёлое (палаш, пожарный топор)","+3",""],["Ближний бой","Огромное (клеймор, стальная балка)","+4",""],
 ["Огнестрел","Лёгкий выстрел (пистолет .22)","+2",""],["Огнестрел","Средний огнестрел (9 мм, винтовка .308, карабин, дробовик на дистанции)","+3",""],["Огнестрел","Тяжёлый выстрел (дробовик 12 к. вблизи, .357 Magnum)","+4",""],["Огнестрел","Арбалетный болт","+2","Лёгкое проникновение; можно стрелять колом"],
 ["Зажигательное","Самодельное / с чёрного рынка","−1 к урону","Урон Аггравированный по уязвимым к огню. Полный провал: 3 Аггр. себе (руки, лицо)"],["Зажигательное","«Дыхание дракона» (помповый дробовик)","+0","Аггр. по вампирам, поджигает: 1 Аггр./ход до тушения. До ~15 м. Полный провал — заклинивание. Нелегальны в большинстве стран Европы"],["Зажигательное","Рауфосс (12,7 мм)","+5","Игнорирует броню, весь урон Аггр. Военный боеприпас"],["Зажигательное","Хафла","3 Аггр.","Однозарядная, ~80 м, сложность попадания не ниже 3. Горит каждый ход до воды или песка"],["Зажигательное","Огнемёт","+0 Аггр.","Урон при попадании и каждый ход, поджигает всё вокруг. Тушить водой или песком"],["Зажигательное","Коктейль Молотова","2 Аггр./ход","Попасть: сл. 4. Потушить: Самообладание + Выживание, сл. 3"],
 ["Спецоружие","Сеткомёт","—","Урон вычитается из Ловкости (как поверхностный, пополам). Ловкость 0 — запутан. Вырваться: Сила + Атлетика против суммы успехов сетей. Горящая сеть: 3 Аггр./ход"],["Спецоружие","Пластиковая взрывчатка (C4, Semtex), 200 г","7","Установка: Интеллект + Технологии. +3 урона за каждые 200 г, −1 за каждые 3 м. Обычно поверхностный"],["Спецоружие","Замаскированное оружие","—","Создание: Интеллект + Ремесло. Обнаружение: Сообразительность + Внимательность против 1 + Скрытность владельца или Ремесло создателя. −1 к атаке, если при создании не было крит. успеха"],
 ["Броня","Укреплённая одежда / тяжёлая кожа","броня 2","0 против огнестрела"],["Броня","Баллистическая ткань","броня 2",""],["Броня","Кевларовый жилет / бронежилет","броня 4",""],["Броня","Тактическая / военная броня","броня 6","−1 к броскам Ловкости"],
 ["Снаряжение","Хаоскоп","—","Интеллект + Внимательность, сл. 6; −1 к сложности после достоверного обнаружения того же типа. Стационарный или в грузовике"],["Снаряжение","Иксоскоп (XScope)","—","Определяет на расстоянии, жив человек или мёртв (пульс, дыхание, тепло). 2-е поколение точнее"],["Снаряжение","GPS-трекер","+4","К поиску владельца. Найти на машине: Сообразительность + Уличное чутьё / Технологии; персональный — сл. 3"],["Снаряжение","Отмычка-пистолет","+4","К Ловкость + Воровство. Быстро и тихо, но у гражданского вызовет вопросы"],["Снаряжение","Пластиковые стяжки","—","Порвать: Сила, сл. 5. Легко разрезать ножом или когтями"],["Снаряжение","Наручники","—","Порвать: Сила, сл. 6; выскользнуть: Ловкость + Воровство, сл. 4"],["Снаряжение","Тактические наушники","+1","К Самообладанию в бою, связь в ячейке"]
];

var EDGES = {
  arsenal:{name:"Арсенал", en:"Arsenal", cat:"Актив",
    pool:"Интеллект + Ремесло (свой арсенал) или Манипуляция + Уличное чутьё (через контакты)",
    sys:"Победа на сложности 4 в начале сцены даёт одно личное огнестрельное или холодное оружие: снайперскую винтовку, пистолет, боевой клинок. Нужен разумный доступ к тайнику или контакту. Один тест за сцену, оружие работает только в этой сцене. В следующих сценах можно получить то же или похожее.",
    perks:[
      {k:"team", n:"Командная заявка", en:"Team Requisition", t:"Дополнительные копии того же оружия числом до перевеса. Все копии имеют те же свойства и ту же ограниченную длительность."},
      {k:"special", n:"Особые характеристики", en:"Special Features", t:"Оружие получает особые свойства числом до перевеса: от тепловизионного прицела до замаскированного кейса. Что считать свойством, решает Рассказчик."},
      {k:"exotic", n:"Экзотика", en:"Exotics", t:"Редкое или уникальное оружие и боеприпасы: от серебряных пуль до обсидиановых кинжалов. Для действительно редкого сложность выше. Само по себе не сверхъестественно, но бьёт по уязвимостям добычи."},
      {k:"untrace", n:"Неотслеживаемость", en:"Untraceable", t:"Оружие невозможно отследить, само по себе оно никогда не приведёт власти или добычу к охотнику."}]},
  fleet:{name:"Флот", en:"Fleet", cat:"Актив",
    pool:"Интеллект + Технологии (свой гараж) или Манипуляция + Убеждение (через контакты)",
    sys:"Победа на сложности 4 в начале сцены даёт одно транспортное средство, доступное для гражданского или коммерческого использования, включая лодки и самолёты, но не военную технику. Один тест за сцену, транспорт только на эту сцену. Грань не даёт умения управлять.",
    perks:[
      {k:"armor", n:"Броня", en:"Armor", t:"Транспорт бронирован против стрелкового оружия и уязвим только для мины или РПГ. Летающий транспорт даёт пассажирам +2 к защите от дальних атак."},
      {k:"perf", n:"Производительность", en:"Performance", t:"Бонус, равный перевесу (максимум 3), к тестам вождения в погоне."},
      {k:"surv", n:"Наблюдение", en:"Surveillance", t:"Скрытая аппаратура: направленные микрофоны, сканеры, тепловизоры. Бонус, равный перевесу (максимум 3), всем, кто ведёт наблюдение из машины."},
      {k:"untrace", n:"Неотслеживаемость", en:"Untraceable", t:"Транспорт невозможно отследить, он сам не приведёт власти или добычу к охотнику."}]},
  ordnance:{name:"Боеприпасы", en:"Ordnance", cat:"Актив",
    pool:"Самообладание + Наука (собирает сам) или Самообладание + Уличное чутьё (через контакты)",
    sys:"Победа на сложности 4 в начале сцены даёт одну мину или взрывчатку с таймером или дистанционным подрывом. Нужен доступ к тайнику или контакту. Один тест за сцену, заряд только на эту сцену.",
    perks:[
      {k:"multi", n:"Множественные боезапасы", en:"Multiple Payloads", t:"Дополнительные копии того же заряда числом до перевеса, с теми же свойствами и длительностью."},
      {k:"nonlethal", n:"Нелетальные боеприпасы", en:"Non-Lethal Munitions", t:"Светошумовые, слезоточивый газ, «нокаут-газ». Штраф ко всем тестам пострадавших равен перевесу (максимум 3). Точный эффект на мирных и добычу решает Рассказчик."},
      {k:"exotic", n:"Экзотика", en:"Exotics", t:"Редкие вещества в зарядах: туман святой воды, мины с осколками сандала. Сложность выше для редкого. Не сверхъестественно, но бьёт по уязвимостям добычи."},
      {k:"disguise", n:"Замаскированная доставка", en:"Disguised Delivery", t:"Устройства замаскированы под бытовые предметы, от зажигалок до кондиционеров. Сложность их обнаружения растёт на перевес (максимум 3)."}]},
  library:{name:"Библиотека", en:"Library", cat:"Актив",
    pool:"Решительность + Академические знания",
    sys:"Потратив примерно день на изучение добычи, охотник проходит тест. Победа даёт подсказку о природе или поведении типа существа или конкретной добычи: чем больше перевес, тем точнее. Одна попытка за сцену, после успеха — снова только в следующей сессии.",
    perks:[
      {k:"where", n:"Где они прячутся", en:"Where They Hide", t:"Сверх подсказки: бонус, равный перевесу (максимум 3), к одной попытке найти логово добычи."},
      {k:"who", n:"Кто они", en:"Who They Are", t:"Бонус, равный перевесу (максимум 3), к одной попытке опознать добычу, если она умеет сойти за человека или животное."},
      {k:"stop", n:"Как остановить их", en:"How to Halt Them", t:"Бонус, равный перевесу (максимум 3), к одной попытке защитить место или человека или спрятать их от добычи. Не для прямых атак."},
      {k:"harm", n:"Как навредить им", en:"How to Harm Them", t:"Бонус, равный перевесу (максимум 3), к одной попытке навредить добыче через её сверхъестественную уязвимость."}]},
  improvised:{name:"Самодельное снаряжение", en:"Improvised Gear", cat:"Способность",
    pool:"Интеллект + Ремесло, Технологии или Наука",
    sys:"Победа на сложности 4: из подручных предметов собирается недолговечное снаряжение. Оно даёт +2 куба к одному навыку или делает возможным действие, которое иначе невозможно. Сборка от минут до пары часов, не под давлением (не в перестрелке). Предмет работает до конца сцены, без перков — один предмет за сцену.",
    perks:[
      {k:"frugal", n:"Скупость", en:"Frugal", t:"Можно собирать большинство предметов из того, что носишь в сумке, где угодно."},
      {k:"mass", n:"Массовое производство", en:"Mass Production", t:"Дополнительные одинаковые предметы числом до перевеса, усиливают тот же навык."},
      {k:"spec", n:"Специализация", en:"Specialization", t:"Бонус +3 вместо +2 к выбранному навыку. Можно брать несколько раз, по разу на навык."},
      {k:"speed", n:"Скоростное изготовление", en:"Speed Crafting", t:"Можно собирать в любых условиях, даже под пулями: 3 хода минус перевес, минимум 1 ход."}]},
  global:{name:"Глобальный доступ", en:"Global Access", cat:"Способность",
    pool:"Интеллект + Технологии",
    sys:"Потратив сцену (от минут до дня) и победив на сложности 4, охотник получает доступ к любым данным о субъекте в любой системе. Без перков менять данные нельзя, для несетевых систем нужен физический доступ.",
    perks:[
      {k:"bigbro", n:"Большой Брат", en:"Big Brother", t:"Не только смотреть, но и менять записи камер: удалять людей или добавлять их."},
      {k:"money", n:"Денежный кран", en:"Money Tap", t:"Перемещать деньги. Против цели снижает её Ресурсы на 1 за успех перевеса на месяц. Корыстное использование грозит ростом Опасности."},
      {k:"law", n:"Буква закона", en:"Letter of the Law", t:"Менять криминальные базы: подбрасывать или стирать записи. Сложность от 3 (местное) до 5+ (глобальное)."},
      {k:"pass", n:"Пропуск для всех", en:"All-Access Pass", t:"Обходить электронные замки, отключать сигнализации и системы безопасности. Сложность 3–5."}]},
  drone:{name:"Дрон-жокей", en:"Drone Jockey", cat:"Способность",
    pool:"Сообразительность + Технологии (управление), Интеллект + Ремесло (ремонт)",
    sys:"Охотник владеет дроном с двумя навыками. На них дрон бросает Сообразительность + Технологии оператора, на остальные — 1 куб. Работает день плюс перевес теста Интеллект + Наука (сл. 2) дней. 5 уровней здоровья (летающие получают Аггравированный урон). Ремонт: сцена и Интеллект + Ремесло, сл. 3.",
    perks:[
      {k:"variants", n:"Варианты", en:"Variants", t:"Дополнительная модель дрона со своими двумя навыками. Активен один дрон, если нет Автономности. Можно брать несколько раз."},
      {k:"specialist", n:"Навык специалиста", en:"Specialist Skill", t:"Дополнительный навык для одной модели, с согласия Рассказчика — манипуляторы или инструменты."},
      {k:"armed", n:"Вооружение", en:"Armament", t:"Вариант дрона вооружён аналогом ПП или электрошокером, плоский пул 5. С Навыком специалиста оператор использует свой пул."},
      {k:"auto", n:"Автономность", en:"Autonomy", t:"Простое поведение: патруль, атака, слежка, плоский пул 5. Сложные сценарии — тест Решительность + Технологии. Позволяет запускать дополнительных дронов."},
      {k:"payload", n:"Полезная нагрузка", en:"Payload", t:"Дрон несёт груз больше себя, но становится медленнее и заметнее (+2 к его обнаружению)."}]},
  beast:{name:"Заклинатель зверей", en:"Beast Whisperer", cat:"Способность",
    pool:"Харизма + Обращение с животными (команды), Самообладание + Обращение с животными (обучение)",
    sys:"Выбирается тип животного. Оно предано и сопровождает охотника, выполняет простые команды. Опасные команды — тест сл. 4. Погибшее животное заменяется за сцену и тест обучения сл. 4.",
    perks:[
      {k:"incorr", n:"Неподкупность", en:"Incorruptible", t:"Животное невосприимчиво к силам, которые переманили бы его от хозяина."},
      {k:"menag", n:"Зверинец", en:"Menagerie", t:"Ещё один тип животных. Больше одного зверя на поле привлекает внимание."},
      {k:"complex", n:"Сложные команды", en:"Complex Commands", t:"Поиск предметов, наблюдение за людьми, отчёты хозяину. Харизма + Обращение для команд, Интеллект + Обращение, чтобы понять животное."},
      {k:"incog", n:"Инкогнито", en:"Incognito", t:"Животное мастерски остаётся незамеченным: если его не ищут, его не заметят."}]},
  sense:{name:"Почувствовать неестественное", en:"Sense the Unnatural", cat:"Дар",
    pool:"Сообразительность + Оккультизм или Наука",
    sys:"Сложность 3–5 по типу и силе существа. Использование явное, нужно держать объект фокуса. Говорит только, что существо рядом (примерно та же комната), но не кто это. Каждая повторная попытка в сцене стоит 1 Силу воли.",
    perks:[
      {k:"cspec", n:"Специализация существа", en:"Creature Specialization", t:"+2 куба, чтобы почувствовать один тип существ. Можно брать несколько раз."},
      {k:"range", n:"Дальность", en:"Range", t:"Радиус до городского квартала: понятно, в комнате существо или вне её."},
      {k:"precise", n:"Точность", en:"Precision", t:"Можно указать, кто именно в комнате сверхъестественный. Тип — только при Специализации существа."},
      {k:"hands", n:"Без рук", en:"Hands-Free", t:"Объект фокуса больше не нужен."}]},
  repel:{name:"Отразить неестественное", en:"Repel the Unnatural", cat:"Дар",
    pool:"Решительность + Оккультизм или Наука",
    sys:"Размахивая объектом фокуса, охотник проходит тест. Сложность — половина (Самообладание + Решительность) существа или его стандартная сложность. Пока охотник неподвижен, существо не может подойти и вступить в драку или ближний бой, но может защищаться и применять силы. Каждый ход движения — новый тест. При провале хватка теряется, на это существо в сцене больше нельзя.",
    perks:[
      {k:"ward", n:"Оберег", en:"Ward", t:"Зона защиты около 2 м вокруг охотника, +1 м за успех перевеса."},
      {k:"damage", n:"Урон", en:"Damage", t:"Объект фокуса — оружие ближнего боя +0, Аггравированный урон отражаемому существу. Сразу нужен повторный тест Грани."},
      {k:"cspec", n:"Специализация существа", en:"Creature Specialization", t:"+2 куба против одного типа существ. Можно брать несколько раз."},
      {k:"hands", n:"Без рук", en:"Hands-Free", t:"Объект фокуса больше не нужен."}]},
  thwart:{name:"Помешать неестественному", en:"Thwart the Unnatural", cat:"Дар",
    pool:"Самообладание + Оккультизм или Наука",
    sys:"С объектом фокуса охотник невосприимчив к сверхъестественным силам, требующим проверки сопротивления. Против автоматических эффектов — тест Грани. В обоих случаях тратится 1 Сила воли. Работает только против эффектов, нацеленных на охотника, не против физических атак.",
    perks:[
      {k:"cspec", n:"Специализация существа", en:"Creature Specialization", t:"+2 куба, чтобы сопротивляться одному типу существ."},
      {k:"ward", n:"Оберег", en:"Ward", t:"Зона около 2 м, +1 м за успех. Все в ней защищены, а охотник проходит все тесты и тратит Силу воли."},
      {k:"recog", n:"Распознавание", en:"Recognition", t:"При успешном сопротивлении охотник понимает, что была попытка и что сила могла сделать. Подсказки, не правила."},
      {k:"hands", n:"Без рук", en:"Hands-Free", t:"Объект фокуса больше не нужен."}]},
  artifact:{name:"Артефакт", en:"Artifact", cat:"Дар",
    pool:"Интеллект + Оккультизм или Наука (выбирается при покупке)",
    sys:"Предмет даёт +1 куб к одному связанному навыку при использовании. Бонус не действует на тесты Грани самого Артефакта. Может быть объектом фокуса. Утраченный Артефакт можно вернуть, но через испытание масштаба истории.",
    perks:[
      {k:"empower", n:"Усиление", en:"Empower", t:"Раз за сцену тест сл. 4: бонус Артефакта до +3. При провале — поверхностный урон Силе воли, равный недобору."},
      {k:"lure", n:"Привлекательность", en:"Lure", t:"Сверхъестественное хочет завладеть Артефактом: приманка, +2 к засадам. Раскрытый, он продолжает притягивать знающих (или организацию, у которой его забрали)."},
      {k:"detect", n:"Обнаружение", en:"Detection", t:"Артефакт реагирует на сверхъестественное, как Почувствовать неестественное: сл. 3–5, преднамеренно, нужно держать. Говорит только, что существо рядом. Повтор за сцену — 1 Сила воли."},
      {k:"shield", n:"Щит", en:"Shield", t:"Физический урон от сверхъестественных источников уменьшается вдвое (поверхностный — ещё раз вдвое)."}]},
  expmed:{name:"Экспериментальная медицина", en:"Experimental Medicine", cat:"Актив", src:"Apostates", req:"Только Отступники из Monster-X",
    pool:"Выносливость + Медицина (Здоровье) или Самообладание + Проницательность (Сила воли)",
    sys:"Охотник с одним и более уровнем тяжёлого урона проходит процедуру. Сложность — половина текущего тяжёлого урона, с округлением вверх. Успех полностью лечит урон. Провал: урон остаётся, Изнурение до конца истории независимо от Здоровья, Опасность +1. Перки действуют только при выигранном броске и по Здоровью, если не сказано иное.",
    perks:[
      {k:"resil", n:"Улучшенная стойкость", en:"Improved Resilience", t:"До конца следующей истории Броня 1 без доспеха, складывается с надетой бронёй."},
      {k:"monstr", n:"Чудовищное усиление", en:"Monstrous Enhancement", t:"Один атрибут +2 (максимум 5). До конца истории тяжёлый урон от обычных материалов (серебро, морская вода). Если охотник умрёт в эту историю, труп станет монстром Рассказчика."},
      {k:"phoenix", n:"Протокол «Феникс»", en:"Phoenix Protocol", t:"Следующую историю Здоровье восстанавливается вдвое быстрее, сверхъестественная стойкость к урону, большая часть тяжёлого урона становится смертельным. Нельзя бросать кости Отчаяния. В конце — тяжёлый урон Силе воли по числу применений перка."},
      {k:"steroid", n:"Нестабильные стероиды", en:"Unstable Steroids", t:"Один атрибут +1 до конца следующей истории. При результате Отчаяния на любом броске — 1 тяжёлый урон (физический или ментальный по типу броска)."}]},
  turncoat:{name:"Перебежчик", en:"Turncoat", cat:"Способность", src:"Apostates",
    pool:"Манипуляция + Хитрость",
    sys:"Охотник демонстрирует новую верность и проходит тест. Сложность — половина (Интеллект + Сообразительность) цели или её стандартная сложность. Нужно относительное спокойствие: до боя можно, посреди боя нет. При успехе цель верит в полную лояльность охотника, пока не получит доказательств обратного. Тогда можно повторить тест, каждая следующая попытка +1 к сложности.",
    perks:[
      {k:"deathbed", n:"Исповедь на смертном одре", en:"Deathbed Confession", t:"Можно применять в бою: приостановить бой, потратив всё действие, в любой момент хода. Бой возобновляется, когда ячейка атакует или одна из сторон отступает."},
      {k:"poker", n:"Каменное лицо", en:"Poker Face", t:"+2 к тестам Грани, если их инициируют приспешники добычи. Успех убеждает и приспешника, и саму добычу."},
      {k:"plan", n:"Придерживаться плана", en:"Stick to the Plan", t:"Ячейка всегда понимает намерения охотника без связи, независимо от расстояния и времени."},
      {k:"team", n:"Действуем как команда", en:"We Come as a Team", t:"За каждый успех перевеса можно взять с собой одного согласного товарища по ячейке и потом поручиться за него тестом Грани."}]},
  cleanse:{name:"Очистить неестественное", en:"Cleanse the Unnatural", cat:"Дар", src:"Apostates", req:"Только Отступники из Общества Св. Леопольда или SAD",
    pool:"Харизма + Убеждение (Общество Св. Леопольда), Решительность + Наука (SAD), Манипуляция + Оккультизм (уличные проповедники)",
    sys:"Снимает сверхъестественный контроль. Сложность по сроку влияния: 1 (эта сцена), 2 (до суток), 3 (до недели), 4 (до года), 5 (дольше), Рассказчик может скорректировать. Цель получает 3 тяжёлого урона (Здоровью или Силе воли по технике) минус 1 за каждый успех перевеса. При успехе цель на 24 часа возвращает полный контроль над собой.",
    perks:[
      {k:"bedside", n:"Манера поведения", en:"Bedside Manner", t:"Весь урон от Грани становится лёгким (после обычного деления пополам, с округлением вниз)."},
      {k:"stigmata", n:"Нанесение стигмат", en:"Inflict Stigmata", t:"Цель получает ещё 1 тяжёлый урон Здоровью, но сложность теста −2. Стигматы постоянны."},
      {k:"backlash", n:"Психическая отдача", en:"Psychic Backlash", t:"При успехе за каждые 2 успеха перевеса контролирующая сущность получает 1 тяжёлый урон (Здоровью или Силе воли на выбор)."},
      {k:"threads", n:"Следуя за нитями", en:"Trace the Threads", t:"За каждый успех перевеса Рассказчик правдиво отвечает на один вопрос о местонахождении манипулятора."}]},
  destiny:{name:"Великое предназначение", en:"Great Destiny", cat:"Дар", src:"Apostates",
    pool:"Нет броска",
    sys:"Игрок выбирает высшую цель: мученичество за организацию, спасение невинного, у тёмных — что-то злое. Перед каждой сессией охотник получает 2 временных куба, которые можно добавить к любому броску, напрямую связанному с предназначением. Кубы сгорают в начале следующей сессии.",
    perks:[
      {k:"protect", n:"Божественная защита", en:"Divine Protection", t:"Урон Здоровью, полученный при исполнении предназначения, можно уменьшить на 2 (не ниже 0)."},
      {k:"resolve", n:"Небесное решение", en:"Heavenly Resolve", t:"После урона в социальном бою, защищая или проповедуя предназначение, можно вылечить 1 тяжёлый урон Силе воли."},
      {k:"fate", n:"Влияние на судьбу", en:"Influence Fate", t:"Раз за сессию: персонаж Рассказчика совершает действие на пользу предназначению. Харизма + Оккультизм против Решительности + Оккультизма цели."},
      {k:"insight", n:"Священное прозрение", en:"Sacred Insight", t:"Раз за историю — подсказка от Рассказчика, воспринимается как голос или видение."}]},
  changes:{name:"Неестественные изменения", en:"Unnatural Changes", cat:"Дар", src:"Incognito Report",
    pool:"Выносливость, Самообладание или Решительность + Проницательность (по выбранному атрибуту)",
    sys:"При покупке выбирается один атрибут. Активация: тест сл. 4. Успех: до конца сцены +2 куба ко всем броскам с этим атрибутом. Провал: тяжёлый урон Здоровью, Силе воли или обоим, равный недобору. Если охотник впадает в Отчаяние, эффект заканчивается.",
    perks:[
      {k:"breadth", n:"Широта", en:"Breadth", t:"Дополнительный вторичный атрибут получает +1 куб при активации. Не более двух раз."},
      {k:"maxneuro", n:"Расширенные нейропути", en:"Maximized Neuropathways", t:"Активация не требует действия и времени."},
      {k:"hands", n:"Без рук", en:"Hands-Free", t:"Объект фокуса не нужен."},
      {k:"practice", n:"Практика нейропутей", en:"Neuropathway Practice", t:"Сложность активации 3 вместо 4."}]}
};
var SKILLS = {
  "Физические":[["athletics","Атлетика"],["brawl","Драка"],["craft","Ремесло"],["drive","Вождение"],["firearms","Стрельба"],["larceny","Воровство"],["melee","Ближний бой"],["stealth","Скрытность"],["survival","Выживание"]],
  "Социальные":[["animalken","Обращение с животными"],["etiquette","Этикет"],["insight","Проницательность"],["intimidation","Запугивание"],["leadership","Лидерство"],["performance","Исполнение"],["persuasion","Убеждение"],["streetwise","Уличное чутьё"],["subterfuge","Хитрость"]],
  "Ментальные":[["academics","Академические знания"],["awareness","Внимательность"],["finance","Финансы"],["investigation","Расследование"],["medicine","Медицина"],["occult","Оккультизм"],["politics","Политика"],["science","Наука"],["technology","Технологии"]]
};
var ATTRS = {
  "Физические":[["strength","Сила"],["dexterity","Ловкость"],["stamina","Выносливость"]],
  "Социальные":[["charisma","Обаяние"],["manipulation","Манипуляция"],["composure","Самообладание"]],
  "Ментальные":[["intelligence","Интеллект"],["wits","Сообразительность"],["resolve","Решительность"]]
};
var ALLNAMES = {};
Object.keys(ATTRS).forEach(function(g){ATTRS[g].forEach(function(a){ALLNAMES[a[0]]=a[1];});});
Object.keys(SKILLS).forEach(function(g){SKILLS[g].forEach(function(a){ALLNAMES[a[0]]=a[1];});});

var CATALOG = [
 {n:"Союзники", c:"•–••••••", g:"Предыстория", t:"Люди, которые помогают охотнику. Стоимость зависит от эффективности и надёжности, максимум 6 точек на одного союзника."},
 {n:"Контакты", c:"•–•••", g:"Предыстория", t:"Люди, добывающие информацию и мелкие услуги. •: достанет дешёвое и обычное (Ресурсы 1). ••: достанет полезное (Ресурсы 2), например мелкий торговец оружием."},
 {n:"Слава", c:"•–•••••", g:"Предыстория", t:"•: вами восхищается субкультура. ••: местная знаменитость. •••: имя знает страна. Каждая точка −1 к сложности социальных тестов с фанатами. Сложнее оставаться незамеченным."},
 {n:"Влияние", c:"•–•••••", g:"Предыстория", t:"Вес в сообществе, группе или районе: богатство, престиж, политика, шантаж."},
 {n:"Маска", c:"•–••", g:"Предыстория", t:"•: хорошая поддельная личность, проходит проверку на уровне региона. ••: проходит проверку национальной полиции. С Маской •• доступны Обнулено и Сапожник."},
 {n:"Наставник", c:"•–•••••", g:"Предыстория", t:"Охотник или ячейка, которые присматривают за вами. •: новичок (одна охота) … •••••: «Ван Хельсинг»."},
 {n:"Ресурсы", c:"•–•••••", g:"Предыстория", t:"•: пролетариат. ••: средний класс. •••: богатый. ••••: очень богатый. •••••: сверхбогатый. Нужно указать источник дохода."},
 {n:"Слуги", c:"•–•••", g:"Предыстория", t:"Помощники, слуги, подручные."},
 {n:"Убежище", c:"•–•••", g:"Предыстория", t:"•: маленькое, но надёжнее обычного. ••: хороший размер или приватность. •••: очень большое и закрытое. За каждую точку +1 к броскам заметить опасность дома."},
 {n:"Статус", c:"•–•••••", g:"Предыстория", t:"Репутация среди охотников одной фракции. •: известный. ••: уважаемый. •••: влиятельный."},
 {n:"Лингвистика", c:"• за язык", g:"Достоинство", t:"Каждая точка — свободное владение ещё одним языком."},
 {n:"Красивый", c:"••", g:"Достоинство", t:"+1 куб ко всем подходящим социальным пулам, когда вас видно."},
 {n:"Ошеломляющий", c:"••••", g:"Достоинство", t:"+2 куба ко всем подходящим социальным пулам, когда вас видно."},
 {n:"Диетолог", c:"•/••", g:"Достоинство", t:"•: сами восстанавливаете 1 поверхностное Здоровье в начале сессии после готовки. ••: вся ячейка."},
 {n:"Неприличная аура", c:"••", g:"Достоинство", t:"Некоторые существа принимают вас за своего или за другое сверхъестественное существо."},
 {n:"Лаборатория", c:"• (Убежище)", g:"Убежище", t:"+1 к броскам по одной специализации Науки или Технологий в убежище за точку. Нельзя в маленьком убежище."},
 {n:"Роскошь", c:"• (Убежище)", g:"Убежище", t:"+2 к социальным тестам с гостями в убежище. Без Ресурсов ••• декор добыт нелегально."},
 {n:"Задняя стенка", c:"• (Убежище)", g:"Убежище", t:"Скрытый выход. +1 к броскам уйти от слежки возле убежища за точку."},
 {n:"Система безопасности", c:"• (Убежище)", g:"Убежище", t:"+1 к броскам против проникновения за точку."},
 {n:"Хирургия", c:"• (Убежище)", g:"Убежище", t:"+2 к Медицине в убежище. Нельзя в маленьком убежище."},
 {n:"Скрытый арсенал", c:"• (Убежище)", g:"Убежище", t:"За точку: пистолет и длинноствол с патронами в тайнике. Не пополняются сами."},
 {n:"Комната паники", c:"• (Убежище)", g:"Убежище", t:"Укрытие на двоих, сложность взлома 5. Можно держать пленников."},
 {n:"Сторожи", c:"• (Убежище)", g:"Убежище", t:"За точку: четыре обычных охранника и один одарённый босс."},
 {n:"Обнулено", c:"•", g:"Маска", t:"Ваши настоящие записи удалены. Официально вас не существует. Нужна Маска ••."},
 {n:"Сапожник", c:"•", g:"Маска", t:"Умеете создавать и добывать Маски. Нужна Маска ••."},
 {n:"Враги", c:"•–•••••", g:"Предыстория", flaw:true, t:"Противоположность Союзникам. Стоят на две точки меньше их эффективности."},
 {n:"Противник", c:"•–•••", g:"Предыстория", flaw:true, t:"Охотник-соперник, желающий вам зла."},
 {n:"Позор", c:"••", g:"Слава", flaw:true, t:"Вы известны чем-то ужасным. Сложность реакций выше, в худшем случае власти пытаются вас схватить."},
 {n:"Тёмная тайна", c:"•", g:"Слава", flaw:true, t:"Ваши тёмные дела неизвестны почти никому, но могут всплыть."},
 {n:"Презираемый", c:"••", g:"Влияние", flaw:true, t:"Одна группа или район живут, чтобы мешать вам. −2 к попыткам убедить нейтральных."},
 {n:"Не понравился", c:"•", g:"Влияние", flaw:true, t:"−1 куб к социальным тестам с любой группой города, кроме ваших контактов, союзников и лояльных."},
 {n:"Подозреваемое лицо", c:"••", g:"Маска", flaw:true, t:"Ваши данные в базах спецслужб, вы помечены как потенциальный террорист."},
 {n:"Серийная ошибка", c:"•", g:"Маска", flaw:true, t:"По ошибке вы в базах как умерший или опасный."},
 {n:"Сталкеры", c:"•", g:"Слуги", flaw:true, t:"Вас притягивают люди, слишком вами увлечённые. Избавитесь от одного — появится другой."},
 {n:"Бедняк", c:"•", g:"Ресурсы", flaw:true, t:"Нет ни денег, ни дома."},
 {n:"Отсутствие убежища", c:"•", g:"Убежище", flaw:true, t:"Дома вы не в безопасности: сквот, бедственный район."},
 {n:"Скомпрометировано", c:"••", g:"Убежище", flaw:true, t:"Убежище уже обыскивали. Шпионы получают +2 к проникновению и наблюдению."},
 {n:"Жуткий", c:"•", g:"Убежище", flaw:true, t:"Убежище выглядит как логово монстра. −2 к социальным тестам, чтобы успокоить гостей."},
 {n:"Призраки", c:"•+", g:"Убежище", flaw:true, t:"В убежище неподконтрольное сверхъестественное проявление."},
 {n:"Избегание", c:"••", g:"Статус", flaw:true, t:"Вы ненавидите одну конкретную фракцию."},
 {n:"Неграмотный", c:"••", g:"Недостаток", flaw:true, t:"Не умеете читать и писать. Академические знания и Наука не выше 1."},
 {n:"Отталкивающий", c:"••", g:"Внешность", flaw:true, t:"−2 к подходящим социальным пулам."},
 {n:"Уродство", c:"•", g:"Внешность", flaw:true, t:"−1 к подходящим социальным пулам."},
 {n:"Зависимость", c:"•", g:"Вещества", flaw:true, t:"−1 ко всем пулам, если в прошлой сцене не употребляли (кроме действий, ведущих к веществу)."},
 {n:"Сильная зависимость", c:"••", g:"Вещества", flaw:true, t:"−2 ко всем пулам, если в прошлой сцене не употребляли."},
 {n:"Жизнь на грани", c:"••", g:"Сверхъестественное", flaw:true, t:"Перед новым рискованным искушением −2 ко всем действиям, пока не поддадитесь или не кончится сцена."},
 {n:"Слабая воля", c:"••", g:"Сверхъестественное", flaw:true, t:"Нельзя активно сопротивляться ментальным и эмоциональным воздействиям."},
 {n:"Стигматы", c:"•", g:"Сверхъестественное", flaw:true, t:"Кровоточащие раны при физическом уроне или уроне Силе воли."},
 {n:"Проклятие старухи", c:"••", g:"Сверхъестественное", flaw:true, t:"Выглядите на 10+ лет старше, на одну ячейку Здоровья меньше."}
];
var ALT = {ordnance:"Фугас", fleet:"Транспорт", drone:"Оператор дрона", repel:"Отталкивать неестественное", sense:"Чувствовать неестественное", thwart:"Препятствовать неестественному"};
var W = "по wta5.ru";
[
 {n:"Всегда наготове", c:"••", g:"Ментальные", s:W, t:"Когда кому-то нужна важная вещь, обращаются к вам: у вас она обычно есть."},
 {n:"Эйдетическая память", c:"••", g:"Ментальные", s:W, t:"Несколько минут изучения — и текст и детали запомнены."},
 {n:"Мёртвые языки", c:"••", g:"Лингвистика", s:W, t:"Знание древних языков."},
 {n:"Запретные тексты", c:"••", g:"Академическая среда", s:W, t:"Сочинения спорного эксперта: объём ограничен, детализация высокая."},
 {n:"Часть обстановки", c:"•••", g:"Академическая среда", s:W, t:"Давно работаете в учреждении и знаете весь факультет."},
 {n:"Диссертация", c:"••", g:"Академическая среда", s:W, t:"Годы изучения выбранной области со всех сторон."},
 {n:"Нора", c:"•", g:"Убежище", s:W, t:"Укрытие в кампусе: пустые аудитории, кладовые, свободные общежития."},
 {n:"Убежище ячейки", c:"•–•••", g:"Убежище", s:W, t:"Общее убежище, точки вносят члены ячейки."},
 {n:"Сельское укрытие", c:"•–•••", g:"Убежище", s:W, t:"Старое семейное поместье в глуши."},
 {n:"Инсценированная смерть", c:"••", g:"Маска", s:W, t:"Официально вы мертвы."},
 {n:"Щедрый наставник", c:"•–•••", g:"Наставник", s:W, t:"Наставник благоволит вам или боится того, что вы знаете."},
 {n:"Дух-наставник", c:"••", g:"Наставник", s:W, t:"Наставник — призрак или иная спектральная сущность."},
 {n:"Доступ к базе данных", c:"•", g:"Офис франшизы", s:W, t:"Защищённое подключение к исследовательским базам."},
 {n:"Бюрократическая дымовая завеса", c:"•", g:"Офис франшизы", s:W, t:"Контакты в кадрах, прессе и полиции предупреждают о проверках."},
 {n:"Нарушения сна", c:"••", g:"Ментальные", flaw:true, s:W, t:"Нерегулярный сон, который настигает в неподходящий момент."},
 {n:"Ложная учёность", c:"•", g:"Лингвистика", flaw:true, s:W, t:"Ваше понимание древних языков ошибочно, но вы уверены в обратном."},
 {n:"Опасные знания", c:"••", g:"Академическая среда", flaw:true, s:W, t:"Ваши знания нужны опасным людям, и вы рискуете показать, как много знаете."},
 {n:"Плохие оценки", c:"•", g:"Академическая среда", flaw:true, s:W, t:"Студент, которого отвлекают деньги и проблемы."},
 {n:"Истощение", c:"••", g:"Питание", flaw:true, s:W, t:"Анемия и недоедание, −1 к Здоровью."},
 {n:"Назойливый сосед", c:"•", g:"Убежище", flaw:true, s:W, t:"Убежище безопасно, но не приватно: им пользуется кто-то ещё."},
 {n:"Изолированное", c:"••", g:"Убежище", flaw:true, s:W, t:"Убежище в глуши, связь работает с перебоями."},
 {n:"Долги", c:"•–••", g:"Ресурсы", flaw:true, s:W, t:"Большая часть заработка уходит на выплату долгов."},
 {n:"Фриланс", c:"•", g:"Ресурсы", flaw:true, s:W, t:"Нестабильная работа на фрилансе."},
 {n:"Подработки", c:"•–••", g:"Ресурсы", flaw:true, s:W, t:"Ненадёжная работа на побегушках: пропуск смены может стоить места."},
 {n:"Одиозный партнёр", c:"•", g:"Слава", flaw:true, s:W, t:"Близкий вам человек имеет Позор."},
 {n:"Подозреваемый", c:"••", g:"Статус", flaw:true, s:W, t:"Вы не в ладах с фракцией."},
 {n:"Охотник за славой", c:"•", g:"Наставник", flaw:true, s:W, t:"Наставник присваивает ваши успехи, но не последствия."},
 {n:"Объект интереса", c:"•", g:"Офис франшизы", flaw:true, s:W, t:"Офис привлёк нежелательное внимание."},
 {n:"Плохо обслуживаемое снаряжение", c:"•", g:"Офис франшизы", flaw:true, s:W, t:"Оборудование офиса неисправно."}
].forEach(function(x){ CATALOG.push(x); });
var FIREARMS_SPECS ="Арбалеты, Торговля оружием, Оружейное дело, Боеприпасы с ручным заряжанием, Быстрое выхватывание, Снайпер, Трюковая стрельба";

/* ---------- state ---------- */
var STORE = "h5-chars-v1", CUR = "h5-current-v1";
function uid(){ return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function readStore(){ try { return JSON.parse(localStorage.getItem(STORE) || "{}") || {}; } catch(e){ return {}; } }
var chars = readStore(), curId = null, state, firstRun = false;
try { curId = localStorage.getItem(CUR); } catch(e){}
if (!Object.keys(chars).length){
  var seed = blank(); normalize(seed); seed.id = uid(); seed.saved = Date.now(); chars[seed.id] = seed; curId = seed.id; var firstRun = true;
}
if (!curId || !chars[curId]) curId = Object.keys(chars)[0];
state = chars[curId];
normalize(state);

function blank(){
  var s = {v:1, info:{}, portrait:"", attrs:{}, skills:{}, edges:[], health:{bonus:0,states:[]}, willpower:{bonus:0,states:[]},
    cell:{danger:0, desperation:0}, despair:false, touchstones:[], advantages:[], flaws:[], weapons:[], pools:[], xp:{total:0,spent:0,log:""}, notes:{history:"",npc:"",gear:"",misc:""}, saved:0};
  Object.keys(ATTRS).forEach(function(g){ATTRS[g].forEach(function(a){s.attrs[a[0]]=1;});});
  return s;
}
function normalize(s){
  var b = blank();
  Object.keys(b).forEach(function(k){ if (s[k]===undefined) s[k]=b[k]; });
  Object.keys(b.attrs).forEach(function(k){ if (s.attrs[k]===undefined) s.attrs[k]=1; });
  Object.keys(SKILLS).forEach(function(g){SKILLS[g].forEach(function(a){ if(!s.skills[a[0]]) s.skills[a[0]]={d:0,s:""}; });});
  ["history","npc","gear","misc"].forEach(function(k){ if(s.notes[k]===undefined) s.notes[k]=""; });
}

/* ---------- helpers ---------- */
function esc(v){ return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
function getPath(o,p){ return p.split(".").reduce(function(a,k){ return a==null?undefined:a[k]; }, o); }
function setPath(o,p,v){ var ks=p.split("."), last=ks.pop(); var t=ks.reduce(function(a,k){ if(a[k]==null) a[k]={}; return a[k]; }, o); t[last]=v; }
function dots(path,val,max){ max=max||5; var h='<span class="dots" role="group">'; for(var i=1;i<=max;i++){ h+='<button type="button" class="dot'+(i<=val?' on':'')+'" data-dot="'+path+'" data-v="'+i+'" aria-label="'+i+'"></button>'; } return h+'</span>'; }
function boxes(path,val,max){ var h='<span class="boxes">'; for(var i=0;i<=max;i++){ h+='<button type="button" class="box'+(i===val?' on':'')+(i<=val&&i>0?' lit':'')+'" data-set="'+path+'" data-v="'+i+'">'+i+'</button>'; } return h+'</span>'; }
function healthMax(){ return (state.attrs.stamina||0)+3+(+state.health.bonus||0); }
function willMax(){ return (state.attrs.composure||0)+(state.attrs.resolve||0)+(+state.willpower.bonus||0); }
function trackState(kind,max){ var st=(state[kind].states||[]).slice(0,max), filled=0, agg=0; for(var i=0;i<max;i++){ if(st[i]) filled++; if(st[i]==="x") agg++; } return {impaired: max>0 && filled>=max, out: max>0 && agg>=max, filled:filled, agg:agg}; }
function impair(){ return {h:trackState("health",healthMax()), w:trackState("willpower",willMax())}; }
function groupPenalty(g){ var im=impair(); if (g==="Физические" && im.h.impaired) return {why:"Здоровье заполнено: −2 к физическим пулам"}; if ((g==="Социальные"||g==="Ментальные") && im.w.impaired) return {why:"Сила воли заполнена: −2 к социальным и ментальным пулам"}; return null; }
function attrGroup(k){ var r=null; Object.keys(ATTRS).forEach(function(g){ ATTRS[g].forEach(function(a){ if(a[0]===k) r=g; }); }); return r; }
function poolPenalty(keys){ var a=(keys||[]).filter(function(k){return state.attrs[k]!==undefined;})[0]; if(!a) return null; var pen=groupPenalty(attrGroup(a)); return pen?{n:2,why:pen.why}:null; }
function sum(list){ return list.reduce(function(a,x){return a+(+x.dots||0);},0); }

/* ---------- render ---------- */
var app = document.getElementById("app");
var noteTab = "history";
var collapsed = {};
try { collapsed = JSON.parse(localStorage.getItem("h5-collapsed")||"{}"); } catch(e){}

function section(id,title,body,extra){
  var c = collapsed[id];
  return '<section class="sec'+(c?' closed':'')+'" id="sec-'+id+'"><header class="sec-h"><button type="button" class="sec-t" data-toggle="'+id+'" aria-expanded="'+(!c)+'">'+title+'</button>'+(extra||'')+'</header><div class="sec-b">'+body+'</div></section>';
}
function field(label,path,opts){ opts=opts||{}; var v=getPath(state,path); var id="f-"+path.replace(/\./g,"-");
  if (opts.area) return '<label class="fld wide" for="'+id+'"><span>'+label+'</span><textarea id="'+id+'" data-bind="'+path+'" rows="'+(opts.rows||3)+'">'+esc(v)+'</textarea></label>';
  return '<label class="fld'+(opts.wide?' wide':'')+'" for="'+id+'"><span>'+label+'</span><input id="'+id+'" data-bind="'+path+'" value="'+esc(v)+'" autocomplete="off"></label>'; }
function select(label,path,options,info){ var v=getPath(state,path)||""; var id="f-"+path.replace(/\./g,"-");
  var h='<label class="fld" for="'+id+'"><span>'+label+(info?' <button type="button" class="i" data-info="'+info+'" aria-label="Правила">?</button>':'')+'</span><select id="'+id+'" data-bind="'+path+'" data-rerender="1"><option value="">— не выбрано —</option>';
  options.forEach(function(o){ h+='<option'+(o===v?' selected':'')+'>'+esc(o)+'</option>'; });
  return h+'</select></label>'; }

var LOCK_OK = {toggle:1, info:1, track:1, tab:1, pick:1, usepool:1, roll:1, overreach:1, fall:1};
function applyLock(){
  var L = !!state.locked, btn = document.getElementById("btn-lock");
  document.body.classList.toggle("locked", L);
  if (btn){ btn.textContent = L ? "Лист закрыт" : "Редактирование"; btn.setAttribute("aria-pressed", String(L)); btn.title = L ? "Нажми, чтобы снова редактировать" : "Закрыть лист от случайных правок (останутся Здоровье и Сила воли)"; }
  app.querySelectorAll("input,select,textarea").forEach(function(el){ if (/^r-/.test(el.id)) return; if (el.tagName==="TEXTAREA") el.readOnly = L; else el.disabled = L; });
  var imp = document.getElementById("imp-in"), artifactMode = !document.getElementById("btn-chars"); if (imp){ imp.disabled = L && artifactMode; imp.parentNode.hidden = L && artifactMode; }
}
function render(){
  var i = state.info, cr = CREEDS[i.creed], dr = DRIVES[i.drive];
  var h = '';
  /* identity */
  var idBody = '<div class="id-grid"><div class="portrait">'+(state.portrait?'<img src="'+esc(state.portrait)+'" alt="Портрет персонажа">':'<div class="ph">Нет портрета</div>')+
    '<label class="btn small file" for="portrait-in">Загрузить портрет<input type="file" id="portrait-in" accept="image/*" hidden></label></div>'+
    '<div class="fields">'+field("Имя персонажа","info.name")+field("Игрок","info.player")+
      select("Кредо","info.creed",Object.keys(CREEDS),"creed")+select("Драйв","info.drive",Object.keys(DRIVES),"drive")+
      select("Наследие (необязательно)","info.lineage",Object.keys(LINEAGES),"lineage")+field("Организация","info.org")+
      field("Хроника","info.chronicle")+field("Концепт","info.concept")+field("Возраст","info.age")+field("Ячейка","info.cell")+
      field("Амбиция","info.ambition",{wide:1})+field("Желание (на сессию)","info.desire",{wide:1})+
      field("Внешность","info.appearance",{area:1,rows:3})+'</div></div>';
  if (cr || dr) {
    idBody += '<div class="rules">';
    if (cr) idBody += '<div><b>Кости Отчаяния ('+esc(i.creed)+'):</b> '+esc(cr.desp)+'</div>';
    if (dr) idBody += '<div><b>Искупление ('+esc(i.drive)+'):</b> '+esc(dr.red)+'</div>';
    idBody += '</div>';
  }
  h += section("id","Личность",idBody);

  /* cell / desperation */
  var cellBody = '<div class="cell-row"><div class="meter"><span class="lbl">Опасность</span>'+boxes("cell.danger",+state.cell.danger||0,5)+'</div>'+
    '<div class="meter"><span class="lbl">Отчаяние ячейки</span>'+boxes("cell.desperation",+state.cell.desperation||0,5)+'</div>'+
    '<div class="meter"><span class="lbl">Состояние</span><button type="button" class="despair'+(state.despair?' on':'')+'" data-despair="1">'+(state.despair?'В Отчаянии':'Держится')+'</button></div></div>'+
    '<p class="hint">'+(state.despair?'В Отчаянии нельзя бросать кости Отчаяния. Выход — Искупление: '+esc(dr?dr.red:'по Драйву')+'':'Единица на кости Отчаяния: либо оставить результат и поднять Опасность на 1 (Перегиб), либо провалить тест и впасть в Отчаяние.')+'</p>';
  h += section("cell","Ячейка и Отчаяние",cellBody);

  /* attributes */
  var aBody = '<div class="cols3">';
  Object.keys(ATTRS).forEach(function(g){ var pen=groupPenalty(g); aBody += '<div class="'+(pen?'imp-grp':'')+'"><h3>'+g+(pen?' <span class="imp-chip" title="'+pen.why+'">−2</span>':'')+'</h3>'; ATTRS[g].forEach(function(a){ aBody += '<div class="trait"><button type="button" class="tn" data-pick="'+a[0]+'">'+a[1]+'</button><button type="button" class="q" data-info="trait:'+a[0]+'" aria-label="Описание: '+a[1]+'">?</button>'+dots("attrs."+a[0],state.attrs[a[0]])+'</div>'; }); aBody += '</div>'; });
  aBody += '</div><p class="hint">Нажми на название атрибута, затем навыка — пул соберётся в бросках.</p>';
  h += section("attrs","Характеристики",aBody);

  /* health & willpower */
  function track(kind,max,label){ var st=state[kind].states, ts=trackState(kind,max); var b='<div class="track'+(ts.impaired?' impaired':'')+(ts.out?' out':'')+'"><div class="track-h"><span class="lbl">'+label+'</span><b class="big">'+max+'</b><span class="bonus">бонус <button type="button" class="pm" data-bonus="'+kind+'" data-d="-1" aria-label="Меньше">−</button><span>'+(+state[kind].bonus||0)+'</span><button type="button" class="pm" data-bonus="'+kind+'" data-d="1" aria-label="Больше">+</button></span></div><div class="cells">';
    for (var k=0;k<max;k++){ var v=st[k]||""; b+='<button type="button" class="hc '+(v==="/"?'sup':v==="x"?'agg':'')+'" data-track="'+kind+'" data-i="'+k+'" aria-label="Ячейка '+(k+1)+'">'+(v==="/"?'/':v==="x"?'✕':'')+'</button>'; }
    b+='</div>';
    if (ts.out) b+='<div class="imp-banner out">'+(kind==="health"?'Трекер заполнен Аггравированным уроном: персонаж выбывает — кома или смерть.':'Сила воли заполнена Аггравированным уроном: персонаж сломлен. В социальном конфликте — полное поражение и потеря лица.')+'</div>';
    else if (ts.impaired) b+='<div class="imp-banner">Ослаблен: −2 '+(kind==="health"?'ко всем физическим пулам':'ко всем социальным и ментальным пулам')+'. Новый поверхностный урон превращает «/» в «✕».</div>';
    return b+'</div>'; }
  var hwBody = '<div class="cols2">'+track("health",healthMax(),"Здоровье")+track("willpower",willMax(),"Сила воли")+'</div><p class="hint">Клик по ячейке: пусто → / поверхностный → ✕ аггравированный.</p>';
  h += section("hw","Здоровье и Сила воли",hwBody);

  /* skills */
  var sBody = '<div class="cols3">';
  Object.keys(SKILLS).forEach(function(g){ var pen=groupPenalty(g); sBody += '<div class="'+(pen?'imp-grp':'')+'"><h3>'+g+(pen?' <span class="imp-chip" title="'+pen.why+'">−2 к пулам</span>':'')+'</h3>'; SKILLS[g].forEach(function(a){ var s=state.skills[a[0]]; sBody += '<div class="trait sk"><button type="button" class="tn" data-pick="'+a[0]+'">'+a[1]+'</button><button type="button" class="q" data-info="trait:'+a[0]+'" aria-label="Описание: '+a[1]+'">?</button><input class="spec" data-bind="skills.'+a[0]+'.s" value="'+esc(s.s)+'" placeholder="спец." aria-label="Специализация: '+a[1]+'"'+(a[0]==="firearms"?' title="'+FIREARMS_SPECS+'"':'')+'>'+dots("skills."+a[0]+".d",s.d)+'</div>'; }); sBody += '</div>'; });
  sBody += '</div>';
  h += section("skills","Навыки",sBody);

  /* edges */
  var eBody = '<div class="edges">';
  state.edges.forEach(function(e,ix){ var E=EDGES[e.key]; if(!E) return;
    eBody += '<article class="edge"><div class="edge-h"><button type="button" class="edge-n" data-info="edge:'+e.key+'">'+E.name+'</button><span class="tag">'+E.cat+'</span>'+(E.src?'<span class="tag src">'+E.src+'</span>':'')+'<button type="button" class="x" data-del="edges" data-i="'+ix+'" aria-label="Убрать Грань">×</button></div>'+
      '<div class="pool">'+esc(E.pool)+'</div>'+(e.note!==undefined?'<input class="note" data-bind="edges.'+ix+'.note" value="'+esc(e.note)+'" placeholder="Как это выглядит у персонажа">':'')+'<ul class="perks">';
    (e.perks||[]).forEach(function(pk,pi){ var P=E.perks.filter(function(x){return x.k===pk;})[0]; if(!P) return; eBody += '<li><button type="button" class="perk" data-info="perk:'+e.key+':'+pk+'">'+P.n+'</button><button type="button" class="x" data-delperk="'+ix+'" data-i="'+pi+'" aria-label="Убрать перк">×</button></li>'; });
    eBody += '</ul><button type="button" class="btn ghost small" data-addperk="'+ix+'">+ перк</button></article>'; });
  eBody += '<button type="button" class="add-edge" data-addedge="1">+ Добавить Грань</button></div>';
  var perkCount = state.edges.reduce(function(a,e){return a+(e.perks||[]).length;},0);
  h += section("edges","Грани и перки",eBody,'<span class="count">Граней '+state.edges.length+' · перков '+perkCount+'</span>');

  /* rolls */
  var pBody = '<div class="roll-grid"><div><h3>Быстрые пулы</h3><ul class="pools">';
  state.pools.forEach(function(p,ix){ var n=poolSize(p), pp=poolPenalty([p.a]); if(pp) n=Math.max(0,n-2)+'*'; pBody += '<li><button type="button" class="pool-b" data-usepool="'+ix+'"><span>'+esc(p.name)+'</span><small>'+esc(ALLNAMES[p.a]||'')+' + '+esc(ALLNAMES[p.s]||'')+(p.b?' + '+p.b:'')+(p.note?' · '+esc(p.note):'')+'</small><b>'+n+'</b></button><button type="button" class="x" data-del="pools" data-i="'+ix+'" aria-label="Убрать пул">×</button></li>'; });
  pBody += '</ul><button type="button" class="btn ghost small" data-savepool="1">+ Сохранить текущий пул</button></div>';
  pBody += '<div class="roller"><h3>Бросок</h3><div class="roll-in">'+
    '<label for="r-dice">Обычные кубы<input type="number" id="r-dice" min="0" max="30" value="'+roll.dice+'"></label>'+
    '<label for="r-desp">Кубы Отчаяния<input type="number" id="r-desp" min="0" max="5" value="'+(state.despair?0:roll.desp)+'"'+(state.despair?' disabled':'')+'></label>'+
    '<label for="r-diff">Сложность<input type="number" id="r-diff" min="0" max="15" value="'+roll.diff+'"></label></div>'+
    '<div class="picked">'+(roll.pick.length?esc(roll.pick.map(function(k){return ALLNAMES[k];}).join(" + ")):'Пул: выбери атрибут и навык или быстрый пул')+(roll.pen?' <span class="imp-chip">−2 Ослаблен</span>':'')+'</div>'+
    '<button type="button" class="btn" data-roll="1">Бросить</button><div id="roll-out" class="roll-out">'+(roll.out||'')+'</div></div></div>';
  h += section("rolls","Броски",pBody);

  /* touchstones */
  var tBody = '<div class="rows">';
  state.touchstones.forEach(function(t,ix){ tBody += '<div class="row3"><input data-bind="touchstones.'+ix+'.name" value="'+esc(t.name)+'" placeholder="Кто" aria-label="Привязанность"><input data-bind="touchstones.'+ix+'.conviction" value="'+esc(t.conviction)+'" placeholder="Убеждение" aria-label="Убеждение"><input data-bind="touchstones.'+ix+'.note" value="'+esc(t.note)+'" placeholder="Заметка" aria-label="Заметка"><button type="button" class="x" data-del="touchstones" data-i="'+ix+'" aria-label="Убрать">×</button></div>'; });
  tBody += '</div><button type="button" class="btn ghost small" data-addrow="touchstones">+ Привязанность</button><p class="hint">По книге на старте 1–3 Привязанности (в книге — Пробные камни). Без них охотник не восстанавливает Силу воли и считается в Отчаянии.</p>';
  h += section("touch","Привязанности",tBody);

  /* advantages */
  function advCol(kind,title,limit){ var list=state[kind]; var c='<div><div class="adv-h"><h3>'+title+'</h3></div>';
    list.forEach(function(a,ix){ c += '<div class="adv"><button type="button" class="adv-n" data-info="adv:'+esc(a.name)+'">'+esc(a.name)+'</button>'+dots(kind+"."+ix+".dots",+a.dots||0)+'<button type="button" class="x" data-del="'+kind+'" data-i="'+ix+'" aria-label="Убрать">×</button><input class="note" data-bind="'+kind+'.'+ix+'.note" value="'+esc(a.note)+'" placeholder="Подробности"></div>'; });
    return c+'<button type="button" class="btn ghost small" data-addadv="'+kind+'">+ Добавить</button></div>'; }
  h += section("adv","Преимущества и недостатки",'<div class="cols2">'+advCol("advantages","Преимущества",7)+advCol("flaws","Недостатки",2)+'</div>');

  /* weapons */
  var wBody = '<div class="tbl"><div class="row3 head"><span>Оружие и снаряжение</span><span>Урон</span><span>Заметки</span><span></span></div>';
  state.weapons.forEach(function(w,ix){ wBody += '<div class="row3"><input data-bind="weapons.'+ix+'.name" value="'+esc(w.name)+'" aria-label="Название"><input data-bind="weapons.'+ix+'.dmg" value="'+esc(w.dmg)+'" aria-label="Урон"><input data-bind="weapons.'+ix+'.notes" value="'+esc(w.notes)+'" aria-label="Заметки"><button type="button" class="x" data-del="weapons" data-i="'+ix+'" aria-label="Убрать">×</button></div>'; });
  wBody += '</div><div class="row-btns"><button type="button" class="btn ghost small" data-addgear="1">+ Из каталога</button><button type="button" class="btn ghost small" data-addrow="weapons">+ Пустая строка</button></div><p class="hint">Урон по книге: лёгкий огнестрел +2, средний +3, тяжёлый +4. Урон = перевес атаки + значение оружия.</p>';
  h += section("gear","Снаряжение",wBody);

  /* xp */
  var xt=+state.xp.total||0, xs=+state.xp.spent||0, xav=xt-xs, hist=state.xp.hist||[], lastH=hist[hist.length-1];
  var xBody = '<div class="xp-sum"><div><span class="lbl">Всего</span><b class="big">'+xt+'</b></div><div><span class="lbl">Потрачено</span><b class="big">'+xs+'</b></div><div><span class="lbl">Доступно</span><b class="big'+(xav<0?' neg':'')+'">'+xav+'</b></div></div>'+
    '<div class="row-btns"><button type="button" class="btn" data-xpbuy="1">Потратить опыт</button><button type="button" class="btn ghost" data-xpgain="1">+ Получить опыт</button>'+
    (lastH?'<button type="button" class="btn ghost" data-xpundo="1" title="Отменить последнюю запись">Отменить: '+esc(lastH.d)+' ('+(lastH.u&&lastH.u.gain?'−':'+')+lastH.c+')</button>':'')+'</div>'+
    '<label class="fld wide xp-log" for="f-xp-log"><span>Журнал опыта</span><textarea id="f-xp-log" data-bind="xp.log" rows="'+Math.min(14,Math.max(3,String(state.xp.log||"").split("\n").length+1))+'">'+esc(state.xp.log)+'</textarea></label>'+
    '<details class="xp-man"><summary>Поправить числа вручную</summary><div class="xp"><label class="fld" for="xp-t"><span>Всего опыта</span><input id="xp-t" type="number" data-bind="xp.total" data-num="1" data-rerender="1" value="'+esc(state.xp.total)+'"></label><label class="fld" for="xp-s"><span>Потрачено</span><input id="xp-s" type="number" data-bind="xp.spent" data-num="1" data-rerender="1" value="'+esc(state.xp.spent)+'"></label></div></details>'+
    '<p class="hint">Цены по корбуку: атрибут — новый уровень ×5; навык — новый уровень ×3 (первая точка 3); специализация 3; Преимущество 3 за точку; Грань 7; перк 3.</p>';
  h += section("xp","Опыт",xBody);

  /* notes */
  var tabs = {history:"История", npc:"NPC", gear:"Снаряжение", misc:"Прочее"};
  var nBody = '<div class="tabs" role="tablist">'; Object.keys(tabs).forEach(function(k){ nBody += '<button type="button" role="tab" aria-selected="'+(k===noteTab)+'" class="tab'+(k===noteTab?' on':'')+'" data-tab="'+k+'">'+tabs[k]+'</button>'; });
  nBody += '</div><textarea id="note-'+noteTab+'" class="notes" data-bind="notes.'+noteTab+'" rows="10" aria-label="Заметки">'+esc(state.notes[noteTab])+'</textarea>';
  h += section("notes","Заметки",nBody);

  app.innerHTML = h;
  document.getElementById("hdr-name").textContent = i.name || "Новый охотник";
  applyLock();
  var im=impair(), chip=document.getElementById("hdr-imp"); if (chip){ var t=[]; if(im.h.out) t.push("Выбыл"); else if(im.h.impaired) t.push("Тело −2"); if(im.w.out) t.push("Сломлен"); else if(im.w.impaired) t.push("Рассудок −2"); if(state.despair) t.push("Отчаяние"); chip.textContent=t.join(" · "); chip.hidden=!t.length; }
}

function poolSize(p){ var a = p.a ? (state.attrs[p.a]||0) : 0; var s = p.s ? ((state.skills[p.s]||{}).d||0) : 0; return a + s + (+p.b||0); }

/* ---------- xp tracker ---------- */
var buyPending = null, buyCat = "attr";
function xpAvail(){ return (+state.xp.total||0)-(+state.xp.spent||0); }
function xpLog(line){ var l = String(state.xp.log||"").replace(/\s+$/,""); state.xp.log = (l?l+"\n":"")+line; }
function xpRecord(desc,cost,undo){ state.xp.spent=(+state.xp.spent||0)+cost; state.xp.hist=state.xp.hist||[]; var line="• "+desc+" — "+cost; state.xp.hist.push({d:desc,c:cost,u:undo,l:line,t:Date.now()}); xpLog(line); }
function finishBuy(desc,undo){ if(!buyPending) return; xpRecord(desc,buyPending.cost,undo); buyPending=null; }
function xpUndo(){ var h=state.xp.hist||[], e=h.pop(); if(!e) return; var u=e.u||{};
  if (u.gain) state.xp.total=(+state.xp.total||0)-e.c; else state.xp.spent=(+state.xp.spent||0)-e.c;
  if (u.path) setPath(state,u.path,u.prev); if (u.pop) state[u.pop].pop(); if (u.popperk!==undefined && state.edges[u.popperk]) state.edges[u.popperk].perks.pop();
  var lines=String(state.xp.log||"").split("\n"), i=lines.lastIndexOf(e.l); if(i>=0){ lines.splice(i,1); state.xp.log=lines.join("\n"); } }
function gainHtml(){ return '<h2>Получить опыт</h2><div class="xp"><label class="fld" for="g-n"><span>Сколько</span><input id="g-n" type="number" min="1" value="1"></label><label class="fld wide" for="g-r"><span>За что</span><input id="g-r" placeholder="Сессия 3, конец истории…"></label></div><div class="row-btns" style="margin-top:12px"><button type="button" class="btn" data-dogain="1">Добавить</button><button type="button" class="btn ghost" data-close="1">Отмена</button></div>'; }
function buyRow(code,label,sub,cost,ok,why){ return '<li><button type="button" data-buy="'+code+'"'+(ok?'':' disabled')+'><small>'+(ok?cost+' опыта':esc(why))+'</small>'+esc(label)+'<span>'+esc(sub)+'</span></button></li>'; }
function buyHtml(){ var av=xpAvail(), cats={attr:"Атрибуты",skill:"Навыки",spec:"Специализации",adv:"Преимущества",edge:"Грани",perk:"Перки"};
  var h='<h2>Потратить опыт<small>Доступно: '+av+'</small></h2><div class="tabs">'; Object.keys(cats).forEach(function(k){ h+='<button type="button" class="tab'+(k===buyCat?' on':'')+'" data-buycat="'+k+'">'+cats[k]+'</button>'; }); h+='</div><ul class="pick-list buy-list">';
  function lim(cost,cur){ return cur>=5?"максимум":cost>av?"не хватает: "+cost:""; }
  if (buyCat==="attr") Object.keys(ATTRS).forEach(function(g){ ATTRS[g].forEach(function(a){ var c=state.attrs[a[0]]||0, cost=(c+1)*5, w=lim(cost,c); h+=buyRow("attr:"+a[0],a[1]+" "+c+" → "+(c+1),g,cost,!w,w); }); });
  if (buyCat==="skill") Object.keys(SKILLS).forEach(function(g){ SKILLS[g].forEach(function(a){ var c=(state.skills[a[0]]||{}).d||0, cost=(c+1)*3, w=lim(cost,c); h+=buyRow("skill:"+a[0],a[1]+" "+c+" → "+(c+1),g,cost,!w,w); }); });
  if (buyCat==="spec"){ var any=false; Object.keys(SKILLS).forEach(function(g){ SKILLS[g].forEach(function(a){ var s=state.skills[a[0]]||{}; if(!(s.d>0)) return; any=true; h+='<li class="spec-buy"><div><b>'+esc(a[1])+'</b><span>'+(s.s?'Уже: '+esc(s.s):'Пока без специализации')+'</span></div><input id="spec-'+a[0]+'" placeholder="Новая специализация" aria-label="Специализация: '+esc(a[1])+'"><button type="button" class="btn small" data-buy="spec:'+a[0]+'"'+(av<3?' disabled':'')+'>'+(av<3?'Не хватает':'3 опыта')+'</button></li>'; }); }); if(!any) h+='<li class="hint">Специализацию можно взять только в навыке с точками.</li>'; }
  if (buyCat==="adv"){ state.advantages.forEach(function(a,ix){ var c=+a.dots||0, w=lim(3,c); h+=buyRow("adv:"+ix,(a.name||"Без названия")+" "+c+" → "+(c+1),"Поднять на точку",3,!w,w); }); h+=buyRow("newadv:1","Новое Преимущество","Выбрать из каталога, 1 точка",3,av>=3,"не хватает: 3"); }
  if (buyCat==="edge") h+=buyRow("newedge:1","Новая Грань","Выбрать из списка",7,av>=7,"не хватает: 7");
  if (buyCat==="perk"){ if(!state.edges.length) h+='<li class="hint">Сначала нужна Грань.</li>'; state.edges.forEach(function(e,ix){ var E=EDGES[e.key]; if(!E) return; var left=E.perks.filter(function(p){return (e.perks||[]).indexOf(p.k)<0;}).length; h+=buyRow("newperk:"+ix,"Перк для «"+E.name+"»",left?"Доступно перков: "+left:"Все перки уже взяты",3,av>=3&&left>0,left?"не хватает: 3":"нет перков"); }); }
  return h+'</ul>'; }
function doBuy(code){ var p=code.split(":"), t=p[0], k=p[1], av=xpAvail(), c, cost;
  if (t==="attr"){ c=state.attrs[k]||0; cost=(c+1)*5; if(c>=5||cost>av) return false; xpRecord(ALLNAMES[k]+" "+c+" → "+(c+1),cost,{path:"attrs."+k,prev:c}); state.attrs[k]=c+1; return true; }
  if (t==="skill"){ c=(state.skills[k]||{}).d||0; cost=(c+1)*3; if(c>=5||cost>av) return false; xpRecord(ALLNAMES[k]+" "+c+" → "+(c+1),cost,{path:"skills."+k+".d",prev:c}); state.skills[k].d=c+1; return true; }
  if (t==="spec"){ var inp=document.getElementById("spec-"+k), txt=inp?inp.value.trim():""; if(!txt){ if(inp) inp.focus(); return false; } if(av<3) return false; var prev=state.skills[k].s||""; xpRecord("Специализация: "+ALLNAMES[k]+" ("+txt+")",3,{path:"skills."+k+".s",prev:prev}); state.skills[k].s=prev?prev+", "+txt:txt; return true; }
  if (t==="adv"){ var a=state.advantages[+k]; c=+a.dots||0; if(c>=5||av<3) return false; xpRecord((a.name||"Преимущество")+" "+c+" → "+(c+1),3,{path:"advantages."+k+".dots",prev:c}); a.dots=c+1; return true; }
  if (t==="newadv"){ if(av<3) return false; buyPending={cost:3}; var items=CATALOG.filter(function(x){return !x.flaw;}).map(function(x){return {val:"advantages:"+x.n,label:x.n,sub:x.c+" · "+x.g,text:x.t};}); items.push({val:"advantages:__custom",label:"Своё…",sub:"Пустая строка",text:"Название впишешь сам."}); mBody.innerHTML=pickerHtml("Новое Преимущество за 3 опыта",items,"data-pickadv"); return "pending"; }
  if (t==="newedge"){ if(av<7) return false; buyPending={cost:7}; mBody.innerHTML=pickerHtml("Новая Грань за 7 опыта",Object.keys(EDGES).filter(function(key){return !state.edges.some(function(e){return e.key===key;});}).map(function(key){var E=EDGES[key]; return {val:key,label:E.name,sub:E.en+" · "+E.cat,text:E.sys};}),"data-pickedge"); return "pending"; }
  if (t==="newperk"){ if(av<3) return false; var ed=state.edges[+k], E=EDGES[ed.key]; buyPending={cost:3}; mBody.innerHTML=pickerHtml("Перк «"+E.name+"» за 3 опыта",E.perks.filter(function(x){return (ed.perks||[]).indexOf(x.k)<0;}).map(function(x){return {val:k+":"+x.k,label:x.n,sub:x.en,text:x.t};}),"data-pickperk"); return "pending"; }
  return false; }

/* ---------- roller ---------- */
var roll = {dice:5, desp:0, diff:3, pick:[], out:""};
roll.desp = +state.cell.desperation||0;
function d10(){ return 1+Math.floor(Math.random()*10); }
function doRoll(){
  var n = Math.max(0, +document.getElementById("r-dice").value||0), dn = state.despair?0:Math.max(0, +document.getElementById("r-desp").value||0), diff = Math.max(0, +document.getElementById("r-diff").value||0);
  roll.dice=n; roll.desp=dn; roll.diff=diff;
  var reg=[], dsp=[]; for(var i=0;i<n;i++) reg.push(d10()); for(var j=0;j<dn;j++) dsp.push(d10());
  var all = reg.concat(dsp), succ = all.filter(function(x){return x>=6;}).length, tens = all.filter(function(x){return x===10;}).length;
  var crit = Math.floor(tens/2); succ += crit*2;
  var ones = dsp.filter(function(x){return x===1;}).length;
  var win = succ >= diff, margin = succ - diff; roll.ones = ones;
  var faces = reg.map(function(x){return '<span class="die'+(x>=6?' s':'')+(x===10?' t':'')+'">'+x+'</span>';}).join("") + dsp.map(function(x){return '<span class="die d'+(x>=6?' s':'')+(x===1?' one':'')+(x===10?' t':'')+'">'+x+'</span>';}).join("");
  var o = (roll.pen?'<p class="imp-note">Учтён штраф Ослабления −2 ('+esc(roll.pen.why)+').</p>':'')+'<div class="faces">'+faces+'</div><div class="res '+(win?'win':'fail')+'"><b>'+succ+'</b> усп. · '+(diff?(win?'Победа, перевес '+margin:'Провал, недобор '+(-margin)):'без сложности')+(crit?' · крит ×'+crit:'')+(succ===0?' · полный провал':'')+'</div>';
  if (ones && win) o += '<div class="ones"><p>На костях Отчаяния выпало «1» ×'+ones+'. Выбери:</p><button type="button" class="btn small" data-overreach="1">Перегиб: победа, Опасность +'+ones+'</button><button type="button" class="btn small warn" data-fall="1">Отчаяние: провалить тест</button></div>';
  roll.out = o;
  if (ones && !win && !state.despair){ roll.out += '<p class="hint warnline">«1» на кости Отчаяния при провале: охотник в Отчаянии до Искупления.</p>'; state.despair = true; changed(true); return; }
  document.getElementById("roll-out").innerHTML = roll.out;
}

/* long press on a trait name opens its description */
var lpTimer=null, lpFired=false;
app.addEventListener("pointerdown", function(e){ var b=e.target.closest(".tn[data-pick]"); if(!b) return; lpFired=false; clearTimeout(lpTimer); lpTimer=setTimeout(function(){ lpFired=true; openModal(infoHtml("trait:"+b.getAttribute("data-pick"))); }, 550); });
["pointerup","pointerleave","pointercancel","scroll"].forEach(function(ev){ app.addEventListener(ev, function(){ clearTimeout(lpTimer); }, true); });
app.addEventListener("click", function(e){ if (lpFired && e.target.closest(".tn[data-pick]")){ e.stopImmediatePropagation(); e.preventDefault(); lpFired=false; } }, true);
app.addEventListener("contextmenu", function(e){ if (e.target.closest(".tn[data-pick]")) e.preventDefault(); });

/* ---------- modal ---------- */
var modal = document.getElementById("modal"), mBody = document.getElementById("m-body");
function openModal(html){ mBody.innerHTML = html; modal.hidden = false; var f = mBody.querySelector("input,button"); if (f) f.focus(); }
function closeModal(){ modal.hidden = true; mBody.innerHTML = ""; buyPending = null; }
function infoHtml(key){
  var p = key.split(":");
  if (key==="creed"){ var c=CREEDS[state.info.creed]; if(!c) return listInfo("Кредо",CREEDS,function(k,v){return '<b>Кости Отчаяния:</b> '+esc(v.desp);});
    return '<h2>'+esc(state.info.creed)+' <small>'+c.en+'</small></h2><p>'+esc(c.text)+'</p><p><b>Кости Отчаяния:</b> '+esc(c.desp)+'</p>'+(c.edges?'<p><b>Предлагаемые Грани:</b> '+esc(c.edges)+'</p><p><b>Частые Драйвы:</b> '+esc(c.drives)+'</p>':'')+'<p class="hint">Предлагаемые Грани и Драйвы — ориентир, не ограничение.</p>'; }
  if (key==="drive"){ var d=DRIVES[state.info.drive]; if(!d) return listInfo("Драйвы",DRIVES,function(k,v){return '<b>Искупление:</b> '+esc(v.red);});
    return '<h2>'+esc(state.info.drive)+' <small>'+d.en+(d.src?' · '+d.src:'')+'</small></h2><p>'+esc(d.text)+'</p><p><b>Искупление:</b> '+esc(d.red)+'</p>'; }
  if (key==="lineage"){ var L=LINEAGES[state.info.lineage]; if(!L) return listInfo("Наследия (Legacy of Defiance)",LINEAGES,function(k,v){return esc(v.text)+'<br><small>Добыча: '+esc(v.prey)+'</small>';});
    return '<h2>'+esc(state.info.lineage)+' <small>'+L.en+' · Legacy of Defiance</small></h2><p>'+esc(L.text)+'</p><p><b>Главная добыча:</b> '+esc(L.prey)+'</p><p><b>Лорщит:</b> '+esc(L.lore)+'</p><p class="hint">Уровни Лорщита покупаются из Преимуществ и только из одного Лорщита. Точные эффекты — в книге.</p>'; }
  if (p[0]==="edge"){ var E=EDGES[p[1]]; return '<h2>'+E.name+' <small>'+E.en+' · '+E.cat+(E.src?' · '+E.src:' · корбук')+(ALT[p[1]]?' · на wta5: «'+ALT[p[1]]+'»':'')+'</small></h2>'+(E.req?'<p class="warnline">'+esc(E.req)+'</p>':'')+'<p><b>Пул Грани:</b> '+esc(E.pool)+'</p><p><b>Система:</b> '+esc(E.sys)+'</p><h3>Перки</h3>'+E.perks.map(function(x){return '<p><b>'+x.n+'</b> <small>'+x.en+'</small><br>'+esc(x.t)+'</p>';}).join(""); }
  if (p[0]==="trait"){ var T=TRAITS[p[1]], isA=state.attrs[p[1]]!==undefined, cur=isA?state.attrs[p[1]]:(state.skills[p[1]]||{}).d||0; return '<h2>'+esc(ALLNAMES[p[1]])+' <small>'+(isA?'Атрибут':'Навык')+' · сейчас '+cur+'</small></h2><p>'+esc(T.d)+'</p><ol class="levels">'+T.l.map(function(x,ix){ return '<li class="'+(ix+1===cur?'cur':'')+'"><span class="lv">'+'•'.repeat(ix+1)+'</span>'+esc(x)+'</li>'; }).join('')+'</ol>'+(T.s?'<p><b>Специализации:</b> '+esc(T.s)+'</p>':'')+'<p class="hint">0 в навыке — нет подготовки; 2 — уровень, на котором большинство людей зарабатывает на жизнь; 3 — ветеран; 4 — эксперт; 5 — лучший в городе.</p>'; }
  if (p[0]==="perk"){ var E2=EDGES[p[1]], P=E2.perks.filter(function(x){return x.k===p[2];})[0]; return '<h2>'+P.n+' <small>'+P.en+' · перк Грани «'+E2.name+'»</small></h2><p>'+esc(P.t)+'</p><p class="hint">Пул Грани: '+esc(E2.pool)+'</p>'; }
  if (p[0]==="adv"){ var name=key.slice(4), A=CATALOG.filter(function(x){return x.n===name;})[0]; if(!A) return '<h2>'+esc(name)+'</h2><p>Своя черта: описания в книге нет, договорись с Рассказчиком.</p>'; return '<h2>'+esc(A.n)+' <small>'+esc(A.c)+' · '+esc(A.g)+(A.s?' · '+esc(A.s):'')+'</small></h2><p>'+esc(A.t)+'</p>'; }
  return "";
}
function listInfo(title,obj,fn){ return '<h2>'+title+'</h2>'+Object.keys(obj).map(function(k){return '<p><b>'+esc(k)+'</b><br>'+fn(k,obj[k])+'</p>';}).join(""); }
function pickerHtml(title,items,attr){ return '<h2>'+title+'</h2><input class="search" id="m-search" placeholder="Поиск по названию…" aria-label="Поиск"><ul class="pick-list">'+items.map(function(it){ return '<li data-name="'+esc(it.label.toLowerCase())+'"><button type="button" '+attr+'="'+esc(it.val)+'"><b>'+esc(it.label)+'</b><small>'+esc(it.sub||'')+'</small><span>'+esc(it.text||'')+'</span></button></li>'; }).join("")+'</ul>'; }

/* ---------- saving (on this device) ---------- */
var statusEl = document.getElementById("save-status"), saveTimer = null;
function setStatus(t,cls){ statusEl.textContent = t; statusEl.className = "status "+(cls||""); }
function persist(){
  state.saved = Date.now(); chars[curId] = state;
  try { localStorage.setItem(STORE, JSON.stringify(chars)); localStorage.setItem(CUR, curId); setStatus("Сохранено на устройстве","ok"); }
  catch(e){ setStatus("Память устройства заполнена — сделай экспорт","err"); }
}
function changed(rerender){ if (rerender) render(); setStatus("Сохраняю…","pending"); clearTimeout(saveTimer); saveTimer = setTimeout(persist, 400); }
/* ---------- events ---------- */
app.addEventListener("input", function(e){
  var t = e.target, p = t.getAttribute("data-bind");
  if (!p || state.locked) return;
  var v = t.getAttribute("data-num") ? (+t.value||0) : t.value;
  setPath(state, p, v);
  if (p==="info.name") document.getElementById("hdr-name").textContent = v || "Новый охотник";
  changed(t.hasAttribute("data-rerender"));
});
app.addEventListener("change", function(e){
  var t = e.target;
  if (t.id==="portrait-in" && t.files && t.files[0]) loadPortrait(t.files[0]);
});
app.addEventListener("click", function(e){
  var b = e.target.closest("button"); if (!b) return;
  var d = b.dataset;
  if (state.locked && !Object.keys(d).some(function(k){ return LOCK_OK[k]; })) return;
  if (d.toggle){ collapsed[d.toggle] = !collapsed[d.toggle]; try{localStorage.setItem("h5-collapsed",JSON.stringify(collapsed));}catch(x){} var s=document.getElementById("sec-"+d.toggle); s.classList.toggle("closed"); b.setAttribute("aria-expanded", String(!collapsed[d.toggle])); return; }
  if (d.dot){ var cur = +getPath(state,d.dot)||0, v = +d.v; setPath(state, d.dot, cur===v ? v-1 : v); changed(true); return; }
  if (d.set){ setPath(state, d.set, +d.v); if (d.set==="cell.desperation"){ roll.desp=+d.v; } changed(true); return; }
  if (d.despair){ state.despair = !state.despair; changed(true); return; }
  if (d.track){ var arr = state[d.track].states, k=+d.i, cv=arr[k]||""; arr[k] = cv===""?"/":cv==="/"?"x":""; changed(true); return; }
  if (d.bonus){ state[d.bonus].bonus = (+state[d.bonus].bonus||0) + (+d.d); changed(true); return; }
  if (d.info){ openModal(infoHtml(d.info)); return; }
  if (d.del){ state[d.del].splice(+d.i,1); changed(true); return; }
  if (d.delperk!==undefined){ state.edges[+d.delperk].perks.splice(+d.i,1); changed(true); return; }
  if (d.addrow){ state[d.addrow].push(d.addrow==="weapons"?{name:"",dmg:"",notes:""}:{name:"",conviction:"",note:""}); changed(true); return; }
  if (d.addedge){ openModal(pickerHtml("Выбор Грани", Object.keys(EDGES).map(function(k){var E=EDGES[k]; return {val:k,label:E.name,sub:E.en+" · "+E.cat,text:E.sys};}), "data-pickedge")); return; }
  if (d.addperk!==undefined){ var ed=state.edges[+d.addperk], E=EDGES[ed.key]; openModal(pickerHtml("Перк Грани «"+E.name+"»", E.perks.map(function(x){return {val:d.addperk+":"+x.k,label:x.n,sub:x.en,text:x.t};}), "data-pickperk")); return; }
  if (d.addadv){ var fl = d.addadv==="flaws"; var items = CATALOG.filter(function(x){return !!x.flaw===fl;}).map(function(x){return {val:d.addadv+":"+x.n,label:x.n,sub:x.c+" · "+x.g,text:x.t};}); items.push({val:d.addadv+":__custom",label:"Своё…",sub:"Пустая строка",text:"Название впишешь сам."}); openModal(pickerHtml(fl?"Выбор недостатка":"Выбор преимущества", items, "data-pickadv")); return; }
  if (d.addgear){ openModal(pickerHtml("Каталог снаряжения", GEAR.map(function(g,ix){ return {val:ix,label:g[1],sub:g[0]+" · "+g[2],text:g[3]}; }), "data-pickgear")); return; }
  if (d.pick){ var isAttr = !!ATTRS && Object.keys(state.attrs).indexOf(d.pick)>=0; roll.pick = roll.pick.filter(function(k){ return (Object.keys(state.attrs).indexOf(k)>=0) !== isAttr; }); roll.pick.push(d.pick); roll.pick.sort(function(a,b){ return (Object.keys(state.attrs).indexOf(a)>=0?0:1)-(Object.keys(state.attrs).indexOf(b)>=0?0:1); }); roll.dice = roll.pick.reduce(function(a,k){ return a + (state.attrs[k]!==undefined?state.attrs[k]:(state.skills[k]||{}).d||0); },0); roll.pen = poolPenalty(roll.pick); if (roll.pen) roll.dice = Math.max(0, roll.dice-2); roll.out=""; render(); document.getElementById("sec-rolls").scrollIntoView({behavior:"smooth",block:"nearest"}); return; }
  if (d.usepool!==undefined){ var pl=state.pools[+d.usepool]; roll.pick=[pl.a,pl.s].filter(Boolean); roll.dice=poolSize(pl); roll.pen = poolPenalty(roll.pick); if (roll.pen) roll.dice = Math.max(0, roll.dice-2); roll.diff = pl.diff||roll.diff; roll.out=""; render(); return; }
  if (d.savepool){ if (roll.pick.length<1) { roll.out='<p class="hint">Сначала выбери атрибут и навык.</p>'; render(); return; } var a=roll.pick.filter(function(k){return state.attrs[k]!==undefined;})[0]||"", s=roll.pick.filter(function(k){return state.attrs[k]===undefined;})[0]||""; state.pools.push({name:(ALLNAMES[s]||ALLNAMES[a]||"Пул"),a:a,s:s,b:0,note:""}); changed(true); return; }
  if (d.roll){ doRoll(); return; }
  if (d.overreach){ var on=roll.ones||1; state.cell.danger = Math.min(5,(+state.cell.danger||0)+on); roll.out = roll.out.replace(/<div class="ones">[\s\S]*$/,'<p class="hint">Перегиб: Опасность ячейки +'+on+'.</p>'); changed(true); return; }
  if (d.fall){ state.despair = true; roll.out = roll.out.replace(/<div class="ones">[\s\S]*$/,'<p class="hint">Тест провален, охотник в Отчаянии до Искупления.</p>'); changed(true); return; }
  if (d.tab){ noteTab = d.tab; render(); return; }
  if (d.xpbuy){ openModal(buyHtml()); return; }
  if (d.xpgain){ openModal(gainHtml()); var gn=document.getElementById("g-n"); if(gn){ gn.focus(); gn.select(); } return; }
  if (d.xpundo){ xpUndo(); changed(true); return; }
});
modal.addEventListener("click", function(e){
  if (e.target===modal || e.target.closest("[data-close]")) { closeModal(); return; }
  var b = e.target.closest("button"); if (!b) return; var d = b.dataset;
  if (d.pickgear!==undefined){ var g=GEAR[+d.pickgear]; state.weapons.push({name:g[1],dmg:g[2],notes:g[3]}); closeModal(); changed(true); return; }
  if (d.pickedge){ state.edges.push({key:d.pickedge, perks:[], note:""}); finishBuy("Грань: "+EDGES[d.pickedge].name,{pop:"edges"}); closeModal(); changed(true); return; }
  if (d.pickperk){ var pp=d.pickperk.split(":"); var ed=state.edges[+pp[0]]; ed.perks = ed.perks||[]; ed.perks.push(pp[1]); var PK=EDGES[ed.key].perks.filter(function(x){return x.k===pp[1];})[0]; finishBuy("Перк: "+(PK?PK.n:pp[1]),{popperk:+pp[0]}); closeModal(); changed(true); return; }
  if (d.pickadv){ var ix=d.pickadv.indexOf(":"), kind=d.pickadv.slice(0,ix), name=d.pickadv.slice(ix+1); state[kind].push({name: name==="__custom"?"Своё":name, dots:1, note:""}); if(kind==="advantages") finishBuy("Преимущество: "+(name==="__custom"?"Своё":name)+" •",{pop:kind}); closeModal(); changed(true); return; }
  if (d.buycat){ buyCat=d.buycat; mBody.innerHTML=buyHtml(); return; }
  if (d.buy){ var r=doBuy(d.buy); if (r===true){ changed(true); mBody.innerHTML=buyHtml(); setStatus("Куплено","ok"); } return; }
  if (d.dogain){ var n=Math.round(+document.getElementById("g-n").value||0), why=document.getElementById("g-r").value.trim(); if(!n) return; state.xp.total=(+state.xp.total||0)+n; state.xp.hist=state.xp.hist||[]; var line="+ "+n+" опыта"+(why?" — "+why:""); state.xp.hist.push({d:"получено "+n,c:n,u:{gain:1},l:line,t:Date.now()}); xpLog(line); closeModal(); changed(true); return; }
  if (d.confirmNew){ return; }
});
modal.addEventListener("click", function(e){ var b=e.target.closest("[data-pal]"); if(!b) return; palette = applyPalette(b.getAttribute("data-pal")); try{ localStorage.setItem("h5-palette", palette); }catch(x){} mBody.innerHTML = paletteHtml(); });
document.getElementById("btn-theme").addEventListener("click", function(){ openModal(paletteHtml()); });
modal.addEventListener("input", function(e){ if (e.target.id!=="m-search") return; var q=e.target.value.trim().toLowerCase(); mBody.querySelectorAll(".pick-list li").forEach(function(li){ li.hidden = q && li.getAttribute("data-name").indexOf(q)<0; }); });
document.addEventListener("keydown", function(e){ if (e.key==="Escape" && !modal.hidden) closeModal();
  if (e.key==="Enter" && !modal.hidden && e.target.tagName==="INPUT"){ var bt = e.target.id && e.target.id.indexOf("spec-")===0 ? e.target.parentNode.querySelector("[data-buy]") : (e.target.id==="g-n"||e.target.id==="g-r") ? mBody.querySelector("[data-dogain]") : null; if (bt){ e.preventDefault(); bt.click(); } } });

function loadPortrait(file){
  var r = new FileReader();
  r.onload = function(){ var img = new Image(); img.onload = function(){ var W=420, sc=Math.min(1,W/img.width), c=document.createElement("canvas"); c.width=Math.round(img.width*sc); c.height=Math.round(img.height*sc); c.getContext("2d").drawImage(img,0,0,c.width,c.height); state.portrait = c.toDataURL("image/jpeg",0.82); changed(true); }; img.src = r.result; };
  r.readAsDataURL(file);
}

document.getElementById("btn-lock").addEventListener("click", function(){ state.locked = !state.locked; changed(true); });
var sessionOn = false; try { sessionOn = localStorage.getItem("h5-session")==="1"; } catch(e){}
function applySession(){ document.body.classList.toggle("session", sessionOn); var b=document.getElementById("btn-session"); b.setAttribute("aria-pressed", String(sessionOn)); b.textContent = sessionOn ? "Весь лист" : "Режим сессии"; b.title = sessionOn ? "Показать весь лист" : "Только то, что нужно за столом: Здоровье, Сила воли, Ячейка, броски, Грани, снаряжение"; }
applySession();
document.getElementById("btn-session").addEventListener("click", function(){ sessionOn = !sessionOn; try{ localStorage.setItem("h5-session", sessionOn?"1":"0"); }catch(e){} applySession(); window.scrollTo(0,0); });

/* ---------- rules reference ---------- */
var RULES = [
 ["Как бросать", [
  "<b>Пул</b> = Атрибут + Навык (например, Ловкость + Атлетика). В листе: тапни атрибут, затем навык — пул соберётся в «Бросках». Можно выбрать готовый быстрый пул.",
  "Бросаешь столько d10, сколько в пуле. <b>6–9 — успех</b>, <b>10 — успех</b> и шанс на крит, <b>1–5 — пусто</b>.",
  "<b>Победа</b>, если успехов не меньше Сложности. <b>Перевес</b> — успехи сверх Сложности: от него считаются урон и эффекты Граней.",
  "<b>Крит</b>: каждая пара десяток даёт +2 успеха сверх самих десяток. Две «10» = 4 успеха, три = 5, четыре = 8.",
  "<b>Полный провал</b> — ноль успехов: мастер решает, насколько всё плохо и можно ли повторить.",
  "<b>Победа ценой</b>: если успехи есть, но не хватило, мастер может предложить успех с осложнением (урон, потеря вещи, внимание врага). Можно отказаться.",
  "<b>Командная работа</b>: бросает самый большой пул, +1 куб за каждого помощника с хотя бы одной точкой в нужном навыке."
 ]],
 ["Сложность", [
  "1 — рутина · 2 — просто · 3 — умеренно · 4 — вызов · 5 — тяжело · 6 — очень сложно · 7+ — почти невозможно.",
  "Против противника мастер может взять половину его пула (округляя вниз) как Сложность или устроить состязание: оба бросают, у кого больше успехов, тот побеждает.",
  "Мастер может не бросать за противника, а «взять половину» его пула как число успехов."
 ]],
 ["Бонусы и помехи", [
  "Мастер меняет либо <b>пул</b> (обстоятельства персонажа: специализация, наркотики, устрашающий вид), либо <b>Сложность</b> (внешнее: погода, плохое или отличное снаряжение, стрельба под огнём).",
  "±2 куба по статистике равны ±1 к Сложности. Обычно мастер не даёт больше ±3 кубов или ±2 к Сложности.",
  "<b>Специализация</b>: +1 куб, если подходит к действию.",
  "<b>Ослабление</b>: заполнен трекер Здоровья — −2 к физическим пулам; заполнена Сила воли — −2 к социальным и ментальным. Лист считает это сам.",
  "<b>Несколько противников</b>: защищаясь, теряешь 1 куб за каждого следующего нападающего. Атаковать нескольких — дели пул.",
  "<b>Уклонение</b>: Ловкость + Атлетика вместо боевого навыка; при победе урона не наносишь."
 ]],
 ["Сила воли", [
  "Потрать 1 Силу воли (отметь «/»), чтобы <b>перебросить до трёх обычных кубов</b> в броске Атрибута или Навыка, в том числе для Граней.",
  "Кубы Отчаяния перебрасывать нельзя. Нельзя и в бросках самой Силы воли.",
  "В начале сессии снимаешь поверхностный урон Силы воли, не больше чем max(Самообладание, Решительность). Выполненное Желание — ещё 1.",
  "В конце сессии, если действовал по Амбиции, лечишь 1 аггравированный урон Силы воли."
 ]],
 ["Отчаяние, Перегиб, Опасность", [
  "<b>Кубы Отчаяния</b>: если действие попадает в поле твоего <b>Кредо</b>, добавь кубы по уровню Отчаяния ячейки. Считаются как обычные (успехи и криты).",
  "Если на кубе Отчаяния выпала «1» и тест <b>выигран</b> — выбор: <b>Перегиб</b> (победа остаётся, Опасность +1 за каждую «1») или провалить тест и впасть в <b>Отчаяние</b>.",
  "«1» на кубе Отчаяния при <b>проигранном</b> тесте — Отчаяние без выбора.",
  "<b>В Отчаянии</b> нельзя брать кубы Отчаяния, пока не выполнишь условие <b>Искупления</b> своего Драйва. Помочь могут и другие из ячейки.",
  "<b>Отчаяние ячейки</b> (1–5) растёт от неудач: ранения, побег добычи. Падает, когда дела идут хорошо.",
  "<b>Опасность</b> — насколько добыча знает о ячейке и готовится. Растёт от Перегибов и сюжета, почти не снижается."
 ]],
 ["Урон и лечение", [
  "Урон = перевес атаки + бонус оружия (лёгкий огнестрел +2, средний +3, тяжёлый +4).",
  "<b>Поверхностный</b> урон делится пополам (вверх) перед отметкой «/». <b>Аггравированный</b> — «✕», не делится. Траты Силы воли пополам не делятся.",
  "Трекер заполнен — <b>Ослабление</b> (−2). Каждый новый урон превращает одну «/» в «✕». Весь трекер в «✕» — выбыл (Здоровье: кома или смерть; Сила воли в социальном конфликте: полный слом).",
  "<b>Лечение</b>: в начале сессии снимаешь поверхностный урон Здоровья до значения Выносливости. Аггравированный: Интеллект + Медицина, Сложность = число «✕» (себе +1), переводит в поверхностный не больше половины Медицины (вверх) за ночь."
 ]],
 ["Охотник: что важно", [
  "<b>Кредо</b> — как ты охотишься; задаёт, когда можно брать кубы Отчаяния.",
  "<b>Драйв</b> — почему охотишься; задаёт Искупление из Отчаяния.",
  "<b>Грани</b> и перки — твои особые средства против сверхъестественного; пулы указаны на карточках.",
  "<b>Амбиция</b> — долгая цель; <b>Желание</b> — цель на сессию, выполнение даёт 1 Силу воли.",
  "<b>Привязанности</b> и Убеждения держат охотника человеком.",
  "Исследуй добычу до схватки: многие твари не боятся обычного урона. Ячейка сильнее одиночки.",
  "<b>Золотое правило</b>: история принадлежит столу, мастер может менять правила."
 ]]
];
function rulesHtml(){ return '<h2>Подсказки по правилам<small>Hunter: The Reckoning 5, корбук</small></h2><div class="rules-list">'+RULES.map(function(s,i){ return '<details'+(i===0?' open':'')+'><summary>'+s[0]+'</summary><ul>'+s[1].map(function(t){return '<li>'+t+'</li>';}).join('')+'</ul></details>'; }).join('')+'</div>'; }
function qrHtml(){ return '<h2>Наш канал<small>@couchheroes в Telegram</small></h2><div class="qr-big"><img src="'+QR_SRC+'" alt="QR-код канала @couchheroes"></div><div class="row-btns"><a class="btn" href="https://t.me/couchheroes" target="_blank" rel="noopener">Открыть в Telegram</a></div>'; }
document.getElementById("btn-rules").addEventListener("click", function(){ openModal(rulesHtml()); });
document.getElementById("btn-qr").addEventListener("click", function(){ openModal(qrHtml()); });
/* header actions */
function switchTo(id){ persist(); curId = id; state = chars[id]; normalize(state); roll.pick=[]; roll.out=""; render(); persist(); }
function charsHtml(){
  var ids = Object.keys(chars).sort(function(a,b){ return (chars[b].saved||0)-(chars[a].saved||0); });
  return '<h2>Персонажи на этом устройстве</h2><ul class="char-list">' + ids.map(function(id){ var c = chars[id], i = c.info||{};
    return '<li class="'+(id===curId?'cur':'')+'"><div class="cl-main">'+(c.portrait?'<img src="'+esc(c.portrait)+'" alt="">':'<span class="cl-ph"></span>')+'<div><b>'+esc(i.name||'Без имени')+'</b><small>'+esc([i.creed,i.drive].filter(Boolean).join(' · ')||'—')+'</small><small>'+(c.saved?new Date(c.saved).toLocaleString('ru-RU'):'')+'</small></div></div>'+
      '<div class="row-btns">'+(id===curId?'<span class="tag">Открыт</span>':'<button type="button" class="btn small" data-open="'+id+'">Открыть</button>')+
      '<button type="button" class="btn ghost small" data-copy="'+id+'">Копия</button><button type="button" class="btn ghost small" data-askdel="'+id+'">Удалить</button></div></li>'; }).join('') +
    '</ul><div class="row-btns"><button type="button" class="btn" data-newchar="1">+ Новый персонаж</button></div><div class="backup-box"><h3>Резервная копия</h3><p class="hint">Персонажи хранятся только в памяти этого устройства и пропадут, если очистить данные браузера. Копия — один файл со всеми персонажами; верни её через «Импорт».</p><p class="hint">'+backupAgo()+'</p><button type="button" class="btn ghost" data-backup="1">Скачать копию всех персонажей</button></div>';
}
document.getElementById("btn-chars").addEventListener("click", function(){ openModal(charsHtml()); });
modal.addEventListener("click", function(e){
  var b = e.target.closest("button"); if (!b) return; var d = b.dataset;
  if (d.open){ switchTo(d.open); closeModal(); return; }
  if (d.copy){ var c = JSON.parse(JSON.stringify(chars[d.copy])); c.id = uid(); c.info.name = (c.info.name||"Без имени")+" (копия)"; chars[c.id] = c; persist(); openModal(charsHtml()); return; }
  if (d.newchar){ var n = blank(); normalize(n); n.id = uid(); n.info.player = state.info.player||""; chars[n.id] = n; switchTo(n.id); closeModal(); return; }
  if (d.askdel){ var nm = (chars[d.askdel].info||{}).name||"Без имени"; openModal('<h2>Удалить «'+esc(nm)+'»?</h2><p>Персонаж исчезнет с этого устройства. Вернуть его можно только из экспорта.</p><div class="row-btns"><button type="button" class="btn warn" data-dodel="'+d.askdel+'">Удалить</button><button type="button" class="btn ghost" data-backchars="1">Отмена</button></div>'); return; }
  if (d.backchars){ openModal(charsHtml()); return; }
  if (d.dodel){ delete chars[d.dodel]; if (d.dodel===curId){ var rest = Object.keys(chars); if (!rest.length){ var n2 = blank(); normalize(n2); n2.id = uid(); chars[n2.id] = n2; rest=[n2.id]; } curId = rest[0]; state = chars[curId]; normalize(state); render(); } persist(); openModal(charsHtml()); return; }
});
var LASTBK = "h5-last-backup", SNOOZE = "h5-backup-snooze";
function lsGet(k){ try { return +localStorage.getItem(k)||0; } catch(e){ return 0; } }
function lsSet(k,v){ try { localStorage.setItem(k,String(v)); } catch(e){} }
function backupAgo(){ var t=lsGet(LASTBK); if(!t) return "Копия ещё ни разу не делалась."; var d=Math.floor((Date.now()-t)/864e5); return "Последняя копия: "+(d<1?"сегодня":d===1?"вчера":d+" дн. назад")+"."; }
function saveFile(name, data){
  try {
    var file = new File([data], name, {type:"application/json"});
    if (navigator.canShare && navigator.canShare({files:[file]})) { navigator.share({files:[file], title:name}).catch(function(){}); return; }
  } catch(x){}
  var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([data],{type:"application/json"})); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
function doBackup(){ persist(); var dt=new Date(), p=function(n){return (n<10?"0":"")+n;}; saveFile("h5-backup-"+dt.getFullYear()+"-"+p(dt.getMonth()+1)+"-"+p(dt.getDate())+".json", JSON.stringify({type:"h5-backup", v:1, made:Date.now(), chars:chars}, null, 1)); lsSet(LASTBK, Date.now()); var bn=document.getElementById("backup-banner"); if(bn) bn.remove(); setStatus("Копия сохранена","ok"); }
function backupDue(){ var last=lsGet(LASTBK), newest=0; Object.keys(chars).forEach(function(id){ newest=Math.max(newest, chars[id].saved||0); }); var anyReal=Object.keys(chars).some(function(id){ return (chars[id].info||{}).name; }); if(!anyReal || newest<=last) return false; if (Date.now()-lsGet(SNOOZE) < 3*864e5) return false; return !last || Date.now()-last > 7*864e5; }
function showBackupBanner(){ if (!backupDue() || document.getElementById("backup-banner")) return; var d=document.createElement("div"); d.id="backup-banner"; d.className="backup-banner"; d.innerHTML='<span>'+backupAgo()+' Сохрани файл со всеми персонажами — на случай очистки браузера или смены телефона.</span><span class="row-btns"><button type="button" class="btn small" data-bk="go">Сделать копию</button><button type="button" class="btn ghost small" data-bk="later">Позже</button></span>'; app.parentNode.insertBefore(d, app);
  d.addEventListener("click", function(e){ var t=e.target.closest("[data-bk]"); if(!t) return; if(t.getAttribute("data-bk")==="go") doBackup(); else { lsSet(SNOOZE, Date.now()); d.remove(); } }); }
modal.addEventListener("click", function(e){ var t=e.target.closest("[data-backup]"); if(!t) return; doBackup(); openModal(charsHtml()); });
document.getElementById("btn-export").addEventListener("click", function(){
  var name = (state.info.name||"hunter").replace(/[^\wА-Яа-яЁё-]+/g,"_") + ".h5.json";
  var data = JSON.stringify(state, null, 2);
  saveFile(name, data); return;
  try {
    var file = new File([data], name, {type:"application/json"});
    if (navigator.canShare && navigator.canShare({files:[file]})) { navigator.share({files:[file], title:name}).catch(function(){}); return; }
  } catch(x){}
  var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([data],{type:"application/json"})); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
});
document.getElementById("imp-in").addEventListener("change", function(e){
  var f = e.target.files && e.target.files[0]; if (!f) return;
  var r = new FileReader(); r.onload = function(){ try { var s = JSON.parse(r.result);
      if (s && s.type==="h5-backup" && s.chars){ var n=0, first=null; Object.keys(s.chars).forEach(function(id){ var c=s.chars[id]; if(!c||!c.info) return; normalize(c); var cur=chars[id]; if (cur && (cur.saved||0) > (c.saved||0)) { c.id=uid(); c.info.name=(c.info.name||"Без имени")+" (из копии)"; } else c.id=id; chars[c.id]=c; n++; if(!first) first=c.id; }); if (first) switchTo(first); else persist(); setStatus("Из копии восстановлено: "+n,"ok"); openModal(charsHtml()); e.target.value=""; return; }
      normalize(s); s.id = uid(); chars[s.id] = s; switchTo(s.id); setStatus("Импортирован как новый персонаж","ok"); } catch(x){ setStatus("Это не файл листа","err"); } e.target.value=""; }; r.readAsText(f);
});
var deferredInstall = null, instBtn = document.getElementById("btn-install");
var standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone;
window.addEventListener("beforeinstallprompt", function(e){ e.preventDefault(); deferredInstall = e; instBtn.hidden = false; });
if (!standalone && /iphone|ipad|ipod/i.test(navigator.userAgent)) instBtn.hidden = false;
instBtn.addEventListener("click", function(){
  if (deferredInstall){ deferredInstall.prompt(); deferredInstall.userChoice.then(function(){ deferredInstall = null; instBtn.hidden = true; }); return; }
  openModal('<h2>Установка на iPhone / iPad</h2><p>1. Открой эту страницу в Safari.</p><p>2. Нажми «Поделиться» (квадрат со стрелкой).</p><p>3. Выбери «На экран „Домой“».</p><p class="hint">После установки досье открывается как приложение и работает без интернета.</p>');
});
window.addEventListener("appinstalled", function(){ instBtn.hidden = true; });

/* ---------- boot ---------- */
render(); persist();
if (firstRun) openModal(charsHtml()); else setTimeout(showBackupBanner, 1500);
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function(){});
if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(function(){});
})();
