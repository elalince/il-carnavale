export function timer() {
    const endDate = new Date("Mar 31, 2023 23:59:59").getTime();
    const timer = setInterval(function() {
        const now = new Date();
        const t = endDate - now;

        if (t >= 0) {

            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            // let secs = Math.floor((t % (1000 * 60)) / 1000);

            document.querySelector(".timer__days").innerHTML = days;

            document.querySelector(".timer__hours").innerHTML = ("0"+hours).slice(-2);

            document.querySelector(".timer__mins").innerHTML = ("0"+mins).slice(-2);

            // document.querySelector("timer-secs").innerHTML = ("0"+secs).slice(-2);

        } else {
            document.getElementById("timer").innerHTML = "The countdown is over!";

        }

    }, 1000);
}
export function maskChose() {
    const masks = document.querySelectorAll('.mask');
    const overlay = document.querySelector('.overlay');
    const popupWrapper = document.querySelector('.popup-wrapper');
    const popup = document.querySelector('.popup');

    if (localStorage.getItem('addClass')) {
        let targetClass = localStorage.getItem('addClass');

        $(`.${targetClass}`).addClass('visible');

    }


    for (let mask of masks) {
        $(mask).on('click', function () {
            $(mask).addClass('chosen').siblings().removeClass('chosen').addClass('empty')
            $(overlay).addClass('visible')
            $(popupWrapper).addClass('visible')
            $(popup).addClass('visible')

            localStorage
                .setItem('addClass',
                    $(popupWrapper).attr('class')
                        .replace('hidden ','')
                        .replace('visible', '')
                );

       });
    }
}


