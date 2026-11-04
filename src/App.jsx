import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Robot404({ runnerRef, characterRef }) {
  return (
    <div className="robot-runner" ref={runnerRef} aria-hidden="true">
      <div className="robot-label">404</div>
      <div className="robot-character" ref={characterRef}>
        <div className="robot-antenna"><span /></div>
        <div className="robot-head">
          <span className="robot-eye" />
          <span className="robot-eye" />
          <span className="robot-mouth" />
        </div>
        <div className="robot-body">
          <span className="robot-panel">?</span>
          <span className="robot-arm robot-arm--left" />
          <span className="robot-arm robot-arm--right" />
        </div>
        <div className="robot-legs">
          <span className="robot-leg robot-leg--left" />
          <span className="robot-leg robot-leg--right" />
        </div>
      </div>
    </div>
  )
}

function App() {
  const pageRef = useRef(null)
  const robotRef = useRef(null)
  const robotCharacterRef = useRef(null)
  const repairTextRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-reveal]',
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.11,
          ease: 'power3.out',
          delay: 0.12,
        },
      )

      const repairLetters = gsap.utils.toArray('.repair-letter')
      const textTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.3 })
      textTimeline
        .fromTo(
          repairLetters,
          { opacity: 0, y: 7 },
          { opacity: 1, y: 0, duration: 0.13, stagger: 0.06, ease: 'power2.out' },
        )
        .to(repairLetters, { opacity: 1, duration: 1.7 })
        .to(repairLetters, { opacity: 0, y: -5, duration: 0.08, stagger: 0.035, ease: 'power2.in' })

      const waveLetters = gsap.utils.toArray('.wave-letter')
      const waveTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.8 })
      waveLetters.forEach((letter, index) => {
        const start = index * 0.09
        waveTimeline
          .to(letter, { y: -10, rotate: -3, duration: 0.2, ease: 'sine.out' }, start)
          .to(letter, { y: 0, rotate: 0, duration: 0.42, ease: 'sine.inOut' }, start + 0.2)
      })

      gsap.to('.progress-track span', {
        scaleX: 0.78,
        transformOrigin: 'left center',
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(
          robotRef.current,
          { left: '-12%' },
          {
            left: '103%',
            duration: 13,
            ease: 'none',
            repeat: -1,
            repeatDelay: 1.7,
          },
        )

        gsap.to(robotCharacterRef.current, {
          y: -5,
          duration: 0.42,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <main className="maintenance-shell" ref={pageRef}>
      <div className="noise" aria-hidden="true" />
      <div className="ambient-orb ambient-orb--top" aria-hidden="true" />
      <div className="ambient-orb ambient-orb--bottom" aria-hidden="true" />

      <div className="maintenance-container">
        <header className="topbar" data-reveal>
          <div className="brand-lockup">
            <span className="brand-mark">MV</span>
            <span className="brand-caption">marcelovydo</span>
          </div>
          <div className="live-status">
            <span className="live-dot" />
            <span>Em manutenção</span>
          </div>
        </header>

        <section className="maintenance-content" aria-labelledby="maintenance-title">
          <div className="maintenance-badge" data-reveal>
            <span className="badge-line" />
            <span>manutenção // voltamos em breve</span>
          </div>

          <h1 id="maintenance-title" data-reveal>
            <span className="title-line">Estamos aprimorando</span>
            <span className="title-line title-line--accent">
              sua <span className="wave-word" aria-label="experiência">
                <span className="wave-letter" aria-hidden="true">e</span>
                <span className="wave-letter" aria-hidden="true">x</span>
                <span className="wave-letter" aria-hidden="true">p</span>
                <span className="wave-letter" aria-hidden="true">e</span>
                <span className="wave-letter" aria-hidden="true">r</span>
                <span className="wave-letter" aria-hidden="true">i</span>
                <span className="wave-letter" aria-hidden="true">ê</span>
                <span className="wave-letter" aria-hidden="true">n</span>
                <span className="wave-letter" aria-hidden="true">c</span>
                <span className="wave-letter" aria-hidden="true">i</span>
                <span className="wave-letter" aria-hidden="true">a</span>
                <span className="wave-letter" aria-hidden="true">.</span>
              </span>
            </span>
          </h1>

          <p className="maintenance-description" data-reveal>
            Estamos realizando uma breve manutenção para entregar uma experiência ainda melhor.
            Em breve estaremos de volta.
          </p>

          <div className="repair-typing" data-reveal aria-live="polite">
            <span className="typing-prefix">processo //</span>
            <span className="typing-text" ref={repairTextRef}>
              {'checando os detalhes'.split('').map((character, index) => (
                <span className="repair-letter" key={`${character}-${index}`}>
                  {character === ' ' ? '\u00a0' : character}
                </span>
              ))}
            </span>
            <span className="typing-cursor" aria-hidden="true" />
          </div>

          <div className="maintenance-progress" data-reveal>
            <div className="progress-copy">
              <span>Robô 404 em serviço</span>
              <span>trabalhando...</span>
            </div>
            <div className="progress-track"><span /></div>
          </div>
        </section>

        <section className="robot-scene" aria-label="Robô 404 caminhando enquanto a página é reparada">
          <div className="scene-grid" aria-hidden="true" />
          <div className="scene-stars" aria-hidden="true"><i /><i /><i /><i /></div>
          <Robot404 runnerRef={robotRef} characterRef={robotCharacterRef} />
          <div className="scene-ground" aria-hidden="true" />
          <div className="scene-coordinates" aria-hidden="true">
            <span>rebuild / 01</span>
            <span>status: almost there</span>
          </div>
        </section>

        <footer className="maintenance-footer" data-reveal>
          <span>Obrigado pela paciência.</span>
          <span>© 2026</span>
        </footer>
      </div>
    </main>
  )
}

export default App
