let tmButton = document.getElementById("tmButton");
let ruButton = document.getElementById("ruButton");
let engButton = document.getElementById("engButton");
let paragraph = document.getElementById("paragraph");
let footer = document.getElementById("footer");
const audioPlayer = document.getElementById('audio-player');
const audioSrc = document.getElementById('audio-src');
const progressBar = document.querySelector('.progress-bar');
const timeDisplay = document.querySelector('.time');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
var tmSelected = true;
var ruSelected = false;
var engSelected = false;
tmButton.addEventListener("click", () => {
    tmSelected = true;
    ruSelected = false;
    engSelected = false;
    buttonColor();
    audioSrc.src = 'tkm.aac';
	audioPlayer.load();
    playSong()
    audioPlayer.addEventListener('timeupdate', () => {
        const { currentTime, duration } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        const currentTimeFormatted = formatTime(currentTime);
        const durationFormatted = formatTime(duration);
        timeDisplay.textContent = `${currentTimeFormatted} / ${durationFormatted}`;
    });

    paragraph.innerText = `${'\xa0'.repeat(5)}Bu enjamyň ady mikrobiologiki ekspress – analizator Baktrak - 4300. Bu enjam mikroorganizmleriň 
    köp görnüşleriniň ösüşini awtomatiki derejesinde hasaba alýar.
    Kesgitlenilýän mikroorganizmler:
    1. Aerob mezofil mikroorganizmler
    2. Psihrofil mikroorganizmler
    3. Termofil mikroorganizmler
    4. Gramnegatiw bakteriýalar
    5. Enterobakteriýalar
    6. Laktobasilallar
    7. Koliformlar
    8. E.coli
    9. Salmonellalar
    10. Listeriýalar
    11. Staphylococcus aureus
    12. Klostridiýalar
    13. Spora emele getiriji aerob
    bakteriýalar
    14. Bacillus cereus
    15. Maýa we heň kömelekleri
    
    ${'\xa0'.repeat(5)}Baktragyň işleýşi impedansy ölçemek usulynda esaslanan we soňky ýyllarda bu usul özüniň köp taraplylygy ähtibarlygy bilen tiz wagtyň içinde hünärmenler tarapyndan talap
    edilýän enjam bolup durýar. 
    ${'\xa0'.repeat(5)}Baktrak enjamyny birnäçe pudaklarda: iýmit, kosmetiki, farmasewtiki senagatlarynda, Döwlet sanitar epidgözegçilik ulgamynyň merkezlerinde we barlaghanalarda ulanmak mümkindir.
    ${'\xa0'.repeat(5)}Bu analizatory iýmit önümleriň, ýagny süýdiň we süýt önümleriň, içilýän suwuň sertifikasiýasynda, medisinada ulanylýan materiallaryň we parenteral goýberilýän erginleriň sterilliginiň gözegçiliginde ulanyp bolýar. Bu enjamy şeýle hem dermanlyk ösümliklerden
    taýýarlanan gaýnatmalaryň, külkeleriň, gerdejikleriň mikrob taýdan hapalanmaklyk
    derejesine baha bermek üçin hem ulanyp bolýar. 
    ${'\xa0'.repeat(5)}Mikroorganizmleriň ösüşini umumy kabul edilen usullar boýunça hem hasaba alyp bolýar, emma bu usullar 3-4 gün, kämahallar ondanam köp dowam edýär. Şu nukdaý nazardan, Baktrak enjamyň işleýşinde birnäçe artykmaçlyklar bar:
    1. Maglumatlar awtomatiki derejesinde işlenilýär we bellenilýär;
    2. Barlygyň dowamlylygy gysgalýar (ortaça 3-4 sagadyň içinde, köpe çekende 24 sagadyň dowamynda);
    3. Maddalaryň sarp edilmeginiň azalýar;
    4. Barlag üçin ulanylýan nusgalar ýönekeý taýýarlanylýar;
    5. Netijeler remilleşdirilýär;
    6. Barlaghananyň işgärleriniň iş howpsyzlylygy ýokarlanylýar.
    ${'\xa0'.repeat(5)}Hormatly Prezidentimiz! Berilen mümkinçilik bilen peýdalanyp, men öz adymdan we kafedranyň işgärleriniň adyndan Siziň edýän aladalaryňyz üçin uly minnetdarlyk bildirýärin. Biz öz gezegimizde bar yhlasymyzy, güýjümizi, wagtymyzy gaýgyrman ýokary hünärli, bilimli, ynsanperwerli lukmanlary ýetişdirjekdigimizi söz berýäris.`;
    
});
 
ruButton.addEventListener("click", () => {
    tmSelected = false;
    ruSelected = true;
    engSelected = false;
    buttonColor();
    audioSrc.src = 'ru.mp3';
	audioPlayer.load();
	playSong()
    audioPlayer.addEventListener('timeupdate', () => {
        const { currentTime, duration } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        const currentTimeFormatted = formatTime(currentTime);
        const durationFormatted = formatTime(duration);
        timeDisplay.textContent = `${currentTimeFormatted} / ${durationFormatted}`;
    });
    paragraph.innerText = `${'\xa0'.repeat(5)}Название этого устройства – Микробиологический экспресс. Анализатор Bactrak - 4300. Этот прибор рост многих видов микроорганизмов регистрируется автоматически.
    Выявлены микроорганизмы:
    1. Аэробные мезофильные микроорганизмы
    2. Психрофильные микроорганизмы
    3. Термофильные микроорганизмы
    4. Грамотрицательные бактерии
    5. Энтеробактерии
    6. Лактобациллы
    7. БГКП
    8. кишечная палочка
    9. Сальмонелла
    10. Листерия
    11. Золотистый стафилококк
    12. Клостридии
    13. Спорообразующие аэробы
    бактерии
    14. Бациллы цереус
    15. Дрожжи и грибы
    
    ${'\xa0'.repeat(5)}Действие Бактрага основано на методе измерения импеданса, и в последние годы этот метод используется
    благодаря своей универсальности, быстро пользуется спросом у профессионалов.
    ${'\xa0'.repeat(5)}Устройство Бакрак используется в нескольких отраслях промышленности: пищевой, косметической, фармацевтической, использование в государственных санитарно-эпидемиологических центрах и лабораториях возможный.
    ${'\xa0'.repeat(5)}Данный анализатор подходит для пищевых продуктов, а именно для молока и молочных продуктов, питьевой воды сертификация лекарственных материалов и парентеральных растворов можно использовать для контроля стерильности. Это устройство также изготовлено из лекарственных растений. микробная обсемененность готовых бульонов, золы, желтков можно 
    также использовать для оценки уровня учета роста микроорганизмов по общепринятым методикам да, но эти методы действуют 3-4 дня, иногда больше. 
    ${'\xa0'.repeat(5)}В этот момент В основном устройство Бактрак имеет ряд преимуществ в эксплуатации:
    1. Данные автоматически обрабатываются и записываются;
    2. Сокращается продолжительность пребывания (в среднем 3-4 часа, чаще 24 часа)
    в течение);
    3. Уменьшается потребление вещества;
    4. Образцы, используемые для тестирования, просто готовятся;
    5. Результаты рекомендуются;
    6. Повышена охрана труда сотрудников лаборатории.
    ${'\xa0'.repeat(5)}Уважаемый Президент! Пользуясь случаем, я хотел бы представиться и от имени сотрудников кафедры выражаю Вам огромную благодарность за проявленное внимание. Мы посвящаем наше время, энергию и самоотверженность высококвалифицированным, мы обещаем готовить образованных, гуманных врачей.`;
});
engButton.addEventListener("click", () => {
    tmSelected = false;
    ruSelected = false;
    engSelected = true;
    buttonColor();
    audioSrc.src = 'engl.mp3';
	audioPlayer.load();
	playSong();

    audioPlayer.addEventListener('timeupdate', () => {
        const { currentTime, duration } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        const currentTimeFormatted = formatTime(currentTime);
        const durationFormatted = formatTime(duration);
        timeDisplay.textContent = `${currentTimeFormatted} / ${durationFormatted}`;
    });
    paragraph.innerText = `${'\xa0'.repeat(5)}The name of this device is Microbiological Express analyzer Bactrak - 4300. This device growth of many types of microorganisms registers automatically.
    Microorganisms identified:
    1. Aerobic mesophilic microorganisms
    2. Psychrophilic microorganisms
    3. Thermophilic microorganisms
    4. Gram-negative bacteria
    5. Enterobacteriaceae
    6. Lactobacilli
    7. Coliforms
    8. E.coli
    9. Salmonella
    10. Listeria
    11. Staphylococcus aureus
    12. Clostridia
    13. Spore-forming aerobes
    bacteria
    14. Bacillus cereus
    15. Yeast and mushrooms
    ${'\xa0'.repeat(5)}Bactrag's performance is based on the impedance measurement method, and in recent years this method has been used due to its versatility, it is quickly in demand by professionals is a device.
    ${'\xa0'.repeat(5)}Bactrak device is used in several industries: food, cosmetic, pharmaceutical industries, use in state sanitary epidemiologic centers and laboratories possible.
    ${'\xa0'.repeat(5)}This analyzer is suitable for food products, namely milk and milk products, drinking water certification of medicinal materials and parenteral solutions can be used for sterility control. 
    ${'\xa0'.repeat(5)}This device is also made from medicinal plants microbial contamination of prepared broths, ashes, yolks can also be used to assess the level of considering the growth of microorganisms according to generally accepted methods yes, but these methods last 3-4 days, sometimes more. At this point
    Basically, the Bactrak device has several advantages in operation:
    1. Data is automatically processed and recorded;
    2. Duration of presence is shortened (on average 3-4 hours, often 24 hours)
    during);
    3. Substance consumption is reduced;
    4. Samples used for testing are simply prepared;
    5. Results are recommended;
    6. The job security of the employees of the laboratory is increased.
    ${'\xa0'.repeat(5)}Dear President! Taking advantage of this opportunity, I would like to introduce myself and on behalf of the staff of the department, I thank you very much for your concern. We devote our time, energy, and dedication to highly skilled, we promise to train educated, humane doctors.`;
});

playButton.addEventListener("click", () => {
    playSong()
})


pauseButton.addEventListener("click", () => {
    pauseSong();
})



function buttonColor() {
    if (tmSelected) {
        tmButton.style.backgroundColor = "#F0FAF6";
        ruButton.style.backgroundColor = "#1DB954";
        engButton.style.backgroundColor = "#1DB954";
        tmButton.style.color = "#093624";
        ruButton.style.color="#FFFFFF";
        engButton.style.color="#FFFFFF";
    }
    if (ruSelected) {
        ruButton.style.backgroundColor = "#F0FAF6";
        tmButton.style.backgroundColor = "#1DB954";
        engButton.style.backgroundColor = "#1DB954";
        ruButton.style.color = "#093624";
        tmButton.style.color="#FFFFFF";
        engButton.style.color="#FFFFFF";
    }
    if (engSelected) {
        engButton.style.backgroundColor = "#F0FAF6";
        ruButton.style.backgroundColor = "#1DB954";
        tmButton.style.backgroundColor = "#1DB954";
        engButton.style.color = "#093624";
        ruButton.style.color="#FFFFFF";
        tmButton.style.color="#FFFFFF";
    }

}





function playSong() {
	audioPlayer.play();
	playButton.style.display = 'none';
	pauseButton.style.display = 'inline-block';
}

function pauseSong() {
	audioPlayer.pause();
	playButton.style.display = 'inline-block';
	pauseButton.style.display = 'none';
}

		// function setProgress(e) {
		// 	const width = e.target.clientWidth;
		// 	const clickX = e.offsetX;
		// 	const duration = audio.duration;
		// 	audio.currentTime = (clickX / width) * duration;
		// }

		
function formatTime(time) {
	const minutes = Math.floor(time / 60);
	let seconds = Math.floor(time % 60);
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	return `${minutes}:${seconds}`;
}

