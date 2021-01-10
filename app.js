
const DATA  = [
    {
        image: "./png/001-love.png",
        text: "Кто знает, возможно, сегодня я октрою для себя новое место ! "
    },
    {
        image: "./png/050-love.png",
        text: "Я получу приятное сообщение от кого-то."
    },
    {
        image: "./png/004-giftbox.png",
        text: "Всё, что происходит в моей жизни - к лучшему."
    },
    {
        image: "./png/006-love.png",
        text: "Я даю другим столько, сколько могу в данный момент, и не боюсь отказывать."
    },
    {
        image: "./png/007-smile.png",
        text: "Каждая моя улыбка - это маленькое достижение."
    },
    {
        image: "./png/009-peace.png",
        text: "Отдохнувший мозг - креативный мозг."
    },
    {
        image: "./png/011-love.png",
        text: "Я забочусь о своем здоровье."
    },
    {
        image: "./png/013-home.png",
        text: "Я привожу в порядок свое гнездышко."
    },
    {
        image: "./png/016-together.png",
        text: "Сложнее всего начать действовать, все остальное зависит только от упорства.</br>Амелия Эрхарт"
    },
    {
        image: "./png/018-shield.png",
        text: "Я принимаю конструктивную критику, все остальное - просто шум."
    },
    {
        image: "./png/022-balloon.png",
        text: "Успех — это способность идти от поражения к поражению, не теряя оптимизма. </br>Уинстон Черчилль"
    },
    {
        image: "./png/026-money.png",
        text: "Что такое деньги? Человек успешен, если утром он просыпается, вечером возвращается в постель, а в перерыве делает то, что ему нравится.</br>Боб Дилан"
    },
    {
        image: "./png/030-food.png",
        text: "Сегодня я порадую себя изысканной кухней."
    },
    {
        image: "./png/033-lotus.png",
        text: "Я делаю глубокий вдох и долгий выдох три раза."
    },
    {
        image: "./png/034-friendship.png",
        text: "Я делаю шаги к тому, чтобы найти надежного партнера."
    },
    {
        image: "./png/035-help.png",
        text: "Друзья всегда меня поддержат, у меня все получится."
    },
    {
        image: "./png/036-love.png",
        text: "Если внутренний голос говорит вам, что вы не можете рисовать – рисуйте как можно больше, тогда этот голос затихнет.</br>Винсент Ван Гог"
    },
    {
        image: "./png/037-food.png",
        text: "Я хорошо питаюсь и съедаю как минимум 5 фруктов и овощей в день."
    },
    {
        image: "./png/039-balance.png",
        text: "Я в гармонии с собой."
    },
    {
        image: "./png/040-kindness.png",
        text: "Я обдумываю эту мысль уже какое-то время, сегодня меня посетит озарение."
    },
    {
        image: "./png/041-shelter.png",
        text: "Я с благодарностью принимаю помощь."
    }
]

function play() {
    document.querySelectorAll("audio")[1].play();
    let num = Math.floor(Math.random() * DATA.length);
    let target = document.getElementById("roulette");
    let delay;
    let text;
    target.style.opacity = 1;
    for(k = 0; k <= 3; k++){
        for(let i = 0; i < DATA.length; i++){
            setTimeout(() => {
                // console.log(DATA[i].text);
                target.src=DATA[i].image;
            }, 50 * (i+1) + 50 * k * DATA.length);
            if(k === 3 && i === num){ 
                delay = 50 * (i+1) + 50 * k * DATA.length;
                text = DATA[i].text;
                break;
            }
        }
    }
    setTimeout(() => {
        document.getElementById("roulette-message").innerHTML = text;
    },delay)

}

document.getElementById("closeModal").addEventListener('click', () => {
    document.querySelector("dialog").close();
    document.querySelector("dialog").style.display = "none";
    document.getElementById("sound").style.display = "block";
    document.querySelector("audio").play();
});
var musicPlaying = true;
document.getElementById("button").addEventListener('click', play);
document.getElementById("sound").addEventListener('click', () => {
    if(musicPlaying){
        document.querySelectorAll("audio").forEach(audio => audio.muted = true);
        document.getElementById("sound").style.opacity = .5;
        musicPlaying = false;
    } else {
        document.querySelectorAll("audio").forEach(audio => audio.muted = false);
        document.getElementById("sound").style.opacity = .9;
        musicPlaying = true;
    }
});