import styles from './App.module.css';

export function App() {
  return (
    <>
      <header>
        <h1>HubX Frontend Assignment</h1>
      </header>

      <main className={styles.main}>
        <section>
          <p className="type-feature-label">Feature label</p>
          <h2 className="type-feature-title">Feature title</h2>
          <p className="type-feature-body">
            Feature body text used to check the typography across mobile and
            desktop sizes.
          </p>
          <button type="button" className="type-button-label">
            Button label
          </button>
        </section>
      </main>
    </>
  );
}
