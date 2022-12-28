import Img from 'next/image'
import Wave from '@/components/wave'
import styles from '@/styles/Home.module.scss'
import emoji from 'react-easy-emoji'

export default function Home() {

  return (
    <>
      <section className={styles.home}>
        <div>
          <div>
            <h1>El TiTo</h1>
            <p>{ emoji('Un programador que aprende cada día algo nuevo. ✨🎉') }</p>
          </div>
          <Img src="/avatartito.gif" width={200} height={250} alt="EL TITO" style={{ backgroundColor: "transparent" }}  />
        </div>
        <Wave color="#000" />
      </section>
      <section className={styles.me}>
        <h1>Sobre mi</h1>
        <p>{ emoji('¡Hola! 👋, mi nombre es Roy Erickson, me fascina el Desarrollo Web 💻, Desarrollar bots de Discord 🤖 y aprender algo nuevo cada día 📝, empece en este hermsoso mundo de la programación hace 3 años, intrigado por la curiosidad de tener un bot de Discord para mi pequeño server, actualmente me dedico principalmente al Desarrollo Web. 😁') } </p>
      </section>
    </>
  )
}
