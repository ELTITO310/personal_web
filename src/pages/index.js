import Img from 'next/image'
import Wave from '@/components/wave'
import styles from '@/styles/Home.module.scss'
import emoji from 'react-easy-emoji'

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div>
          <div>
            <h1>El TiTo</h1>
            <p>{ emoji('Un programador que aprende cada día algo nuevo. ✨🎉') }</p>
          </div>
          <Img src="/avatartito.gif" width={200} height={250} alt="EL TITO" style={{ backgroundColor: "transparent" }}  />
        </div>
        <Wave color="#000" />
      </section>
      <section>
        <h1>Sobre mi</h1>
      </section>
    </>
  )
}
