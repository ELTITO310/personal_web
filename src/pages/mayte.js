import styles from '@/styles/Mayte.module.scss'
import emoji from 'react-easy-emoji'
import useWindowSize from 'react-use/lib/useWindowSize';
import { useAudio } from 'react-use'
import Confetti from 'react-confetti';
import { useInView } from 'react-intersection-observer'
import Wave2 from '@/components/svgs/wave2.svg'
import Wave3 from '@/components/svgs/wave3.svg';
import Img from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai'

const Mayte = () => {

    const { ref: mRef, inView: mInView, entry } = useInView();
    const { ref: bRef, inView: bInView} = useInView({
        threshold: 0.4
    })
    const { width, height } = useWindowSize()
    const [andrea] = useAudio({
        src: '/musica_mayte.mp3',
        autoPlay: true
    });
    const [faraon] = useAudio({
        src: '/faraon.mp3',
        autoPlay: true
    })

    return <>
        { bInView ? faraon : andrea }
        <section className={styles.mayte} ref={mRef}>
            <h1>{ emoji('💖🎉¡¡Feliz Cumpleaños!!💖🎉') }</h1>
            { mInView ? <Confetti width={width - 18.11} height={height} gravity={0.2} /> : <></> }
            <Wave2 />
        </section>
        <section className={styles.words}>
            <div>
                <p><b>¡Happy Birthday To YOU!</b>, hoy es tu gran día, cumples tus 14 añitos Ale, mejor dicho señorita Ale, un año más pero no el ultimo, cumple muchos años más.</p>
                <Img src="/mayte/hermosa_1.jpg" width={362 / 1.5} height={428 / 1.5} alt="" />
            </div>
            <div>
                <Img src="/mayte/hermosa_2.jpg" width={321 / 1.5} height={428 / 1.5} alt="" />
                <p>En estos ultimos 6 meses, desde que te conoci en Junio, aunque ya te conocia desde el año pasado XD, debes saber que haz mejorado mucho, estas logrando un gran cambio, estas haciendo todo lo posible y se que lo lograras todo lo que te {emoji('propones 😎.')}</p>
            </div>
            <div>
                <p>Con mucho esfuerzo y sudor, lo lograras, solo nunca te rindas, si te rindes te quedaras con las ganas, de que, ¿Y si lo hubiera conseguido?, el mal sabor de boca, el miedo pasa, la verguenza te olvidas, pero cuando te rindes esa sensación, ¿Que hubiera pasado si seguia? nunca se desvanece.</p>
                <Img src="/mayte/hermosa_3.jpg" width={409 / 1.5} height={428 / 1.5} alt="" />
            </div>
            <div>
                <Img src="/mayte/hermosa_4.jpg" width={319 / 1.5} height={428 / 1.5} alt="" />
                <p style={{ fontSize: '1.5rem', textAlign: 'right' }}><b>Espero me permitas seguir en tu vida :3</b></p>
            </div>
            <div>
                <AiOutlineArrowDown size={40} />
                Baja, solo queda un poquito más.
            </div>
        </section>
        <section className={styles.beatiful} ref={bRef}>
            <h1>{ emoji('😍😍¡¡ERES HERMOSA!!🥰😘') }</h1>
        </section>
    </>
}

export default Mayte;