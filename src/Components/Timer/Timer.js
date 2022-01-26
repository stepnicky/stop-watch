import styles from './Timer.module.scss';

const Timer = ({time}) => {
    const convertedTime = miliseconds => {

        // const hours = time / (1000*60*60);
        // const absoluteHours = Math.floor(hours);
        // const h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

        // const minutes = (hours - absoluteHours) * 60;
        // const absoluteMinutes = Math.floor(minutes);
        // const m = absoluteMinutes > 59 ? absoluteMinutes : '0' + absoluteMinutes;

        // const seconds = (minutes - absoluteMinutes) * 60;
        // const absoluteSeconds = Math.floor(seconds);
        // const s = absoluteSeconds > 59 ? absoluteSeconds : '0' + absoluteSeconds;

        // return absoluteHours + ':' + absoluteMinutes + ':' + absoluteSeconds;
        let ms = miliseconds % 1000;
        let s = Math.floor(miliseconds / 1000) % 60;
        let m = Math.floor(miliseconds / 1000 / 60) % 60;
        let h = Math.floor(miliseconds / 1000 / 60 / 60);

        s < 10 ? s = `0${s}`: s = `${s}`
        m < 10 ? m = `0${m}`: m = `${m}`
        h < 10 ? h = `0${h}`: h = `${h}`


        return h + ':' + m + ':'+ s + '.' + ms;
    };

    return (
        <div>
            <h1 className={styles.timer}>{convertedTime(time)}</h1>
        </div>

    );
};

export default Timer;